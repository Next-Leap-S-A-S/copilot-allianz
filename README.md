# Formación Copilot, equipos Allianz

Página con entrada (nombre y área), cuatro recuadros de sesión y, por ahora, solo la sesión 1 abierta (Copilot para productividad).

Se edita en `src/` (`template.html`, `sesion1.js`) y se genera con `python3 src/build.py`, que revisa las reglas de redacción y escribe `index.html` como un único archivo.

La entrada no es una cuenta: guarda nombre, área y avance en el navegador (localStorage). Para abrir las sesiones 2 a 4, cambiar `estado` en `SESIONES` y agregar su panel.
