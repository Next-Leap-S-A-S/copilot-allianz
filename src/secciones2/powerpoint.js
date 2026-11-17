const SEC_POWERPOINT = [
  {
    area: "suscripcion",
    titulo: "Comité de suscripción: riesgo pyme de alimentos en 8 diapositivas",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Escribe «/» para referenciar el Word del análisis del riesgo.",
    antes: "Guarda en OneDrive o SharePoint el Word con el análisis del riesgo, con estilos de título aplicados y menos de 24 MB. Abre una presentación en blanco. Si TI publicó un kit de marca, aplícalo con «+» > «Seleccionar marca».",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para un suscriptor de riesgos pymes de Allianz Colombia, ramo multirriesgo empresarial.

CONTEXTO
Debo presentar al comité de suscripción el riesgo de una pyme del sector alimentos (planta de producción, bodega refrigerada y flota liviana de reparto). Los datos del caso están anonimizados y las cifras son de ejemplo. Tengo 15 minutos y el comité decide si cotizamos y con qué condiciones.

FUENTES
Usa solo el archivo /[nombre del Word del análisis del riesgo]. No uses internet ni inventes cifras. Si un dato no está en el archivo, escribe PENDIENTE en la diapositiva.

INSTRUCCIÓN
1. Antes de crear diapositivas, propón un esquema de 8 diapositivas con un título que sea una frase completa en cada una. Espera mi ajuste.
2. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (la recomendación), situación del riesgo, hallazgos con cifras (valores asegurados, siniestralidad histórica, exposición de cadena de frío), opciones de suscripción, decisión que pido al comité y próximos pasos.
3. En la diapositiva de opciones compara [opción A, por ejemplo cotizar con deducible alto] y [opción B, por ejemplo cotizar con garantía de mantenimiento] en una tabla.
4. Escribe notas del orador para cada diapositiva, de máximo 80 palabras, en lenguaje hablado.
5. Al final, lista 5 preguntas difíciles que el comité podría hacer y una respuesta breve para cada una.

FORMATO DE SALIDA
Una idea por diapositiva. Máximo 4 viñetas por diapositiva y máximo 12 palabras por viñeta. Tono sobrio y directo. Sin imágenes decorativas.

LÍMITES
No fijes tasas, coberturas ni exclusiones que no estén en el archivo. No cambies cifras. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] toda cifra que vaya en un título. La decisión la toma el comité, tú solo la presentas.

CONTROL DE CALIDAD
Al final dime de qué sección del Word sale cada cifra y qué diapositivas tienen datos PENDIENTE.`,
    seguimiento: [
      "Adapta la presentación para el reasegurador: tono más técnico, en inglés, y deja la diapositiva de decisión al final.",
      "Reescribe el cuadro de texto del mensaje principal en una sola frase de máximo 20 palabras.",
      "Usa la habilidad Prepararse para preguntas y dime cuáles son los tres puntos débiles de mi recomendación."
    ],
    verificar: [
      "Contrasta cada cifra de las diapositivas con el Word original, porque Copilot puede inventar números.",
      "Revisa que ninguna condición de suscripción aparezca como aprobada antes del comité.",
      "Lee las notas del orador en voz alta y ajusta lo que no suene a ti.",
      "Confirma que no quedó ningún nombre real del cliente ni dato sin anonimizar."
    ]
  },
  {
    area: "siniestros",
    titulo: "Comité de siniestros complejos: estado de casos y reservas",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia el informe con «/» o adjúntalo.",
    antes: "Ten el informe de casos complejos en PDF o Word guardado en OneDrive o SharePoint. Los números de siniestro deben estar anonimizados. Abre una presentación en blanco y guarda una copia antes de editar.",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para un analista senior de siniestros de Allianz Colombia, ramo de daños materiales.

CONTEXTO
Presento al comité de siniestros complejos el estado de los casos abiertos y la suficiencia de sus reservas. Los datos están anonimizados y las cifras son de ejemplo. El comité tiene 15 minutos y debe aprobar o ajustar reservas de [número] casos.

FUENTES
Usa solo el archivo /[nombre del informe de casos complejos]. No uses conocimiento externo sobre los casos. Si un dato no aparece, escribe PENDIENTE.

INSTRUCCIÓN
1. Antes de generar, propón un esquema de máximo 9 diapositivas y espera que lo ajuste.
2. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (cuántos casos piden ajuste de reserva y por cuánto en total), situación general de la cartera de casos, hallazgos con cifras por caso (reserva actual, reserva propuesta, estado del ajuste), opciones para cada caso relevante, decisión que pido al comité y próximos pasos con responsables.
3. Haz una tabla resumen con columnas: caso anonimizado, causa, reserva actual, reserva propuesta, estado.
4. Escribe notas del orador para todas las diapositivas, de máximo 70 palabras cada una.
5. Anticipa 5 preguntas del comité sobre reservas, peritajes o cobertura y propón respuestas breves.

FORMATO DE SALIDA
Títulos con el mensaje de cada diapositiva. Máximo 4 viñetas por diapositiva. Tono técnico y neutral.

LÍMITES
No determines cobertura, no califiques responsabilidad y no propongas reservas distintas a las del informe. Marca [VERIFICAR] todo monto y toda fecha. Marca [SUPUESTO] lo que deduzcas. La decisión es del comité.

CONTROL DE CALIDAD
Al final indica de qué página o sección del informe sale cada monto y qué casos quedaron con datos PENDIENTE.`,
    seguimiento: [
      "Reorganiza la presentación en dos secciones: casos que piden ajuste de reserva y casos estables.",
      "Escribe las notas del orador solo para la diapositiva de la tabla resumen, en 100 palabras.",
      "Usa la habilidad Revisa esta presentación y dime qué diapositivas sobran para cumplir 15 minutos."
    ],
    verificar: [
      "Compara cada reserva de la tabla con el informe original y con el sistema de siniestros.",
      "Revisa que ninguna diapositiva afirme cobertura o responsabilidad, porque eso lo decide el comité.",
      "Confirma que los números de caso estén anonimizados en diapositivas y notas.",
      "Lee las respuestas a preguntas y corrige las que suenen a compromiso con el asegurado."
    ]
  },
  {
    area: "comercial",
    titulo: "Resultados trimestrales de un canal contados como historia",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia el informe con «/».",
    antes: "Guarda en OneDrive o SharePoint el informe trimestral del canal en PDF. Abre una presentación en blanco. Ten claro el mensaje que quieres que el comité recuerde.",
    prompt: `ROL
Eres un asesor de storytelling ejecutivo para un gerente comercial de Allianz Colombia.

CONTEXTO
Presento al comité comercial los resultados del trimestre del canal [corredores, bancaseguros o agentes] en los ramos autos, salud, vida grupo y pymes. Los datos están anonimizados y las cifras son de ejemplo. Tengo 12 minutos. Quiero que el comité entienda qué pasó, por qué pasó y qué apoyo necesito.

FUENTES
Usa solo el archivo /[nombre del informe trimestral del canal]. No uses cifras de mercado de internet ni inventes metas. Si una cifra no está, escribe PENDIENTE.

INSTRUCCIÓN
1. Hazme primero dos o tres preguntas sobre el público y la duración si te falta información.
2. Propón un esquema de 7 diapositivas con títulos que cuenten una historia y espera mi ajuste.
3. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (el resultado del trimestre en una frase), situación del canal, hallazgos con cifras (primas, cumplimiento de meta, ramos que crecen y que caen), opciones para el próximo trimestre, decisión que pido al comité y próximos pasos.
4. Escribe notas del orador para todas las diapositivas, con una transición hablada entre cada una.
5. Anticipa 5 preguntas del comité sobre metas, comisiones o corredores y sugiere respuestas cortas.

FORMATO DE SALIDA
Una idea por diapositiva. Máximo 3 viñetas. Una cifra destacada por diapositiva de hallazgos. Tono cercano y seguro.

LÍMITES
No prometas comisiones, descuentos ni condiciones de producto. No cambies cifras ni redondees sin decirlo. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] cada cifra de primas o cumplimiento.

CONTROL DE CALIDAD
Al final dime de qué parte del informe sale cada cifra y qué parte de la historia se apoya en supuestos.`,
    seguimiento: [
      "Adapta la presentación para el director regional: máximo 5 diapositivas y en inglés.",
      "Reescribe el cuadro de texto del mensaje principal para que suene más optimista sin cambiar ninguna cifra.",
      "Usa la habilidad Visualice esta diapositiva en la diapositiva de hallazgos y dime qué cambió."
    ],
    verificar: [
      "Contrasta cada cifra de primas y cumplimiento con el reporte oficial del trimestre.",
      "Revisa que el relato no exagere un crecimiento que en el informe es pequeño.",
      "Quita cualquier promesa de comisión o condición comercial que no esté aprobada.",
      "Ensaya con las notas del orador y mide que la presentación quepa en 12 minutos."
    ]
  },
  {
    area: "servicio",
    titulo: "Quejas recurrentes y plan de mejora para el comité de servicio",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia el Word o el PDF con «/».",
    antes: "Guarda en OneDrive o SharePoint el informe de quejas del periodo, sin nombres ni documentos de clientes. Si es Word, revisa que tenga estilos de título. Abre una presentación en blanco.",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para una líder de servicio al cliente de Allianz Colombia.

CONTEXTO
Presento al comité de servicio las quejas recurrentes del último [trimestre o mes] y un plan de mejora. Los datos están anonimizados y las cifras son de ejemplo. El comité tiene 15 minutos y debe aprobar el plan y sus responsables.

FUENTES
Usa solo el archivo /[nombre del informe de quejas]. No uses información externa ni inventes volúmenes. Si falta un dato, escribe PENDIENTE.

INSTRUCCIÓN
1. Antes de crear diapositivas, propón un esquema de 8 diapositivas y espera mi ajuste.
2. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (las tres causas que explican la mayoría de quejas), situación del servicio, hallazgos con cifras (volumen por motivo, tiempo de respuesta, canal de entrada, reincidencia), opciones de mejora, decisión que pido al comité y próximos pasos con responsable y fecha.
3. Incluye una diapositiva con la voz del cliente, usando frases tipo resumidas, sin datos personales.
4. Escribe notas del orador para todas las diapositivas, de máximo 70 palabras.
5. Anticipa 5 preguntas del comité, por ejemplo sobre costos del plan o plazos regulatorios, y sugiere respuestas.

FORMATO DE SALIDA
Títulos que digan la conclusión. Máximo 4 viñetas por diapositiva. Tono empático y concreto.

LÍMITES
No incluyas nombres, cédulas ni números de póliza. No prometas plazos de respuesta que no estén en el informe. Marca [SUPUESTO] lo que deduzcas y [VERIFICAR] cada cifra de volumen o tiempo.

CONTROL DE CALIDAD
Al final dime de qué sección del archivo sale cada cifra y qué acciones del plan no tienen responsable.`,
    seguimiento: [
      "Adapta la presentación para el equipo de agentes del contact center, con tono motivador y sin cifras financieras.",
      "Escribe de nuevo las notas del orador de la diapositiva de la voz del cliente para que duren un minuto.",
      "Usa la habilidad Prepararse para preguntas y dime qué preguntaría alguien de cumplimiento."
    ],
    verificar: [
      "Contrasta cada volumen y tiempo de respuesta con el reporte oficial de quejas.",
      "Revisa que las frases de la voz del cliente no permitan identificar a nadie.",
      "Confirma que cada acción del plan tenga responsable y fecha reales.",
      "Lee la presentación completa y quita promesas al cliente que no estén aprobadas."
    ]
  },
  {
    area: "tecnica",
    titulo: "Propuesta de ajuste de tarifa con siniestralidad por ramo",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia con «/» el PDF del informe técnico.",
    antes: "Exporta a PDF el informe de Excel con la siniestralidad por ramo y guárdalo en OneDrive o SharePoint. Ten a mano el Excel original para contrastar cifras. Abre una presentación en blanco.",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para un actuario de Allianz Colombia.

CONTEXTO
Presento al comité técnico una propuesta de ajuste de tarifa basada en la siniestralidad por ramo de los últimos [número] años. Los datos están anonimizados y las cifras son de ejemplo. El comité tiene 15 minutos y no todos son actuarios.

FUENTES
Usa solo el archivo /[nombre del informe de siniestralidad]. No calcules indicadores nuevos ni uses tarifas del mercado. Si un dato no está, escribe PENDIENTE.

INSTRUCCIÓN
1. Antes de generar, propón un esquema de 8 diapositivas y espera mi ajuste.
2. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (el ajuste que propongo y por qué), situación del portafolio, hallazgos con cifras (siniestralidad por ramo, frecuencia, severidad, tendencia), opciones de ajuste con su efecto esperado, decisión que pido al comité y próximos pasos.
3. Explica cada indicador técnico en una frase sencilla para quien no es actuario.
4. Escribe notas del orador para todas las diapositivas, de máximo 80 palabras.
5. Anticipa 5 preguntas del comité sobre metodología, competitividad o impacto en renovaciones y sugiere respuestas.

FORMATO DE SALIDA
Una idea por diapositiva. Máximo 4 viñetas. Las cifras siempre con unidad y periodo. Tono técnico pero claro.

LÍMITES
No recalcules tarifas ni porcentajes. Copia las cifras tal como están en el archivo. Marca [VERIFICAR] toda cifra de siniestralidad o ajuste y [SUPUESTO] cualquier explicación de tendencia que deduzcas. La aprobación es del comité.

CONTROL DE CALIDAD
Al final indica de qué tabla o página del informe sale cada cifra y qué diapositivas tienen datos PENDIENTE.`,
    seguimiento: [
      "Adapta la presentación para la dirección comercial, con menos tecnicismos y foco en el impacto para los clientes.",
      "Reescribe el cuadro de texto que explica la severidad con un ejemplo sencillo.",
      "Usa la habilidad Revisa esta presentación y dime dónde la historia pierde claridad."
    ],
    verificar: [
      "Contrasta cada porcentaje de siniestralidad con el Excel original, celda por celda.",
      "Revisa que Copilot no haya calculado ni redondeado cifras por su cuenta.",
      "Confirma que las explicaciones sencillas no cambien el sentido técnico del indicador.",
      "Valida con tu jefe técnico la propuesta antes de llevarla al comité."
    ]
  },
  {
    area: "juridico",
    titulo: "Cambios de una circular y su impacto para el comité",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia con «/» el Word o PDF del análisis.",
    antes: "Guarda en OneDrive o SharePoint tu análisis de la circular o política en Word o PDF. Si es Word, usa estilos de título y un solo archivo a la vez. Abre una presentación en blanco.",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para un abogado del área de cumplimiento de Allianz Colombia.

CONTEXTO
Presento al comité de cumplimiento los cambios de [circular o política] y su impacto en las áreas de la compañía. Los datos están anonimizados. El comité tiene 15 minutos y debe aprobar un plan de adecuación.

FUENTES
Usa solo el archivo /[nombre del análisis de la circular]. No uses internet ni interpretes la norma por tu cuenta. Si algo no está en el archivo, escribe PENDIENTE.

INSTRUCCIÓN
1. Antes de crear diapositivas, propón un esquema de 8 diapositivas y espera mi ajuste.
2. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (qué cambia y para cuándo), situación actual, hallazgos con cifras (plazos, número de procesos y áreas afectadas), opciones de adecuación, decisión que pido al comité y próximos pasos con responsable y fecha.
3. Haz una tabla con columnas: cambio, área afectada, impacto, plazo.
4. Escribe notas del orador para todas las diapositivas, en lenguaje claro para personas que no son abogadas.
5. Anticipa 5 preguntas del comité sobre riesgos de incumplimiento o costos y sugiere respuestas breves.

FORMATO DE SALIDA
Títulos con la conclusión. Máximo 4 viñetas. Cita el numeral del documento cuando lo uses. Tono formal y claro.

LÍMITES
No des concepto jurídico ni interpretes la norma más allá del archivo. Marca [VERIFICAR] cada plazo y cada numeral citado. Marca [SUPUESTO] cualquier impacto que deduzcas. La decisión es del comité.

CONTROL DE CALIDAD
Al final dime de qué parte del archivo sale cada plazo y qué impactos son supuestos.`,
    seguimiento: [
      "Adapta la presentación para los líderes de las áreas afectadas, con lo que deben hacer y cuándo.",
      "Escribe las notas del orador de la tabla de impactos en 90 palabras.",
      "Usa la habilidad Prepararse para preguntas y dime qué objeciones podría plantear la dirección financiera."
    ],
    verificar: [
      "Contrasta cada plazo y numeral con el texto oficial de la circular o política.",
      "Revisa que ninguna diapositiva se lea como concepto jurídico definitivo.",
      "Confirma que los impactos por área estén validados con cada responsable.",
      "Lee las notas del orador y corrige cualquier simplificación que cambie el sentido de la norma."
    ]
  },
  {
    area: "finanzas",
    titulo: "Resumen ejecutivo del cierre mensual para la dirección",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia con «/» el PDF del informe de cierre.",
    antes: "Exporta a PDF el informe de cierre de Excel y guárdalo en OneDrive o SharePoint. Ten el Excel abierto en otra ventana para contrastar. Abre una presentación en blanco.",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para un analista financiero de Allianz Colombia.

CONTEXTO
Presento a la dirección el resumen ejecutivo del cierre de [mes]. Los datos están anonimizados y las cifras son de ejemplo. Tengo 10 minutos. La dirección quiere saber cómo vamos frente al presupuesto, por qué y qué hay que decidir.

FUENTES
Usa solo el archivo /[nombre del informe de cierre]. No calcules variaciones nuevas ni uses datos externos. Si una cifra no está, escribe PENDIENTE.

INSTRUCCIÓN
1. Antes de generar, propón un esquema de 6 diapositivas y espera mi ajuste.
2. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (el resultado del mes frente al presupuesto en una frase), situación general, hallazgos con cifras (primas, siniestros, gastos, resultado técnico y sus variaciones), opciones frente a las desviaciones, decisión que pido a la dirección y próximos pasos.
3. Explica en una frase la causa de cada desviación mayor a [porcentaje], solo si la causa está en el archivo.
4. Escribe notas del orador para todas las diapositivas, de máximo 60 palabras.
5. Anticipa 5 preguntas de la dirección sobre desviaciones o proyección del año y sugiere respuestas.

FORMATO DE SALIDA
Una cifra destacada por diapositiva de hallazgos. Máximo 3 viñetas. Cifras con unidad, moneda y periodo. Tono sobrio.

LÍMITES
No recalcules ni redondees cifras. No proyectes resultados que no estén en el archivo. Marca [VERIFICAR] cada cifra y [SUPUESTO] cada causa que deduzcas.

CONTROL DE CALIDAD
Al final indica de qué página del informe sale cada cifra y qué desviaciones quedaron sin causa explicada.`,
    seguimiento: [
      "Adapta la presentación para el comité regional en inglés, con las mismas cifras y máximo 5 diapositivas.",
      "Reescribe el cuadro de texto del mensaje principal en máximo 18 palabras.",
      "Usa la habilidad Prepararse para preguntas y dime qué desviación es la más difícil de defender."
    ],
    verificar: [
      "Contrasta cada cifra con el Excel de cierre, incluida la moneda y el periodo.",
      "Revisa que Copilot no haya calculado variaciones o porcentajes por su cuenta.",
      "Confirma que cada causa de desviación esté respaldada en el informe.",
      "Si traduces, guarda antes una copia y revisa que los números no cambien en la versión en inglés."
    ]
  },
  {
    area: "talento",
    titulo: "Resultados de la encuesta de clima y plan de acción",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia con «/» el informe de la encuesta.",
    antes: "Guarda en OneDrive o SharePoint el informe agregado de la encuesta de clima en Word o PDF, sin comentarios que identifiquen personas. Abre una presentación en blanco.",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para una profesional de talento humano de Allianz Colombia.

CONTEXTO
Presento al comité de gerencia los resultados de la encuesta de clima de [año] y un plan de acción. Los datos están anonimizados y agregados, y las cifras son de ejemplo. Tengo 15 minutos y el comité debe aprobar las prioridades del plan.

FUENTES
Usa solo el archivo /[nombre del informe de la encuesta]. No uses referencias externas ni inventes porcentajes. Si un dato no está, escribe PENDIENTE.

INSTRUCCIÓN
1. Antes de crear diapositivas, propón un esquema de 8 diapositivas y espera mi ajuste.
2. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (las dos fortalezas y las dos brechas más claras), situación general del clima, hallazgos con cifras (participación, favorabilidad por dimensión, comparación con la medición anterior), opciones de acción, decisión que pido al comité y próximos pasos con responsable y fecha.
3. Resume los comentarios abiertos en temas, sin citar frases que identifiquen a alguien.
4. Escribe notas del orador para todas las diapositivas, con tono cuidadoso y respetuoso.
5. Anticipa 5 preguntas del comité, por ejemplo sobre áreas con resultados bajos, y sugiere respuestas.

FORMATO DE SALIDA
Títulos con la conclusión. Máximo 4 viñetas. Porcentajes con su base de respuestas. Tono humano y claro.

LÍMITES
No muestres resultados de grupos tan pequeños que permitan identificar personas. No nombres jefes ni áreas pequeñas. Marca [VERIFICAR] cada porcentaje y [SUPUESTO] cada causa que deduzcas.

CONTROL DE CALIDAD
Al final dime de qué sección del informe sale cada porcentaje y qué temas de los comentarios son interpretación tuya.`,
    seguimiento: [
      "Adapta la presentación para compartirla con todos los colaboradores, con tono cercano y sin datos por área.",
      "Escribe las notas del orador de la diapositiva de brechas para que suenen constructivas.",
      "Usa la habilidad Revisa esta presentación y dime si el storytelling equilibra fortalezas y brechas."
    ],
    verificar: [
      "Contrasta cada porcentaje con el informe oficial de la encuesta.",
      "Revisa que ningún resultado o comentario permita identificar a una persona o equipo pequeño.",
      "Confirma que el plan de acción tenga responsables y fechas acordadas.",
      "Lee las notas del orador y ajusta el tono en los temas sensibles."
    ]
  },
  {
    area: "tecnologia",
    titulo: "Avance de un proyecto para la dirección",
    donde: "Chat de Copilot en PowerPoint, con el icono de Copilot en la esquina inferior derecha. Referencia con «/» el informe de avance o la carpeta del proyecto.",
    antes: "Guarda en OneDrive o SharePoint el informe de estado del proyecto en Word o PDF, o ubica la carpeta del proyecto. Abre una presentación en blanco. Si TI publicó un kit de marca, aplícalo con «+» > «Seleccionar marca».",
    prompt: `ROL
Eres un asesor de comunicación ejecutiva para un líder de proyectos de tecnología y operaciones de Allianz Colombia.

CONTEXTO
Presento a la dirección el avance del proyecto [nombre del proyecto]. Los datos están anonimizados y las cifras son de ejemplo. Tengo 10 minutos y la dirección no es técnica. Necesito una decisión sobre [alcance, presupuesto o fecha].

FUENTES
Usa solo el archivo /[nombre del informe de avance]. No uses información externa ni inventes fechas o porcentajes. Si falta un dato, escribe PENDIENTE.

INSTRUCCIÓN
1. Hazme primero las preguntas que necesites sobre el público y la duración.
2. Propón un esquema de 7 diapositivas y espera mi ajuste.
3. Con el esquema aprobado, crea la presentación con esta narrativa: mensaje principal primero (estado del proyecto en una frase y la decisión que necesito), situación, hallazgos con cifras (porcentaje de avance, hitos cumplidos y atrasados, presupuesto ejecutado, riesgos principales), opciones con su efecto en fecha y costo, decisión que pido a la dirección y próximos pasos.
4. Traduce los términos técnicos a lenguaje de negocio.
5. Escribe notas del orador para todas las diapositivas y anticipa 5 preguntas de la dirección con respuestas breves.

FORMATO DE SALIDA
Una idea por diapositiva. Máximo 4 viñetas. Un semáforo en texto (verde, amarillo, rojo) para cada frente del proyecto. Tono claro y sin jerga.

LÍMITES
No cambies fechas, porcentajes ni montos. No asegures fechas de salida que no estén en el archivo. Marca [VERIFICAR] cada cifra y [SUPUESTO] cada riesgo que deduzcas.

CONTROL DE CALIDAD
Al final dime de qué parte del informe sale cada cifra y qué frentes quedaron sin estado claro.`,
    seguimiento: [
      "Adapta la presentación para el equipo del proyecto, con más detalle técnico y tareas por frente.",
      "Reescribe el cuadro de texto de riesgos en lenguaje de negocio, sin siglas.",
      "Usa la habilidad Prepararse para preguntas y dime qué pediría la dirección antes de aprobar más presupuesto."
    ],
    verificar: [
      "Contrasta cada porcentaje de avance y monto de presupuesto con el informe y la herramienta de gestión del proyecto.",
      "Revisa que el semáforo de cada frente coincida con lo que reporta el equipo.",
      "Confirma que la traducción a lenguaje de negocio no oculte un riesgo importante.",
      "Ensaya con las notas del orador y verifica que todo quepa en 10 minutos."
    ]
  }
];
