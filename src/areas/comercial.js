const MAS_COMERCIAL = {
  "teams-chats": [
    {
      necesidad: "Cotizaciones sin respuesta",
      titulo: "Seguimiento a cotizaciones abiertas con corredores en chats",
      donde: "Copilot Chat, pestaña Trabajo, y panel de Copilot dentro del chat con el corredor.",
      antes: "Ten claros los corredores y los ramos que quieres revisar. Si usas un hilo de canal, confirma que supere 1.000 caracteres.",
      prompt: `ROL
Eres un analista comercial de un gerente de canales de seguros generales que hace seguimiento a cotizaciones enviadas a corredores.

CONTEXTO
Enviamos cotizaciones de autos, pymes y vida grupo a varios corredores y muchas siguen sin respuesta. Los chats y canales que voy a consultar tienen datos anonimizados, con nombres de ejemplo. Necesito saber cuáles cotizaciones están vivas y cuáles se enfriaron antes de la llamada de seguimiento del jueves.

FUENTES
Usa solo mis chats y canales de los últimos [30] días y los mensajes del hilo [nombre del hilo]. No uses correos ni el CRM. Ignora imágenes, Loop y archivos compartidos, y avísame si una cifra parece estar solo en un adjunto.

INSTRUCCIÓN
1. Busca los mensajes donde se mencione una cotización enviada, con corredor, ramo y fecha del mensaje.
2. Clasifica cada una: RESPONDIDA, CON OBJECIÓN, SIN RESPUESTA MÁS DE 5 DÍAS HÁBILES o CERRADA.
3. Para las que tienen objeción, resume en una frase qué pidió el corredor (prima, deducible, forma de pago, cobertura).
4. Ordena las sin respuesta de mayor a menor antigüedad y sugiere para cada una una acción de seguimiento de máximo 12 palabras.
5. Redacta un mensaje de recordatorio para [nombre del corredor], de máximo 60 palabras, con tono cordial y una sola pregunta: si la cotización sigue vigente para su cliente.

FORMATO DE SALIDA
Tabla con columnas: corredor, ramo, fecha de envío, estado, objeción o motivo, acción sugerida. Debajo, el mensaje de recordatorio.

LÍMITES
No prometas descuentos, comisiones ni cambios de condiciones. No calcules probabilidades de cierre. Marca [SUPUESTO] el estado que dedujiste por silencio y [VERIFICAR] toda prima que aparezca en un mensaje. Escribe PENDIENTE si falta corredor o fecha.

CONTROL DE CALIDAD
Al final indica en qué mensaje se apoya cada estado y lista las cotizaciones que mencionó alguien sin que pudieras ubicar el envío.`,
      seguimiento: [
        "De las cotizaciones SIN RESPUESTA, dime solo las de pymes y ordénalas por antigüedad, con el nombre del corredor y la última frase que se escribió sobre ellas.",
        "Reescribe el recordatorio en 40 palabras, más directo, sin presionar y con una fecha límite razonable para responder.",
        "Busca en mis chats si algún corredor pidió una condición especial que aún no hemos contestado y dime quién debía responderla."
      ],
      verificar: [
        "Que el estado de cada cotización coincida con el sistema de cotización y no con el chat.",
        "Que las primas y deducibles mencionados correspondan a la versión vigente de la cotización.",
        "Que ningún recordatorio prometa condiciones que no estén aprobadas.",
        "Que las cotizaciones marcadas como cerradas realmente lo estén según el corredor."
      ]
    },
    {
      necesidad: "Renovaciones en riesgo de fuga",
      titulo: "Hilo de renovaciones: cuentas en riesgo y qué se acordó",
      donde: "Panel de Copilot dentro del canal de renovaciones, botón de resumen al final del hilo.",
      antes: "Abre el canal donde se discuten las renovaciones del mes y ubica el hilo más largo. Debe superar 1.000 caracteres para poder resumirse.",
      prompt: `ROL
Eres un asistente de la líder de renovaciones de una aseguradora, que ayuda a detectar cartera en riesgo de fuga a tiempo.

CONTEXTO
En este canal el equipo comenta las renovaciones que vencen en los próximos 60 días. Se habla de alzas de tarifa, siniestralidad, reclamos de clientes y ofertas de otras aseguradoras. Los datos están anonimizados y los nombres son de ejemplo. Voy a llevar este resumen al comité de retención.

FUENTES
Usa solo los mensajes de este hilo y, para la búsqueda, los chats y canales de los últimos 30 días. No uses cifras de internet ni de otros sistemas. Ignora imágenes, Loop y archivos compartidos y avísame si algo importante parece estar solo ahí.

INSTRUCCIÓN
1. Resume el hilo en 6 viñetas de máximo 20 palabras.
2. Lista cada cuenta o corredor donde se mencionó riesgo de no renovar, con el motivo dicho por el equipo (precio, servicio, siniestro, competencia).
3. Clasifica el riesgo como ALTO si alguien dijo que el cliente pidió otra oferta o amenazó con irse, MEDIO si hay quejas sin amenaza y BAJO en los demás casos.
4. Extrae lo que ya se acordó hacer, con responsable y fecha.
5. Lista las preguntas que me hicieron a mí y siguen sin respuesta.

FORMATO DE SALIDA
Primero las 6 viñetas. Luego una tabla con columnas: cuenta o corredor, motivo del riesgo, nivel, acción acordada, responsable, fecha. Al final, las preguntas pendientes para mí.

LÍMITES
No propongas descuentos ni retenciones con condiciones nuevas. Marca [SUPUESTO] cualquier nivel de riesgo que no haya dicho alguien del equipo y [VERIFICAR] toda cifra de prima, siniestralidad o vencimiento. Escribe PENDIENTE donde falte responsable o fecha.

CONTROL DE CALIDAD
Al final indica en qué mensaje se apoya cada nivel ALTO y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Dime cuáles cuentas con riesgo ALTO no tienen una acción acordada con responsable y fecha, y qué mensaje del hilo muestra ese vacío.",
        "Busca en mis chats de los últimos 30 días si algún corredor mencionó una oferta de la competencia para estas mismas cuentas y cita el mensaje.",
        "Resume en 4 viñetas lo que el comité de retención necesita decidir esta semana, solo con lo que se dijo en el hilo."
      ],
      verificar: [
        "Que las fechas de vencimiento coincidan con el sistema de pólizas.",
        "Que el nivel de riesgo lo hayan señalado personas del equipo y no sea una deducción de Copilot.",
        "Que las alzas de tarifa mencionadas sean las vigentes y no borradores.",
        "Que ninguna acción de retención dependa de una condición que no esté aprobada."
      ]
    },
    {
      necesidad: "Mensaje a intermediario molesto",
      titulo: "Responder a un corredor molesto por la demora de una emisión",
      donde: "Cuadro de mensaje del chat con el corredor, opción Reescribir con Copilot, y Copilot Chat para el contexto.",
      antes: "Ten tu borrador escrito, aunque sea desordenado. Piensa qué sí puedes ofrecer hoy y qué no puedes prometer.",
      prompt: `ROL
Eres un asesor de comunicación para un ejecutivo de cuentas de seguros que debe responder a un intermediario molesto sin perder la relación.

CONTEXTO
El corredor [nombre de ejemplo] escribió en el chat que la emisión de una póliza de [ramo] lleva [número] días de demora y que su cliente amenaza con cambiar de aseguradora. Los datos están anonimizados. La demora tiene una causa interna que ya conozco: [causa breve]. Quiero responder hoy, con tono respetuoso y sin culpar a otra área.

FUENTES
Usa solo el chat con este corredor de los últimos [15] días y mi borrador que pego aquí: [pega tu borrador]. No uses información de otros chats ni inventes fechas de emisión.

INSTRUCCIÓN
1. Resume en 3 viñetas lo que el corredor reclama y lo que ya se le respondió antes, con fecha.
2. Reescribe mi borrador en máximo 90 palabras. Debe empezar reconociendo la demora, explicar la causa en una frase, dar una fecha de emisión [fecha confirmada] y ofrecer un único canal de contacto.
3. Haz una segunda versión más breve, de 45 palabras, para un mensaje corto de seguimiento mañana.
4. Haz una tercera versión en inglés de 70 palabras para el director regional, que está copiado.
5. Marca las frases de mi borrador que podrían leerse como excusa o como promesa.

FORMATO DE SALIDA
Resumen en 3 viñetas, tres versiones numeradas con su número de palabras, y una lista de las frases marcadas con una alternativa para cada una.

LÍMITES
No prometas descuentos, compensaciones ni fechas que no estén en [fecha confirmada]. No culpes a una persona ni a otra área. Marca [SUPUESTO] lo que asumas del chat y [VERIFICAR] cualquier fecha o número de póliza. Escribe PENDIENTE si falta la fecha confirmada.

CONTROL DE CALIDAD
Antes de entregar, confirma que cada versión tiene una sola petición o compromiso claro y que ninguna contiene una promesa que no pueda cumplir.`,
      seguimiento: [
        "Hazlo todavía más cercano, como si el corredor llevara 5 años trabajando conmigo, pero sin perder el tono profesional. Máximo 70 palabras.",
        "Dame una versión donde pido al corredor que me envíe los documentos faltantes, con la lista en viñetas, sin que suene a reproche.",
        "Dime qué debería evitar escribir en este chat si el cliente final llegara a leerlo, y reescribe esas partes."
      ],
      verificar: [
        "Que la fecha de emisión ofrecida esté confirmada por Operaciones antes de enviar.",
        "Que el mensaje no culpe a otra área ni a una persona.",
        "Que no haya ninguna promesa de descuento o compensación sin aprobación.",
        "Que el número de póliza y el nombre del corredor sean correctos."
      ]
    }
  ],
  "teams-reunion": [
    {
      necesidad: "Visita a un corredor clave",
      titulo: "Reunión con un corredor: acuerdos, objeciones y siguiente visita",
      donde: "Panel de Copilot o pestaña de resumen (Recap) de la reunión en Teams, ya terminada.",
      antes: "La reunión debe tener la transcripción activada. Ten a la mano el acuerdo comercial vigente del corredor para contrastar.",
      prompt: `ROL
Eres un gerente de canales de seguros que prepara la relación con un corredor importante y necesita dejar claro qué quedó acordado.

CONTEXTO
Terminó una reunión de 40 minutos con el corredor [nombre de ejemplo], el líder de su equipo comercial y dos personas nuestras. Se habló de crecimiento en pymes y vida grupo, tiempos de emisión, comisiones y capacitación. Los nombres, cifras y ramos están anonimizados. Quiero cerrar los acuerdos y preparar la siguiente reunión.

FUENTES
Usa solo la transcripción de esta reunión. No uses correos, el CRM ni el contrato del corredor. Una cifra solo vale si alguien la dijo en voz alta.

INSTRUCCIÓN
1. Resume la reunión en 6 viñetas de máximo 20 palabras.
2. Lista lo que el corredor pidió, con cita corta y minuto aproximado.
3. Lista lo que nosotros ofrecimos, separando lo CONFIRMADO de lo ofrecido como posibilidad.
4. Identifica objeciones o quejas del corredor y quién respondió.
5. Arma la tabla de compromisos con responsable y fecha.
6. Propón 5 temas para la agenda de la siguiente reunión, empezando por lo que quedó abierto.

FORMATO DE SALIDA
Resumen en 6 viñetas. Tabla de pedidos con columnas: pedido, quién lo dijo, minuto, estado. Tabla de compromisos con columnas: compromiso, responsable, fecha, lado (nuestro o del corredor). Agenda propuesta en viñetas numeradas.

LÍMITES
No conviertas una posibilidad en compromiso. No estimes primas, comisiones ni metas. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] cualquier cifra dicha de memoria. Escribe PENDIENTE donde falte responsable o fecha.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada compromiso y cada pedido, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Redacta un correo de 100 palabras al corredor con los acuerdos confirmados y los pendientes de su lado. Tono cordial y sin cifras que no se hayan dicho.",
        "Dime qué ofrecimos que podría ir más allá de nuestra autoridad comercial y quién debería aprobarlo.",
        "Convierte la agenda propuesta en una invitación breve para la próxima reunión, con objetivo y 3 preguntas que quiero que el corredor traiga resueltas."
      ],
      verificar: [
        "Que cada compromiso lo haya asumido la persona nombrada.",
        "Que los ofrecimientos marcados como confirmados fueran dichos con claridad.",
        "Que las comisiones o condiciones citadas coincidan con el acuerdo comercial vigente.",
        "Que la agenda propuesta no omita un pedido importante del corredor."
      ]
    },
    {
      necesidad: "Revisión de metas por asesor",
      titulo: "Reunión de cumplimiento de metas: ponerse al día y fijar planes",
      donde: "Panel de Copilot durante la reunión (para llegar tarde) y al terminar para el resumen.",
      antes: "Ten activada la transcripción. Ten la meta mensual por asesor a la mano. Recuerda que lo que preguntes durante la reunión solo lo ves tú.",
      prompt: `ROL
Eres un asistente de un director comercial que dirige la reunión mensual de cumplimiento de metas de un equipo de asesores de seguros.

CONTEXTO
En la reunión cada asesor presenta su avance frente a la meta de primas del mes, sus negocios en proceso y lo que necesita para cerrar. Todo está anonimizado, los asesores aparecen como Asesor 1, Asesor 2 y así. Llegué [10] minutos tarde y necesito ponerme al día. Después necesito un resumen de lo que se acordó.

FUENTES
Usa solo la transcripción de esta reunión. No uses reportes de producción ni el CRM. Una cifra solo vale si se dijo en voz alta y quiero saber quién la dijo.

INSTRUCCIÓN
1. Ahora: dime en 5 viñetas qué asesores ya presentaron, su avance dicho y qué pidieron.
2. Al final de la reunión, arma una tabla por asesor con avance dicho frente a la meta, negocios que mencionó con etapa (cotización, negociación, por emitir) y apoyo que pidió.
3. Marca los asesores que dijeron que no llegan a la meta, citando la frase.
4. Lista los compromisos del director y de cada asesor con fecha.
5. Redacta un resumen de 5 líneas para la gerencia regional, que no asistió.

FORMATO DE SALIDA
Primero las 5 viñetas de puesta al día. Luego la tabla con columnas: asesor, avance dicho, negocios en juego, apoyo pedido, compromiso, fecha. Cierra con el resumen de 5 líneas.

LÍMITES
No calcules porcentajes de cumplimiento ni compares asesores entre sí. No juzgues el desempeño. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] toda cifra dicha de memoria. Escribe PENDIENTE donde falte el dato.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción se apoya cada cifra y cada compromiso, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Durante la reunión: llegué tarde, dime qué cifras de avance se han dicho hasta ahora y quién las presentó, en una tabla corta.",
        "Durante la reunión: ¿qué apoyo pidió el último asesor que habló y a quién se lo pidió? Si no lo dijo, respóndeme PENDIENTE.",
        "Después: dime qué pedidos de apoyo de los asesores no tienen un responsable de mi lado y redáctame un mensaje de 60 palabras para asignarlos."
      ],
      verificar: [
        "Que las cifras de avance coincidan con el reporte oficial de producción.",
        "Que los apoyos pedidos y asignados sean los que se dijeron y no una interpretación.",
        "Que el resumen para la gerencia no incluya juicios sobre personas.",
        "Que las fechas de los compromisos las haya dicho alguien en la reunión."
      ]
    },
    {
      necesidad: "Negociación de condiciones",
      titulo: "Reunión de negociación de un negocio: decisiones, riesgos y evidencia",
      donde: "Pestaña de resumen (Recap) de la reunión en Teams o panel de Copilot al terminar.",
      antes: "Ten la transcripción activada. Ten a la mano la propuesta enviada para contrastar lo que se discutió.",
      prompt: `ROL
Eres un gerente comercial de seguros con experiencia en negociación de condiciones con clientes corporativos y corredores.

CONTEXTO
Terminó una reunión de negociación de la renovación de un programa de seguros de una empresa del sector [sector de ejemplo] con su corredor. Se discutieron prima, deducibles, sublímites, forma de pago y plazo de vigencia. Los datos están anonimizados y los nombres son de ejemplo. Debo llevar a mi comité de precios una síntesis fiel de lo hablado.

FUENTES
Usa solo la transcripción de esta reunión. No uses la propuesta ni correos. Solo valen las cifras dichas en voz alta.

INSTRUCCIÓN
1. Lista las posiciones de cada parte en cada tema: prima, deducibles, sublímites, forma de pago y vigencia.
2. Separa lo ACORDADO, lo ABIERTO y lo RECHAZADO, con cita corta de máximo 15 palabras.
3. Identifica los riesgos para el negocio, como una concesión que afecte la rentabilidad o un plazo que el cliente puso para decidir.
4. Señala quién tomó cada decisión y si tenía autoridad para ello según lo dicho en la reunión.
5. Redacta una nota de 6 líneas para el comité de precios con lo que necesito que me aprueben.

FORMATO DE SALIDA
Tabla con columnas: tema, posición del cliente, posición nuestra, estado (acordado, abierto, rechazado). Luego los riesgos en viñetas, máximo 6. Luego la nota de 6 líneas.

LÍMITES
No sugieras cifras ni contrapropuestas. No evalúes si una concesión es buena o mala. Marca [SUPUESTO] lo deducido y [VERIFICAR] toda cifra dicha de memoria o con duda. Escribe PENDIENTE donde falte responsable o fecha.

CONTROL DE CALIDAD
Al final indica en qué parte de la transcripción aparece cada posición y cada estado, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Muéstrame solo los temas ABIERTOS y qué dijo cada parte sobre ellos, con la cita y el minuto aproximado.",
        "Redacta la pregunta de aprobación para el comité de precios en máximo 80 palabras, con la decisión pedida y el plazo del cliente.",
        "Dime qué concesiones se mencionaron como posibilidad pero podrían haberse tomado como compromiso por el corredor."
      ],
      verificar: [
        "Que cada cifra de prima, deducible o sublímite corresponda a lo dicho y a la propuesta enviada.",
        "Que ninguna posibilidad aparezca como acordada.",
        "Que el plazo del cliente para decidir lo haya dicho el cliente o su corredor.",
        "Que la nota para el comité no incluya recomendaciones que Copilot inventó."
      ]
    }
  ],
  "facilitator": [
    {
      necesidad: "Comité de renovaciones",
      titulo: "Facilitator en el comité de renovaciones y retención de cartera",
      donde: "Chat de la reunión programada de Teams, al iniciar.",
      antes: "Ten la lista de renovaciones por vencer en 60 días por canal. Confirma que sea una reunión programada y no instantánea.",
      prompt: `ROL
Eres Facilitator, el asistente de notas del comité quincenal de renovaciones. Piensas como un líder de retención de cartera de seguros.

CONTEXTO
Reunión programada de 50 minutos. Participan [líder de renovaciones], [director de canal], [analista de cartera] y [ejecutivo de servicio]. Se revisan las pólizas que vencen en los próximos 60 días, las alzas de tarifa y los clientes con riesgo de no renovar. Los datos están anonimizados, los clientes se nombran con códigos como C-101.

FUENTES
Usa solo lo que se diga en la reunión y en el chat de la reunión. No inventes primas, vencimientos ni nombres.

INSTRUCCIÓN
1. Sigue esta agenda y avísame en el chat 3 minutos antes de cada cambio: [0 a 10 min balance de renovaciones del mes, responsable líder de renovaciones], [10 a 30 min cuentas en riesgo una por una, responsable director de canal], [30 a 42 min alzas de tarifa y ofertas de retención, responsable analista de cartera], [42 a 50 min compromisos, responsable líder de renovaciones].
2. Lleva las notas con esta estructura que pego aquí: [Cuenta, Motivo del riesgo, Acción de retención, Responsable, Fecha].
3. Etiqueta cada punto como DECISIÓN, RIESGO, PENDIENTE, PREGUNTA ABIERTA o SUPUESTO.
4. En el minuto 30 haz un recap solo de las cuentas en riesgo ya tratadas.
5. Al final, deja el resumen de cierre y una tabla para Planner.

FORMATO DE SALIDA
Notas por cuenta en viñetas de máximo 15 palabras. Cierre con 5 viñetas y una tabla con columnas: tarea, cuenta, responsable, fecha, prioridad (alta, media, baja).

LÍMITES
No inventes responsables ni fechas, escribe PENDIENTE. Marca [SUPUESTO] cualquier motivo de fuga que nadie haya dicho y [VERIFICAR] toda tarifa o prima mencionada. No registres como decisión una oferta que solo se propuso.

CONTROL DE CALIDAD
Al final indica en qué momento de la reunión se dijo cada decisión y cada pendiente, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Haz el recap de las cuentas en riesgo tratadas hasta ahora: motivo, acción de retención y responsable. Máximo 8 viñetas y dime cuánto tiempo queda del tema actual.",
        "Dime qué cuentas se mencionaron pero se quedaron sin acción de retención o sin responsable, para cerrarlas antes de terminar.",
        "Redacta un documento de Word con las notas usando la estructura que te pegué. Marca VERIFICAR lo que no quedó claro y no agregues cifras que nadie dijo."
      ],
      verificar: [
        "Que cada cuenta tenga acción y responsable dichos en la reunión, o diga PENDIENTE.",
        "Que ninguna tarifa o prima aparezca sin que alguien la haya dicho.",
        "Que las ofertas propuestas no estén registradas como decisiones.",
        "Que los avisos de tiempo respeten la agenda que pegaste."
      ]
    },
    {
      necesidad: "Seguimiento individual de asesor",
      titulo: "Facilitator en la sesión mensual de seguimiento a un asesor",
      donde: "Chat de la reunión programada de Teams con el asesor, al iniciar.",
      antes: "Programa la reunión en Teams. Ten el avance de metas del asesor y acuerda con él que se tomarán notas compartidas.",
      prompt: `ROL
Eres Facilitator, el asistente de notas de una reunión individual de seguimiento comercial. Piensas como un coach de ventas de seguros.

CONTEXTO
Reunión programada de 30 minutos entre un director comercial y un asesor de [canal], para revisar el avance del mes y acordar un plan de acción. Todo lo que se hable está anonimizado, los clientes se nombran con códigos y las cifras son de ejemplo. El tono debe ser constructivo.

FUENTES
Usa solo lo que se diga en la reunión y en el chat de la reunión. No uses reportes de producción ni evaluaciones de desempeño.

INSTRUCCIÓN
1. Sigue esta agenda y avísame cuando falten 2 minutos de cada tema: [0 a 8 min avance frente a la meta, responsable asesor], [8 a 18 min negocios en juego y bloqueos, responsable asesor], [18 a 26 min apoyo que necesita, responsable director], [26 a 30 min compromisos de las próximas dos semanas, responsable director].
2. Lleva las notas con esta estructura que pego aquí: [Avance, Negocios en juego, Bloqueos, Apoyo pedido, Compromisos].
3. Etiqueta los puntos como DECISIÓN, BLOQUEO, PENDIENTE, PREGUNTA ABIERTA o SUPUESTO.
4. A los 18 minutos haz un recap breve.
5. Al final, deja el resumen y una tabla de tareas para Planner.

FORMATO DE SALIDA
Notas en viñetas de máximo 15 palabras. Resumen de 5 viñetas. Tabla con columnas: tarea, responsable (asesor o director), fecha, prioridad (alta, media, baja), apoyo necesario.

LÍMITES
No inventes cifras, responsables ni fechas, escribe PENDIENTE. No emitas juicios sobre el desempeño del asesor ni compares con otros asesores. Marca [SUPUESTO] lo que se deduzca y [VERIFICAR] toda cifra dicha de memoria.

CONTROL DE CALIDAD
Al final indica en qué momento se dijo cada compromiso y cada bloqueo, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Haz un recap de lo registrado: avance dicho, negocios en juego y bloqueos. Máximo 6 viñetas y dime cuánto tiempo queda del tema actual.",
        "Dime qué bloqueos mencionó el asesor que dependen de otra área y para cuáles falta el responsable del lado nuestro.",
        "Cierra la reunión: resumen de 5 viñetas, compromisos con fechas y la tabla para Planner. Donde falte un dato, escribe PENDIENTE."
      ],
      verificar: [
        "Que cada compromiso lo haya asumido la persona que figura como responsable.",
        "Que las notas no contengan juicios sobre el desempeño del asesor.",
        "Que las cifras de avance coincidan con el reporte oficial.",
        "Que el asesor haya podido revisar las notas compartidas antes de que se cierren."
      ]
    },
    {
      necesidad: "Lanzamiento de campaña a canales",
      titulo: "Facilitator en la reunión de lanzamiento de una campaña con corredores",
      donde: "Chat de la reunión programada de Teams con los corredores, al iniciar.",
      antes: "Ten el objetivo de la campaña y el material comercial listo. Confirma que sea una reunión programada y que el administrador haya habilitado Facilitator.",
      prompt: `ROL
Eres Facilitator, el asistente de la reunión de lanzamiento de una campaña de seguros con corredores. Piensas como un gerente de producto comercial.

CONTEXTO
Reunión programada de 40 minutos con [número] corredores invitados. Se presenta la campaña [nombre de la campaña] de [producto], que va del [fecha de inicio] al [fecha de fin]. Se explican condiciones, incentivos y proceso de cotización. Los datos están anonimizados y cualquier cifra es de ejemplo. Los corredores harán preguntas durante la reunión.

FUENTES
Usa solo lo que se diga en la reunión y en el chat de la reunión. No uses material comercial no mencionado ni condiciones que nadie haya expuesto.

INSTRUCCIÓN
1. Sigue esta agenda y avísame 2 minutos antes de cada cambio: [0 a 5 min bienvenida y objetivo, responsable gerente de producto], [5 a 20 min condiciones e incentivos, responsable gerente de producto], [20 a 30 min proceso de cotización y emisión, responsable analista comercial], [30 a 40 min preguntas y próximos pasos, responsable gerente de producto].
2. Lleva las notas con esta estructura que pego aquí: [Condiciones, Incentivos, Proceso, Preguntas de corredores, Compromisos].
3. Etiqueta cada punto como DECISIÓN, PREGUNTA ABIERTA, PENDIENTE, RIESGO o SUPUESTO.
4. Registra cada pregunta de un corredor con su respuesta, o PENDIENTE si no se respondió.
5. En el minuto 30 haz un recap y al final deja el resumen.

FORMATO DE SALIDA
Notas en viñetas de máximo 15 palabras. Tabla de preguntas con columnas: corredor, pregunta, respuesta dada, estado. Cierre con 5 viñetas y tabla para Planner con tarea, responsable, fecha y prioridad.

LÍMITES
No inventes condiciones, incentivos ni fechas. Marca [VERIFICAR] toda cifra, comisión o fecha mencionada y [SUPUESTO] lo deducido. No conviertas una respuesta improvisada en política de la campaña.

CONTROL DE CALIDAD
Al final indica en qué momento se dijo cada condición y lista las preguntas sin respuesta.`,
      seguimiento: [
        "Haz un recap de las preguntas de los corredores hasta ahora, con la respuesta dada o PENDIENTE. Máximo 8 filas y dime cuánto queda del tema actual.",
        "Dime qué condiciones o incentivos se dijeron de formas distintas durante la reunión, para aclararlos antes de cerrar.",
        "Redacta un documento de Word con las condiciones, las preguntas y los próximos pasos, para enviarlo a los corredores. Marca VERIFICAR lo que no quedó claro."
      ],
      verificar: [
        "Que cada condición e incentivo coincida con el documento oficial de la campaña.",
        "Que las respuestas improvisadas no queden como política sin aprobación.",
        "Que las preguntas pendientes tengan responsable antes de enviar el documento.",
        "Que las fechas de inicio y fin de la campaña sean las aprobadas."
      ]
    }
  ],
  "planner": [
    {
      necesidad: "Plan de retención de cartera",
      titulo: "Meta: plan de retención de las renovaciones en riesgo del trimestre",
      donde: "Planner, pestaña Metas, Agregar meta, pega este texto y pulsa Generar tareas.",
      antes: "Reúne la lista de renovaciones en riesgo (con códigos, sin nombres reales) y la política de retención. Adjúntalas como archivos de apoyo. Requiere plan premium.",
      prompt: `ROL
Eres un líder de retención de cartera de seguros que convierte una lista de renovaciones en riesgo en un plan de trabajo con tareas y plazos.

CONTEXTO
Objetivo: retener al menos [porcentaje] de la prima de las renovaciones que vencen entre [fecha inicial] y [fecha final] y están marcadas en riesgo. Son cuentas de pymes, autos flotas y vida grupo. Los datos están anonimizados, los clientes aparecen con códigos. Restricciones: las ofertas con descuento las aprueba el comité de precios los martes y cada cuenta debe contactarse al menos 30 días antes de su vencimiento.

FUENTES
Usa solo los archivos adjuntos: lista de renovaciones en riesgo y política de retención. No inventes cuentas ni condiciones que no estén en ellos.

INSTRUCCIÓN
1. Crea estos cubos: Diagnóstico por cuenta, Contacto con el cliente o corredor, Oferta y aprobación, Negociación y cierre, Seguimiento posterior.
2. En cada cubo genera entre 3 y 5 tareas, cada una con máximo 2 subtareas.
3. Asigna el responsable por rol (ejecutivo de cuenta, líder de renovaciones, analista de cartera, comité de precios, servicio al cliente). Nunca escribas nombres de personas.
4. Pon fechas relativas al vencimiento de cada cuenta, por ejemplo vencimiento menos 30 días.
5. Marca prioridad alta para cuentas con prima mayor al promedio de la lista o con reclamos abiertos.
6. Cierra cada tarea con un criterio de hecho, por ejemplo «oferta aprobada y enviada al corredor».

FORMATO DE SALIDA
Cubos con sus tareas, cada tarea con título de máximo 10 palabras, rol, fecha relativa, prioridad y criterio de hecho.

LÍMITES
No inventes primas, descuentos ni porcentajes. Si falta un dato, escribe PENDIENTE en la tarea. Marca [SUPUESTO] cualquier plazo que no venga de los archivos.

CONTROL DE CALIDAD
Al final indica de qué archivo sale cada plazo y cada criterio de prioridad, y qué no pudiste confirmar.`,
      seguimiento: [
        "Revisa el plan generado y dime qué cuentas quedaron sin tarea de contacto antes de los 30 días del vencimiento y cómo ajustar las fechas.",
        "Genera el informe de estado para el director comercial: tareas hechas, en curso y atrasadas, cuentas en riesgo de perderse y las 3 decisiones que necesito de él.",
        "Respaldo para Copilot Chat: con los archivos adjuntos, devuelve una tabla con Cubo, Tarea, Rol responsable, Fecha relativa, Prioridad y Criterio de hecho."
      ],
      verificar: [
        "Que el criterio de prioridad se haya aplicado como lo escribiste.",
        "Que ninguna tarea tenga un nombre de persona inventado como responsable.",
        "Que los plazos de aprobación del comité de precios respeten los martes.",
        "Que todas las cuentas de la lista aparezcan en el plan y no haya cuentas que no existen."
      ]
    },
    {
      necesidad: "Informe de estado del trimestre",
      titulo: "Informe de estado del plan comercial del trimestre",
      donde: "Planner, plan existente, pestaña Informes. Respaldo en Copilot Chat con la tabla del plan.",
      antes: "El plan debe tener al menos 10 tareas con responsables, fechas y avance actualizado. Actualiza el estado de cada tarea antes de pedir el informe.",
      prompt: `ROL
Eres un analista de gestión comercial que prepara el informe de estado de un plan trimestral de ventas para el director comercial de una aseguradora.

CONTEXTO
El plan tiene tareas por canal (agencias, corredores, bancaseguros) con foco en pymes, vida grupo y autos. El director lo revisa el viernes en 10 minutos. Los datos del plan están anonimizados y no contienen nombres de clientes. Necesito un informe que me diga dónde estamos y qué decisiones necesito.

FUENTES
Usa solo el contenido de este plan de Planner: tareas, estados, fechas, responsables y comentarios. No uses cifras de ventas ni información de otros planes.

INSTRUCCIÓN
1. Resume el estado general en 3 líneas, con el número de tareas completadas, en curso, sin iniciar y atrasadas.
2. Lista las tareas atrasadas con responsable, días de atraso y el motivo si aparece en los comentarios.
3. Identifica las tareas que se atrasarían si la tarea de la que dependen no termina esta semana.
4. Agrupa los riesgos por canal.
5. Propón 3 decisiones que el director debe tomar, cada una en máximo 25 palabras y con el costo de no decidir.
6. Cierra con los 5 logros más relevantes de la semana.

FORMATO DE SALIDA
Resumen de 3 líneas, tabla de atrasos con columnas: tarea, canal, responsable, días de atraso, motivo, luego riesgos por canal en viñetas, 3 decisiones y 5 logros.

LÍMITES
No inventes motivos ni fechas. Si un comentario no explica el atraso, escribe PENDIENTE. Marca [SUPUESTO] cualquier dependencia que dedujiste y [VERIFICAR] los estados que parezcan desactualizados. No evalúes a las personas.

CONTROL DE CALIDAD
Al final indica qué tareas sostienen cada riesgo y cada decisión propuesta, y qué no pudiste confirmar.`,
      seguimiento: [
        "Reduce el informe a 5 líneas para pegarlo en un chat con el director, con atrasos, riesgo principal y la decisión más urgente.",
        "Dime qué tareas llevan más de 10 días sin cambio de estado y podrían estar abandonadas, con su responsable por rol.",
        "Reordena las tareas pendientes por prioridad según su impacto en la meta del trimestre y explica el criterio en una frase."
      ],
      verificar: [
        "Que los números de tareas completadas, en curso y atrasadas coincidan con el plan.",
        "Que los motivos de atraso sean los escritos por los responsables.",
        "Que las decisiones propuestas sean viables dentro de la autoridad del director.",
        "Que el estado de cada tarea esté actualizado antes de enviar el informe."
      ]
    },
    {
      necesidad: "Lanzamiento de producto a canales",
      titulo: "Meta: lanzar un producto nuevo a la red de corredores en 6 semanas",
      donde: "Planner, pestaña Metas, Agregar meta, con archivos de apoyo. Requiere plan premium.",
      antes: "Reúne la ficha del producto, el calendario de lanzamiento y el listado de corredores objetivo. Adjúntalos como apoyo, anonimizados.",
      prompt: `ROL
Eres un gerente de producto comercial de seguros que planea el lanzamiento de un producto nuevo hacia la red de corredores.

CONTEXTO
Objetivo: lanzar [nombre del producto] a [número] corredores y lograr [número] cotizaciones en las primeras 4 semanas después del lanzamiento. Fecha de lanzamiento: [fecha]. Restricciones: el material comercial lo aprueba Mercadeo en 5 días hábiles y la capacitación de corredores se hace solo los miércoles. Los datos están anonimizados.

FUENTES
Usa solo los archivos adjuntos: ficha del producto, calendario y listado de corredores. No uses información de productos de la competencia ni inventes características del producto.

INSTRUCCIÓN
1. Crea estos cubos: Material y aprobaciones, Capacitación de corredores, Ajustes en sistema de cotización, Comunicación y lanzamiento, Seguimiento de las primeras semanas.
2. Genera entre 3 y 5 tareas por cubo, cada una con máximo 2 subtareas.
3. Asigna responsables por rol (gerente de producto, mercadeo, ejecutivo de canal, tecnología, capacitación). Nunca nombres de personas.
4. Pon fechas relativas al día del lanzamiento, por ejemplo menos 15 o más 7.
5. Marca prioridad alta en las tareas que bloquean el lanzamiento.
6. Cierra cada tarea con un criterio de hecho medible.

FORMATO DE SALIDA
Cubos con sus tareas, cada tarea con título de máximo 10 palabras, rol, fecha relativa, prioridad y criterio de hecho. Al final, una lista de 3 dependencias críticas entre cubos.

LÍMITES
No inventes características del producto, tarifas ni comisiones. Si falta un dato, escribe PENDIENTE. Marca [SUPUESTO] cualquier plazo que no venga de los archivos y [VERIFICAR] cualquier fecha de aprobación.

CONTROL DE CALIDAD
Al final indica de qué archivo sale cada plazo y qué restricción respetó cada fecha.`,
      seguimiento: [
        "Revisa las dependencias y dime qué pasa con el lanzamiento si Mercadeo tarda 8 días hábiles en vez de 5. Propón ajustes de fechas.",
        "Genera una tabla con Cubo, Tarea, Rol responsable, Fecha relativa, Prioridad y Criterio de hecho para pegar en un correo a la dirección comercial.",
        "Dime qué tareas pueden hacerse en paralelo para ganar una semana sin comprometer la calidad del material."
      ],
      verificar: [
        "Que las características del producto en las tareas coincidan con la ficha.",
        "Que las capacitaciones caigan en miércoles.",
        "Que los 5 días hábiles de Mercadeo estén antes de la fecha de lanzamiento.",
        "Que todos los corredores del listado estén cubiertos en el plan de capacitación."
      ]
    }
  ],
  "onenote": [
    {
      necesidad: "Notas de visita a un corredor",
      titulo: "Apuntes de una visita al corredor: ordenar, extraer pendientes y escribir el acta",
      donde: "OneNote, página con tus apuntes de la visita, icono de Copilot o clic derecho sobre el texto.",
      antes: "Pega en la página tus apuntes de la visita tal como los tomaste. Reemplaza nombres reales por nombres de ejemplo o códigos.",
      prompt: `ROL
Eres un ejecutivo de canales de seguros que ordena los apuntes de una visita a un corredor para dejar acuerdos claros y preparar la siguiente.

CONTEXTO
Los apuntes de esta página son de una visita de [duración] al corredor [nombre de ejemplo]. Se habló de volumen de negocios, cotizaciones en curso, tiempos de emisión, comisiones y capacitación de su equipo. Están desordenados y con abreviaturas. Los datos están anonimizados.

FUENTES
Usa solo el texto de esta página. No uses otras páginas, correos ni mi conocimiento del corredor. Si un dato no está escrito, no lo completes.

INSTRUCCIÓN
1. Reorganiza los apuntes en estas secciones: Estado de la relación, Negocios en curso, Quejas o solicitudes del corredor, Ofrecimientos nuestros, Compromisos.
2. Extrae una lista de pendientes con quién los asume, nuestro lado o el del corredor, y la fecha. Si falta alguno, escribe PENDIENTE.
3. Separa lo que quedó DECIDIDO de lo que solo se comentó como IDEA.
4. Señala las contradicciones o datos incompletos, por ejemplo una cifra de negocios sin ramo.
5. Redacta un acta de la visita de 8 líneas para enviar al corredor, en tono cordial.

FORMATO DE SALIDA
Secciones con viñetas de máximo 15 palabras. Compromisos en tabla con columnas: compromiso, responsable, lado, fecha. Luego el acta de 8 líneas.

LÍMITES
No inventes cifras, comisiones ni fechas. No incluyas en el acta nada que sea una opinión mía sobre el corredor. Marca [SUPUESTO] lo que dedujiste y [VERIFICAR] toda cifra dudosa.

CONTROL DE CALIDAD
Al final indica de qué línea de mis apuntes sale cada compromiso y cada decisión, y lista lo que no pudiste confirmar.`,
      seguimiento: [
        "Muéstrame solo los pendientes del corredor y escríbeme un mensaje de 60 palabras para recordárselos con tono amable.",
        "Reescribe la sección de quejas y solicitudes de forma neutral para compartirla con Suscripción, sin mis opiniones y sin nombres.",
        "Haz una lista de 5 preguntas que debería hacerle al corredor en la próxima visita según lo que quedó abierto en estos apuntes."
      ],
      verificar: [
        "Que cada compromiso lo haya asumido la parte nombrada.",
        "Que las ideas no aparezcan como decisiones en el acta.",
        "Que el acta no contenga opiniones personales.",
        "Que las cifras y los ramos coincidan con tus apuntes."
      ]
    },
    {
      necesidad: "Resumir seguimiento de cotizaciones",
      titulo: "Sección de cotizaciones: resumen semanal y negocios que se enfrían",
      donde: "OneNote, sección con tus páginas de seguimiento de cotizaciones, panel de chat de Copilot.",
      antes: "Ten una página por semana con las cotizaciones y su estado, aunque sea en texto libre. Usa códigos para los clientes.",
      prompt: `ROL
Eres un asistente de un ejecutivo comercial de seguros que revisa su sección de OneNote de seguimiento de cotizaciones.

CONTEXTO
Esta sección tiene una página por semana con las cotizaciones que envié, a qué corredor o cliente, el ramo, la fecha y lo que me respondieron. Los datos están anonimizados, con códigos como COT-014. Quiero saber qué negocios siguen vivos y cuáles se están enfriando antes de la reunión comercial del lunes.

FUENTES
Usa solo las páginas de esta sección, de la semana [semana inicial] a la semana [semana final]. No uses otras secciones ni mi memoria del negocio. Si una cotización no aparece con estado, no lo asumas.

INSTRUCCIÓN
1. Resume la sección en 6 viñetas con el movimiento de las cotizaciones por semana.
2. Haz una tabla con todas las cotizaciones: código, ramo, canal, fecha de envío, último estado escrito y fecha de ese estado.
3. Marca como EN RIESGO las que llevan más de 10 días sin cambio de estado.
4. Lista las objeciones más repetidas (prima, deducible, coberturas, forma de pago) y cuántas veces aparecen.
5. Propón para cada cotización EN RIESGO una acción de seguimiento de máximo 12 palabras.

FORMATO DE SALIDA
Resumen en 6 viñetas, la tabla, la lista de objeciones con su conteo y las acciones propuestas en viñetas.

LÍMITES
No calcules probabilidades de cierre ni primas esperadas. No inventes estados. Marca [SUPUESTO] cuando deduzcas un estado y [VERIFICAR] las fechas ambiguas. Escribe PENDIENTE si falta un dato.

CONTROL DE CALIDAD
Al final indica de qué página sale cada estado marcado EN RIESGO y lista las cotizaciones que no pudiste ubicar con claridad.`,
      seguimiento: [
        "Resume solo las cotizaciones de pymes en 4 viñetas, con su estado y la acción pendiente de cada una.",
        "Convierte las cotizaciones EN RIESGO en una lista de tareas con fecha sugerida esta semana, lista para pegar en Planner.",
        "Escribe un párrafo de 80 palabras para mi jefe con lo que las objeciones repetidas dicen sobre nuestra oferta, solo con lo que aparece en mis páginas."
      ],
      verificar: [
        "Que los días sin cambio de estado estén bien contados según tus fechas.",
        "Que el conteo de objeciones coincida con lo que escribiste.",
        "Que ninguna cotización marcada en riesgo haya sido cerrada fuera de estas notas.",
        "Que las acciones propuestas sean viables sin prometer condiciones nuevas."
      ]
    },
    {
      necesidad: "Plan de acción de un asesor",
      titulo: "Esquema de plan de acción para un asesor con bajo cumplimiento",
      donde: "OneNote, página en blanco o con tus notas, icono de Copilot, opción de redactar un borrador de plan.",
      antes: "Escribe en la página en 5 a 10 líneas el contexto del asesor y su canal, sin su nombre real. Quita cifras exactas que no quieras compartir.",
      prompt: `ROL
Eres un director comercial de seguros que redacta un plan de acción de 8 semanas para ayudar a un asesor a recuperar su cumplimiento de metas.

CONTEXTO
El Asesor [código] del canal [agencias, bancaseguros o corredores] lleva [número] meses por debajo de su meta de producción de primas. Mis notas de esta página dicen que su cartera está concentrada en pocos clientes, tiene pocas cotizaciones nuevas y le cuesta cerrar pymes. Los datos están anonimizados y no hay nombres reales.

FUENTES
Usa solo las notas de esta página. No uses evaluaciones de desempeño, otras páginas ni cifras de otros asesores. Si falta un dato, pregúntame antes de suponerlo.

INSTRUCCIÓN
1. Redacta un borrador de plan de acción en 4 bloques: Diagnóstico, Objetivos por semana, Acciones y apoyo, Medición.
2. En Diagnóstico, resume en 4 viñetas lo que dicen mis notas, sin juicios sobre la persona.
3. En Objetivos, propón entre 2 y 3 metas por cada bloque de 2 semanas, medibles y realistas.
4. En Acciones y apoyo, separa lo que hace el asesor de lo que hago yo, con fechas relativas, por ejemplo semana 1 o semana 3.
5. En Medición, define 3 indicadores de seguimiento y cada cuánto se revisan.

FORMATO DE SALIDA
Plan de máximo 1 página con los 4 bloques, viñetas de máximo 18 palabras y una tabla de acciones con columnas: acción, responsable, semana, indicador.

LÍMITES
No inventes cifras de meta ni de producción, usa [meta a completar]. No uses lenguaje que sancione o califique a la persona. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] lo que parezca inconsistente.

CONTROL DE CALIDAD
Al final indica de qué línea de mis notas sale cada punto del diagnóstico y lista lo que te faltó para completar el plan.`,
      seguimiento: [
        "Reescribe el plan con un tono más motivador para compartirlo con el asesor, sin cambiar las acciones ni las fechas.",
        "Borra el bloque de Medición y rehazlo con solo 2 indicadores que pueda controlar el asesor por sí mismo.",
        "Resume el plan en una lista de 5 tareas con fecha para pegar en Planner, con el responsable por rol."
      ],
      verificar: [
        "Que el diagnóstico solo contenga lo que escribiste y no juicios nuevos.",
        "Que las metas por quincena sean alcanzables con la cartera real del asesor.",
        "Que las acciones a cargo del director sean las que realmente puedes cumplir.",
        "Que ningún dato personal del asesor quede en el plan compartido."
      ]
    }
  ],
  "prompting": [
    {
      necesidad: "Correo por alza de tarifa",
      titulo: "Correo a un corredor sobre una renovación con alza de tarifa",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip la cotización de renovación y el historial de siniestralidad.",
      antes: "Ten la cotización de renovación y el resumen de siniestralidad de la cuenta, anonimizados. Define qué margen de negociación tienes y qué no.",
      prompt: `ROL
Eres un gerente de cuentas de seguros con experiencia en comunicar alzas de tarifa a corredores sin perder la relación.

OBJETIVO
Redactar el correo a [nombre del corredor] que explica el ajuste de [porcentaje] en la renovación de la póliza de [ramo] de su cliente y propone una reunión.

CONTEXTO
El cliente lleva [número] años con nosotros. La siniestralidad del último año fue de [valor de ejemplo] frente a una prima de [valor de ejemplo]. El corredor es sensible al precio y tiene ofertas de otras aseguradoras. Los datos están anonimizados. No puedo ofrecer descuentos en este correo.

FUENTES
Usa solo los dos archivos adjuntos y lo que pego aquí: [pega los argumentos técnicos del alza]. No uses información de la competencia ni datos del mercado.

INSTRUCCIÓN
1. Resume en 4 viñetas los motivos del ajuste, con la cifra de cada uno tomada de los archivos.
2. Redacta un correo de máximo 180 palabras con asunto, saludo, explicación breve del ajuste, un beneficio concreto de renovar con nosotros y una invitación a una reunión.
3. Prepara 3 posibles objeciones del corredor y una respuesta de máximo 40 palabras para cada una.
4. Indica qué datos del correo debo verificar antes de enviarlo.

FORMATO DE SALIDA
Resumen en 4 viñetas, correo con asunto, tabla de objeciones con columnas: objeción, respuesta sugerida, y lista de verificación.

LÍMITES
No prometas descuentos ni condiciones. No uses lenguaje que culpe al cliente por su siniestralidad. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] toda cifra. Pídeme el dato si falta alguno, no lo inventes.

CONTROL DE CALIDAD
Antes de entregar, revisa que cada cifra del correo aparezca en los adjuntos o en lo que pegué, y que el tono sea cordial, directo y sin condescendencia. Cita de qué archivo sale cada cifra.`,
      seguimiento: [
        "Reescribe el correo para un corredor con el que tengo una relación muy cercana. Más corto, 120 palabras, con tono natural y sin perder la explicación.",
        "Dame una versión del correo para el director comercial del canal con el impacto del posible retiro de la cuenta, en 8 líneas.",
        "Prepara los 5 puntos que debo tener listos para la llamada con el corredor y la secuencia en que conviene abordarlos."
      ],
      verificar: [
        "Que el porcentaje de alza coincida con la cotización de renovación.",
        "Que la siniestralidad citada sea la del periodo correcto.",
        "Que ninguna frase prometa un descuento o una condición no aprobada.",
        "Que el nombre del corredor y los datos del cliente estén correctos antes de enviar."
      ]
    },
    {
      necesidad: "Presentación de resultados del canal",
      titulo: "Presentación de resultados del trimestre de un canal comercial",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el reporte de producción y las notas del comité.",
      antes: "Ten el reporte de producción del trimestre por ramo y la meta, anonimizados. Define si la presentación es para el comité o para la gerencia regional.",
      prompt: `ROL
Eres un analista comercial senior de seguros que arma presentaciones de resultados para la dirección.

OBJETIVO
Preparar el esquema de una presentación de 8 láminas con los resultados del trimestre del canal [agencias, corredores o bancaseguros] para la gerencia regional.

CONTEXTO
El canal cerró el trimestre en [porcentaje] de cumplimiento de la meta de prima, con diferencias entre ramos. Debo explicar qué pasó, qué funcionó y qué haremos el próximo trimestre. La audiencia dura 20 minutos y no es técnica en seguros. Los datos están anonimizados.

FUENTES
Usa solo el reporte de producción y las notas del comité adjuntas. No uses cifras del mercado ni de otros canales. Si algo no está en los archivos, pregúntame.

INSTRUCCIÓN
1. Propón el título de cada una de las 8 láminas con el mensaje principal en una frase de máximo 15 palabras.
2. Para cada lámina, sugiere el dato o gráfico que la respalda y de qué archivo sale.
3. Incluye una lámina de lo que no funcionó, con causas dichas en las notas y no inventadas.
4. Incluye una lámina con 3 prioridades del próximo trimestre, cada una con un indicador.
5. Redacta las notas del orador de las láminas 1 y 8, de máximo 80 palabras cada una.

FORMATO DE SALIDA
Tabla con columnas: número, título, mensaje principal, dato que lo respalda, fuente. Luego las notas del orador de las dos láminas.

LÍMITES
No inventes cifras, porcentajes ni causas. No compares con competidores. Marca [SUPUESTO] lo deducido y [VERIFICAR] cualquier cifra que parezca inconsistente entre los archivos. Si faltan datos, escribe PENDIENTE.

CONTROL DE CALIDAD
Antes de entregar, confirma que cada cifra citada aparece en los archivos, que ninguna lámina tiene más de un mensaje principal y que el tono es ejecutivo. Lista las cifras que no pudiste confirmar.`,
      seguimiento: [
        "Reduce la presentación a 5 láminas para una audiencia de 10 minutos, conservando la lámina de lo que no funcionó y las 3 prioridades.",
        "Escribe las preguntas difíciles que podría hacer la gerencia regional sobre estos resultados y una respuesta de máximo 40 palabras para cada una.",
        "Redacta un resumen de 5 líneas para enviar por correo a quienes no asistan a la presentación, con las cifras que aparecen en los archivos."
      ],
      verificar: [
        "Que cada cifra de cumplimiento coincida con el reporte oficial de producción.",
        "Que las causas de lo que no funcionó sean las dichas en las notas y no deducciones.",
        "Que las prioridades del próximo trimestre tengan un responsable por rol.",
        "Que ninguna lámina incluya nombres de clientes reales."
      ]
    },
    {
      necesidad: "Metas por asesor desde un reporte",
      titulo: "Análisis del cumplimiento de metas por asesor y por ramo",
      donde: "Copilot Chat, pestaña Trabajo. Adjunta con el clip el reporte de producción del mes en Excel o tabla pegada.",
      antes: "Ten el reporte con columnas de asesor, ramo, meta y producción, con asesores como Asesor 1, Asesor 2. Revisa que no haya datos personales.",
      prompt: `ROL
Eres un analista de gestión comercial de seguros que lee reportes de producción y prepara la lectura para el comité de ventas.

OBJETIVO
Analizar el cumplimiento de metas del mes por asesor y por ramo y preparar la lectura para el comité.

CONTEXTO
El reporte tiene [número] asesores y cuatro ramos: autos, pymes, vida grupo y salud. Las columnas son asesor, ramo, meta de prima, prima producida y número de pólizas. Los datos están anonimizados. El comité de ventas quiere saber dónde se concentra el cumplimiento, dónde están los rezagos y dónde conviene reasignar apoyo.

FUENTES
Usa solo el reporte adjunto. No uses otros meses ni datos de mercado. Si una columna está vacía, no la completes.

INSTRUCCIÓN
1. Calcula el cumplimiento por asesor y por ramo, dividiendo la prima producida entre la meta, y muéstralo en porcentaje con un decimal.
2. Clasifica a los asesores en 3 grupos: cumplen o superan el 100 por ciento, entre 80 y 99 por ciento, y menos de 80 por ciento.
3. Identifica los 3 ramos con mayor rezago frente a la meta total.
4. Señala datos atípicos, como un asesor con prima alta y muy pocas pólizas.
5. Redacta una lectura de 6 líneas para el comité, con 2 recomendaciones de apoyo por rezago.

FORMATO DE SALIDA
Tabla por asesor con columnas: asesor, meta, producción, cumplimiento, grupo. Tabla por ramo con las mismas columnas. Luego los atípicos en viñetas y la lectura de 6 líneas.

LÍMITES
No evalúes el desempeño personal ni sugieras sanciones. No proyectes cierres del mes. Marca [SUPUESTO] lo deducido y [VERIFICAR] los datos que parezcan errores, como metas en cero. Escribe PENDIENTE si falta un dato.

CONTROL DE CALIDAD
Antes de entregar, recalcula tres porcentajes de la tabla y muéstrame la cuenta. Indica qué filas del reporte usaste y cuáles quedaron fuera por datos faltantes.`,
      seguimiento: [
        "Muéstrame solo los asesores del grupo con menos de 80 por ciento y su ramo con mayor rezago, en una tabla corta.",
        "Redacta un mensaje de 70 palabras al equipo de asesores con lectura general del mes, sin nombres y con tono motivador.",
        "Dime qué datos del reporte debería corregir con Operaciones antes de llevar este análisis al comité."
      ],
      verificar: [
        "Que los porcentajes de cumplimiento se recalculen a mano para varias filas.",
        "Que el reporte sea del mes correcto y esté completo.",
        "Que los datos atípicos sean errores o casos reales confirmados por el asesor.",
        "Que la lectura para el comité no incluya juicios sobre personas."
      ]
    }
  ]
};
