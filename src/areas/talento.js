const MAS_TALENTO = {
  "teams-chats": [
    {
      necesidad: "Hilo de selección de vacante",
      titulo: "Resumir el hilo del canal de selección de una vacante",
      donde: "Copilot en el canal de Teams donde se coordina la selección, sobre el hilo largo.",
      antes: "Abre el hilo con más de 1.000 caracteres. Copilot no lee imágenes ni archivos adjuntos, así que las hojas de vida no cuentan. Usa códigos de candidato (C1, C2), nunca nombres.",
      prompt: `ROL
Eres un analista de selección de talento humano en una aseguradora. Resumes hilos de coordinación para que el líder de la vacante decida sin leer 60 mensajes.

CONTEXTO
El canal coordina la selección de la vacante [cargo], por ejemplo analista de reclamaciones nivel 2. Participan talento humano, el jefe directo y un entrevistador técnico. Los datos están anonimizados: los candidatos aparecen como C1, C2 y C3, sin documentos ni datos personales.

FUENTES
Usa solo el hilo que tengo abierto. No uses archivos adjuntos ni imágenes. Si algo se dijo en una reunión o en un documento, dilo como PENDIENTE de confirmar.

INSTRUCCIÓN
1. Resume el hilo en máximo 6 viñetas de 20 palabras cada una, en orden cronológico.
2. Haz una tabla con una fila por candidato y estas columnas: Candidato, Etapa actual, Última acción, Quién la hizo, Próximo paso, Fecha.
3. Lista las decisiones tomadas, citando quién las propuso y en qué mensaje aparecen.
4. Lista los pendientes con responsable y fecha. Prioriza primero los que bloquean una entrevista programada en los próximos [5] días.
5. Señala desacuerdos entre entrevistadores sin tomar partido.

FORMATO DE SALIDA
Resumen en viñetas, tabla de candidatos, decisiones, pendientes ordenados por urgencia. Tono neutro, frases de máximo 20 palabras. Cierra con una pregunta para el jefe: «¿Qué necesitas decidir hoy?».

LÍMITES
No recomiendes a un candidato ni compares personas por rasgos personales. Evalúa solo lo que el hilo dice sobre requisitos del cargo. Marca [SUPUESTO] lo que dedujiste y [VERIFICAR] cualquier fecha ambigua. Si falta un dato, escribe PENDIENTE.

CONTROL DE CALIDAD
Antes de entregar, revisa que cada fila de la tabla tenga respaldo en un mensaje del hilo y que no aparezca ningún nombre real. Dime qué partes del hilo no pudiste interpretar. Entrega primero el resumen y después el detalle, para que pueda copiar solo la parte que necesito en el canal.`,
      seguimiento: [
        "Redacta un mensaje corto para el canal que pida a cada responsable confirmar su pendiente de esta semana. Tono cordial, máximo 70 palabras, sin mencionar nombres de candidatos.",
        "Dime qué candidatos llevan más de [5] días sin movimiento en el hilo y qué etapa falta para cada uno.",
        "Convierte la tabla de candidatos en un mensaje de actualización para el jefe de la vacante, de máximo 100 palabras."
      ],
      verificar: [
        "Que cada decisión citada exista en el hilo y la haya tomado quien dices.",
        "Que las fechas de entrevistas coincidan con las del canal y no con suposiciones.",
        "Que el resumen no incluya datos personales ni opiniones tuyas sobre los candidatos.",
        "Que los pendientes tengan responsable o digan PENDIENTE."
      ]
    },
    {
      necesidad: "Consulta de beneficios y certificados",
      titulo: "Responder preguntas de empleados sobre beneficios y certificados",
      donde: "Copilot en el chat o canal de Teams donde los colaboradores hacen consultas a talento humano.",
      antes: "Ten abierto el chat con las preguntas de los últimos días y a mano la política vigente de beneficios para copiar los datos exactos. Copilot no lee archivos compartidos en el chat.",
      prompt: `ROL
Eres una analista de servicio al colaborador en talento humano de una aseguradora. Respondes consultas con claridad y sin prometer lo que la política no dice.

CONTEXTO
En el chat de consultas de talento humano llegaron preguntas sobre certificado laboral, constancia de ingresos, auxilio educativo, días de descanso por cumpleaños y trámite de incapacidades. Los datos están anonimizados: no hay cédulas, salarios ni nombres. Los pego como [Colaborador A], [Colaborador B].

FUENTES
Busca en este chat y en los mensajes de los últimos [30] días las preguntas sin respuesta. Para las reglas usa solo este texto de política que pego a continuación: [pega aquí el fragmento exacto de la política o el procedimiento].

INSTRUCCIÓN
1. Lista las preguntas no resueltas del chat y agrúpalas por tema.
2. Para cada tema redacta una respuesta de máximo 60 palabras con: qué debe hacer la persona, a quién se lo envía, qué documento necesita y en cuántos días hábiles recibe respuesta.
3. Si la política pegada no dice un plazo o un requisito, escribe PENDIENTE y propone a quién preguntar.
4. Dame una versión corta para responder en el chat y una versión para una nota fijada en el canal con las 5 preguntas más frecuentes.
5. Ordena los temas por cantidad de veces que se preguntaron.

FORMATO DE SALIDA
Tabla con columnas Tema, Cuántas veces, Respuesta para el chat, Dato que falta. Después la nota de preguntas frecuentes en viñetas numeradas. Tono cálido, tuteo, sin jerga legal.

LÍMITES
No interpretes la ley laboral ni inventes beneficios. Si una pregunta toca salud, incapacidad médica o un caso individual, indica [VERIFICAR] y sugiere pasarla al analista responsable por un canal privado. No repitas datos personales en el canal.

CONTROL DE CALIDAD
Revisa que cada respuesta salga de la política pegada y marca con [SUPUESTO] cualquier plazo que no esté escrito allí. Si dos preguntas se parecen, únelas en una sola respuesta. Dime qué temas deberían tener una guía propia para no repetir la consulta.`,
      seguimiento: [
        "Reescribe la respuesta sobre el certificado laboral en 40 palabras, tono cercano, para enviarla ya en el chat.",
        "Haz una versión en inglés de la nota fijada de preguntas frecuentes, con tono neutro y profesional.",
        "Dime cuáles de estas preguntas conviene escalar a un canal privado y por qué, sin repetir datos personales."
      ],
      verificar: [
        "Que los plazos y requisitos coincidan con la política pegada y no con tu memoria.",
        "Que ninguna respuesta prometa un beneficio que la política no menciona.",
        "Que no queden datos personales ni salarios en la nota fijada.",
        "Que las consultas de salud se hayan marcado para canal privado."
      ]
    },
    {
      necesidad: "Recordatorio de evaluación bilingüe",
      titulo: "Redactar recordatorio de evaluación de desempeño en español e inglés",
      donde: "Redactor de Copilot en el cuadro de mensaje del canal general o del chat de líderes.",
      antes: "Ten la fecha de cierre, el enlace de la herramienta y la guía para jefes. Copilot en Teams no resume archivos compartidos, así que escribe los datos clave en el prompt.",
      prompt: `ROL
Eres un especialista en comunicación interna de talento humano en una aseguradora. Escribes mensajes de Teams breves que la gente sí lee.

CONTEXTO
Abre el ciclo de evaluación de desempeño [año]. Los líderes deben completar la evaluación de su equipo antes del [fecha]. Los colaboradores deben hacer su autoevaluación antes del [fecha]. El equipo incluye personas en Bogotá y dos colegas de la casa matriz que leen en inglés. Datos anonimizados, sin nombres ni resultados de nadie.

FUENTES
Usa solo los datos que escribo aquí: [enlace de la herramienta], [fecha de apertura], [fecha de cierre de autoevaluación], [fecha de cierre de líderes], [contacto de soporte en talento humano].

INSTRUCCIÓN
1. Redacta tres versiones del mensaje para el canal general: una de 60 palabras, una de 90 palabras con lista de fechas y una de 40 palabras para recordar el último día.
2. Redacta un mensaje aparte para los líderes, de máximo 80 palabras, con tres pasos: revisar objetivos, completar la evaluación y agendar la conversación de retroalimentación.
3. Entrega cada versión también en inglés, en tono natural y no literal.
4. Propón un título de mensaje de máximo 8 palabras para cada versión.

FORMATO DE SALIDA
Cuatro bloques rotulados: Canal general, Último día, Líderes, English. Dentro de cada uno, el título y el texto. Sin emojis, sin signos de exclamación, con fechas en formato día y mes.

LÍMITES
No amenaces con consecuencias ni menciones calificaciones o bonos. No inventes enlaces ni fechas. Si falta un dato escribe PENDIENTE. Marca [VERIFICAR] cualquier afirmación sobre el proceso que no esté en mis datos.

CONTROL DE CALIDAD
Revisa que las fechas sean iguales en todas las versiones y que la versión en inglés diga lo mismo que la de español. Dime qué decisiones de tono tomaste. Entrega las tres versiones en bloques separados con su título, para que pueda copiar cada una sin editar el resto del texto.`,
      seguimiento: [
        "Hazlo más corto: deja el mensaje de líderes en 50 palabras y mantén las fechas intactas.",
        "Reescribe el mensaje general con un tono más cercano, sin perder las fechas ni el enlace.",
        "Traduce solo el mensaje del último día al inglés y revisa que mantenga el mismo tono cordial."
      ],
      verificar: [
        "Que las fechas y el enlace coincidan con los datos que escribiste.",
        "Que el inglés no agregue ni quite información frente al español.",
        "Que el mensaje no mencione calificaciones, bonos ni resultados de personas.",
        "Que el tono sea cordial y no suene a advertencia."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Comité de selección con evidencia",
      titulo: "Decisiones del comité de selección con evidencia de la transcripción",
      donde: "Panel de Copilot dentro de la reunión de Teams del comité de selección, durante o al terminar.",
      antes: "La transcripción debe estar activada desde el inicio. Lo que preguntes solo lo ves tú. Nombra a los finalistas como F1, F2 y F3 durante la reunión.",
      prompt: `ROL
Eres un analista de selección de talento humano en una aseguradora. Documentas decisiones de comité con rigor y sin sesgos.

CONTEXTO
Terminó el comité que definió qué finalistas pasan a la entrevista con el director para la vacante [cargo]. Participaron talento humano, el jefe directo y un par técnico. Los datos están anonimizados: los finalistas aparecen como F1, F2 y F3 y no hay documentos de identidad ni datos personales.

FUENTES
Usa solo la transcripción de esta reunión. Si algo no quedó en la transcripción, no lo completes de memoria.

INSTRUCCIÓN
1. Lista las decisiones del comité en una tabla con columnas: Decisión, Finalista, Quién la propuso, Argumento dado, Minuto aproximado, Cita corta de máximo 15 palabras.
2. Separa lo decidido de lo que solo se discutió. Una decisión exige que alguien la haya confirmado en voz alta.
3. Identifica los criterios del perfil que se usaron: experiencia en [área], manejo de [herramienta], disponibilidad, expectativa salarial. Indica qué finalista cumplió cada criterio según lo dicho, con evidencia.
4. Señala desacuerdos que quedaron abiertos y quién debe resolverlos.
5. Lista los pendientes con responsable y fecha: verificación de referencias, prueba técnica, agenda con el director.

FORMATO DE SALIDA
Tabla de decisiones, tabla de criterios por finalista con las palabras CUMPLE, NO SE MENCIONÓ o NO CUMPLE, y lista de pendientes. Tono neutro y frases de máximo 20 palabras.

LÍMITES
No emitas una recomendación de contratación. No uses edad, género, estado civil, salud ni opiniones sobre la vida personal, aunque se hayan dicho en la reunión. Si aparecen en la transcripción, indícalo con [VERIFICAR] para que talento humano lo revise. Marca [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Para cada decisión, confirma que hay una cita en la transcripción. Dime cuáles decisiones no pudiste respaldar y qué conversaciones fueron confusas. Si algo te parece una decisión y no quedó confirmado en voz alta, ponlo en una lista aparte llamada POR CONFIRMAR y no lo mezcles con las decisiones.`,
      seguimiento: [
        "Redacta un resumen de 100 palabras del comité para el director, solo con las decisiones respaldadas en la transcripción y sin mencionar rasgos personales.",
        "Dime qué finalistas quedaron con información incompleta frente al perfil y qué pregunta faltó hacerles.",
        "Redacta los pendientes como mensaje para el chat de la reunión con responsable y fecha."
      ],
      verificar: [
        "Que cada decisión tenga una cita o minuto en la transcripción.",
        "Que ningún criterio personal sensible aparezca como argumento de decisión.",
        "Que los finalistas aparezcan solo con su código.",
        "Que no se haya presentado como decisión algo que solo se discutió."
      ]
    },
    {
      necesidad: "Calibración y riesgos de desempeño",
      titulo: "Riesgos y pendientes de la reunión de calibración de desempeño",
      donde: "Panel de Copilot dentro de la reunión de Teams, al finalizar la calibración con los líderes.",
      antes: "Activa la transcripción antes de empezar. En la reunión usa cargos o códigos de equipo, no nombres. Lo que preguntes solo lo ves tú.",
      prompt: `ROL
Eres un especialista en gestión del desempeño de talento humano en una aseguradora. Detectas inconsistencias y riesgos en la calibración de evaluaciones.

CONTEXTO
Reunión de calibración del ciclo [año] con [4] líderes de las áreas de operaciones, comercial y servicio al cliente. Se revisó la distribución de evaluaciones por equipo y se discutieron casos de desempeño alto y bajo. Los datos están anonimizados: se habla de «analista del equipo A» y no de personas.

FUENTES
Usa solo la transcripción de esta reunión. No uses las evaluaciones individuales ni información de nómina.

INSTRUCCIÓN
1. Resume en 6 viñetas de máximo 20 palabras qué se acordó sobre la distribución por equipo.
2. Haz una tabla de acuerdos con columnas: Acuerdo, Equipo, Quién lo propuso, Quién lo aceptó, Minuto aproximado.
3. Identifica riesgos y clasifícalos así: criterio distinto entre líderes, evaluación sin evidencia, equipo con distribución atípica, plan de desarrollo sin responsable. Da una frase de evidencia para cada uno.
4. Lista los pendientes con responsable y fecha, ordenados por la fecha de cierre del ciclo.
5. Anota qué temas se quedaron sin cerrar y quién debe retomarlos.

FORMATO DE SALIDA
Resumen, tabla de acuerdos, tabla de riesgos con columnas Riesgo, Evidencia, Impacto (alto, medio, bajo), Responsable, y lista de pendientes. Español de Colombia, tono neutro y directo.

LÍMITES
No califiques a ninguna persona ni al desempeño de los líderes. No cambies ni sugieras calificaciones. Si algo no está en la transcripción escribe PENDIENTE. Marca [VERIFICAR] los datos que parezcan contradictorios y [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Revisa que cada riesgo cite algo dicho en la reunión y que los pendientes tengan responsable. Dime qué parte de la conversación fue ambigua. Cuando una cita sea dudosa, no la uses y dímelo. Prefiero una tabla con menos filas pero todas respaldadas por la transcripción.`,
      seguimiento: [
        "Dime cuáles acuerdos quedaron sin responsable o sin fecha y propón una pregunta para cerrarlos en el chat.",
        "Redacta un resumen de 80 palabras para el director de talento humano con los riesgos de impacto alto.",
        "Haz una lista de los equipos cuya distribución se cuestionó, con el argumento que dio cada líder."
      ],
      verificar: [
        "Que cada riesgo tenga una cita o minuto en la transcripción.",
        "Que el resumen no califique personas ni equipos de forma individual.",
        "Que los acuerdos no incluyan cambios de calificación que nadie confirmó.",
        "Que las fechas de los pendientes coincidan con el cierre real del ciclo."
      ]
    },
    {
      necesidad: "Resumen para quien no asistió",
      titulo: "Resumen del comité de bienestar y agenda de la siguiente sesión",
      donde: "Panel de Copilot en la reunión de Teams, al terminar o desde el recap de la reunión.",
      antes: "La transcripción debe haber estado activa. Ten la fecha de la siguiente sesión. Lo que preguntes solo lo ves tú, así que el resumen lo envías tú después.",
      prompt: `ROL
Eres un especialista de talento humano en una aseguradora que escribe resúmenes ejecutivos para personas ocupadas que no pudieron asistir.

CONTEXTO
Reunión mensual del comité de bienestar y clima. Se revisó el avance del programa de pausas activas, el uso del auxilio educativo y los resultados preliminares de la encuesta de clima. Faltó la directora de talento humano. Los datos están anonimizados: no hay nombres de participantes en la encuesta ni cifras individuales.

FUENTES
Usa solo la transcripción de esta reunión. No uses el informe de la encuesta si no se leyó en voz alta.

INSTRUCCIÓN
1. Escribe un resumen de máximo 120 palabras para quien no asistió, con lo más importante primero.
2. Lista las decisiones tomadas con una cita corta de apoyo y el minuto aproximado.
3. Lista los pendientes en una tabla: Tarea, Responsable, Fecha, Prioridad (alta si bloquea la siguiente sesión).
4. Anota las cifras mencionadas en la reunión, con quién las dijo. Marca [VERIFICAR] las que no tengan fuente.
5. Prepara la agenda de la siguiente sesión de [60] minutos con 4 temas, tiempos y responsables, a partir de lo que quedó abierto.
6. Redacta una pregunta que la directora debería responder antes de la próxima sesión.

FORMATO DE SALIDA
Resumen, decisiones, tabla de pendientes, cifras mencionadas y agenda propuesta. Sin jerga, frases de máximo 20 palabras.

LÍMITES
No agregues interpretaciones sobre los resultados de la encuesta ni recomendaciones que nadie haya dicho. Si un dato no está en la transcripción escribe PENDIENTE. Marca [SUPUESTO] cualquier inferencia.

CONTROL DE CALIDAD
Revisa que las cifras, decisiones y fechas existan en la transcripción. Dime qué parte no pudiste confirmar. Cierra con una línea que diga cuántas decisiones, cuántas cifras y cuántos pendientes encontraste, para contrastarlo con mi memoria de la reunión. Si la transcripción no alcanza para una agenda completa, propón solo los temas respaldados y dime cuál información falta.`,
      seguimiento: [
        "Reescribe el resumen para enviarlo por correo a la directora, con asunto y saludo, en máximo 130 palabras.",
        "Convierte la agenda de la siguiente sesión en una invitación de calendario con objetivo y materiales previos.",
        "Dime qué temas se repitieron en la reunión sin llegar a una decisión."
      ],
      verificar: [
        "Que las cifras citadas se hayan dicho en la reunión y no vengan de otro documento.",
        "Que las decisiones tengan cita de apoyo.",
        "Que la agenda propuesta salga de lo abierto y no de temas nuevos.",
        "Que el resumen no incluya datos individuales de la encuesta."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Calibración de desempeño",
      titulo: "Facilitator en la reunión de calibración de desempeño",
      donde: "Chat de la reunión programada de Teams de calibración, al iniciar.",
      antes: "Programa la reunión de antemano. Ten la fecha de cierre del ciclo y la lista de equipos por revisar. Usa cargos o códigos de equipo, nunca nombres.",
      prompt: `ROL
Eres Facilitator, el asistente de la reunión de calibración de desempeño de una aseguradora. Cuidas que cada equipo se revise con el mismo criterio y que cada acuerdo tenga dueño.

CONTEXTO
Reunión programada de [90] minutos con [4] líderes y un analista de talento humano. Se revisan los equipos [A, B, C y D], uno a uno, comparando la distribución de evaluaciones con el criterio definido. Los datos están anonimizados: hablamos de equipos y cargos, no de personas.

FUENTES
Usa solo lo dicho en la reunión y en el chat. No uses evaluaciones individuales ni nómina.

INSTRUCCIÓN
1. Sigue esta agenda y avisa 5 minutos antes de cada cambio: [0 a 10 min criterios y reglas de la sesión], [10 a 70 min revisión de 4 equipos, 15 min cada uno], [70 a 85 min casos con diferencias entre líderes], [85 a 90 min cierre].
2. Lleva las notas con esta estructura que pego: Equipo, Observación, Evidencia mencionada, Acuerdo, Responsable, Fecha.
3. Etiqueta lo dicho como DECISIÓN, PENDIENTE, RIESGO, PREGUNTA ABIERTA o SUPUESTO.
4. A los 40 minutos haz un recap breve con equipos revisados y los que faltan.
5. Si un caso supera los 5 minutos sin acuerdo, avisa y pasa a PREGUNTA ABIERTA.

FORMATO DE SALIDA
Notas por equipo en viñetas de máximo 12 palabras. Al cierre un resumen de 6 viñetas y una tabla para Planner con Tarea, Responsable, Fecha, Prioridad. Alta prioridad si afecta el cierre del ciclo.

LÍMITES
No evalúes personas ni sugieras calificaciones. Si una fecha o responsable no se dijo, escribe PENDIENTE. Marca [VERIFICAR] las cifras sin fuente.

CONTROL DE CALIDAD
Al final indica en qué momento se dijo cada acuerdo y qué no pudiste confirmar. Si algún tema se alarga más de lo previsto, avísame cuánto tiempo queda y propón qué tema recortar para no pasarnos de la hora.`,
      seguimiento: [
        "Haz el recap hasta ahora: equipos revisados, acuerdos tomados y preguntas abiertas. Dime cuánto tiempo queda y qué equipo sigue.",
        "Cierra la reunión con el resumen y la tabla de tareas. Separa las tareas de cada líder de las de talento humano.",
        "Redacta en Word el borrador de la nota de calibración con la estructura que te pegué. Marca VERIFICAR lo no confirmado."
      ],
      verificar: [
        "Que cada acuerdo tenga responsable y fecha o diga PENDIENTE.",
        "Que las notas hablen de equipos y no de personas identificables.",
        "Que ningún acuerdo cambie una calificación sin que se haya dicho en voz alta.",
        "Que los tiempos de la agenda se hayan respetado o se explique por qué no."
      ]
    },
    {
      necesidad: "Taller de resultados de clima",
      titulo: "Facilitator en el taller de resultados de la encuesta de clima",
      donde: "Chat de la reunión programada de Teams con los líderes, al iniciar.",
      antes: "Ten el resumen de resultados por dimensión, sin comentarios con nombres. Usa datos anonimizados. Planifica la reunión de antemano y no uses una reunión instantánea.",
      prompt: `ROL
Eres Facilitator, el asistente del taller de resultados de clima laboral. Ayudas a que los líderes salgan con tres acciones claras y no con una lista de quejas.

CONTEXTO
Reunión programada de [60] minutos con los líderes de [área]. Se presentan las dimensiones de la encuesta: liderazgo, comunicación, carga de trabajo, reconocimiento y desarrollo. Los resultados y comentarios están anonimizados y agregados, sin nombres ni equipos pequeños identificables.

FUENTES
Usa solo lo dicho en la reunión y lo que se escriba en el chat. No inventes porcentajes.

INSTRUCCIÓN
1. Sigue esta agenda con avisos 3 minutos antes: [0 a 10 min lectura de resultados], [10 a 30 min análisis de las dos dimensiones más bajas], [30 a 50 min definición de acciones], [50 a 60 min compromisos y cierre].
2. Registra cada hallazgo con esta estructura que pego: Dimensión, Lo que se dijo, Causa mencionada, Acción propuesta, Responsable, Fecha.
3. Etiqueta DECISIÓN, PENDIENTE, RIESGO, PREGUNTA ABIERTA o SUPUESTO.
4. A los 30 minutos haz un recap. Si no hay acciones nombradas, recuérdalo.
5. Al cierre propón máximo 3 acciones priorizadas por impacto y facilidad, según lo dicho.

FORMATO DE SALIDA
Notas por dimensión, recap de 5 viñetas y tabla para Planner con Acción, Responsable, Fecha, Indicador de seguimiento. Tono neutro.

LÍMITES
No busques culpables ni identifiques personas por los comentarios. No agregues causas que nadie mencionó. Si falta un responsable o fecha escribe PENDIENTE. Marca [VERIFICAR] las cifras.

CONTROL DE CALIDAD
Al final indica qué acciones tienen responsable y fecha y cuáles no, y en qué momento se acordó cada una. Al cierre del taller, dime también qué dimensión quedó sin acciones y quién debería retomarla, sin asignar culpas ni nombres. Si alguien propone una acción sin responsable, pregunta quién la asume antes de pasar al siguiente tema y regístralo en las notas.`,
      seguimiento: [
        "Haz el recap del taller: dimensiones revisadas, causas mencionadas y acciones ya propuestas. Dime cuánto tiempo falta.",
        "Cierra con las tres acciones priorizadas, responsable, fecha y cómo mediremos el avance en 90 días.",
        "Redacta en Word el borrador del plan de acción de clima para compartir con los líderes, marcando VERIFICAR lo no confirmado."
      ],
      verificar: [
        "Que las acciones propuestas salgan de lo dicho y no de ideas generales.",
        "Que no se identifique a personas ni equipos pequeños por los comentarios.",
        "Que cada acción tenga responsable, fecha e indicador o diga PENDIENTE.",
        "Que las cifras citadas se hayan leído en la reunión."
      ]
    },
    {
      necesidad: "Comité de capacitación anual",
      titulo: "Facilitator en el comité para definir el plan de capacitación del año",
      donde: "Chat de la reunión programada de Teams con los líderes de área, al iniciar.",
      antes: "Pide a cada líder que llegue con sus tres necesidades de formación. Ten el presupuesto aproximado y el calendario. Usa datos anonimizados, sin nombres de personas.",
      prompt: `ROL
Eres Facilitator, el asistente del comité de capacitación. Cuidas que cada necesidad quede con prioridad, presupuesto y responsable.

CONTEXTO
Reunión programada de [75] minutos con [5] líderes y el analista de formación de talento humano. Se definen los cursos del año para [área] en temas como normatividad de seguros, atención al cliente, herramientas de Microsoft 365 y liderazgo. Los datos están anonimizados y las necesidades se nombran por equipo.

FUENTES
Usa solo lo dicho en la reunión y en el chat. No uses información de cursos que nadie nombró.

INSTRUCCIÓN
1. Sigue esta agenda con avisos 5 minutos antes: [0 a 10 min objetivos y presupuesto], [10 a 55 min necesidades por equipo, 9 min cada una], [55 a 70 min priorización], [70 a 75 min cierre].
2. Lleva las notas con esta estructura que pego: Equipo, Necesidad, Público, Modalidad, Costo estimado, Prioridad, Responsable.
3. Etiqueta DECISIÓN, PENDIENTE, RIESGO, PREGUNTA ABIERTA o SUPUESTO.
4. A los 35 minutos haz un recap con las necesidades registradas y el costo acumulado.
5. Si el costo acumulado supera [el presupuesto], avísalo como RIESGO.
6. Marca la prioridad así: alta si el curso es obligatorio por norma o por regulador, media si mejora un indicador del equipo, baja si es deseable. Si dos cursos compiten por el mismo presupuesto, pregunta al comité cuál va primero y registra la respuesta como DECISIÓN.
7. Al cierre, lista las necesidades que no se pudieron priorizar y quién las retoma en la siguiente sesión.

FORMATO DE SALIDA
Notas por equipo en viñetas de máximo 12 palabras. Resumen final de 5 viñetas y tabla para Planner con Curso, Equipo, Responsable, Fecha de inicio, Prioridad.

LÍMITES
No inventes costos ni proveedores. Si no se dijo, escribe PENDIENTE. Marca [VERIFICAR] los costos sin fuente.

CONTROL DE CALIDAD
Al final indica qué cursos quedaron aprobados, cuáles en espera y qué no pudiste confirmar. Revisa que cada costo tenga una fuente dicha en la reunión y que la suma coincida con el total que anotaste.`,
      seguimiento: [
        "Haz el recap hasta ahora: necesidades registradas, costo acumulado y diferencia frente al presupuesto. Dime qué equipo falta.",
        "Cierra la reunión con los cursos aprobados, los que quedan en espera y la tabla de tareas para Planner.",
        "Redacta en Word el borrador del plan de capacitación con lo acordado, marcando VERIFICAR lo no confirmado."
      ],
      verificar: [
        "Que los costos anotados se hayan dicho en la reunión.",
        "Que cada curso aprobado tenga responsable y fecha de inicio.",
        "Que el costo acumulado se calcule con los números de la reunión.",
        "Que los cursos en espera estén separados de los aprobados."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Plan de capacitación anual",
      titulo: "Texto de la meta para el plan de capacitación obligatoria del año",
      donde: "Planner Agent, pestaña Metas, botón Generar tareas, en un plan premium.",
      antes: "Necesitas un plan premium en Planner. Ten el calendario de cursos obligatorios y la población por área. Planner no lee reuniones por sí solo, así que pega los datos clave en la meta.",
      prompt: `ROL
Eres un analista de formación de talento humano en una aseguradora. Conviertes un calendario de capacitaciones en tareas que se puedan ejecutar y medir.

CONTEXTO
Hay que cumplir el plan de capacitación obligatoria [año] para [850] colaboradores de las áreas de operaciones, comercial, siniestros y servicio. Los temas obligatorios son SARLAFT, protección de datos personales, ética y conducta, seguridad de la información y atención al consumidor financiero. Los datos están anonimizados y no incluyen nombres ni cédulas.

FUENTES
Usa solo esta meta y los datos que escribo aquí: [fecha límite de cada curso], [plataforma de formación], [porcentaje mínimo de cumplimiento exigido], [responsable por área].

INSTRUCCIÓN
1. Genera tareas por curso, en este orden: preparar contenido, programar fechas, enviar convocatoria, hacer seguimiento semanal de avance, cerrar con reporte de cumplimiento.
2. Crea cinco cubetas: Preparación, Convocatoria, Ejecución, Seguimiento y Cierre.
3. Asigna cada tarea por rol: analista de formación, líder de área, especialista de comunicaciones o coordinador de cumplimiento. Nunca por nombre.
4. Pon fechas hacia atrás desde cada fecha límite. Deja 10 días hábiles antes de la fecha límite para rezagados.
5. Prioridad alta para cursos con fecha límite en los próximos 30 días o con cumplimiento menor al mínimo.
6. Agrega una tarea de reporte semanal con el porcentaje de cumplimiento por área.

FORMATO DE SALIDA
Máximo 28 tareas, con título de máximo 8 palabras, descripción de 1 frase, cubeta, rol responsable, fecha de inicio, fecha de fin y prioridad. Si Planner no acepta alguna columna, entrégala como tabla en Copilot Chat.

LÍMITES
No inventes cursos ni plazos. Si falta una fecha escribe PENDIENTE. Marca [SUPUESTO] cualquier duración que estimes y [VERIFICAR] los porcentajes que no vengan de la meta.

CONTROL DE CALIDAD
Revisa que ninguna fecha de inicio sea posterior a la de fin, que cada curso tenga cierre con reporte y que no haya más de 5 tareas por semana por responsable.`,
      seguimiento: [
        "Reduce el plan a los tres cursos con fecha límite más próxima y conserva solo las tareas de ejecución y seguimiento.",
        "Escribe un informe de estado de 100 palabras con cumplimiento por área, tareas vencidas y riesgos, usando solo lo que hay en el plan.",
        "Agrega una tarea de refuerzo para las áreas por debajo del mínimo, con fecha, responsable por rol y mensaje sugerido de máximo 50 palabras."
      ],
      verificar: [
        "Que las fechas límite coincidan con las que escribiste en la meta.",
        "Que cada tarea tenga un rol responsable y no un nombre.",
        "Que el plan no inventó cursos ni porcentajes.",
        "Que las tareas no se concentren en una sola semana."
      ]
    },
    {
      necesidad: "Proceso de selección de vacante",
      titulo: "Plan de tareas para cubrir una vacante en 30 días",
      donde: "Planner Agent, pestaña Metas, botón Generar tareas, con un plan premium.",
      antes: "Ten el perfil del cargo y los tiempos objetivo de selección. Si tienes el perfil en un documento, adjúntalo en la meta. Planner no lee reuniones, así que no esperes que use el comité.",
      prompt: `ROL
Eres un coordinador de selección de talento humano en una aseguradora. Organizas procesos de selección para que ninguna etapa se quede esperando.

CONTEXTO
Hay que cubrir la vacante de [cargo] en el área de [área] en máximo [30] días calendario, desde la aprobación hasta la oferta aceptada. Participan talento humano, el jefe directo, un par técnico y el área jurídica para contratación. Los datos están anonimizados y no incluyen candidatos reales.

FUENTES
Usa solo esta meta y el perfil adjunto. Fechas clave: [fecha de aprobación de la vacante], [fecha objetivo de ingreso], [fechas de comité disponibles].

INSTRUCCIÓN
1. Divide el trabajo en cinco cubetas: Perfil y publicación, Preselección, Entrevistas y pruebas, Decisión y oferta, Contratación y empalme.
2. Crea tareas con responsable por rol: analista de selección, jefe directo, par técnico, analista de contratación o analista de nómina.
3. Incluye tareas de: ajuste del perfil, publicación en canales internos y externos, preselección de [20] hojas de vida, entrevista de talento humano, prueba técnica, entrevista con el jefe, verificación de referencias, estudio de seguridad, oferta, firma de contrato y afiliaciones.
4. Calcula fechas hacia atrás desde la fecha objetivo de ingreso.
5. Marca prioridad alta en las tareas que dependan de terceros, como la verificación de referencias.
6. Agrega una tarea de revisión de avance a los 10 y a los 20 días.

FORMATO DE SALIDA
Máximo 25 tareas con título de máximo 8 palabras, descripción de una frase, cubeta, rol, fecha de inicio, fecha de fin, prioridad y dependencia. Si hace falta, también una tabla en Copilot Chat.

LÍMITES
No incluyas nombres ni datos personales de candidatos. No inventes plazos de estudios de seguridad. Si falta información escribe PENDIENTE. Marca [SUPUESTO] cada duración estimada y [VERIFICAR] los plazos de terceros.

CONTROL DE CALIDAD
Revisa que la suma de las etapas cabe en los 30 días, que cada dependencia tenga fecha anterior a su tarea y que ningún rol tenga más de 4 tareas por semana. Revisa además que cada tarea sea clara para alguien que no estuvo en la reunión y que ninguna dependa de un dato que todavía no tengo.`,
      seguimiento: [
        "Dime qué tareas del plan tienen más riesgo de retrasar el ingreso y qué debería adelantar para ganar tiempo.",
        "Escribe un informe de estado de 90 palabras con etapa actual, tareas vencidas y la próxima decisión, usando solo el plan.",
        "Genera una versión del plan para una vacante urgente de 15 días, quitando lo que no sea imprescindible y explicando qué se quitó."
      ],
      verificar: [
        "Que las fechas calculadas hacia atrás no pasen de la fecha objetivo de ingreso.",
        "Que los plazos de terceros estén marcados como VERIFICAR.",
        "Que las tareas no incluyan nombres de candidatos.",
        "Que cada dependencia esté antes de la tarea que la necesita."
      ]
    },
    {
      necesidad: "Ciclo de evaluación de desempeño",
      titulo: "Plan del ciclo de evaluación de desempeño y planes de desarrollo",
      donde: "Planner Agent, pestaña Metas, botón Generar tareas, con un plan premium.",
      antes: "Ten las fechas del ciclo y las áreas participantes. Con el plan ya creado, puedes pedir el informe de estado. Planner no lee la reunión de calibración, así que pega los acuerdos clave.",
      prompt: `ROL
Eres un especialista en gestión del desempeño de talento humano en una aseguradora. Planeas ciclos de evaluación sin cuellos de botella.

CONTEXTO
El ciclo de evaluación [año] involucra a [600] colaboradores y [45] líderes de cuatro áreas. Las etapas son: fijación de objetivos, autoevaluación, evaluación del líder, calibración, conversación de retroalimentación y planes de desarrollo. Los datos están anonimizados y no incluyen resultados individuales.

FUENTES
Usa solo esta meta y estos datos: [fecha de apertura], [fecha de cierre de autoevaluación], [fecha de cierre de líderes], [fecha de calibración], [fecha límite de planes de desarrollo], [herramienta usada para el ciclo].

INSTRUCCIÓN
1. Crea una cubeta por etapa y tareas con fecha de inicio y fin dentro de las fechas dadas.
2. Asigna responsables por rol: analista de talento humano, líder de área, coordinador del ciclo, soporte de la herramienta.
3. Incluye tareas de comunicación: lanzamiento, recordatorio a mitad de etapa, recordatorio del último día y mensaje de cierre.
4. Incluye tareas de control: reporte semanal de avance por área, lista de líderes con evaluaciones pendientes y escalamiento a los 3 días hábiles de retraso.
5. Marca prioridad alta en las tareas que bloquean la calibración.
6. Añade una tarea para recolectar los planes de desarrollo acordados y consolidarlos.

FORMATO DE SALIDA
Máximo 30 tareas con título de máximo 8 palabras, descripción de una frase, cubeta, rol, fecha de inicio, fecha de fin y prioridad. Entrega aparte una lista de 3 riesgos del cronograma.

LÍMITES
No incluyas calificaciones ni nombres. No inventes fechas, escribe PENDIENTE. Marca [SUPUESTO] las duraciones estimadas y [VERIFICAR] cualquier plazo que dependa de una política.

CONTROL DE CALIDAD
Revisa que ninguna tarea quede fuera de las fechas dadas, que cada etapa tenga responsable y que el reporte de avance exista en todas las etapas. Entrega la lista de tareas en orden cronológico y, si alguna depende de otra, indícalo en la descripción con el título de la tarea anterior.`,
      seguimiento: [
        "Escribe un informe de estado de 100 palabras: etapa actual, porcentaje de tareas cerradas, tareas vencidas y los tres riesgos principales.",
        "Revisa el plan y dime qué etapas tienen tareas sin responsable, sin fecha o con fechas que se cruzan.",
        "Crea tareas de contingencia para ampliar el cierre de líderes cinco días hábiles y dime qué fechas posteriores se mueven."
      ],
      verificar: [
        "Que las fechas de cierre coincidan con las de la meta.",
        "Que el plan no contenga calificaciones ni nombres.",
        "Que el escalamiento a los 3 días hábiles esté como tarea.",
        "Que las tareas de calibración tengan prioridad alta."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Notas de entrevista estructuradas",
      titulo: "Ordenar las notas de una entrevista de selección por competencias",
      donde: "Copilot en OneNote, sobre la página con las notas de la entrevista.",
      antes: "Pega las notas de la entrevista en la página y usa un código en lugar del nombre (por ejemplo C3). Copilot trabaja solo con lo que está escrito en la página.",
      prompt: `ROL
Eres un analista de selección de talento humano en una aseguradora. Ordenas notas de entrevista de forma justa y verificable.

CONTEXTO
La página contiene mis notas sueltas de una entrevista para el cargo de [cargo] con el candidato C3. Las competencias del perfil son: orientación al cliente, manejo de herramientas Microsoft 365, trabajo en equipo, conocimiento de seguros y comunicación escrita. Los datos están anonimizados y no hay nombre, edad, familia ni salud.

FUENTES
Usa solo el contenido de esta página. No inventes respuestas del candidato ni completes con supuestos.

INSTRUCCIÓN
1. Ordena las notas en una tabla con columnas: Competencia, Situación o ejemplo que dio, Evidencia textual, Calificación sugerida de 1 a 4 según la escala [1 no evidencia, 2 parcial, 3 suficiente, 4 sobresaliente].
2. Marca con NO SE MENCIONÓ cualquier competencia que no aparezca en las notas.
3. Separa hechos que dijo el candidato de mis impresiones. Mis impresiones van en una sección aparte con la etiqueta IMPRESIÓN.
4. Extrae los pendientes: preguntas por hacer, referencias por verificar, pruebas por aplicar. Cada uno con responsable y fecha, o PENDIENTE.
5. Detecta y avísame si hay notas sobre temas que no deben usarse para decidir, como estado civil, embarazo, salud o religión.

FORMATO DE SALIDA
Tabla de competencias, lista de impresiones, lista de pendientes y una conclusión de máximo 60 palabras que solo resuma la evidencia. Español de Colombia, tono neutro.

LÍMITES
No decidas ni recomiendes contratar. Si una nota es ambigua, márcala [VERIFICAR]. Lo que no esté en la página lo marcas PENDIENTE. Cualquier inferencia va como [SUPUESTO].

CONTROL DE CALIDAD
Revisa que cada calificación tenga una evidencia textual de la página y dime qué notas no pudiste usar por ser ambiguas. Entrega las tablas con filas completas, sin celdas vacías, y usa PENDIENTE solo donde de verdad falte el dato en mis notas.`,
      seguimiento: [
        "Reescribe la conclusión en 40 palabras para el jefe directo, sin opiniones personales y solo con evidencia de las notas.",
        "Redacta tres preguntas de seguimiento para la segunda entrevista, solo sobre las competencias que aparecen como NO SE MENCIONÓ.",
        "Borra de la página lo que no deba usarse para decidir y muéstrame antes qué vas a borrar."
      ],
      verificar: [
        "Que cada calificación tenga una cita textual de las notas.",
        "Que no se haya usado ningún dato personal sensible para calificar.",
        "Que mis impresiones estén separadas de lo que dijo el candidato.",
        "Que las competencias sin información digan NO SE MENCIONÓ."
      ]
    },
    {
      necesidad: "Preparar conversación difícil",
      titulo: "Convertir notas de caso en guion para una retroalimentación difícil",
      donde: "Copilot en OneNote, sobre la página con los hechos y apuntes del caso.",
      antes: "Escribe los hechos observables, fechas y el efecto en el equipo, sin juicios sobre la persona. Usa un cargo en lugar del nombre. No pegues datos de salud ni de la vida personal.",
      prompt: `ROL
Eres un especialista en relaciones laborales y desarrollo de líderes en una aseguradora. Ayudas a preparar conversaciones difíciles con respeto y evidencia.

CONTEXTO
La página tiene mis notas sobre un analista de [cargo] que ha llegado tarde a las entregas de reportes en las últimas [6] semanas. Debo hablar con él en una reunión de [30] minutos el [fecha]. Los datos están anonimizados: uso el cargo y no el nombre, y no hay datos de salud ni familiares.

FUENTES
Usa solo lo escrito en esta página. No agregues hechos que no estén en las notas.

INSTRUCCIÓN
1. Separa en dos listas los hechos observables (fecha, entregable, atraso en días) y mis interpretaciones. Marca las interpretaciones como IMPRESIÓN.
2. Prepara un guion de la conversación con estos bloques: apertura de 2 frases, hechos con fechas, efecto en el equipo, pregunta abierta para escuchar, acuerdos y cierre.
3. Redacta 3 frases sugeridas para cada bloque. Sin acusaciones ni sarcasmo y con un lenguaje de máximo 15 palabras por frase.
4. Anticipa 3 reacciones posibles de la persona y una respuesta sugerida para cada una.
5. Propone un acuerdo con 3 compromisos medibles, con fecha, y una fecha de seguimiento.
6. Lista lo que debo confirmar con talento humano antes de la reunión.

FORMATO DE SALIDA
Hechos, impresiones, guion en bloques, reacciones y respuestas, acuerdo propuesto y lista de verificación previa. Frases cortas y tono respetuoso, sin emojis.

LÍMITES
No sugieras sanciones ni cites normas laborales. Eso lo valida talento humano. Si falta un hecho escribe PENDIENTE. Marca [VERIFICAR] cualquier atraso sin fecha y [SUPUESTO] lo que dedujiste.

CONTROL DE CALIDAD
Revisa que cada hecho tenga fecha y que el guion no contenga juicios sobre la persona. Dime qué hechos faltan para que la conversación sea sólida. Si tu guion supera una página, recórtalo. Prefiero poco texto y claro, porque lo voy a leer minutos antes de entrar a la reunión.`,
      seguimiento: [
        "Reescribe la apertura de la conversación en 3 versiones: directa, cercana y formal. Máximo 35 palabras cada una.",
        "Convierte el acuerdo en una nota corta para dejar en la página después de la reunión, con compromisos, fechas y fecha de seguimiento.",
        "Dime qué hechos de mis notas son interpretaciones y no deberían decirse en la reunión."
      ],
      verificar: [
        "Que cada hecho tenga fecha y venga de tus notas.",
        "Que el guion hable de conductas y no de rasgos de la persona.",
        "Que ningún dato personal o de salud haya quedado en la página.",
        "Que las consecuencias laborales las valide talento humano antes de hablarlas."
      ]
    },
    {
      necesidad: "Cuaderno de preguntas frecuentes",
      titulo: "Armar un cuaderno de preguntas frecuentes de empleados",
      donde: "Copilot en OneNote, sobre la sección con las consultas anotadas.",
      antes: "Reúne en la sección las consultas de las últimas semanas con el tema y la respuesta que diste. Quita nombres y documentos. Copilot solo ve lo que está escrito en el cuaderno.",
      prompt: `ROL
Eres una analista de servicio al colaborador de talento humano en una aseguradora. Organizas consultas repetidas para responderlas más rápido y con consistencia.

CONTEXTO
La sección contiene mis notas de consultas de empleados sobre certificado laboral, vacaciones, auxilio educativo, incapacidades, retención en la fuente y afiliaciones. Hay respuestas anotadas, dudas sin resolver y algunas notas de lo que hay que preguntar a nómina. Los datos están anonimizados: no hay nombres, salarios ni cédulas.

FUENTES
Usa solo el contenido de esta sección. No completes con normas ni políticas que no estén escritas aquí.

INSTRUCCIÓN
1. Agrupa las consultas por tema y cuenta cuántas veces aparece cada una.
2. Para cada tema, escribe la pregunta tipo en una frase y la respuesta en máximo 50 palabras, tomada solo de mis notas.
3. Si la nota no tiene respuesta o es ambigua, escribe PENDIENTE y quién debe responder: nómina, jurídico o el jefe de talento humano.
4. Haz una lista de las 5 preguntas más frecuentes, ordenadas por cantidad.
5. Extrae los pendientes: consultas sin respuesta, con responsable y fecha, o PENDIENTE.
6. Propón una estructura de cuaderno con páginas por tema y una página de pendientes.

FORMATO DE SALIDA
Una tabla con Tema, Veces, Pregunta tipo, Respuesta, Estado (resuelta o PENDIENTE), una lista de las 5 preguntas frecuentes y la estructura del cuaderno. Tono claro, sin jerga legal.

LÍMITES
No inventes plazos ni beneficios. No uses datos de personas. Cualquier respuesta que sea mi inferencia va como [SUPUESTO] y lo que necesite confirmación como [VERIFICAR].

CONTROL DE CALIDAD
Revisa que cada respuesta aparezca en mis notas y dime qué consultas se contradicen entre sí. Ordena las páginas del cuaderno de la más consultada a la menos consultada, para que quien lo abra encuentre rápido lo que más se pregunta. Si dos notas dicen cosas distintas sobre el mismo trámite, no elijas una. Muéstrame ambas y marca la diferencia como VERIFICAR.`,
      seguimiento: [
        "Reescribe las 5 preguntas frecuentes en un texto de 150 palabras para publicar en el canal de talento humano, con tono cercano.",
        "Dime qué respuestas de mis notas se contradicen entre sí y cuál debería confirmar primero.",
        "Convierte los pendientes en una lista de verificación con responsable y fecha, ordenada por urgencia."
      ],
      verificar: [
        "Que cada respuesta venga de tus notas y no de memoria.",
        "Que no queden datos personales ni salarios en el cuaderno.",
        "Que los temas sin respuesta estén marcados PENDIENTE.",
        "Que el conteo de consultas coincida con lo anotado."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Descripción de cargo",
      titulo: "Redactar la descripción de un cargo y su perfil de competencias",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el formato de descripción de cargo y el organigrama sin nombres.",
      antes: "Ten el formato interno de descripción de cargo, el nivel del cargo y las funciones que te dio el jefe. Quita nombres y salarios de los adjuntos.",
      prompt: `ROL
Eres un especialista en diseño de cargos de talento humano en una aseguradora, con experiencia en perfiles del sector financiero y de seguros.

OBJETIVO
Redactar la descripción del cargo de [nombre del cargo] en el área de [área], lista para revisión del jefe y de compensación.

CONTEXTO
El cargo reporta al [cargo del jefe] y trabaja con [áreas con las que interactúa]. El nivel es [analista, especialista o coordinador]. Las funciones que me dio el jefe son: [pega aquí 5 o 6 funciones]. Los datos están anonimizados: no incluyo nombres, salarios ni datos de personas.

FUENTES
Usa el formato adjunto y las funciones que te pegué. No uses ejemplos de internet ni cargos de otras compañías.

INSTRUCCIÓN
1. Escribe el propósito del cargo en máximo 40 palabras.
2. Convierte las funciones en 8 responsabilidades que empiecen con verbo en infinitivo y tengan un resultado medible.
3. Define los requisitos: formación, experiencia en años, conocimientos de seguros y herramientas.
4. Define 5 competencias con una descripción de máximo 20 palabras y un comportamiento observable para cada una.
5. Define 3 indicadores de desempeño con fórmula simple.
6. Revisa que el lenguaje sea neutro en género y sin requisitos de edad ni de estado civil.

FORMATO DE SALIDA
Usa los mismos títulos del formato adjunto. Cada sección en viñetas, máximo 120 palabras por sección. Al final una tabla con Responsabilidad, Indicador y Frecuencia de medición.

LÍMITES
No inventes requisitos legales ni rangos salariales. Si el formato pide un dato que no tengo, escribe PENDIENTE. Marca [SUPUESTO] cada requisito que dedujiste y [VERIFICAR] los años de experiencia.

CONTROL DE CALIDAD
Antes de entregar, revisa que cada responsabilidad tenga un indicador y que ningún requisito discrimine. Dime qué dato adicional del jefe mejoraría el resultado. Entrega primero la versión completa y después un resumen de media página que yo pueda enviar al jefe sin cambios.`,
      seguimiento: [
        "Resume la descripción en un aviso de vacante de 120 palabras, atractivo y sin requisitos discriminatorios.",
        "Dime qué responsabilidades se parecen a las de [otro cargo] y qué las diferencia, solo con el texto que escribiste.",
        "Haz una versión corta de una página para compartir con el jefe, con propósito, 5 responsabilidades y 3 indicadores."
      ],
      verificar: [
        "Que las responsabilidades salgan de las funciones que pegaste.",
        "Que los requisitos no excluyan por edad, género o estado civil.",
        "Que los indicadores se puedan medir con datos que la compañía tenga.",
        "Que el formato respete los títulos de la plantilla adjunta."
      ]
    },
    {
      necesidad: "Comentarios de encuesta de clima",
      titulo: "Analizar comentarios abiertos de la encuesta de clima y proponer acciones",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el archivo de comentarios anonimizado.",
      antes: "Exporta los comentarios abiertos sin nombre, sin equipo pequeño identificable y sin cargo único. Revisa que no queden datos personales antes de adjuntar.",
      prompt: `ROL
Eres un analista de clima organizacional de talento humano en una aseguradora, con experiencia en análisis de comentarios abiertos.

OBJETIVO
Identificar los temas principales de los comentarios abiertos de la encuesta de clima y proponer acciones priorizadas para el comité de dirección.

CONTEXTO
Hay [320] comentarios abiertos de [800] colaboradores de cuatro áreas. Las preguntas fueron sobre liderazgo, carga de trabajo, comunicación y desarrollo. Los datos están anonimizados y agregados por área. Los comentarios con menos de 5 respuestas por equipo se unieron a otro equipo.

FUENTES
Usa solo el archivo adjunto. No uses comentarios de años anteriores ni datos de otras compañías.

INSTRUCCIÓN
1. Clasifica los comentarios en temas y cuenta cuántos hay por tema y por área.
2. Para cada uno de los 5 temas principales, escribe un resumen de 30 palabras y 2 citas textuales cortas sin datos identificables.
3. Separa los comentarios de sentimiento positivo, neutro y negativo, y da el porcentaje de cada uno.
4. Propón 3 acciones por tema, con responsable por rol, plazo y un indicador para medir el cambio.
5. Prioriza las acciones por impacto y facilidad en una tabla de 3 niveles.
6. Marca los comentarios que mencionen acoso, discriminación o riesgos de seguridad para escalar a [comité de convivencia].

FORMATO DE SALIDA
Tabla de temas con conteos, resumen por tema, tabla de acciones priorizadas y lista de comentarios para escalar. Un resumen ejecutivo de máximo 120 palabras al inicio.

LÍMITES
No identifiques a nadie ni adivines quién escribió. No inventes porcentajes que no puedas calcular del archivo. Si un dato falta escribe PENDIENTE. Marca [SUPUESTO] cada inferencia y [VERIFICAR] cada conteo que no sea exacto.

CONTROL DE CALIDAD
Revisa que los conteos sumen el total de comentarios y que cada cita exista en el archivo. Dime qué temas tienen pocos comentarios y no deberían generalizarse.`,
      seguimiento: [
        "Resume los hallazgos en 5 diapositivas para el comité, con título, mensaje principal y la acción recomendada en cada una.",
        "Redacta un mensaje de 100 palabras para los colaboradores con lo que escuchamos y lo que vamos a hacer, sin citas textuales.",
        "Dime qué temas aparecen en dos o más áreas y qué acción serviría para todas."
      ],
      verificar: [
        "Que las citas existan en el archivo y no permitan identificar a alguien.",
        "Que los conteos y porcentajes sumen el total real.",
        "Que los comentarios sensibles se hayan marcado para escalar.",
        "Que los temas con pocos comentarios no se presenten como tendencia."
      ]
    },
    {
      necesidad: "Retroalimentación difícil por escrito",
      titulo: "Preparar una retroalimentación difícil y el correo de seguimiento",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la política de gestión del desempeño si la tienes.",
      antes: "Escribe los hechos observables con fecha y el efecto en el trabajo. Usa el cargo y no el nombre. No pegues datos de salud ni personales.",
      prompt: `ROL
Eres un especialista en desarrollo de líderes y relaciones laborales en una aseguradora. Ayudas a dar retroalimentación firme y respetuosa.

OBJETIVO
Preparar la conversación de retroalimentación con un [cargo] cuyo desempeño bajó en los últimos [2] meses, y el correo de seguimiento que se envía después.

CONTEXTO
Los hechos son: [hecho 1 con fecha], [hecho 2 con fecha], [hecho 3 con fecha]. El efecto en el equipo fue [efecto]. La persona lleva [tiempo] en el cargo y tenía buen desempeño antes. Hablaré con ella el [fecha] en una reunión de [30] minutos. Los datos están anonimizados: no hay nombres, salud ni situación familiar.

FUENTES
Usa solo los hechos que escribí y la política adjunta. No supongas causas personales.

INSTRUCCIÓN
1. Estructura la conversación con el modelo situación, conducta, impacto, pregunta y acuerdo. Escribe 2 frases de ejemplo por paso.
2. Redacta una apertura de máximo 40 palabras que genere confianza.
3. Anticipa 3 objeciones y escribe una respuesta de máximo 30 palabras para cada una.
4. Redacta el correo de seguimiento de máximo 150 palabras con asunto, resumen de lo acordado, compromisos con fecha y fecha de la próxima conversación.
5. Lista 3 preguntas que debo hacer para entender la causa antes de dar soluciones.
6. Lista lo que debo consultar con talento humano antes de la reunión.

FORMATO DE SALIDA
Guion en pasos, apertura, tabla de objeciones y respuestas, correo de seguimiento y lista de consultas previas. Tono firme y respetuoso, frases cortas.

LÍMITES
No sugieras sanciones, despidos ni cites normas laborales. Si falta un hecho escribe PENDIENTE. Marca [SUPUESTO] cada interpretación y [VERIFICAR] los hechos sin fecha.

CONTROL DE CALIDAD
Revisa que el guion hable de conductas y no de la persona, y que el correo no agregue compromisos que no se acordaron. Dime qué dato faltante haría la conversación más justa.`,
      seguimiento: [
        "Haz el correo más breve, de 100 palabras, y conserva compromisos con fecha y la fecha de seguimiento.",
        "Reescribe la apertura de la conversación en una versión más cercana y otra más formal.",
        "Revisa mi guion y dime qué frases podrían sonar como juicio sobre la persona y cómo reescribirlas."
      ],
      verificar: [
        "Que cada hecho tenga fecha y salga de lo que escribiste.",
        "Que el guion hable de conductas y no de rasgos de la persona.",
        "Que el correo solo incluya compromisos acordados en la conversación.",
        "Que las consecuencias laborales las confirme talento humano antes de comunicarlas."
      ]
    }
  ]
};
