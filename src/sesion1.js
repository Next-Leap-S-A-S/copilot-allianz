const AREAS = [
  {
    id: "suscripcion", nombre: "Suscripción", color: "#c14c78",
    caso: "Reunión de 30 minutos con un cliente pyme del sector alimentos."
  },
  {
    id: "siniestros", nombre: "Siniestros", color: "#b8790a",
    caso: "Reunión semanal de siniestros complejos."
  },
  {
    id: "comercial", nombre: "Comercial y canales", color: "#c85a24",
    caso: "Comité semanal de ventas."
  },
  {
    id: "servicio", nombre: "Servicio al cliente", color: "#4a3aa7",
    caso: "Reunión de calidad con las quejas de la semana."
  },
  {
    id: "tecnica", nombre: "Técnica y actuarial", color: "#2a78d6",
    caso: "Revisión de tarifas."
  },
  {
    id: "juridico", nombre: "Jurídico y cumplimiento", color: "#158f66",
    caso: "Comité de cumplimiento."
  },
  {
    id: "finanzas", nombre: "Finanzas", color: "#087a08",
    caso: "Coordinación del cierre mensual."
  },
  {
    id: "talento", nombre: "Talento humano", color: "#ad3a2e",
    caso: "Reunión de onboarding."
  },
  {
    id: "tecnologia", nombre: "Tecnología y operaciones", color: "#6b6c75",
    caso: "Comité de proyectos."
  }
];



const MARCO = [
  { m: "Objetivo", rci: "Instrucción", ej: "Prepárame 5 viñetas para la reunión con la pyme del sector alimentos." },
  { m: "Contexto", rci: "Contexto", ej: "Es una cotización de daños y la reunión dura 30 minutos." },
  { m: "Fuente", rci: "Dónde buscar", ej: "Usa mis correos y chats de Teams de las últimas dos semanas." },
  { m: "Expectativas", rci: "Formato y límites", ej: "Tono formal, tabla de 5 filas, marca los supuestos." }
];







const SESIONES = [
  { n: 1, titulo: "Copilot para productividad", detalle: "Teams, Planner, OneNote y prompting avanzado. El ciclo completo de una reunión.", estado: "abierta" },
  { n: 2, titulo: "Copilot dentro de Office 365", detalle: "Outlook, Word, Excel y PowerPoint. Un comité de punta a punta con datos propios.", estado: "pronto" },
  { n: 3, titulo: "Cuadernos y agentes: construcción", detalle: "Cuándo usar un cuaderno y cuándo un agente. Construcción de agentes reales por área.", estado: "pronto" },
  { n: 4, titulo: "Agentes: pruebas y entrega", detalle: "Casos difíciles, ajustes y plan de seguimiento. Cada área presenta su agente.", estado: "pronto" }
];


const LICENCIAS = [
  {
    nombre: "Copilot Chat", tipo: "Cuenta de trabajo, sin costo extra", estado: "base",
    datos: "Responde con la web pública y con lo que pegues o adjuntes. No lee los correos, chats, reuniones ni archivos de la organización.",
    apps: "Chat aparte. Sin Copilot dentro de Word, Excel, PowerPoint ni OneNote en cuentas sin licencia."
  },
  {
    nombre: "Copilot Pro", tipo: "Cuenta personal de Microsoft", estado: "no",
    datos: "No se conecta a los datos de la organización. No es para trabajar con información de Allianz.",
    apps: "Microsoft lo retiró y lo reemplazó por Microsoft 365 Premium, también personal."
  },
  {
    nombre: "Microsoft 365 Copilot", tipo: "Cuenta de trabajo, licencia paga por persona", estado: "si",
    datos: "Lee correos, chats, reuniones y archivos a los que ya tienes permiso, a través de Microsoft Graph.",
    apps: "Copilot dentro de Teams, Outlook, Word, Excel, PowerPoint y OneNote, más agentes y cuadernos. Es el nivel que el programa llama Copilot Premium."
  },
  {
    nombre: "Copilot Cowork", tipo: "Agente de Microsoft 365 Copilot que ejecuta tareas de varios pasos", estado: "no",
    datos: "Microsoft lo dio por disponible el 16 de junio de 2026. Pide la licencia de Microsoft 365 Copilot y se cobra aparte según el uso.",
    apps: "La licencia de Allianz no lo incluye."
  }
];

const IMPLICA = [
  "En esta formación tú pides y tú revisas, paso a paso. Nadie le delega a Copilot una tarea larga para que la ejecute sola.",
  "Si en un video, un artículo o una demo ves Copilot Cowork, no lo busques en tu Copilot. No está en su licencia.",
  "Todo lo que hacemos se resuelve con Copilot Chat, el panel de Copilot en Teams, Facilitator, Planner Agent y OneNote, según lo que el administrador haya habilitado.",
  "Para repetir un trabajo sin escribir el prompt cada vez, usaremos cuadernos y agentes propios en las sesiones 3 y 4."
];

const COMPRUEBA = [
  "Abres Copilot con tu cuenta de trabajo y ves la pestaña Trabajo junto a la Web.",
  "Escribes en Copilot Chat: «¿Qué correos recibí hoy de [nombre de un compañero]?» y responde con tus correos. Si dice que no puede, tu cuenta no lee datos de trabajo.",
  "En Word, Outlook y Teams ves el icono de Copilot.",
  "En el menú de Copilot no aparece Cowork. Es lo esperado."
];
