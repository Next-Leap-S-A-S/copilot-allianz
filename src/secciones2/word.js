const SEC_WORD = [
  {
    area: "suscripcion",
    titulo: "Dos versiones de una cotización de daños: qué cambió en coberturas",
    donde: "Word de escritorio, Revisar > Comparar > Comparar, y luego el panel de Copilot (botón de Copilot o Alt+C) en modo Solo chat sobre el documento resultado.",
    antes: "Ten guardadas en OneDrive o SharePoint las dos versiones de la cotización. En Word de escritorio ve a Revisar > Comparar > Comparar, elige la versión original y la revisada y abre el documento con los cambios marcados. Esta función no existe en Word para la web. Copilot no compara dos archivos por sí solo, por eso este paso va primero.",
    prompt: `ROL
Eres un asistente de apoyo para un suscriptor de riesgos de daños de Allianz Colombia, ramo multirriesgo empresarial.

CONTEXTO
Este documento es el resultado de comparar en Word dos versiones de una cotización para un cliente pyme. Los cambios están marcados con control de cambios. Los datos están anonimizados y las cifras son de ejemplo. Debo explicar al comité de suscripción qué cambió entre la versión que enviamos y la que devolvió el corredor.

FUENTES
Usa solo este documento y sus cambios marcados. No uses otras cotizaciones, tarifas de internet ni conocimiento externo. Si un cambio no se entiende sin un anexo, dímelo.

INSTRUCCIÓN
1. Resume los cambios por sección de la cotización, en el orden en que aparecen.
2. Señala los cambios que alteran coberturas, sublímites, deducibles, exclusiones, valores asegurados o plazos.
3. Separa los cambios de forma (redacción, numeración, ortografía) de los cambios de fondo.
4. Arma una tabla de 5 filas con los cambios de cobertura más importantes.
5. Lista las preguntas que debería hacerle al corredor antes de aceptar la versión revisada.

FORMATO DE SALIDA
Primero 5 viñetas con el resumen por sección. Luego la tabla con columnas: sección, texto anterior, texto nuevo, efecto en la cobertura, prioridad. Luego máximo 4 preguntas al corredor. Todo en máximo una página.

LÍMITES
No edites el documento, solo responde en el chat. No digas si un cambio es aceptable o no, eso lo decide el comité. No calcules primas ni tasas. Marca [SUPUESTO] lo que deduzcas, [VERIFICAR] todo monto o porcentaje y PENDIENTE lo que no puedas leer en el documento.

CONTROL DE CALIDAD
Al final indica en qué sección aparece cada cambio de la tabla y menciona si hay cambios marcados que no incluiste y por qué.`,
    seguimiento: [
      "Dime solo los cambios en deducibles y sublímites, con el texto anterior y el nuevo copiados tal cual del documento.",
      "Convierte las preguntas al corredor en un correo formal de máximo 120 palabras, sin aceptar ni rechazar ninguna condición.",
      "Revisa la sección de exclusiones y dime si alguna exclusión nueva cambia el alcance del riesgo de incendio o terremoto."
    ],
    verificar: [
      "Confirma que el documento comparado usó la versión original correcta y no un borrador intermedio.",
      "Lee cada fila de la tabla contra el cambio marcado en el documento y corrige montos o porcentajes.",
      "Revisa si hay cambios en tablas o anexos que Copilot pudo resumir de forma incompleta.",
      "Valida con el manual de suscripción que los cambios de fondo estén dentro de tus atribuciones antes de responder al corredor."
    ]
  },
  {
    area: "siniestros",
    titulo: "Carta al asegurado pidiendo documentos faltantes de un siniestro",
    donde: "Documento nuevo en Word, panel de Copilot (botón de Copilot o Alt+C) en modo Editar con Copilot, usando «/» para citar archivos.",
    antes: "Abre un documento en blanco o la plantilla de cartas de siniestros. Ubica en OneDrive o SharePoint la lista de documentos requeridos y el correo del ajustador. Si un archivo está cifrado sin permiso de copiar, Copilot no podrá leerlo. La carta nueva hereda la etiqueta más restrictiva de las fuentes.",
    prompt: `ROL
Eres un redactor de apoyo para un analista de siniestros de Allianz Colombia, ramo de hogar y daños materiales.

CONTEXTO
Un asegurado reportó un siniestro por daño por agua en su vivienda. Para avanzar con el análisis faltan documentos. Los datos del caso están anonimizados. Debo enviarle una carta clara y amable que le diga qué falta, por qué y cómo entregarlo.

FUENTES
Usa solo estos archivos: / [lista de documentos requeridos para el ramo] y / [correo del ajustador con lo recibido hasta hoy]. Si tengo la plantilla de cartas, toma su formato de / [plantilla de cartas de siniestros]. No uses información de internet.

INSTRUCCIÓN
1. Compara lo requerido con lo recibido y lista solo los documentos que faltan.
2. Redacta una carta al asegurado [nombre] con tono empático y cercano, en tuteo o usted según la plantilla.
3. Explica en una frase para qué sirve cada documento.
4. Indica el plazo para entregarlos, [fecha], y los canales de entrega, [canales].
5. Cierra con un dato de contacto y una frase de acompañamiento.

FORMATO DE SALIDA
Carta de máximo una página con saludo, párrafo de contexto, lista numerada de documentos faltantes, plazo, canales y despedida. Usa el formato de la plantilla si la cité. Incluye las citas a las fuentes que usaste.

LÍMITES
No prometas cobertura ni pago, y no digas que el siniestro será aprobado. No menciones montos de reserva. No uses lenguaje técnico sin explicarlo. Marca [VERIFICAR] cada fecha y canal, [SUPUESTO] lo que deduzcas y PENDIENTE si no sabes si un documento ya llegó.

CONTROL DE CALIDAD
Al final dime de qué fuente sale cada documento faltante y si alguno aparece como recibido en una fuente y faltante en otra.`,
    seguimiento: [
      "Selecciona el párrafo de contexto y reescríbelo más corto y cálido, en máximo 60 palabras.",
      "Convierte la lista de documentos faltantes en una tabla con columnas: documento, para qué sirve, cómo entregarlo.",
      "Revisa toda la carta y señálame cualquier frase que pueda leerse como promesa de cobertura o de pago."
    ],
    verificar: [
      "Contrasta la lista de faltantes con el sistema de siniestros y no con el correo del ajustador.",
      "Confirma el plazo y los canales de entrega con el procedimiento vigente del área.",
      "Lee la carta completa en voz alta para revisar que el tono sea empático y no frío ni condescendiente.",
      "Revisa la etiqueta de confidencialidad que heredó el documento antes de enviarlo al asegurado."
    ]
  },
  {
    area: "comercial",
    titulo: "Propuesta comercial para un corredor desde la ficha de producto",
    donde: "Documento nuevo en Word, panel de Copilot (botón de Copilot o Alt+C) en modo Editar con Copilot, citando archivos con «/».",
    antes: "Abre un documento en blanco. Ten en OneDrive o SharePoint la ficha del producto, la plantilla de propuestas y el correo o la reunión donde el corredor explicó la necesidad del cliente. El documento hereda la etiqueta más restrictiva de las fuentes.",
    prompt: `ROL
Eres un asistente comercial para un ejecutivo de canales de Allianz Colombia que trabaja con corredores y agencias.

CONTEXTO
Un corredor nos pidió una propuesta para un cliente empresarial mediano que busca un plan de vida grupo y salud para sus empleados. Los datos del cliente están anonimizados y las cifras son de ejemplo. Debo entregar al corredor un borrador de propuesta claro para que lo presente.

FUENTES
Usa solo estos archivos: / [ficha del producto vida grupo], / [ficha del producto salud], / [correo o reunión con el corredor] y el formato de / [plantilla de propuestas comerciales]. No uses información de internet ni de la competencia.

INSTRUCCIÓN
1. Resume en un párrafo la necesidad del cliente según el corredor.
2. Redacta la propuesta con estas secciones: necesidad, solución propuesta, beneficios clave, coberturas principales, proceso de vinculación y próximos pasos.
3. Usa un tono profesional y cercano, pensado para el corredor como aliado.
4. Incluye una tabla de coberturas principales con columnas: cobertura, qué incluye, condiciones.
5. Termina con una llamada a la acción para agendar una reunión.

FORMATO DE SALIDA
Documento de máximo dos páginas con el formato de la plantilla, títulos por sección, la tabla de coberturas y citas a las fuentes usadas.

LÍMITES
No inventes primas, descuentos, comisiones ni condiciones que no estén en las fichas. No compares con otras aseguradoras. Marca [VERIFICAR] toda cifra o condición, [SUPUESTO] lo que deduzcas de la conversación con el corredor y PENDIENTE lo que falte para cotizar.

CONTROL DE CALIDAD
Al final lista qué afirmaciones de la propuesta salen de cada ficha y cuáles no pudiste respaldar con una fuente.`,
    seguimiento: [
      "Escribe una versión corta de la propuesta para un mensaje al canal, de máximo 150 palabras, con los tres beneficios más fuertes.",
      "Selecciona la sección de beneficios y reescríbela con un tono más directo y orientado al empleado.",
      "Agrega una sección de preguntas frecuentes del cliente con 4 preguntas y respuestas tomadas solo de las fichas."
    ],
    verificar: [
      "Confirma cada cobertura y condición contra la ficha vigente del producto.",
      "Revisa que no aparezcan primas, descuentos ni comisiones que no estén aprobados.",
      "Valida con tu jefe comercial el lenguaje de la llamada a la acción antes de enviarla.",
      "Comprueba que el formato respete la plantilla y la marca de Allianz."
    ]
  },
  {
    area: "servicio",
    titulo: "Respuesta formal a un reclamo complejo con control de cambios",
    donde: "Documento existente en Word, panel de Copilot (botón de Copilot o Alt+C) en modo Editar con Copilot, con control de cambios activado.",
    antes: "Abre el borrador de respuesta al reclamo que ya escribiste. Pídele a Copilot que active el control de cambios antes de editar, así ves cada ajuste y puedes aceptarlo o rechazarlo. Si el borrador es largo, trabaja por secciones.",
    prompt: `ROL
Eres un editor de apoyo para un analista de servicio al cliente de Allianz Colombia que responde reclamos formales.

CONTEXTO
Este documento es mi borrador de respuesta a un reclamo complejo de un cliente de autos que se queja por demoras en la atención de un siniestro y por información contradictoria. Los datos están anonimizados. La respuesta debe ser clara, respetuosa y formal, y debe pasar por revisión de mi líder.

FUENTES
Usa solo este documento. Si necesitas la cronología del caso, toma / [correo o nota con la cronología del reclamo]. No uses información de internet.

INSTRUCCIÓN
1. Activa el control de cambios antes de editar.
2. Reescribe el borrador con tono formal y empático, en frases cortas.
3. Ordena la respuesta así: reconocimiento del reclamo, cronología de lo ocurrido, explicación, acciones tomadas y próximos pasos.
4. Quita repeticiones y frases defensivas.
5. Agrega comentarios donde falte validación de un dato, una fecha o un compromiso.
6. Al final resume en el chat los cambios hechos y los comentarios pendientes.

FORMATO DE SALIDA
El documento editado con cambios marcados y comentarios. En el chat, un resumen de máximo 6 viñetas con los cambios y una lista de comentarios pendientes.

LÍMITES
No aceptes ni rechaces cambios por mí. No agregues compensaciones, plazos ni compromisos que no estén en el borrador o la fuente. No admitas responsabilidad legal. Marca [VERIFICAR] cada fecha, [SUPUESTO] lo que deduzcas y PENDIENTE lo que falte para cerrar el reclamo.

CONTROL DE CALIDAD
Al final dime qué afirmaciones del documento no tienen respaldo en las fuentes y qué partes no editaste.`,
    seguimiento: [
      "Resume los cambios y los comentarios pendientes del documento para enviarle a mi líder en un mensaje de 80 palabras.",
      "Selecciona el párrafo de explicación y acórtalo a la mitad sin perder la cronología.",
      "Convierte la cronología del reclamo en una tabla con columnas: fecha, hecho, área responsable."
    ],
    verificar: [
      "Revisa cada cambio marcado y acepta solo los que mantengan el sentido de tu respuesta.",
      "Resuelve cada comentario de validación con el dato del sistema antes de enviar.",
      "Confirma que no quedó ningún compromiso, plazo o compensación sin aprobación.",
      "Lee la versión final completa y verifica que el tono sea formal y respetuoso con el cliente."
    ]
  },
  {
    area: "tecnica",
    titulo: "Nota técnica de una página desde el análisis del ramo",
    donde: "Documento nuevo en Word, panel de Copilot (botón de Copilot o Alt+C) en modo Editar con Copilot, citando archivos con «/».",
    antes: "Abre un documento en blanco. Ten en OneDrive o SharePoint el informe de análisis del ramo y la presentación o el acta del comité técnico. Si un archivo tiene doble cifrado, Copilot no lo leerá. La nota hereda la etiqueta más restrictiva de las fuentes.",
    prompt: `ROL
Eres un asistente de redacción para un analista técnico actuarial de Allianz Colombia.

CONTEXTO
Debo escribir una nota técnica de una página para la gerencia sobre el comportamiento de la siniestralidad del ramo de autos en el último trimestre y una propuesta de ajuste de tarifa. Los datos están anonimizados y las cifras son de ejemplo. La audiencia no es técnica, necesita entender el hallazgo y la recomendación.

FUENTES
Usa solo estos archivos: / [informe de análisis de siniestralidad del ramo] y / [acta o presentación del comité técnico]. No uses datos de internet, del mercado ni de otros ramos.

INSTRUCCIÓN
1. Redacta una nota técnica con estas secciones: objetivo, hallazgos, causas probables, recomendación y riesgos.
2. Explica cada término técnico en palabras sencillas la primera vez que aparece.
3. Usa máximo 3 cifras clave y di de qué fuente sale cada una.
4. Incluye una tabla corta con columnas: indicador, valor, comparación con el trimestre anterior.
5. Cierra con la decisión que se le pide a la gerencia.

FORMATO DE SALIDA
Una página como máximo, con títulos cortos, frases breves, la tabla y citas a las fuentes.

LÍMITES
No hagas cálculos nuevos ni proyecciones que no estén en las fuentes. No cambies las cifras al redondear sin decirlo. Marca [VERIFICAR] toda cifra, [SUPUESTO] cualquier causa que deduzcas y PENDIENTE lo que falte para sostener la recomendación.

CONTROL DE CALIDAD
Al final dime de qué fuente sale cada cifra de la nota y qué afirmaciones no pudiste respaldar.`,
    seguimiento: [
      "Selecciona la sección de causas probables y reescríbela con un lenguaje más simple para una audiencia comercial.",
      "Resume la nota en 3 viñetas para un correo a la gerencia, con la decisión que se pide.",
      "Revisa la nota y agrega comentarios donde una cifra o una causa necesite validación del equipo actuarial."
    ],
    verificar: [
      "Contrasta cada cifra con el informe de origen y con la base oficial del ramo.",
      "Confirma que las causas probables estén respaldadas por el análisis y no sean suposiciones de Copilot.",
      "Revisa que la nota no pase de una página y que la tabla se lea bien.",
      "Pide a un par del equipo técnico que valide la recomendación antes de enviarla."
    ]
  },
  {
    area: "juridico",
    titulo: "Dos versiones de una política y un procedimiento nuevo",
    donde: "Word de escritorio, Revisar > Comparar > Comparar, y luego el panel de Copilot (botón de Copilot o Alt+C), primero en Solo chat y después en un documento nuevo citando con «/».",
    antes: "Ten las dos versiones de la política en OneDrive o SharePoint. En Word de escritorio ve a Revisar > Comparar > Comparar, elige la versión original y la revisada y abre el documento resultado. Esta función no está en Word para la web y Copilot no compara dos archivos con precisión por sí solo. Si la política es larga, trabaja por secciones.",
    prompt: `ROL
Eres un asistente de apoyo para un abogado del área de cumplimiento de Allianz Colombia.

CONTEXTO
Este documento es el resultado de comparar en Word dos versiones de la política interna de [tema, por ejemplo conflictos de interés o regalos y atenciones]. Los cambios están marcados. Los datos están anonimizados. Debo explicar los cambios al comité y luego preparar un procedimiento nuevo que aplique la política.

FUENTES
Para la comparación usa solo este documento con sus cambios marcados. Para el procedimiento usa solo / [documento comparado de la política] y el formato de / [plantilla de procedimientos]. No uses normas externas ni información de internet.

INSTRUCCIÓN
1. Resume los cambios por sección en el orden del documento.
2. Señala los cambios que alteran obligaciones, plazos, montos, responsables o sanciones.
3. Separa los cambios de forma de los cambios de fondo.
4. Lista los puntos que necesitan validación de la dirección jurídica.
5. Después, en un documento nuevo, redacta un procedimiento que aplique la versión revisada, con objetivo, alcance, responsables, pasos numerados y registros.

FORMATO DE SALIDA
Para la comparación, una tabla con columnas: sección, cambio, tipo (forma o fondo), efecto. Para el procedimiento, máximo dos páginas con el formato de la plantilla y citas a la fuente.

LÍMITES
No des una opinión legal ni digas si un cambio cumple la ley. No edites la política comparada. Marca [VERIFICAR] cada plazo y monto, [SUPUESTO] lo que deduzcas y PENDIENTE lo que la política no defina.

CONTROL DE CALIDAD
Al final indica en qué sección de la política se apoya cada paso del procedimiento y qué cambios marcados no incluiste.`,
    seguimiento: [
      "Dime solo los cambios que crean una obligación nueva para los empleados, con el texto exacto de la versión revisada.",
      "Revisa el procedimiento y agrega comentarios donde falte un responsable o un plazo.",
      "Convierte los pasos del procedimiento en una lista de verificación de 8 puntos para el área de cumplimiento."
    ],
    verificar: [
      "Confirma que comparaste la versión vigente con la versión propuesta correcta.",
      "Revisa cada cambio de fondo contra el documento comparado y no contra el resumen.",
      "Valida con la dirección jurídica los puntos marcados antes de llevar la tabla al comité.",
      "Comprueba que cada paso del procedimiento tenga respaldo en la política y no agregue obligaciones nuevas."
    ]
  },
  {
    area: "finanzas",
    titulo: "Memo del cierre contable mensual revisado con control de cambios",
    donde: "Documento existente en Word, panel de Copilot (botón de Copilot o Alt+C) en modo Editar con Copilot, con control de cambios activado.",
    antes: "Abre el borrador del memo de cierre que preparó tu equipo. Pídele a Copilot que active el control de cambios antes de editar para revisar cada ajuste. Si el memo es largo, trabaja por secciones.",
    prompt: `ROL
Eres un editor de apoyo para un analista de contabilidad y finanzas de Allianz Colombia.

CONTEXTO
Este documento es el borrador del memo interno sobre el cierre contable del mes. Explica el calendario, los responsables, las conciliaciones pendientes y las reglas para registrar provisiones. Los datos están anonimizados y las cifras son de ejemplo. El memo va para jefes de otras áreas que no son financieros.

FUENTES
Usa solo este documento. Si necesitas el calendario oficial, toma / [calendario de cierre del mes]. No uses información de internet ni de otros meses.

INSTRUCCIÓN
1. Activa el control de cambios antes de editar.
2. Reescribe el memo con lenguaje claro para personas no financieras, en frases cortas.
3. Ordénalo así: propósito, fechas clave, qué debe hacer cada área, reglas de provisiones y contactos.
4. Convierte las fechas clave en una tabla con columnas: fecha, actividad, área responsable.
5. Agrega comentarios donde falte validación de una fecha, un responsable o una cifra.
6. Al final resume en el chat los cambios y los comentarios pendientes.

FORMATO DE SALIDA
El memo editado con cambios marcados y comentarios, de máximo una página y media. En el chat, un resumen de máximo 6 viñetas.

LÍMITES
No cambies cifras, cuentas contables ni reglas de provisiones. No aceptes ni rechaces cambios por mí. Marca [VERIFICAR] cada fecha y cifra, [SUPUESTO] lo que deduzcas y PENDIENTE lo que no esté definido.

CONTROL DE CALIDAD
Al final dime qué fechas de la tabla coinciden con el calendario citado y cuáles no pudiste confirmar.`,
    seguimiento: [
      "Selecciona la sección de reglas de provisiones y reescríbela con un ejemplo sencillo, sin cambiar la regla.",
      "Resume los cambios y los comentarios pendientes para enviarlos a mi jefe en 5 viñetas.",
      "Escribe un correo corto de 80 palabras para los jefes de área que acompañe el memo y destaque la fecha límite."
    ],
    verificar: [
      "Contrasta cada fecha de la tabla con el calendario oficial de cierre.",
      "Revisa que las reglas de provisiones y las cuentas no hayan cambiado de sentido.",
      "Resuelve los comentarios de validación con el responsable de cada área antes de publicar.",
      "Acepta los cambios uno por uno y lee la versión final completa."
    ]
  },
  {
    area: "talento",
    titulo: "Descripción de cargo y comunicado interno de la vacante",
    donde: "Documento nuevo en Word, panel de Copilot (botón de Copilot o Alt+C) en modo Editar con Copilot, citando archivos con «/».",
    antes: "Abre un documento en blanco. Ten en OneDrive o SharePoint la plantilla de descripción de cargos, el perfil de un cargo similar y las notas de la reunión con el líder que pidió la vacante. El documento hereda la etiqueta más restrictiva de las fuentes.",
    prompt: `ROL
Eres un asistente de redacción para un profesional de talento humano de Allianz Colombia.

CONTEXTO
Un líder del área de servicio al cliente pidió abrir una vacante de [nombre del cargo]. Debo preparar la descripción de cargo y un comunicado interno para invitar a postularse. Los datos están anonimizados. La audiencia del comunicado son colaboradores de todas las áreas.

FUENTES
Usa solo estos archivos: / [plantilla de descripción de cargos], / [perfil de un cargo similar] y / [notas o reunión con el líder]. No uses información de internet ni de otras empresas.

INSTRUCCIÓN
1. Redacta la descripción de cargo con el formato de la plantilla: propósito del cargo, responsabilidades, requisitos, competencias y relación con otras áreas.
2. Escribe máximo 8 responsabilidades, cada una con un verbo de acción.
3. Separa requisitos obligatorios de deseables.
4. Después redacta un comunicado interno de máximo 200 palabras con tono cercano e inclusivo que invite a postularse.
5. Indica en el comunicado cómo postularse y la fecha límite, [fecha].

FORMATO DE SALIDA
Primero la descripción de cargo, máximo una página, con títulos y viñetas. Luego el comunicado con título, cuerpo y cierre. Incluye citas a las fuentes usadas.

LÍMITES
No incluyas salario, bandas ni beneficios que no estén en las fuentes. No uses lenguaje que excluya por edad, género u otra condición. Marca [VERIFICAR] los requisitos de formación y experiencia, [SUPUESTO] lo que deduzcas de las notas y PENDIENTE lo que el líder no definió.

CONTROL DE CALIDAD
Al final dime de qué fuente sale cada responsabilidad y señala cualquier frase que pueda leerse como discriminatoria.`,
    seguimiento: [
      "Selecciona el comunicado y reescríbelo más corto, en 100 palabras, para publicarlo en un canal de Teams.",
      "Convierte las competencias en una tabla con columnas: competencia, cómo se ve en el día a día, nivel esperado.",
      "Revisa la descripción de cargo y agrega comentarios donde el líder deba confirmar un requisito."
    ],
    verificar: [
      "Valida con el líder que las responsabilidades y requisitos reflejen el cargo real.",
      "Revisa con el equipo de compensación que no aparezcan condiciones salariales no aprobadas.",
      "Lee el comunicado buscando sesgos de lenguaje y corrígelos antes de publicar.",
      "Confirma la fecha límite y el canal de postulación con el proceso vigente de selección."
    ]
  },
  {
    area: "tecnologia",
    titulo: "Procedimiento operativo paso a paso desde notas y correos",
    donde: "Documento nuevo en Word, panel de Copilot (botón de Copilot o Alt+C) en modo Editar con Copilot, citando archivos, correos o reuniones con «/».",
    antes: "Abre un documento en blanco o la plantilla de procedimientos. Ubica en OneDrive o SharePoint las notas de la operación, el correo donde se acordó el cambio y la reunión donde se explicó. Si el resultado sale largo, trabaja por secciones.",
    prompt: `ROL
Eres un asistente de documentación para un analista de tecnología y operaciones de Allianz Colombia.

CONTEXTO
Debo documentar el procedimiento operativo para [proceso, por ejemplo la gestión de solicitudes de acceso a aplicaciones o la carga diaria de pólizas]. Hoy el proceso vive en notas sueltas, correos y en la cabeza de dos personas. Los datos están anonimizados. El procedimiento lo usarán personas nuevas del equipo.

FUENTES
Usa solo estos elementos: / [notas del proceso], / [correo con el acuerdo del cambio], / [reunión donde se explicó el proceso] y el formato de / [plantilla de procedimientos]. No uses información de internet ni de otros sistemas.

INSTRUCCIÓN
1. Redacta el procedimiento con estas secciones: objetivo, alcance, roles, requisitos previos, pasos, excepciones y registros.
2. Escribe los pasos numerados, uno por acción, empezando con un verbo.
3. Indica en cada paso quién lo hace y en qué sistema.
4. Agrega una tabla de excepciones con columnas: situación, qué hacer, a quién escalar.
5. Señala los pasos donde las fuentes se contradicen.

FORMATO DE SALIDA
Máximo dos páginas con el formato de la plantilla, títulos por sección, pasos numerados, la tabla de excepciones y citas a las fuentes.

LÍMITES
No inventes nombres de sistemas, pantallas ni permisos. No incluyas contraseñas ni datos de acceso. Marca [VERIFICAR] cada nombre de sistema y tiempo de respuesta, [SUPUESTO] lo que deduzcas y PENDIENTE los pasos que las fuentes no cubren.

CONTROL DE CALIDAD
Al final dime de qué fuente sale cada paso y qué contradicciones encontraste entre las notas, el correo y la reunión.`,
    seguimiento: [
      "Convierte los pasos en una lista de verificación corta para imprimir, de máximo 10 puntos.",
      "Selecciona la sección de excepciones y reescríbela con un tono más directo para el turno de soporte.",
      "Activa el control de cambios y agrega comentarios donde el dueño del proceso deba confirmar un paso."
    ],
    verificar: [
      "Sigue el procedimiento paso a paso en el sistema real para confirmar que funciona.",
      "Valida con el dueño del proceso cada paso marcado como PENDIENTE o con contradicciones.",
      "Revisa que no aparezcan contraseñas, usuarios ni datos sensibles en el documento.",
      "Confirma con el área de seguridad de la información la etiqueta del documento antes de publicarlo."
    ]
  }
];
