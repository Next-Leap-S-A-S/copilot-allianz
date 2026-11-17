const SEC_EXCEL = [
  {
    area: "suscripcion",
    titulo: "Cotizaciones de daños pyme: limpiar, calcular tasas y analizar por sector",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter), en modo edición. Si prefieres ver los pasos antes de que toque el libro, empieza en modo Plan.",
    antes: "Guarda la base cruda de cotizaciones como .xlsx en OneDrive o SharePoint. Si viene en .csv, guárdala primero como .xlsx. Deja una sola fila de encabezados, quita las celdas combinadas y confirma que el cálculo esté en Automático.",
    prompt: `ROL
Eres un analista de datos que apoya a un suscriptor de daños pyme de Allianz Colombia. Trabajas conmigo dentro del libro y editas paso a paso.

CONTEXTO
Tengo una base cruda de cotizaciones de daños pyme del último semestre: sector, ciudad, valor asegurado, prima, tasa, estado de la cotización (emitida, perdida, en curso) y fecha. Los datos están anonimizados. Viene de varias personas y tiene errores de digitación. Quiero entender en qué sectores ganamos, a qué tasa y dónde perdemos negocios.

FUENTES
Usa solo la hoja [nombre de la hoja cruda] de este libro. No uses internet ni inventes valores. Si falta una columna que necesitas, dímelo antes de seguir.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia la hoja cruda a una hoja nueva llamada Limpio y trabaja ahí. Si tienes la habilidad @clean-data, úsala. Detecta espacios de más, sectores escritos de varias formas, fechas en formatos distintos, números guardados como texto y duplicados. Muéstrame cada corrección antes de aplicarla.
2. Columnas calculadas. Agrega tasa recalculada (prima dividida entre valor asegurado, en por mil), diferencia entre tasa recalculada y tasa registrada, y mes de la cotización.
3. Análisis. Crea una tabla dinámica por sector con número de cotizaciones, tasa promedio, prima total y porcentaje de emitidas. Señala tasas atípicas y la tendencia mensual.
4. Gráficos. Un gráfico de barras de tasa promedio por sector y uno de líneas de cotizaciones por mes.
5. Informe. Crea una hoja Informe con los gráficos, la tabla dinámica y 5 hallazgos en frases cortas.

FORMATO DE SALIDA
Al terminar cada etapa, escribe en el panel una lista corta de lo que cambiaste, en qué hoja y en qué columnas.

LÍMITES
No borres ni modifiques la hoja cruda. No cambies tasas registradas: solo señala diferencias. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [SUPUESTO] cualquier criterio que tomes por tu cuenta y [VERIFICAR] los valores atípicos. Si un dato no consta, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final dime cuántas filas tenía la hoja cruda, cuántas quedaron en Limpio y por qué cambió el número. Indica qué fórmulas debo revisar a mano.`,
    seguimiento: [
      "Explícame la fórmula de la tasa recalculada paso a paso, como si se la contara a alguien que no usa Excel, y dime qué celdas usa.",
      "Filtra la tabla dinámica para ver solo cotizaciones perdidas y dime en qué sectores la tasa promedio fue más alta que la de las emitidas.",
      "Agrega a la hoja Informe una segmentación por ciudad y reescribe los 5 hallazgos para un comité de suscripción, en máximo 80 palabras."
    ],
    verificar: [
      "Abre Revisar > Mostrar cambios y confirma que Copilot no tocó la hoja cruda.",
      "Recalcula a mano la tasa de 3 cotizaciones al azar y compárala con la columna nueva.",
      "Revisa que los sectores unificados en la limpieza sí sean el mismo sector y no dos distintos.",
      "Confirma que cada fórmula use el separador de tu Excel y dé el mismo resultado si la escribes tú."
    ]
  },
  {
    area: "siniestros",
    titulo: "Inventario de siniestros abiertos: reserva, días abiertos y documentos faltantes",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter), en modo edición. Usa Revisar > Mostrar cambios para seguir cada ajuste.",
    antes: "Exporta el inventario de siniestros abiertos y guárdalo como .xlsx en OneDrive o SharePoint. Revisa que tenga una fila de encabezados, sin celdas combinadas, y que no pase de 2 millones de celdas. Confirma que el cálculo esté en Automático.",
    prompt: `ROL
Eres un analista de datos que apoya a un coordinador de siniestros de Allianz Colombia. Editas este libro conmigo, paso a paso.

CONTEXTO
Tengo un inventario crudo de siniestros abiertos con número de siniestro, ramo, fecha de aviso, fecha de ocurrencia, reserva actual, ajustador asignado y una columna de documentos recibidos escrita a mano. Los datos están anonimizados. Debo presentar el estado del inventario en el comité mensual y priorizar los casos más viejos y con más reserva.

FUENTES
Usa solo la hoja [nombre de la hoja cruda] y, si existe, la hoja [lista de documentos requeridos por ramo]. No uses información externa ni inventes montos.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia la hoja cruda a una hoja Limpio. Usa @clean-data si está disponible. Unifica nombres de ramos y ajustadores, corrige fechas en formatos distintos, convierte reservas guardadas como texto y marca duplicados por número de siniestro.
2. Columnas calculadas. Agrega días abiertos desde la fecha de aviso hasta hoy, rango de antigüedad (0 a 30, 31 a 90, 91 a 180, más de 180), documentos faltantes comparando con la lista requerida, y una prioridad Alta, Media o Baja según antigüedad y reserva.
3. Análisis. Tabla dinámica por ramo y rango de antigüedad con número de casos y reserva total. Señala ajustadores con más casos de más de 180 días y reservas atípicas.
4. Gráficos. Barras apiladas de casos por ramo y antigüedad, y un gráfico de reserva total por ajustador.
5. Informe. Hoja Informe con los gráficos, la tabla dinámica y los 10 casos de prioridad Alta.

FORMATO DE SALIDA
Después de cada etapa, resume en el panel qué hojas y columnas creaste o cambiaste.

LÍMITES
No modifiques reservas ni cierres casos. No decidas cobertura. Propón el criterio de prioridad y márcalo [SUPUESTO] hasta que yo lo apruebe. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [VERIFICAR] montos atípicos y PENDIENTE los documentos que no puedas confirmar.

CONTROL DE CALIDAD
Al final dime cuántos duplicados encontraste, cuántos siniestros no tienen fecha válida y qué fórmulas debo revisar a mano.`,
    seguimiento: [
      "Cambia el criterio de prioridad: Alta si supera 180 días o la reserva está por encima del monto que yo te indique, y vuelve a contar los casos por nivel.",
      "Haz una lista por ajustador con sus casos de prioridad Alta y los documentos faltantes, lista para enviarle por correo.",
      "Escribe en la hoja Informe 4 frases para el comité sobre la evolución del inventario y marca lo que necesita confirmación."
    ],
    verificar: [
      "Compara la reserva total de la hoja Limpio contra el total del sistema de siniestros.",
      "Revisa 3 casos al azar y confirma a mano los días abiertos y los documentos faltantes.",
      "Confirma que los duplicados marcados sean el mismo siniestro y no dos avisos distintos.",
      "Abre Revisar > Mostrar cambios y deshaz con Ctrl+Z cualquier ajuste que no aprobaste."
    ]
  },
  {
    area: "comercial",
    titulo: "Dashboard de cumplimiento de metas por asesor y canal",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter), en modo edición. El lienzo interactivo está en vista previa: si no aparece, pide los gráficos en una hoja Informe.",
    antes: "Guarda en OneDrive o SharePoint, como .xlsx, el libro con la producción del trimestre y la hoja de metas por asesor. Revisa que cada hoja tenga una fila de encabezados, sin celdas combinadas, y el cálculo en Automático.",
    prompt: `ROL
Eres un analista comercial que apoya a un gerente de canales de Allianz Colombia. Editas este libro conmigo, paso a paso.

CONTEXTO
Tengo dos hojas crudas: producción del trimestre (asesor, canal, ramo, mes, prima emitida, número de pólizas) y metas (asesor, mes, meta de prima). Los datos están anonimizados. Debo mostrar en la reunión comercial quién va cumpliendo, quién no y en qué ramos.

FUENTES
Usa solo las hojas [producción] y [metas] de este libro. No uses datos externos ni inventes metas.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia las hojas crudas a hojas nuevas con el sufijo Limpio. Usa @clean-data si lo tienes. Unifica nombres de asesores y canales escritos distinto, convierte primas guardadas como texto, corrige meses y marca duplicados.
2. Columnas calculadas. En la hoja de producción limpia trae la meta de cada asesor y mes desde la hoja de metas con una fórmula entre hojas. Agrega porcentaje de cumplimiento, brecha en pesos y un semáforo: verde desde 100 por ciento, amarillo de 80 a 99, rojo por debajo de 80.
3. Análisis. Tabla dinámica por asesor y canal con prima, meta y cumplimiento. Muestra la tendencia mensual y los asesores con caídas atípicas.
4. Gráficos. Barras de cumplimiento por asesor ordenadas de mayor a menor, y líneas de prima contra meta por mes.
5. Dashboard. Si tienes el lienzo interactivo, propón un dashboard. Si no, crea una hoja Informe con los gráficos, la tabla dinámica, segmentaciones por canal y ramo, y 5 hallazgos.

FORMATO DE SALIDA
Al cerrar cada etapa, lista en el panel lo que creaste y en qué hoja.

LÍMITES
No cambies metas ni primas originales. No califiques el desempeño de personas: solo muestra cifras. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [SUPUESTO] los cortes del semáforo hasta que yo los apruebe y [VERIFICAR] los asesores sin meta. Si una meta no aparece, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final dime cuántos asesores no cruzaron entre las dos hojas y por qué. Indica qué fórmula entre hojas debo revisar a mano.`,
    seguimiento: [
      "Muéstrame solo el canal de agencias y dime qué ramos explican la brecha más grande frente a la meta.",
      "Agrega una columna de proyección al cierre del trimestre si cada asesor mantiene el ritmo actual, y explícame cómo la calculaste.",
      "Redacta 4 frases para abrir la reunión comercial con los resultados del dashboard, en tono neutral y sin nombres propios."
    ],
    verificar: [
      "Compara la prima total del dashboard con el reporte oficial de producción del trimestre.",
      "Revisa los asesores que no cruzaron entre hojas: suele ser un nombre escrito distinto.",
      "Confirma a mano el cumplimiento de 2 asesores y su color en el semáforo.",
      "Revisa que las segmentaciones filtren todos los gráficos de la hoja Informe."
    ]
  },
  {
    area: "servicio",
    titulo: "Encuesta de satisfacción: limpiar respuestas, medir y encontrar causas",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter), en modo edición. Usa el modo solo chat si primero quieres preguntar sin cambiar el libro.",
    antes: "Descarga las respuestas de la encuesta y guárdalas como .xlsx en OneDrive o SharePoint (si vienen en .csv, guárdalas primero como .xlsx). Deja una fila de encabezados, sin celdas combinadas, con el cálculo en Automático.",
    prompt: `ROL
Eres un analista de experiencia del cliente que apoya a un líder de servicio al cliente de Allianz Colombia. Editas este libro conmigo, paso a paso.

CONTEXTO
Tengo las respuestas crudas de la encuesta de satisfacción del último trimestre: fecha, canal de atención (línea, chat, oficina, correo), producto, calificación de 1 a 5, recomendación de 0 a 10 y un comentario libre. Los datos están anonimizados. Quiero saber cómo vamos por canal y qué temas generan insatisfacción.

FUENTES
Usa solo la hoja [nombre de la hoja de respuestas]. No uses información externa ni inventes respuestas.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia la hoja cruda a una hoja Limpio. Usa @clean-data si está disponible. Unifica nombres de canales y productos, corrige fechas, convierte calificaciones guardadas como texto, marca respuestas duplicadas y las que tengan valores fuera de escala.
2. Columnas calculadas. Agrega mes, tipo de cliente según la recomendación (promotor de 9 a 10, pasivo de 7 a 8, detractor de 0 a 6) y un tema principal del comentario (tiempos, trato, claridad, trámite, otro).
3. Análisis. Tabla dinámica por canal y mes con número de respuestas, calificación promedio y NPS (porcentaje de promotores menos porcentaje de detractores). Señala la tendencia y los meses o canales atípicos. Cuenta los temas entre detractores.
4. Gráficos. Líneas de NPS por mes y canal, y barras de temas entre detractores.
5. Informe. Hoja Informe con los gráficos, la tabla dinámica y 5 hallazgos con un comentario de ejemplo cada uno.

FORMATO DE SALIDA
Al cerrar cada etapa, resume en el panel lo que cambiaste y en qué hoja.

LÍMITES
No borres comentarios ni cambies calificaciones. La clasificación de temas es una propuesta: márcala [SUPUESTO]. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [VERIFICAR] los canales con menos de 30 respuestas. Si un dato no consta, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final dime cuántas respuestas descartaste o marcaste y por qué, y qué fórmulas debo revisar a mano.`,
    seguimiento: [
      "Muéstrame 10 comentarios de detractores del canal de línea telefónica y dime si el tema asignado a cada uno es correcto.",
      "Compara el NPS de este trimestre con el anterior si tengo la hoja del trimestre anterior, y explica la diferencia en 3 frases.",
      "Propón 3 acciones de mejora basadas en los temas más frecuentes, marcando cuáles dependen de otras áreas."
    ],
    verificar: [
      "Recalcula a mano el NPS de un canal con los conteos de promotores y detractores.",
      "Lee 10 comentarios al azar y confirma que el tema asignado tenga sentido.",
      "Revisa que las respuestas fuera de escala se marcaron y no se borraron.",
      "Abre Revisar > Mostrar cambios y confirma que la hoja cruda quedó intacta."
    ]
  },
  {
    area: "tecnica",
    titulo: "Siniestralidad por ramo: limpiar la base y leer la tendencia",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter). Empieza en modo Plan para revisar la secuencia y luego pasa a modo edición.",
    antes: "Guarda la base de primas y siniestros por ramo como .xlsx en OneDrive o SharePoint. Revisa que tenga una fila de encabezados, sin celdas combinadas, menos de 2 millones de celdas y el cálculo en Automático.",
    prompt: `ROL
Eres un analista técnico que apoya a un actuario de Allianz Colombia. Editas este libro conmigo, paso a paso, con criterio técnico.

CONTEXTO
Tengo una base cruda mensual de los últimos 36 meses con ramo, producto, mes, prima devengada, siniestros incurridos, número de siniestros y número de pólizas expuestas. Los datos están anonimizados. Viene de dos extracciones distintas y tiene cortes de mes en formatos diferentes. Quiero ver la siniestralidad por ramo y su tendencia.

FUENTES
Usa solo la hoja [nombre de la hoja cruda] de este libro. No uses datos de mercado ni supuestos externos.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia la hoja cruda a una hoja Limpio. Usa @clean-data si está disponible. Unifica nombres de ramos, normaliza los meses a una sola fecha de corte, convierte cifras guardadas como texto y marca meses duplicados por ramo y producto. Señala primas negativas o en cero.
2. Columnas calculadas. Agrega siniestralidad (incurridos divididos entre prima devengada), frecuencia (siniestros entre pólizas expuestas), severidad (incurridos entre número de siniestros) y siniestralidad acumulada de 12 meses móviles.
3. Análisis. Tabla dinámica por ramo y año con prima, incurridos y siniestralidad. Identifica la tendencia de cada ramo y los meses atípicos.
4. Gráficos. Líneas de siniestralidad de 12 meses móviles por ramo y un gráfico de frecuencia contra severidad.
5. Informe. Hoja Informe con los gráficos, la tabla dinámica y 5 hallazgos técnicos en frases cortas.

FORMATO DE SALIDA
Al cerrar cada etapa, lista en el panel las hojas y columnas que creaste.

LÍMITES
No hagas proyecciones ni ajustes actuariales como desarrollo de siniestros o IBNR. No cambies cifras originales. Explica en una frase cada fórmula que insertes, con el nombre de la función en español, y cómo manejas divisiones entre cero. Marca [VERIFICAR] los meses atípicos y [SUPUESTO] cualquier criterio de limpieza propio. Si un mes falta, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final compara los totales de prima e incurridos entre la hoja cruda y la hoja Limpio y explica cualquier diferencia.`,
    seguimiento: [
      "Explícame la fórmula de 12 meses móviles: qué rango toma en cada fila y qué pasa en los primeros 11 meses.",
      "Separa el ramo con peor tendencia por producto y dime cuál explica el cambio en la tendencia.",
      "Reescribe los hallazgos para un comité técnico, con cifras y sin conclusiones de tarificación."
    ],
    verificar: [
      "Cuadra los totales de prima e incurridos de la hoja Limpio contra la fuente oficial.",
      "Recalcula a mano la siniestralidad de 12 meses móviles de un ramo en un mes concreto.",
      "Revisa que los meses duplicados se resolvieron con el criterio que aprobaste.",
      "Confirma que ninguna fórmula devuelve error por división entre cero."
    ]
  },
  {
    area: "juridico",
    titulo: "Inventario de requerimientos regulatorios: vencimientos y alertas",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter), en modo edición. Revisa cada cambio en Revisar > Mostrar cambios.",
    antes: "Guarda el inventario de requerimientos como .xlsx en OneDrive o SharePoint, en una carpeta con los permisos del equipo. Deja una fila de encabezados, sin celdas combinadas, y el cálculo en Automático.",
    prompt: `ROL
Eres un analista de cumplimiento que apoya a un abogado del área jurídica y de cumplimiento de Allianz Colombia. Editas este libro conmigo, paso a paso.

CONTEXTO
Tengo un inventario crudo de requerimientos regulatorios y de entes de control: número de radicado, entidad que lo envía, tema, fecha de recibo, plazo en días hábiles o fecha de vencimiento, área responsable, estado y observaciones. Los datos están anonimizados. Lo alimentan varias personas y tiene fechas en formatos distintos. Necesito saber qué vence pronto y qué está en riesgo.

FUENTES
Usa solo la hoja [nombre de la hoja cruda] y, si existe, la hoja [festivos de Colombia del año]. No uses internet ni interpretes normas.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia la hoja cruda a una hoja Limpio. Usa @clean-data si está disponible. Unifica nombres de entidades, áreas y estados, corrige fechas, marca radicados duplicados y filas sin fecha de vencimiento.
2. Columnas calculadas. Calcula la fecha de vencimiento cuando solo haya plazo en días hábiles, descontando fines de semana y los festivos de la hoja indicada. Agrega días restantes hasta el vencimiento y una alerta: vencido, vence en 5 días hábiles o menos, en plazo.
3. Análisis. Tabla dinámica por entidad y área con número de requerimientos y alertas. Señala áreas con más vencidos y la tendencia mensual de requerimientos recibidos.
4. Gráficos. Barras de requerimientos por alerta y área, y líneas de recibidos por mes.
5. Informe. Hoja Informe con los gráficos, la tabla dinámica y la lista de lo que vence en los próximos 10 días hábiles.

FORMATO DE SALIDA
Al cerrar cada etapa, lista en el panel lo que cambiaste y en qué hoja.

LÍMITES
No cambies estados ni fechas originales. No interpretes normas ni sugieras respuestas al ente. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [VERIFICAR] toda fecha calculada y [SUPUESTO] si el plazo es ambiguo. Si falta la fecha de recibo, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final dime cuántos requerimientos no tienen fecha válida y cuáles vencimientos calculaste tú y no venían en la fuente.`,
    seguimiento: [
      "Filtra solo los requerimientos de la entidad con más vencidos y ordénalos por días restantes, con el área responsable de cada uno.",
      "Prepara una tabla por área con sus vencidos y próximos a vencer, lista para pegar en un correo a cada responsable.",
      "Agrega formato condicional en rojo, amarillo y verde según la alerta, y explícame la regla que usaste."
    ],
    verificar: [
      "Confirma a mano 3 fechas de vencimiento calculadas contra el calendario de días hábiles.",
      "Revisa que la hoja de festivos tenga todos los festivos del año en Colombia.",
      "Compara los radicados del informe con el sistema de correspondencia oficial.",
      "Revisa que ningún requerimiento vencido haya quedado marcado como en plazo."
    ]
  },
  {
    area: "finanzas",
    titulo: "Ejecución contra presupuesto: variaciones, fórmulas complejas y dashboard",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter), en modo edición. El lienzo interactivo está en vista previa: si no lo tienes, pide el dashboard en una hoja Informe.",
    antes: "Guarda en OneDrive o SharePoint, como .xlsx, el libro con la ejecución real del año y la hoja de presupuesto. Revisa que cada hoja tenga una fila de encabezados, sin celdas combinadas, y el cálculo en Automático.",
    prompt: `ROL
Eres un analista financiero que apoya a un profesional de planeación financiera de Allianz Colombia. Editas este libro conmigo, paso a paso.

CONTEXTO
Tengo dos hojas crudas: ejecución real por mes (centro de costo, cuenta, concepto, mes, valor) y presupuesto (centro de costo, cuenta, mes, valor presupuestado). Los datos están anonimizados. La ejecución viene de un sistema contable y tiene cuentas con espacios, valores con signo invertido y meses escritos de varias formas. Debo explicar las variaciones al cierre del mes.

FUENTES
Usa solo las hojas [ejecución] y [presupuesto] de este libro. No uses cifras externas ni inventes presupuestos.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia las hojas crudas a hojas nuevas con el sufijo Limpio. Usa @clean-data si lo tienes. Quita espacios en las cuentas, unifica centros de costo, normaliza los meses, convierte valores en texto y señala signos invertidos sin corregirlos.
2. Columnas calculadas. Trae el presupuesto de cada centro de costo, cuenta y mes con una fórmula entre hojas. Agrega variación en pesos, variación en porcentaje, acumulado del año real y presupuestado, y una marca de variación relevante si supera [umbral] por ciento y [monto] en pesos.
3. Análisis. Tabla dinámica por centro de costo y cuenta con real, presupuesto y variación. Señala la tendencia mensual y las variaciones atípicas.
4. Gráficos. Barras de las 10 mayores variaciones y líneas de real contra presupuesto acumulado.
5. Dashboard. Si tienes el lienzo interactivo, propón un dashboard. Si no, crea una hoja Informe con los gráficos, la tabla dinámica, segmentación por centro de costo y 5 hallazgos.

FORMATO DE SALIDA
Al cerrar cada etapa, lista en el panel lo que creaste y en qué hoja.

LÍMITES
No cambies cifras originales ni reclasifiques cuentas. No expliques las causas de una variación como hecho: propón hipótesis marcadas [SUPUESTO]. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [VERIFICAR] las cuentas que no cruzaron entre hojas. Si un presupuesto no existe, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final cuadra los totales de real y presupuesto entre las hojas crudas y las limpias, y dime qué fórmulas debo revisar a mano.`,
    seguimiento: [
      "Explícame la fórmula entre hojas que trae el presupuesto: qué busca, en qué rango y qué devuelve si no encuentra la cuenta.",
      "Muéstrame solo las variaciones relevantes del centro de costo con mayor desviación y ordénalas por impacto en pesos.",
      "Redacta un comentario de cierre de mes de máximo 120 palabras con las 3 variaciones principales, separando cifras de hipótesis."
    ],
    verificar: [
      "Cuadra el total real y el total presupuestado del dashboard contra el reporte contable oficial.",
      "Revisa las cuentas que no cruzaron entre hojas y corrige el nombre o código en la fuente.",
      "Confirma a mano la variación de 2 cuentas y el acumulado de un mes.",
      "Revisa que los signos invertidos señalados no se hayan corregido sin tu aprobación."
    ]
  },
  {
    area: "talento",
    titulo: "Encuesta de clima: limpiar respuestas y leer resultados por dimensión",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter), en modo edición. Usa el modo solo chat para preguntas que no deban tocar el libro.",
    antes: "Guarda las respuestas de la encuesta como .xlsx en OneDrive o SharePoint, en una carpeta con acceso restringido. Si vienen en .csv, guárdalas primero como .xlsx. Deja una fila de encabezados, sin celdas combinadas, y el cálculo en Automático.",
    prompt: `ROL
Eres un analista de gente que apoya a un profesional de talento humano de Allianz Colombia. Editas este libro conmigo, paso a paso, con cuidado por la confidencialidad.

CONTEXTO
Tengo las respuestas crudas de la encuesta de clima: área, antigüedad en rangos, modalidad de trabajo, una columna por pregunta con escala de 1 a 5 y un comentario libre. Las preguntas se agrupan en dimensiones como liderazgo, reconocimiento, carga de trabajo y desarrollo. Los datos están anonimizados y no tienen nombres. Debo presentar resultados por área sin exponer a nadie.

FUENTES
Usa solo las hojas [respuestas] y [mapa de preguntas por dimensión] de este libro. No uses referencias externas.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia la hoja cruda a una hoja Limpio. Usa @clean-data si está disponible. Unifica nombres de áreas, convierte respuestas guardadas como texto, marca valores fuera de escala, respuestas vacías y filas duplicadas.
2. Columnas calculadas. Agrega el promedio de cada dimensión por persona usando el mapa de preguntas, y el porcentaje favorable (respuestas 4 y 5) por dimensión.
3. Análisis. Tabla dinámica por área y dimensión con número de respuestas, promedio y porcentaje favorable. Oculta cualquier grupo con menos de [5] respuestas. Señala las dimensiones más bajas y las brechas atípicas entre áreas.
4. Gráficos. Barras de porcentaje favorable por dimensión y un mapa de calor de área contra dimensión con formato condicional.
5. Informe. Hoja Informe con los gráficos, la tabla dinámica y 5 hallazgos, más los temas frecuentes de los comentarios sin citar textos que identifiquen a alguien.

FORMATO DE SALIDA
Al cerrar cada etapa, resume en el panel lo que cambiaste y en qué hoja.

LÍMITES
No intentes identificar personas ni cruces que reduzcan grupos a menos de [5] respuestas. No cambies respuestas originales. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [SUPUESTO] la agrupación de temas de comentarios y [VERIFICAR] áreas con pocas respuestas. Si una pregunta no está en el mapa, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final dime cuántas respuestas válidas quedaron, cuántas descartaste y qué grupos ocultaste por tamaño.`,
    seguimiento: [
      "Compara la dimensión más baja entre modalidades de trabajo, respetando el mínimo de respuestas por grupo.",
      "Resume los comentarios de la dimensión más baja en 5 temas, sin citas textuales y sin datos que identifiquen a alguien.",
      "Propón 3 preguntas para conversar con los líderes en la socialización de resultados, a partir de los hallazgos."
    ],
    verificar: [
      "Revisa que ningún gráfico ni tabla muestre grupos por debajo del mínimo de respuestas.",
      "Recalcula a mano el porcentaje favorable de una dimensión en un área.",
      "Lee los temas de comentarios y confirma que no permitan reconocer a ninguna persona.",
      "Confirma que el libro quedó en una ubicación con acceso restringido antes de compartir el informe."
    ]
  },
  {
    area: "tecnologia",
    titulo: "Priorización de incidentes: limpiar la exportación y ordenar por impacto",
    donde: "Panel de Copilot en Excel: botón Copilot en la esquina inferior derecha (o Alt+C y luego Enter). Empieza en modo Plan para revisar la secuencia y luego pasa a modo edición.",
    antes: "Exporta los incidentes de la herramienta de gestión y guárdalos como .xlsx en OneDrive o SharePoint (los .csv se guardan primero como .xlsx). Deja una fila de encabezados, sin celdas combinadas, menos de 2 millones de celdas y el cálculo en Automático.",
    prompt: `ROL
Eres un analista de operaciones que apoya a un líder de tecnología y operaciones de Allianz Colombia. Editas este libro conmigo, paso a paso.

CONTEXTO
Tengo una exportación cruda de incidentes del último trimestre: número de ticket, fecha de apertura, fecha de cierre, aplicación, categoría, impacto, urgencia, número de usuarios afectados, grupo resolutor y estado. Los datos están anonimizados. Las categorías se escriben de muchas formas y hay fechas con hora en formatos distintos. Debo priorizar el backlog y mostrar dónde se concentran los problemas.

FUENTES
Usa solo la hoja [nombre de la hoja cruda] y, si existe, la hoja [acuerdos de nivel de servicio por prioridad]. No uses información externa.

INSTRUCCIÓN
Trabaja por etapas y espera mi aprobación al final de cada una.
1. Revisión y limpieza. Copia la hoja cruda a una hoja Limpio. Usa @clean-data si está disponible. Unifica aplicaciones, categorías y grupos, normaliza fechas y horas, marca tickets duplicados y abiertos sin grupo asignado.
2. Columnas calculadas. Agrega horas de resolución o de antigüedad si sigue abierto, una puntuación de prioridad que combine impacto, urgencia y usuarios afectados, y si cumple o incumple el nivel de servicio.
3. Análisis. Tabla dinámica por aplicación y categoría con número de incidentes, tiempo promedio de resolución y porcentaje de incumplimiento. Señala la tendencia semanal y las aplicaciones con incidentes recurrentes o atípicos.
4. Gráficos. Barras de incidentes por aplicación, ordenadas de mayor a menor, y líneas de incidentes abiertos por semana.
5. Informe. Hoja Informe con los gráficos, la tabla dinámica y los 15 tickets abiertos de mayor puntuación.

FORMATO DE SALIDA
Al cerrar cada etapa, lista en el panel lo que creaste y en qué hoja.

LÍMITES
No cierres ni reasignes tickets. No cambies datos originales. La fórmula de puntuación es una propuesta: márcala [SUPUESTO] hasta que yo la apruebe. Explica en una frase cada fórmula que insertes, con el nombre de la función en español. Marca [VERIFICAR] tickets con fechas incoherentes. Si falta el nivel de servicio de una prioridad, escribe PENDIENTE.

CONTROL DE CALIDAD
Al final dime cuántos tickets tenía la exportación, cuántos quedaron en Limpio y cuántos tienen fecha de cierre anterior a la de apertura.`,
    seguimiento: [
      "Cambia el peso de usuarios afectados en la puntuación al doble y muéstrame qué tickets entran y salen del top 15.",
      "Agrupa los incidentes recurrentes de la aplicación con más tickets por categoría y dime si parecen tener una causa común, marcándolo como hipótesis.",
      "Prepara una tabla por grupo resolutor con sus tickets abiertos de mayor prioridad, lista para la reunión diaria."
    ],
    verificar: [
      "Compara el número de tickets abiertos del informe con el tablero de la herramienta de gestión.",
      "Recalcula a mano la puntuación y las horas de 3 tickets al azar.",
      "Revisa que las categorías unificadas no mezclen tipos de incidente distintos.",
      "Abre Revisar > Mostrar cambios y confirma que la hoja cruda quedó intacta."
    ]
  }
];
