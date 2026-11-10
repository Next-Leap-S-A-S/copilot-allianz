# Formación Copilot, equipos Allianz

**Publicado en:** https://next-leap-s-a-s.github.io/copilot-allianz/

Página con entrada (nombre y área), cuatro recuadros de sesión y la sesión 1 abierta: **Copilot para productividad**. Pestañas: Licencia, Retos (laboratorio de 6 retos con el caso transversal Siniestro 0417), Prompting, Chats, Reunión, Facilitator, Planner y OneNote. Cada herramienta trae qué hace, sus límites y 4 prompts largos por área y por necesidad (9 áreas).

Se edita en `src/` y se genera con `python3 src/build.py`, que revisa las reglas de redacción y escribe `index.html` como un único archivo:

- `template.html`: marcado, estilos y lógica.
- `sesion1.js`: áreas, sesiones, licencias.
- `retos.js`: los 6 retos y sus ejemplos de pantalla.
- `secciones/*.js`: prompt base por área para cada herramienta.
- `areas/*.js`: 3 prompts adicionales por herramienta y por área (`node src/check_area.js src/areas/<area>.js` los valida).

La entrada no es una cuenta: guarda nombre, área y avance en el navegador (localStorage).
