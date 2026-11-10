const MAS_TECNOLOGIA = {
  "teams-chats": [
    {
      necesidad: "Hilo largo de un incidente",
      titulo: "Línea de tiempo de un incidente a partir del hilo del canal",
      donde: "Panel de Copilot dentro del canal de incidentes, con el hilo abierto.",
      antes: "Abre el hilo del incidente (debe tener más de 1.000 caracteres). Ten a mano la hora en que se reportó la caída.",
      prompt: `ROL
Eres un analista de operaciones de tecnología de una aseguradora, con experiencia en gestión de incidentes y comunicación a negocio.

CONTEXTO
En este hilo del canal se atendió el incidente [código, por ejemplo INC-2041] sobre [sistema afectado, por ejemplo el módulo de emisión de pólizas]. Hubo mensajes de soporte, infraestructura, desarrollo y del área de negocio. Los datos están anonimizados y no hay credenciales ni datos de clientes.

FUENTES
Solo este hilo del canal. No uses otros chats ni archivos. Si algo pasó en una llamada y no está escrito aquí, no lo inventes.

INSTRUCCIÓN
1. Arma la línea de tiempo del incidente con hora, quién lo dijo y qué ocurrió. Ordénala de la primera alerta a la normalización.
2. Marca tres momentos: detección, diagnóstico de la causa y restablecimiento del servicio.
3. Calcula cuánto duró cada fase si las horas están escritas en el hilo.
4. Lista las acciones temporales que se aplicaron y las que quedaron pendientes.
5. Identifica qué decisiones se tomaron y quién las tomó.
6. Redacta un mensaje de 5 líneas para el canal con el estado actual, dirigido a las áreas de negocio, en tono sereno y sin jerga técnica.

FORMATO DE SALIDA
Tabla de línea de tiempo con columnas Hora, Quién, Hecho, Fase. Después, viñetas de pendientes con responsable. Al final, el mensaje de 5 líneas.

LÍMITES
Marca [SUPUESTO] si deduces una hora o una causa. Marca [VERIFICAR] si dos mensajes se contradicen. Si falta el responsable de una acción, escribe PENDIENTE. No expliques la causa raíz si el hilo no la confirma.

CONTROL DE CALIDAD
Antes de entregar, revisa que cada hora de la tabla esté en un mensaje del hilo, que la duración total cuadre con la primera y la última hora, y que el mensaje final no prometa nada que el hilo no confirme. Dime qué dejaste fuera por falta de evidencia.`,
      seguimiento: [
        "Resume solo lo que sigue abierto del incidente y quién debe responder primero, en máximo 6 viñetas.",
        "Redacta una versión del mensaje final para la gerencia, en 3 líneas, sin términos técnicos.",
        "Busca en el hilo cualquier mención de una causa probable y dime quién la planteó y con qué evidencia."
      ],
      verificar: [
        "Cada hora de la tabla aparece en un mensaje real del hilo.",
        "La duración de las fases coincide con las horas escritas.",
        "Lo que se marcó como SUPUESTO no se presenta como hecho en el mensaje final.",
        "El hilo no incluye información que se haya dicho solo por llamada, imágenes o archivos adjuntos."
      ]
    },
    {
      necesidad: "Soporte de primer nivel",
      titulo: "Buscar casos parecidos y responder a un usuario de negocio",
      donde: "Copilot Chat, pestaña Trabajo, para buscar en tus chats y canales de soporte.",
      antes: "Anota el síntoma exacto que reporta el usuario y el sistema donde ocurre. Quita nombres de clientes y números de póliza reales.",
      prompt: `ROL
Eres un agente de soporte de primer nivel de tecnología en una aseguradora. Tu trabajo es resolver rápido lo conocido y escalar bien lo nuevo.

CONTEXTO
Un usuario de [área, por ejemplo Suscripción] reporta: [síntoma, por ejemplo «al emitir la póliza el sistema muestra error de tarifa y no deja avanzar»]. Ocurre desde [hora] en [sistema]. Los datos están anonimizados y el ejemplo no contiene datos de clientes.

FUENTES
Busca en mis chats y canales de soporte de los últimos 90 días mensajes que hablen de [palabras clave del error]. Si no encuentras nada relevante, dilo y no completes con conocimiento general.

INSTRUCCIÓN
1. Lista hasta 3 casos parecidos que encuentres, con fecha, canal y quién los resolvió.
2. Para cada caso, resume en una línea el síntoma, la causa y la solución aplicada.
3. Indica cuál se parece más al caso actual y por qué.
4. Propón los pasos de verificación que el usuario puede hacer por su cuenta, máximo 4, en lenguaje simple.
5. Decide si el caso se resuelve en primer nivel o se escala. Si se escala, indica a qué equipo y qué datos debe llevar el ticket.
6. Redacta la respuesta al usuario en máximo 80 palabras, con tono amable y directo, con el siguiente paso claro.

FORMATO DE SALIDA
Tres bloques con rótulos: Casos parecidos (tabla de 4 columnas), Decisión (resolver o escalar con motivo) y Respuesta al usuario.

LÍMITES
No inventes soluciones que no estén en los chats. Marca [SUPUESTO] si extrapolas de un caso distinto. Marca [VERIFICAR] si la solución encontrada tiene más de 60 días. No pidas al usuario contraseñas ni datos de clientes. Copilot no lee imágenes ni archivos compartidos en los chats.

CONTROL DE CALIDAD
Revisa que cada caso citado exista en los chats, que la respuesta al usuario no pase de 80 palabras y que el criterio de escalamiento esté justificado con el síntoma. Dime con qué nivel de confianza recomiendas la solución.`,
      seguimiento: [
        "Escribe el texto del ticket de escalamiento con síntoma, hora de inicio, pasos ya probados y urgencia sugerida, en máximo 100 palabras.",
        "Convierte la respuesta al usuario en un mensaje corto de chat de Teams, con un solo paso a seguir.",
        "Busca si alguien del equipo reportó el mismo error esta semana y dime en qué canal."
      ],
      verificar: [
        "Los casos citados aparecen de verdad en los chats y canales.",
        "La solución no depende de una captura de pantalla que Copilot no puede leer.",
        "La decisión de escalar coincide con el procedimiento de soporte de tu equipo.",
        "Ningún dato de cliente quedó en la respuesta ni en el ticket."
      ]
    },
    {
      necesidad: "Mensaje de cambio al proveedor",
      titulo: "Mensaje de solicitud de cambio, en español y en inglés",
      donde: "Cuadro de redacción de Teams, botón de Copilot, para reescribir un borrador en el chat o canal.",
      antes: "Escribe un borrador torpe con lo básico: qué cambio, en qué ambiente, qué ventana y quién aprueba. Si va al proveedor, ten el nombre del contacto.",
      prompt: `ROL
Eres un coordinador de cambios de tecnología de una aseguradora que escribe mensajes claros para aprobar y ejecutar cambios en producción.

CONTEXTO
Necesito pedir la aprobación de un cambio. Datos de ejemplo anonimizados: cambio [descripción, por ejemplo actualizar la versión del servicio de cotización], ambiente [producción], ventana [sábado de 11 p. m. a 2 a. m.], impacto esperado [cotizador no disponible 30 minutos], responsable técnico [nombre de ejemplo], plan de reversa [volver a la versión anterior en 20 minutos]. El destinatario es [líder de negocio o proveedor externo].

FUENTES
Usa solo el texto de mi borrador que pego abajo. No agregues datos que yo no haya escrito.

BORRADOR
[pega aquí tu borrador]

INSTRUCCIÓN
1. Reescribe el mensaje para que se entienda en una lectura, con el cambio, la ventana, el impacto, la reversa y lo que necesito del destinatario.
2. Pon primero la petición y después los detalles.
3. Mantén un tono profesional y cordial, sin presionar y sin jerga innecesaria.
4. Entrega la versión corta de máximo 90 palabras para el chat.
5. Entrega la misma versión en inglés, con términos de gestión de cambios habituales, para el proveedor.
6. Propón una línea final con la fecha límite de respuesta.

FORMATO DE SALIDA
Dos bloques: Español y English. Dentro de cada uno, el mensaje con párrafos de máximo 3 líneas. Debajo, una lista de 3 puntos con lo que cambió respecto a mi borrador.

LÍMITES
Marca [SUPUESTO] si completas un dato que yo no escribí. Marca [VERIFICAR] si una hora o un nombre parece inconsistente. Si falta el plan de reversa, escribe PENDIENTE y no lo inventes.

CONTROL DE CALIDAD
Revisa que el inglés diga lo mismo que el español, que las horas y fechas estén idénticas en ambas versiones y que no haya promesas de resultado que yo no haya escrito.`,
      seguimiento: [
        "Hazlo más corto, de 50 palabras, para un mensaje de chat urgente.",
        "Cambia el tono a uno más firme porque el destinatario no ha respondido en dos días.",
        "Agrega una lista de 3 riesgos del cambio escrita para un líder de negocio sin perfil técnico."
      ],
      verificar: [
        "Fecha, hora y ambiente son iguales en español y en inglés.",
        "El plan de reversa aparece tal como lo escribiste.",
        "No se agregó ningún compromiso que no estuviera en tu borrador.",
        "El nombre del destinatario y el del responsable técnico son correctos."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Sala de crisis en curso",
      titulo: "Ponerme al día en la sala de crisis de un incidente en vivo",
      donde: "Panel de Copilot dentro de la reunión de Teams, con la transcripción activada.",
      antes: "La transcripción debe estar activada desde el inicio. Lo que preguntes solo lo ves tú. Úsalo cuando entres tarde.",
      prompt: `ROL
Eres un asistente de gestión de incidentes que ayuda a un líder de tecnología a entrar a una sala de crisis ya iniciada.

CONTEXTO
Entré tarde a la reunión del incidente de [sistema, por ejemplo la plataforma de pólizas]. Participan infraestructura, desarrollo, seguridad y el área de negocio afectada. Los datos son de ejemplo, están anonimizados y no hay datos de clientes.

FUENTES
Solo la transcripción de esta reunión hasta este momento.

INSTRUCCIÓN
1. Dime en máximo 5 líneas qué está pasando: síntoma, desde cuándo y qué áreas o procesos están afectados.
2. Lista las hipótesis que se han planteado, con quién las dijo y si ya se descartaron o siguen abiertas.
3. Lista las acciones en curso, con responsable y hora en que se comprometió a reportar.
4. Indica qué decisiones se han tomado y cuáles esperan aprobación, por ejemplo hacer reversa o activar el plan de contingencia.
5. Dime qué se le ha dicho al negocio hasta ahora y si alguien quedó de comunicar algo.
6. Dime qué es lo primero que debería preguntar o aportar yo para ayudar.

FORMATO DE SALIDA
Cinco bloques con rótulo: Situación, Hipótesis (tabla de 3 columnas), Acciones en curso, Decisiones, Qué puedo aportar. Máximo 250 palabras en total.

LÍMITES
Si la causa no se ha dicho, escribe PENDIENTE y no la deduzcas. Marca [SUPUESTO] cuando infieras un responsable. Marca [VERIFICAR] cuando dos personas den horas distintas. No uses información de fuera de la reunión.

CONTROL DE CALIDAD
Revisa que cada hipótesis y cada acción tenga una persona que las dijo en la transcripción, que no haya decisiones inventadas y que el resumen no pase de 250 palabras. Dime qué parte de la transcripción fue difícil de interpretar.`,
      seguimiento: [
        "Desde que entré hace 10 minutos, qué cambió: nuevas hipótesis, acciones terminadas y decisiones.",
        "Quién dijo exactamente que el problema venía de la última actualización y qué evidencia dio.",
        "Dame una frase de 25 palabras que yo pueda decir en voz alta para resumir el estado al negocio."
      ],
      verificar: [
        "La transcripción estaba activada desde antes de que empezara la discusión.",
        "Las horas citadas coinciden con las del reloj de la reunión.",
        "Las hipótesis descartadas se descartaron en voz alta, no por deducción de Copilot.",
        "El resumen no incluye datos de clientes ni accesos que se hayan dicho en la reunión."
      ]
    },
    {
      necesidad: "Comité de cambios",
      titulo: "Decisiones del comité de cambios con condiciones y evidencia",
      donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con el comité de cambios terminado.",
      antes: "Úsalo con la reunión terminada y transcrita. Ten a mano la lista de solicitudes de cambio que se iban a revisar.",
      prompt: `ROL
Eres un coordinador del comité de cambios de tecnología de una aseguradora. Tu trabajo es dejar claro qué se aprobó, bajo qué condiciones y quién responde.

CONTEXTO
Terminó la reunión semanal del comité de cambios. Se revisaron solicitudes de cambio para el ambiente de producción, por ejemplo ajustes al motor de tarifas, parches de seguridad y actualizaciones del portal de corredores. Los datos están anonimizados y las solicitudes se nombran con código.

FUENTES
Solo la transcripción de la reunión. No uses el correo ni documentos externos.

INSTRUCCIÓN
1. Por cada solicitud de cambio mencionada, indica el código, el resultado (aprobada, rechazada, aplazada o sin decisión) y la ventana acordada.
2. Para cada resultado, cita la frase de la transcripción que lo respalda, con el nombre de quien la dijo y el momento aproximado.
3. Lista las condiciones puestas a las aprobaciones, por ejemplo prueba previa, plan de reversa o aviso al negocio.
4. Lista los cambios en conflicto, por ejemplo dos cambios sobre el mismo sistema en la misma ventana.
5. Lista los pendientes con responsable y fecha.
6. Redacta un resumen de 5 líneas para quien no asistió.

FORMATO DE SALIDA
Tabla con columnas Código, Resultado, Ventana, Condiciones, Evidencia (cita corta). Debajo, lista de conflictos, lista de pendientes y el resumen.

LÍMITES
Si una solicitud se mencionó sin decisión clara, escribe PENDIENTE y no la marques como aprobada. Marca [SUPUESTO] si un responsable se infiere. Marca [VERIFICAR] si la fecha o la ventana se dijo de forma ambigua.

CONTROL DE CALIDAD
Antes de entregar, confirma que cada aprobación tenga una cita, que ninguna condición se haya perdido y que el resumen coincida con la tabla. Cuéntame cuántas solicitudes quedaron sin decisión.`,
      seguimiento: [
        "Muéstrame solo los cambios aprobados con condiciones y las condiciones literales.",
        "Escribe el mensaje que enviaré a los solicitantes rechazados o aplazados, con tono respetuoso y el motivo.",
        "Cruza la tabla con las solicitudes que debían revisarse y dime cuáles no se trataron."
      ],
      verificar: [
        "Cada aprobación tiene una cita real de la transcripción.",
        "Las condiciones del comité aparecen completas y sin suavizar.",
        "Las ventanas coinciden con el calendario oficial de cambios.",
        "Las solicitudes sin decisión no quedaron marcadas como aprobadas."
      ]
    },
    {
      necesidad: "Resumen para quien no asistió",
      titulo: "Resumen para dirección de la reunión de priorización de incidentes",
      donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot con la reunión terminada.",
      antes: "La transcripción debe haber estado activa. Define quién leerá el resumen, por ejemplo el director de tecnología que no pudo asistir.",
      prompt: `ROL
Eres un jefe de operaciones de tecnología que prepara un resumen ejecutivo de una reunión para un director que no asistió.

CONTEXTO
La reunión semanal de priorización de incidentes revisó los incidentes abiertos y decidió el orden de atención según impacto en el negocio. El director necesita saber en 2 minutos qué se decidió y en qué debe intervenir. Los datos son de ejemplo y están anonimizados.

FUENTES
Solo la transcripción de esta reunión.

INSTRUCCIÓN
1. Escribe 3 frases sobre lo más importante de la reunión, en lenguaje de negocio.
2. Lista los incidentes priorizados en orden, con código, proceso afectado, prioridad acordada y responsable.
3. Indica qué incidentes subieron o bajaron de prioridad y por qué, según lo dicho en la reunión.
4. Señala qué decisiones requieren la intervención del director, por ejemplo presupuesto, proveedor o escalamiento.
5. Lista los riesgos que se mencionaron y todavía no tienen dueño.
6. Cierra con una pregunta concreta que el director debe responder.

FORMATO DE SALIDA
Máximo 220 palabras. Primero las 3 frases, después una tabla de 4 columnas con los incidentes, después viñetas con decisiones para el director y riesgos sin dueño, y al final la pregunta.

LÍMITES
No inventes prioridades. Si no se acordó una, escribe PENDIENTE. Marca [SUPUESTO] cuando infieras el impacto de negocio. Marca [VERIFICAR] cuando un incidente aparezca con dos prioridades distintas. Sin jerga técnica salvo cuando sea indispensable.

CONTROL DE CALIDAD
Revisa que el orden de la tabla coincida con lo dicho, que el total no pase de 220 palabras y que la pregunta final salga de un tema que quedó sin decidir en la reunión.`,
      seguimiento: [
        "Reescríbelo en 80 palabras para mandarlo por chat al director.",
        "Dime qué incidente tuvo más discusión y cuál fue el desacuerdo principal.",
        "Prepara 5 puntos para abrir la reunión de la próxima semana a partir de lo que quedó pendiente."
      ],
      verificar: [
        "El orden de prioridad es el que se acordó en voz alta.",
        "Los riesgos sin dueño realmente no tienen responsable en la transcripción.",
        "El lenguaje es comprensible para alguien sin perfil técnico.",
        "La reunión tuvo transcripción activa durante toda la discusión."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Priorización semanal de incidentes",
      titulo: "Facilitator en la revisión semanal de incidentes abiertos",
      donde: "Chat de la reunión programada de Teams, al iniciar.",
      antes: "Ten la lista de incidentes abiertos con código, sistema, antigüedad y responsable. Sin datos de clientes ni accesos.",
      prompt: `ROL
Eres Facilitator, el asistente de la reunión semanal de incidentes de tecnología y operaciones. Mantienes el foco en impacto, antigüedad y responsable.

CONTEXTO
Reunión programada de 45 minutos con soporte, infraestructura, desarrollo y un representante de negocio. Se revisan entre [6 y 10] incidentes abiertos, por ejemplo fallas intermitentes en el portal de corredores, lentitud en la emisión y errores en la conciliación de primas. Los datos están anonimizados.

INSTRUCCIÓN
1. Propón una agenda con tiempos: 5 minutos de estado general, 25 minutos para los incidentes de mayor impacto, 10 minutos para los demás y 5 minutos de cierre.
2. Durante la reunión, para cada incidente registra: código, impacto en el negocio (alto, medio o bajo), antigüedad en días, causa conocida o pendiente, responsable y fecha de próxima actualización.
3. Aplica este criterio de prioridad: alto si detiene emisión, pagos o atención al cliente. Medio si hay una solución temporal. Bajo si no afecta una operación.
4. Avísame cuando falten 5 minutos para cerrar el bloque principal y cuando un incidente pase de 4 minutos de discusión.
5. Anota los desacuerdos de prioridad y quién decidió.
6. Al final, entrega el recap y una tabla de tareas lista para Planner.

FORMATO DE SALIDA
Notas en Word con las secciones Estado general, Incidentes (tabla con las columnas anteriores), Decisiones de prioridad, Pendientes. La tabla de tareas con columnas Tarea, Responsable, Fecha, Prioridad e Incidente.

LÍMITES
Marca [SUPUESTO] si asignas una prioridad sin que se haya dicho. Marca [VERIFICAR] si una fecha es ambigua. Si no hay responsable, escribe PENDIENTE. Solo registra lo dicho en la reunión.

CONTROL DE CALIDAD
Al cerrar, confirma que todos los incidentes de la lista tengan prioridad y responsable, y que la tabla de Planner no repita tareas. Dime cuáles incidentes no se alcanzaron a tratar.`,
      seguimiento: [
        "Muéstrame solo los incidentes de impacto alto con su antigüedad y responsable.",
        "Escribe un recap de 5 líneas para enviar a los jefes de área al terminar la reunión.",
        "Qué incidentes llevan más de 10 días abiertos y qué se dijo sobre ellos."
      ],
      verificar: [
        "La reunión está programada en Teams y no es una reunión instantánea.",
        "Facilitator quedó activado antes de que empezara la discusión.",
        "Cada prioridad coincide con el criterio que diste y con lo que se dijo.",
        "La tabla de tareas tiene responsable y fecha en todas las filas."
      ]
    },
    {
      necesidad: "Post mortem sin culpables",
      titulo: "Facilitator en la reunión post mortem de una caída",
      donde: "Chat de la reunión programada de Teams del post mortem, al iniciar.",
      antes: "Ten la línea de tiempo del incidente y la hora de inicio y fin de la caída. Define quién modera y quién presenta la causa.",
      prompt: `ROL
Eres Facilitator, el asistente de un post mortem de una caída de tecnología. La reunión busca causas y acciones, no culpables.

CONTEXTO
Reunión programada de 60 minutos sobre el incidente [código y sistema, por ejemplo caída de 2 horas del módulo de emisión]. Participan desarrollo, infraestructura, soporte y el área de negocio afectada. Los datos están anonimizados y no hay datos de clientes ni credenciales.

INSTRUCCIÓN
1. Propón una agenda con tiempos: 10 minutos de línea de tiempo, 15 de impacto en el negocio, 20 de causas y 15 de acciones y cierre.
2. Registra la línea de tiempo con hora y hecho tal como la presenten los participantes.
3. Registra las causas con el método de los cinco porqués. Anota cada porqué en una línea y quién lo planteó.
4. Separa en las notas lo que se dijo como hecho de lo que se dijo como opinión.
5. Registra cada acción con tipo (correctiva, preventiva o de detección), responsable, fecha y cómo se sabrá que funcionó.
6. Si alguien menciona a una persona como causa, replantea la frase en términos de proceso o herramienta.
7. Avisa cuando falten 10 y 3 minutos.
8. Al cerrar, entrega recap, decisiones y la tabla de tareas.

FORMATO DE SALIDA
Borrador en Word con las secciones Resumen del incidente, Línea de tiempo, Impacto, Causas (cinco porqués), Acciones (tabla con Acción, Tipo, Responsable, Fecha, Indicador) y Lecciones aprendidas. Tabla de tareas aparte para Planner.

LÍMITES
Marca [SUPUESTO] cuando infieras una causa. Marca [VERIFICAR] cuando los participantes den horas distintas. Si no hay indicador de éxito, escribe PENDIENTE. No agregues nada que no se haya dicho.

CONTROL DE CALIDAD
Al cerrar, confirma que cada causa tenga al menos una acción y que ninguna acción quede sin responsable ni fecha. Dime qué quedó sin acordar.`,
      seguimiento: [
        "Resume en 6 líneas la causa raíz acordada y las acciones que la atacan.",
        "Lista las acciones preventivas y dime cuáles todavía no tienen indicador.",
        "Redacta el mensaje de cierre del post mortem para el canal del equipo, en tono constructivo."
      ],
      verificar: [
        "La causa raíz salió de la discusión del equipo y no de la inferencia de Copilot.",
        "Las notas no señalan a una persona como causa.",
        "Cada acción tiene responsable, fecha e indicador.",
        "La reunión es programada y Facilitator estaba activo desde el inicio."
      ]
    },
    {
      necesidad: "Decisión go o no go",
      titulo: "Facilitator en la reunión de decisión de pase a producción",
      donde: "Chat de la reunión programada de Teams, al iniciar.",
      antes: "Ten la lista de verificación del pase: pruebas, plan de reversa, ventana y responsables. Sin datos confidenciales.",
      prompt: `ROL
Eres Facilitator, el asistente de la reunión de decisión de salida a producción. Ayudas a que el equipo decida con criterios y no con intuición.

CONTEXTO
Reunión programada de 30 minutos, dos días antes del pase del proyecto [nombre de ejemplo, por ejemplo nueva versión del portal de autogestión]. Participan desarrollo, calidad, infraestructura, soporte y el dueño de negocio. Los datos están anonimizados.

INSTRUCCIÓN
1. Propón una agenda con tiempos: 5 minutos de estado de pruebas, 10 de riesgos abiertos, 5 de plan de reversa y soporte, 5 de decisión y 5 de pendientes.
2. Registra el resultado de las pruebas con estas columnas: tipo de prueba, casos ejecutados, casos con falla, fallas críticas abiertas.
3. Registra cada riesgo abierto con descripción, probabilidad, impacto, mitigación y responsable.
4. Aplica este criterio: no se aprueba el pase si hay una falla crítica abierta, si no hay plan de reversa probado o si soporte no tiene el procedimiento.
5. Pide a cada participante que diga en voz alta su postura: go, go con condiciones o no go. Regístralas con nombre.
6. Anota la decisión final, las condiciones y quién la tomó.
7. Avisa cuando falten 5 minutos.
8. Entrega el recap y la tabla de tareas previas al pase.

FORMATO DE SALIDA
Notas con las secciones Pruebas (tabla), Riesgos (tabla), Posturas, Decisión y condiciones, Tareas previas al pase (tabla con Tarea, Responsable, Fecha límite, Bloquea el pase).

LÍMITES
Marca [SUPUESTO] si completas un dato de prueba. Marca [VERIFICAR] si dos personas dan cifras distintas. No registres una decisión que nadie dijo. Si no hay responsable, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final, revisa que la decisión sea coherente con el criterio dado y que cada condición tenga responsable y fecha. Dime si alguna condición contradice la ventana del pase.`,
      seguimiento: [
        "Lista solo las condiciones que bloquean el pase y quién las resuelve.",
        "Redacta el aviso de 4 líneas para el negocio sobre la decisión y la ventana.",
        "Qué riesgos quedaron sin mitigación acordada."
      ],
      verificar: [
        "La decisión coincide con lo dicho en voz alta y con el criterio que diste.",
        "Las cifras de pruebas son las que presentó el equipo de calidad.",
        "Las condiciones tienen responsable y fecha antes del pase.",
        "La reunión era programada en Teams y no instantánea."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Acciones correctivas del post mortem",
      titulo: "Meta: cerrar las acciones del post mortem de una caída",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Ten el informe del post mortem con las causas y las acciones acordadas. Adjúntalo como apoyo, anonimizado. Requiere plan premium.",
      prompt: `ROL
Eres un líder de operaciones de tecnología de una aseguradora que convierte un post mortem en un plan de acciones con dueño y fecha.

CONTEXTO
Objetivo: cerrar todas las acciones del post mortem del incidente [código, por ejemplo INC-2041] en [6] semanas, para evitar que la caída se repita. Los datos están anonimizados. Las causas fueron: [causa 1, por ejemplo falta de alerta de capacidad en la base de datos], [causa 2, por ejemplo cambio sin prueba de carga]. Restricción: no hay cambios en producción durante el cierre contable del mes.

FUENTES
Usa el documento adjunto del post mortem como base. Si algo no está en el documento, no lo inventes.

INSTRUCCIÓN
1. Crea un grupo de tareas por tipo de acción: detección, prevención, respuesta y comunicación.
2. Por cada causa, genera al menos una tarea que la ataque y una que verifique que funcionó.
3. Cada tarea debe tener un verbo de acción, entregable, responsable por rol, fecha límite y prioridad (alta, media o baja).
4. Pon alta a lo que reduce el riesgo de repetir la caída en menos de 2 semanas.
5. Agrega una tarea de revisión a los 30 días con un indicador, por ejemplo cero alertas sin atender de capacidad.
6. Respeta la restricción del cierre contable al poner fechas de cambios.
7. Limita el plan a 20 tareas como máximo.

FORMATO DE SALIDA
Lista de tareas agrupada con campos Título, Descripción, Responsable por rol, Fecha, Prioridad, Causa que ataca. Al final, un párrafo de 4 líneas con el riesgo de repetición si no se cumple la fecha de las tareas altas.

LÍMITES
Marca [SUPUESTO] cuando asignes un responsable por rol. Marca [VERIFICAR] si una fecha cae en el cierre contable. Si falta información, escribe PENDIENTE. Planner no lee reuniones por sí solo.

CONTROL DE CALIDAD
Revisa que cada causa tenga tarea correctiva y tarea de verificación, que ninguna tarea tenga fecha en el cierre contable y que las prioridades altas sean pocas.`,
      seguimiento: [
        "Muéstrame las tareas de prioridad alta ordenadas por fecha con su responsable.",
        "Convierte este plan en una tabla de Excel con Tarea, Responsable, Fecha, Prioridad y Causa, para pegarla en el plan.",
        "Qué tareas dependen de otra y cuál es el camino que más puede atrasar el cierre."
      ],
      verificar: [
        "Cada causa del post mortem tiene tarea correctiva y de verificación.",
        "Los responsables corresponden a roles reales del equipo.",
        "Ninguna fecha cae dentro del cierre contable.",
        "El plan es premium y las tareas generadas se revisaron una por una antes de asignarlas."
      ]
    },
    {
      necesidad: "Pase a producción",
      titulo: "Meta: pase a producción de un cambio mayor con plan de reversa",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Ten la solicitud de cambio aprobada, la fecha de la ventana y el plan de pruebas. Adjúntalos anonimizados. Requiere plan premium.",
      prompt: `ROL
Eres un coordinador de cambios y despliegues de una aseguradora, responsable de que el pase a producción salga sin sorpresas.

CONTEXTO
Objetivo: ejecutar sin incidentes el pase del cambio [nombre de ejemplo, por ejemplo nueva versión del servicio de cotización] en la ventana del [fecha y hora] con una duración máxima de [3 horas]. Los datos están anonimizados. Participan desarrollo, calidad, infraestructura, soporte y negocio. Restricción: debe poderse volver a la versión anterior en menos de 30 minutos.

FUENTES
Usa la solicitud de cambio y el plan de pruebas adjuntos. No agregues pasos que no se desprendan de ellos o de las buenas prácticas de despliegue.

INSTRUCCIÓN
1. Divide el plan en 4 fases: antes del pase (T menos 5 días a T menos 1 día), el día del pase, la ventana y después del pase (T más 1 a T más 5 días).
2. Antes del pase incluye copia de seguridad, congelamiento de cambios, aviso a usuarios y verificación del ambiente de pruebas.
3. En la ventana, escribe los pasos en orden con la hora relativa a la apertura de la ventana y el responsable.
4. Incluye un punto de decisión de reversa a los [60] minutos si las validaciones fallan.
5. Después del pase incluye monitoreo reforzado, validación con negocio y cierre del cambio.
6. Cada tarea lleva responsable por rol, fecha u hora relativa y entregable.
7. Máximo 25 tareas.

FORMATO DE SALIDA
Tareas agrupadas por fase con campos Título, Descripción, Responsable por rol, Fecha u hora, Entregable. Al final, una lista de 5 riesgos con mitigación.

LÍMITES
Marca [SUPUESTO] si una hora o un responsable no vienen en los documentos. Marca [VERIFICAR] si el paso depende de una herramienta que no conoces. Si falta algo, escribe PENDIENTE. No des instrucciones de comandos ni de configuración técnica.

CONTROL DE CALIDAD
Revisa que haya un punto de reversa con criterio medible, que la copia de seguridad esté antes de la ventana y que el cierre incluya aprobación de negocio.`,
      seguimiento: [
        "Convierte las tareas de la ventana en una tabla de Excel con Hora, Paso, Responsable y Validación.",
        "Redacta el aviso de 5 líneas a los usuarios sobre la ventana y el posible impacto.",
        "Qué pasos de la ventana podrían ejecutarse en paralelo para ahorrar tiempo."
      ],
      verificar: [
        "Los pasos de la ventana están en el orden correcto.",
        "El criterio de reversa es medible y tiene un responsable de decidirlo.",
        "Los responsables y horarios se confirmaron con cada equipo.",
        "Se revisó la tarea de cada fase en Planner antes de compartir el plan."
      ]
    },
    {
      necesidad: "Plan atrasado",
      titulo: "Revisar un plan de migración atrasado y proponer recuperación",
      donde: "Planner, plan existente, panel del Agente de Planner con el plan abierto.",
      antes: "Abre el plan de la migración atrasada. Ten a mano la fecha límite original y qué hitos son fijos. Requiere plan premium.",
      prompt: `ROL
Eres un project manager de tecnología de una aseguradora que revisa un plan atrasado y propone cómo recuperarlo sin esconder el problema.

CONTEXTO
El plan es la migración de [sistema, por ejemplo el módulo de reaseguro] con fecha límite [fecha]. Está atrasado en varias tareas y hay riesgo de no llegar. Los datos están anonimizados. El hito de [pruebas de aceptación] no se puede mover porque depende de otra área.

FUENTES
Usa solo las tareas, fechas, responsables y avance de este plan. No inventes tareas que no existan.

INSTRUCCIÓN
1. Lista las tareas vencidas y las que vencen en los próximos 7 días, con responsable y días de atraso.
2. Identifica la ruta crítica, es decir, las tareas que si se atrasan mueven la fecha final.
3. Señala tareas sin responsable, sin fecha o sin descripción.
4. Detecta sobrecarga: personas con más de 6 tareas abiertas en la misma semana.
5. Propone tres opciones de recuperación: reasignar, recortar alcance o mover la fecha. Para cada una indica el efecto en la fecha y el riesgo.
6. Recomienda una opción y explica en 3 líneas por qué.
7. Redacta un informe de estado de máximo 150 palabras para el comité.

FORMATO DE SALIDA
Cuatro bloques: Diagnóstico (tabla de tareas vencidas), Ruta crítica, Opciones de recuperación (tabla de 4 columnas) y Informe para el comité.

LÍMITES
Marca [SUPUESTO] si estimas un porcentaje de avance. Marca [VERIFICAR] si el estado de una tarea parece desactualizado. Si no puedes calcular un atraso, escribe PENDIENTE. No cambies tareas sin que yo lo pida.

CONTROL DE CALIDAD
Revisa que las tareas citadas existan en el plan, que el informe incluya una cifra de atraso y que las tres opciones sean distintas entre sí.`,
      seguimiento: [
        "Muéstrame solo las tareas vencidas de la ruta crítica, con responsable.",
        "Ajusta la opción de recortar alcance: qué tareas saldrían y qué riesgo deja eso.",
        "Redacta un mensaje al dueño del proyecto con la recomendación en 100 palabras, con tono directo."
      ],
      verificar: [
        "Las tareas y fechas que cita Copilot existen en el plan.",
        "El estado de las tareas está actualizado por sus responsables.",
        "La ruta crítica coincide con las dependencias reales del proyecto.",
        "El plan es premium y no se aplicaron cambios sin revisarlos."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Bitácora de guardia",
      titulo: "Notas de una guardia a línea de tiempo y pendientes de entrega",
      donde: "OneNote, página con tus apuntes de la guardia, icono de Copilot o panel de chat.",
      antes: "Ten en la página tus apuntes sueltos de la guardia, con horas aunque estén incompletas. Sin credenciales ni direcciones de servidores.",
      prompt: `ROL
Eres un ingeniero de operaciones de tecnología de una aseguradora que entrega la guardia al siguiente turno.

CONTEXTO
Estas son mis notas de la guardia de [fecha]. Mezclan alertas, llamadas, cosas que probé y cosas pendientes. Están desordenadas. Los datos están anonimizados y no contienen credenciales ni datos de clientes.

FUENTES
Solo el contenido de esta página de OneNote. No uses otras páginas ni información externa.

INSTRUCCIÓN
1. Ordena las notas en una línea de tiempo con hora, evento y acción tomada.
2. Separa lo que ya quedó resuelto de lo que sigue abierto.
3. Para cada asunto abierto indica: sistema, síntoma, qué se probó, qué falta y a quién se debe escalar.
4. Extrae las decisiones que tomé durante la guardia y el motivo.
5. Marca los asuntos que pueden volver a ocurrir en el turno siguiente.
6. Redacta una nota de entrega de turno de máximo 120 palabras para el siguiente ingeniero.
7. Lista 3 preguntas que yo debería contestar antes de entregar porque las notas no lo aclaran.

FORMATO DE SALIDA
Cuatro bloques con título: Línea de tiempo (tabla de 3 columnas), Asuntos abiertos (tabla de 5 columnas), Decisiones y Nota de entrega. Al final, las 3 preguntas.

LÍMITES
Marca [SUPUESTO] si deduces una hora. Marca [VERIFICAR] si dos notas se contradicen. Si falta el responsable del escalamiento, escribe PENDIENTE. No agregues causas que yo no haya anotado.

CONTROL DE CALIDAD
Revisa que cada fila de la línea de tiempo salga de una frase de mis notas, que ningún asunto abierto aparezca como resuelto y que la nota de entrega no pase de 120 palabras. Dime qué frases de mis notas no pudiste clasificar.`,
      seguimiento: [
        "Muéstrame solo lo que sigue abierto, ordenado por urgencia con el motivo.",
        "Convierte la línea de tiempo en un texto de 8 líneas para pegarlo en el ticket del incidente.",
        "Qué apunté como pendiente en las notas y no tiene responsable."
      ],
      verificar: [
        "Cada hora de la línea de tiempo aparece en tus notas.",
        "Los asuntos abiertos no quedaron cerrados por error.",
        "La nota de entrega no incluye credenciales, servidores ni datos de clientes.",
        "Lo marcado como SUPUESTO se confirmó antes de entregar la guardia."
      ]
    },
    {
      necesidad: "Procedimiento operativo",
      titulo: "Convertir mis apuntes en un procedimiento operativo paso a paso",
      donde: "OneNote, página con tus apuntes del procedimiento, icono de Copilot o panel de chat.",
      antes: "Escribe en la página los pasos como los haces tú, aunque estén desordenados. Revisa que no tengan contraseñas ni nombres de servidores reales.",
      prompt: `ROL
Eres un analista de procesos de tecnología y operaciones que escribe procedimientos operativos claros para que otra persona los ejecute sin ayuda.

CONTEXTO
Mis apuntes describen cómo ejecuto [procedimiento, por ejemplo el cierre diario de la conciliación de primas o la reactivación de un usuario en el portal de corredores]. Lo hago de memoria y quiero dejarlo documentado. Los datos están anonimizados y no hay credenciales ni datos de clientes.

FUENTES
Solo esta página de OneNote. No completes pasos con conocimiento general.

INSTRUCCIÓN
1. Ordena los pasos en secuencia lógica y numéralos.
2. Cada paso debe empezar con un verbo en infinitivo y decir una sola acción.
3. Agrega a cada paso el sistema o pantalla donde se hace y el resultado esperado.
4. Detecta pasos que faltan entre dos acciones y escríbelos como pregunta, no como paso.
5. Agrega una sección de requisitos previos: accesos, horarios y datos que se necesitan.
6. Agrega una sección de qué hacer si algo falla, con los 3 errores que mencionan mis apuntes y su solución.
7. Agrega una sección de a quién escalar y en qué casos.
8. Señala los pasos con riesgo, por ejemplo los que modifican datos, y pon al lado una advertencia.

FORMATO DE SALIDA
Título, objetivo en una línea, requisitos previos, pasos numerados en tabla con columnas Paso, Acción, Dónde, Resultado esperado y Riesgo, errores frecuentes, escalamiento y una lista de preguntas por resolver.

LÍMITES
Marca [SUPUESTO] si interpretas un paso ambiguo. Marca [VERIFICAR] si un paso podría afectar datos de producción. Si falta un dato, escribe PENDIENTE. No inventes nombres de pantallas ni de sistemas.

CONTROL DE CALIDAD
Revisa que un compañero nuevo pueda seguir los pasos sin preguntarme, que cada paso tenga resultado esperado y que no haya instrucciones que no estén en mis apuntes. Dime qué pasos te parecieron más débiles.`,
      seguimiento: [
        "Resume el procedimiento en una lista de verificación de máximo 10 casillas para usarla en el día.",
        "Qué pasos tienen riesgo de modificar datos y qué validación habría que agregar antes.",
        "Reescribe los pasos 3 a 6 con frases aún más cortas y sin términos ambiguos."
      ],
      verificar: [
        "Un compañero ejecutó el procedimiento con la página sin tu ayuda.",
        "Los pasos agregados como pregunta se confirmaron contigo y no quedaron como hechos.",
        "No hay credenciales ni nombres de servidores en la versión final.",
        "El dueño del proceso revisó los pasos de riesgo antes de publicar."
      ]
    },
    {
      necesidad: "Base de conocimiento de soporte",
      titulo: "Notas de casos de soporte a fichas de conocimiento de primer nivel",
      donde: "OneNote, página o sección con tus notas de casos de soporte, icono de Copilot o panel de chat.",
      antes: "Reúne en la sección tus notas de casos resueltos en las últimas semanas. Quita nombres de clientes y números de póliza reales.",
      prompt: `ROL
Eres un líder de soporte de primer nivel de una aseguradora que convierte casos resueltos en fichas que otro agente pueda usar.

CONTEXTO
Estas notas son casos de soporte que resolví, por ejemplo errores al emitir pólizas, bloqueos de usuarios del portal y fallas en descargas de reportes. Los datos están anonimizados y no contienen datos de clientes ni credenciales.

FUENTES
Solo las notas de esta página o sección de OneNote.

INSTRUCCIÓN
1. Agrupa los casos por sistema y por tipo de síntoma.
2. Si varios casos describen el mismo problema, unifícalos en una sola ficha e indica cuántas veces apareció.
3. Cada ficha debe tener: título con el síntoma, sistema, causa probable, solución paso a paso (máximo 5 pasos), cuánto tarda, cuándo escalar y a qué equipo.
4. Escribe el título de cada ficha con las palabras que usaría un usuario de negocio al reportar el problema.
5. Marca las soluciones que dependen de un permiso especial.
6. Ordena las fichas por frecuencia, de la más repetida a la menos repetida.
7. Al final, lista los casos de las notas que no se pudieron convertir en ficha y por qué.

FORMATO DE SALIDA
Fichas en este orden: Título, Sistema, Frecuencia, Causa probable, Solución, Tiempo, Escalar a. Después un índice de una línea por ficha y la lista de casos descartados.

LÍMITES
Marca [SUPUESTO] cuando la causa no esté en mis notas. Marca [VERIFICAR] si la solución parece depender de una versión antigua del sistema. Si falta un paso, escribe PENDIENTE. No agregues soluciones nuevas.

CONTROL DE CALIDAD
Revisa que cada ficha salga de al menos un caso de mis notas, que la solución no pase de 5 pasos y que ningún dato de cliente se haya colado. Dime cuántas fichas generaste y cuáles tienen menos evidencia.`,
      seguimiento: [
        "Convierte la ficha más frecuente en un mensaje de respuesta de 70 palabras para el usuario.",
        "Dime qué sistemas concentran más casos y qué patrón ves en los síntomas.",
        "Marca las fichas que deberían revisarse con desarrollo antes de publicarlas."
      ],
      verificar: [
        "Cada ficha se apoya en un caso real de tus notas.",
        "Las soluciones siguen vigentes en la versión actual del sistema.",
        "Los títulos usan palabras que de verdad usan los usuarios.",
        "No quedó ningún dato de cliente ni credencial."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Solicitud de cambio",
      titulo: "Solicitud de cambio completa con riesgo, pruebas y reversa",
      donde: "Copilot Chat, pestaña Trabajo, con el diseño técnico o los apuntes del cambio adjuntos con el clip.",
      antes: "Ten el documento o las notas del cambio y el formato de solicitud de cambio de tu área. Anonimiza servidores y datos de clientes.",
      prompt: `ROL
Eres un coordinador de gestión de cambios de una aseguradora, con experiencia en ITIL y en pases a producción de sistemas de pólizas.

OBJETIVO
Redactar la solicitud de cambio del cambio [nombre, por ejemplo ajuste del cálculo de comisiones de corredores] para el comité de cambios, de modo que se pueda aprobar en una sola lectura.

CONTEXTO
Cambio en [producción], ventana propuesta [fecha y hora], sistema [nombre de ejemplo], solicitante [área], responsable técnico [rol]. Los datos están anonimizados. El comité aprueba solo si hay pruebas, plan de reversa y aviso al negocio.

FUENTES
Usa el documento adjunto y esta información. Cita la sección o página de donde sacas cada dato. No uses información de fuera.

INSTRUCCIÓN
1. Resume en 3 líneas qué cambia y por qué se hace.
2. Describe el alcance y lo que queda fuera.
3. Evalúa el riesgo: probabilidad, impacto y nivel final (alto, medio o bajo) con una frase de justificación.
4. Lista los sistemas y procesos de negocio que se pueden afectar.
5. Describe las pruebas hechas, con resultado, y las que faltan.
6. Describe el plan de implementación en pasos numerados con duración.
7. Describe el plan de reversa: cuándo se activa, quién decide y cuánto tarda.
8. Redacta el aviso a usuarios en máximo 60 palabras.

FORMATO DE SALIDA
Formulario con los campos anteriores como títulos y respuestas breves. Máximo 400 palabras. Al final, una tabla con los datos faltantes para aprobar.

LÍMITES
Marca [SUPUESTO] si completas un dato. Marca [VERIFICAR] si hay una cifra o una fecha dudosa. Si falta el plan de reversa o las pruebas, escribe PENDIENTE y no los inventes. No incluyas instrucciones de configuración ni comandos.

CONTROL DE CALIDAD
Antes de entregar, revisa que cada afirmación tenga fuente, que el nivel de riesgo sea coherente con las pruebas y la reversa, y que el formulario quepa en 400 palabras. Dime qué falta para que el comité lo apruebe.`,
      seguimiento: [
        "Reescribe el resumen para un director sin perfil técnico, en 40 palabras.",
        "Qué preguntas me haría el comité sobre esta solicitud y cómo debería responderlas.",
        "Dime qué riesgos no analicé y verifica si el documento adjunto los menciona."
      ],
      verificar: [
        "Cada dato tiene una página o sección del documento como fuente.",
        "El nivel de riesgo coincide con el estado real de pruebas y reversa.",
        "El plan de reversa lo confirmó el responsable técnico.",
        "El aviso a usuarios no promete una hora que el equipo no puede cumplir."
      ]
    },
    {
      necesidad: "Avance para dirección",
      titulo: "Avance de tecnología para dirección en lenguaje de negocio",
      donde: "Copilot Chat, pestaña Trabajo, con el reporte de indicadores o el cronograma adjuntos con el clip.",
      antes: "Ten el reporte de disponibilidad e incidentes del mes y el estado de los proyectos. Anonimiza lo que sea sensible.",
      prompt: `ROL
Eres un director de operaciones de tecnología que escribe para el comité de dirección de una aseguradora. Hablas de negocio, no de tecnología.

OBJETIVO
Redactar el avance mensual de tecnología y operaciones para la dirección, en una página, con lo que la dirección necesita saber y decidir.

CONTEXTO
Mes de [mes]. Audiencia: presidente y vicepresidentes de áreas comerciales y de siniestros. Datos anonimizados y de ejemplo: disponibilidad de la plataforma de emisión [99,2 %], 14 incidentes, de los cuales 2 críticos, y 3 proyectos en curso con fechas de entrega comprometidas.

FUENTES
Usa los archivos adjuntos. Cita el archivo y la sección de cada cifra. Si una cifra no está en los archivos, no la uses.

INSTRUCCIÓN
1. Escribe un titular de una frase con la conclusión del mes.
2. Resume la disponibilidad y los incidentes críticos en términos de efecto en el negocio, por ejemplo pólizas que no se pudieron emitir o horas de atención afectadas.
3. Para cada proyecto, indica estado con semáforo, avance y si la fecha se mantiene.
4. Señala los 3 riesgos principales con su efecto en el negocio y la acción en marcha.
5. Pide máximo 2 decisiones a la dirección, cada una con opciones y consecuencia de no decidir.
6. Evita siglas sin explicar.

FORMATO DE SALIDA
Una página con el titular, un bloque de indicadores en tabla de 3 columnas, estado de proyectos en tabla, riesgos y decisiones solicitadas. Máximo 350 palabras.

LÍMITES
Marca [SUPUESTO] si interpretas el efecto en el negocio. Marca [VERIFICAR] si una cifra tiene más de 30 días o no cuadra entre archivos. Si falta el dato, escribe PENDIENTE.

CONTROL DE CALIDAD
Revisa que no haya jerga técnica sin explicar, que cada cifra tenga fuente y que las decisiones pedidas sean concretas. Dime qué cifras debería confirmar antes de enviar.`,
      seguimiento: [
        "Reescribe el titular y las decisiones en 3 versiones de tono distinto, una sobria, una directa y una cercana.",
        "Convierte esta página en 5 puntos para decir en voz alta en el comité en 2 minutos.",
        "Qué cifras cambiaron frente al mes anterior y qué las explica según los archivos."
      ],
      verificar: [
        "Cada cifra aparece en el archivo que Copilot cita.",
        "El efecto en el negocio está descrito sin exagerar.",
        "Las decisiones pedidas tienen opciones y consecuencias claras.",
        "El texto se entiende sin conocimientos de tecnología."
      ]
    },
    {
      necesidad: "Informe post mortem",
      titulo: "Informe post mortem de una caída a partir de la bitácora",
      donde: "Copilot Chat, pestaña Trabajo, con la bitácora del incidente y el reporte de monitoreo adjuntos con el clip.",
      antes: "Ten la bitácora con horas, el reporte de monitoreo y la lista de áreas afectadas. Anonimiza servidores, nombres y datos de clientes.",
      prompt: `ROL
Eres un ingeniero de confiabilidad de una aseguradora que redacta informes post mortem sin buscar culpables.

OBJETIVO
Redactar el informe post mortem del incidente [código y sistema, por ejemplo caída del servicio de cotización durante 95 minutos] para el equipo de tecnología y la dirección de operaciones.

CONTEXTO
Los datos están anonimizados y los adjuntos no tienen credenciales. El informe debe servir para que otro equipo entienda qué pasó y qué se hace para que no se repita. Estilo: claro, sereno y centrado en procesos.

FUENTES
Usa la bitácora y el reporte de monitoreo adjuntos. Cita el archivo y la hora o sección de cada dato. No uses información de fuera.

INSTRUCCIÓN
1. Resume en 4 líneas qué pasó, cuánto duró y qué procesos de negocio se afectaron.
2. Arma la línea de tiempo con hora, evento y fuente.
3. Calcula el tiempo hasta detectar, el tiempo hasta responder y el tiempo hasta restablecer.
4. Estima el impacto con las cifras que haya en las fuentes, por ejemplo cotizaciones no atendidas.
5. Propón la causa raíz con el método de los cinco porqués y marca cuáles pasos están sustentados y cuáles son hipótesis.
6. Lista qué funcionó bien y qué falló en la respuesta.
7. Propone acciones correctivas y preventivas con responsable por rol, fecha sugerida e indicador.

FORMATO DE SALIDA
Secciones: Resumen, Línea de tiempo (tabla), Tiempos, Impacto, Causa raíz, Lo que funcionó y lo que falló, Acciones (tabla). Máximo 450 palabras sin contar las tablas.

LÍMITES
Marca [SUPUESTO] si una causa no está sustentada. Marca [VERIFICAR] si las horas de la bitácora y del monitoreo no coinciden. Si falta el impacto, escribe PENDIENTE. No señales personas como causa.

CONTROL DE CALIDAD
Revisa que la línea de tiempo cuadre con los tiempos calculados, que cada hipótesis esté marcada y que todas las acciones tengan indicador. Dime qué evidencia falta para confirmar la causa raíz.`,
      seguimiento: [
        "Haz una versión de 150 palabras para el comité de dirección, con impacto y acciones.",
        "Qué datos faltan en la bitácora para confirmar la causa raíz y a quién habría que pedírselos.",
        "Redacta el aviso de cierre del incidente para el negocio, en 70 palabras y tono sereno."
      ],
      verificar: [
        "Las horas de la bitácora y del monitoreo coinciden o la diferencia está explicada.",
        "La causa raíz marca como hipótesis lo que no tiene evidencia.",
        "El informe no atribuye la falla a una persona.",
        "Las acciones tienen indicador medible y responsable."
      ]
    }
  ]
};
