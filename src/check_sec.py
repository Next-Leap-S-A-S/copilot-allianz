#!/usr/bin/env python3
"""Valida un archivo de src/secciones/<id>.js. Uso: python3 src/check_sec.py src/secciones/planner.js"""
import re, sys, pathlib

BANNED = ["—", "–", "!", "¡", "no solo", "no sólo", "sino también", "sin embargo", "por lo tanto",
          "en ese sentido", "por ende", "cabe destacar", "cabe resaltar", "es importante destacar",
          "en el mundo actual", "cada vez más", "hoy más que nunca", "en la era de"]
AREAS = ["suscripcion", "siniestros", "comercial", "servicio", "tecnica", "juridico", "finanzas", "talento", "tecnologia"]
MIN_W, MAX_W = 230, 420

def strings(js):
    out = re.findall(r"`([^`]*)`", js)
    out += re.findall(r'"((?:[^"\\\n]|\\.)*)"', re.sub(r"`[^`]*`", "``", js))
    return out

def main(path):
    js = pathlib.Path(path).read_text(encoding="utf-8")
    problems = []
    m = re.match(r"\s*const (SEC_[A-Z_]+) = \[", js)
    if not m:
        problems.append("debe empezar con: const SEC_NOMBRE = [")
    for t in strings(js):
        low = t.lower()
        for b in BANNED:
            if b in low:
                problems.append("contiene %r en: %s" % (b, t[:70].replace("\n", " ")))
        if ";" in t:
            problems.append("punto y coma en: " + t[:70].replace("\n", " "))
        if "${" in t:
            problems.append("no uses ${ en los textos")
    ids = re.findall(r'\barea:\s*"([a-z]+)"', js)
    if sorted(ids) != sorted(AREAS):
        problems.append("areas esperadas %s, encontradas %s" % (AREAS, ids))
    prompts = re.findall(r"\bprompt:\s*`([^`]*)`", js)
    if len(prompts) != 9:
        problems.append("deben ser 9 prompts, hay %d" % len(prompts))
    for i, p in enumerate(prompts):
        n = len(p.split())
        if not (MIN_W <= n <= MAX_W):
            problems.append("prompt %d (%s): %d palabras, rango %d-%d" % (i + 1, ids[i] if i < len(ids) else "?", n, MIN_W, MAX_W))
        if "anonimiz" not in p.lower():
            problems.append("prompt %d: debe mencionar que los datos estan anonimizados" % (i + 1))
    for k in ("titulo", "donde", "antes", "seguimiento", "verificar"):
        if len(re.findall(r"\b%s:" % k, js)) != 9:
            problems.append("falta el campo %s en alguna entrada" % k)
    for blk in re.findall(r"seguimiento:\s*\[(.*?)\]", js, flags=re.S):
        if len(re.findall(r"`[^`]*`|\"(?:[^\"\\\n]|\\.)*\"", blk)) < 3:
            problems.append("cada seguimiento necesita al menos 3 prompts")
    for blk in re.findall(r"verificar:\s*\[(.*?)\]", js, flags=re.S):
        if len(re.findall(r"`[^`]*`|\"(?:[^\"\\\n]|\\.)*\"", blk)) < 4:
            problems.append("cada verificar necesita al menos 4 puntos")
    if problems:
        print("PROBLEMAS en", path)
        for p in problems: print("  -", p)
        sys.exit(1)
    print("ok", path, [len(p.split()) for p in prompts])

main(sys.argv[1])
