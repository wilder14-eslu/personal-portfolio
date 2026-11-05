// Content checked against the visible pages of CV_ES.pdf, November 2026.
// Project metrics describe the evaluations in the CV, not live production results.
import unmsm from "../assets/UNMSM.webp";
import tokyo from "../assets/utokyo_logo.svg";
import databricks from "../assets/databricks_cert.svg";
import duke from "../assets/duke.webp";
import stanford from "../assets/stanford_new.webp";

export const resumeLinkEs = "/CV_Wilder_Espinoza_ES.pdf";
export const resumeLinkEn = "/CV_Wilder_Espinoza_EN.pdf";
export const repoLink = "https://github.com/wilder14-eslu/personal-portfolio";
export const callToAction = "mailto:esluwilder@gmail.com";
const github = "https://github.com/wilder14-eslu";
const socialMedia = [
  { id: "linkedin", name: "LinkedIn", link: "https://www.linkedin.com/in/wilder-eslu/" },
  { id: "github", name: "GitHub", link: github },
  { id: "hackerrank", name: "HackerRank", link: "https://www.hackerrank.com/profile/wilder_espinoza3" },
  { id: "gitlab", name: "GitLab", link: "https://gitlab.com/wilder14-eslu" },
];

export const es = {
  resumeLink: resumeLinkEs, repoLink, callToAction, socialMedia,
  navLinks: [
    { id: "about", title: "Perfil" }, { id: "research", title: "Investigación" },
    { id: "projects", title: "Proyectos" }, { id: "publications", title: "Publicaciones" },
    { id: "skills", title: "Experiencia" }, { id: "contactMe", title: "Contacto" },
  ],
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna", shortName: "Wilder Espinoza",
    tagLine: "Advanced Analytics · Credit Risk · ML Engineering",
    location: "Lima, Perú", phone: "+51 910 049 106", email: "esluwilder@gmail.com",
    intro: "Estudiante de Estadística en la UNMSM. Transformo problemas de negocio en soluciones medibles de machine learning, con enfoque en riesgo crediticio, analítica avanzada y MLOps.",
  },
  ui: {
    skip: "Saltar al contenido", navigation: "Navegación principal", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
    language: "Switch to English", heroLabel: "ESTADÍSTICA + MACHINE LEARNING",
    headline: "De los datos a", headlineAccent: "mejores decisiones.",
    projectsCta: "Explorar proyectos", cvCta: "Descargar CV", cvNote: "PDF · Español",
    focus: "Del problema de negocio al modelo en producción.",
    caseLabel: "UN CASO DE MI PORTAFOLIO", caseTitle: "Del score a la decisión.", caseSubtitle: "Credit Risk Platform · Lending Club",
    chartTitle: "Tasa de default", baseline: "Cartera de referencia", approved: "Cartera aprobada",
    chartNote: "Evaluación del proyecto con umbral de 0.18. No representa resultados de una cartera real.",
    caseMetric: "solicitudes aprobadas", caseData: "préstamos analizados", caseLink: "Conocer el proyecto",
    steps: ["Datos", "Modelo de PD", "Política de crédito"],
    impactLabel: "IMPACTO EN OPERACIONES", impactContext: "Mebol · 2024–2025",
    impact: [{ value: "83%", label: "menos tiempo en reportes", note: "De 6 a 1 hora por semana" }, { value: "28%", label: "menos errores de registro", note: "Validación y calidad con SQL" }, { value: "450+", label: "productos monitoreados", note: "Dashboards operativos en Power BI" }],
    projectsEyebrow: "01 / TRABAJO SELECCIONADO", projectsTitle: "Problemas reales. Soluciones medibles.",
    projectsIntro: "Riesgo crediticio, analítica espacial e IA aplicada. El problema, la solución y la evidencia detrás de cada proyecto.",
    filtersLabel: "Filtrar proyectos", filters: [{ id: "all", label: "Todos" }, { id: "risk", label: "Riesgo y ML" }, { id: "ai", label: "IA generativa" }, { id: "spatial", label: "Analítica espacial" }],
    projectCount: "proyectos", featured: "PROYECTO DESTACADO", details: "Método y resultados", code: "Código", demo: "Ver demo", poster: "Ver póster", project: "Ver proyecto",
    experienceEyebrow: "02 / EXPERIENCIA Y HABILIDADES", experienceTitle: "Analítica con contexto de negocio.",
    experienceIntro: "Mi punto de partida es entender la operación. Después, construir una solución simple, mantenible y útil para tomar decisiones.",
    workLabel: "EXPERIENCIA PROFESIONAL", skillsTitle: "Herramientas y criterio técnico", skillsIntro: "Una base estadística conectada con todo el ciclo de vida del modelo.",
    educationEyebrow: "03 / APRENDIZAJE CONTINUO", educationTitle: "Formación que se lleva a la práctica.",
    educationIntro: "Estadística, machine learning y una perspectiva de aprendizaje continuo.",
    certificatesTitle: "Certificaciones", languagesTitle: "Idiomas", languages: "Español nativo · Inglés: Advanced English as a Second Language (Saylor)",
    awardLabel: "HACKATHON ORCHESTRATE · OPENAI × HACKERRANK", awardTitle: "Medalla de bronce. Top 54 global.",
    awardDescription: "Entre más de 60,000 participantes. Un agente auditor de borrado de datos, construido en 24 horas, con 72.1/100 de puntuación.", awardLink: "Explorar el agente", awardDate: "Octubre 2026",
    contactEyebrow: "04 / CONECTEMOS", contactTitle: "La próxima buena decisión empieza con una conversación.",
    contactDescription: "Conversemos sobre riesgo crediticio, analítica o cómo llevar una idea de machine learning a la práctica.",
    contactCta: "Escríbeme", backTop: "Volver arriba", footerNote: "Estadística, código y decisiones con evidencia.",
  },
  experiences: [{
    organisation: "Mebol", industry: "Industria alimentaria", title: "Encargado de Almacén",
    duration: "2024–2025 · 6 meses", location: "Lima, Perú", focus: "Analítica aplicada a operaciones",
    content: [
      "Reduje 28% los errores de registro de inventario al estandarizar reglas de validación con compras y ventas e implementarlas en SQL.",
      "Automaticé la reportería de inventario con SQL y Excel: de unas 6 horas a 1 hora semanal, liberando 5 horas para analizar stock y reposición.",
      "Desarrollé dashboards en Power BI para seguir la disponibilidad y trazabilidad de más de 450 productos y apoyar decisiones del almacén.",
    ],
  }],
  skills: [
    { title: "Riesgo y negocio", items: ["Probability of Default", "Scorecards WoE/IV", "Políticas de aprobación", "Cut-offs por costo", "Backtesting", "KPIs"] },
    { title: "Estadística y modelado", items: ["Validación out-of-time", "Series temporales", "Calibración", "ROC-AUC · KS · Gini", "SHAP", "Pruebas estadísticas"] },
    { title: "Datos y machine learning", items: ["Python · SQL · R", "PySpark · pandas", "scikit-learn", "CatBoost · XGBoost · LightGBM", "Optuna", "PyTorch"] },
    { title: "MLOps e ingeniería", items: ["Databricks · MLflow", "Delta Lake · Unity Catalog", "FastAPI · Docker", "GitHub Actions · CI/CD", "Champion / challenger", "Drift y reentrenamiento"] },
    { title: "IA aplicada y comunicación", items: ["RAG · embeddings · MCP", "Agentes de IA", "Power BI · Streamlit", "Scrum · Jira", "Comunicación con stakeholders"] },
    { title: "Nube · fundamentos", note: "Databricks: uso práctico. Azure y AWS: fundamentos y nociones básicas.", items: ["Google Cloud Run", "Azure Container Apps", "Azure OpenAI", "Terraform", "AWS"] },
  ],
  projects: [
    {
      id: "credit-risk", category: "risk", kind: "RIESGO CREDITICIO / MLOPS", title: "Credit Risk Platform", subtitle: "Del modelo de PD a una política de aprobación.",
      content: "Modelé la probabilidad de default con 887 mil préstamos de Lending Club, comparé cuatro algoritmos con un scorecard WoE/IV y conecté el resultado con decisiones de crédito y un flujo MLOps en Databricks.",
      date: "Sep–Oct 2026", featured: true,
      metrics: [{ value: "0.691", label: "ROC-AUC en test" }, { value: "61.3%", label: "aprobación en evaluación" }, { value: "169", label: "pruebas automatizadas" }],
      stack: ["Python", "CatBoost", "Databricks", "MLflow", "FastAPI", "SHAP"],
      details: ["Validación out-of-time y exclusión de 22 variables posteriores al desembolso para prevenir data leakage. Benchmark WoE/IV: ROC-AUC 0.681.", "Con umbral de 0.18 y costo FN:FP de 5:1, la tasa de default pasa de 15.5% a 9.6% en la cartera aprobada de la evaluación.", "CI/CD, Model Registry, champion/challenger y rollback. En replay temporal se activaron dos reentrenamientos; el challenger no se promovió por falta de evidencia estadística (p = 0.61)."],
      github: `${github}/credit-risk-platform-2.0`, link: "https://credit-risk-platform-20-adqnv9j2qftznvu9uzdqem.streamlit.app/", linkType: "demo",
    },
    {
      id: "geobanca", category: "spatial", kind: "ANALÍTICA ESPACIAL", title: "GeoBanca Norte Perú", subtitle: "Dónde expandir el acceso financiero.",
      content: "Integré datos financieros, demográficos y climáticos de 327 distritos para evaluar dónde ubicar nuevos canales de atención, equilibrando cobertura y riesgo por El Niño.",
      date: "Oct 2026", metrics: [{ value: "63,643", label: "adultos cubiertos en la optimización" }],
      stack: ["GeoPandas", "PySAL", "Kriging", "SHAP", "QGIS"],
      details: ["25 puntos de servicio propuestos con programación entera (MCLP, solver CBC).", "El modelo Durbin espacial obtuvo AIC 1648 frente a 1696; el kriging redujo 23% el RMSE frente a IDW en validación cruzada.", "Resultados presentados en un póster interactivo con mapas y 29 figuras."],
      github: `${github}/geobanca-norte-peru`, link: "https://wilder14-eslu.github.io/geobanca-norte-peru/", linkType: "poster",
    },
    {
      id: "riskrag", category: "ai", kind: "IA GENERATIVA / RIESGO", title: "RiskRAG", subtitle: "Respuestas con evidencia. Cálculos deterministas.",
      content: "Asistente para consultar normativa de riesgo crediticio y seguros de la SBS con citas verificables. Las provisiones y clasificaciones se calculan con reglas de negocio, separadas del LLM.",
      date: "Oct 2026", metrics: [{ value: "89.6%", label: "precisión de citas en evaluación" }],
      stack: ["RAG híbrido", "FastAPI", "pgvector", "MCP", "Terraform"],
      details: ["Búsqueda vectorial + BM25, fusión RRF, reranking y abstención cuando no hay evidencia suficiente.", "88 pruebas y ocho métricas en CI/CD; 91.7% de detección de intención y 100% de contención adversaria en el conjunto evaluado.", "Infraestructura de Azure escrita en Terraform y validada; aún no desplegada en una suscripción real."],
      github: `${github}/rag-riesgo-credito-seguros`, link: "https://wilder14-eslu.github.io/rag-riesgo-credito-seguros/", linkType: "demo",
    },
    {
      id: "orchestrate", category: "ai", kind: "AGENTES DE IA / HACKATHON", title: "Orchestrate", subtitle: "El modelo percibe. El código decide.",
      content: "Construí en 24 horas un agente que audita solicitudes de borrado de datos, reconstruye identidades y genera planes de remediación. Medalla de bronce en OpenAI × HackerRank.",
      date: "Oct 2026", metrics: [{ value: "Top 54", label: "global · más de 60,000 participantes" }],
      stack: ["Python", "Tesseract OCR", "Gemini", "SHA-256"],
      details: ["Puntuación final: 72.1/100. Auditoría de 518 solicitudes sin violaciones contractuales.", "32/32 casos correctos en muestras públicas; precisión de pasos 1.000, recall 0.979 y F1 0.990.", "OCR como fuente autoritativa y caché por SHA-256 para reproducibilidad offline, con defensas contra prompt injection."],
      github: `${github}/Orchestrate-October-26`,
    },
    {
      id: "rumbo", category: "ai", kind: "AGENTES DE IA / TRABAJO EN EQUIPO", title: "Rumbo", subtitle: "Conectar perfiles, oportunidades y habilidades.",
      content: "En un equipo de cuatro, codiseñé tres agentes y un score estadístico para evaluar el encaje entre candidatos y vacantes, identificar brechas de habilidades y proponer rutas de carrera.",
      date: "Jul–Ago 2026", metrics: [{ value: "3 agentes", label: "clasificación, requisitos y compatibilidad" }],
      stack: ["Gemini", "Google ADK", "Cloud Run", "Firestore", "React"],
      details: ["All Things Agentic Hackathon 2026, track Taskmaster (Google Cloud).", "Pipeline de exact match, preselección por embeddings y una llamada batch al LLM para reducir inferencia. Desplegado en Cloud Run con FastAPI y React."],
      link: "https://devpost.com/software/rumbo", linkType: "project",
    },
    {
      id: "credit-ml", category: "risk", kind: "MÁS PROYECTOS / MACHINE LEARNING", title: "Credit Risk ML", subtitle: "Un flujo de riesgo de extremo a extremo.",
      content: "Proyecto de modelamiento de riesgo crediticio con comparación de algoritmos, interpretabilidad con SHAP y servicios para explorar predicciones.",
      stack: ["scikit-learn", "XGBoost", "MLflow", "Docker", "Streamlit"],
      github: `${github}/credit-risk-ml-platform`,
    },
    {
      id: "malaria", category: "risk", kind: "MÁS PROYECTOS / ML EN SALUD", title: "Alerta temprana de malaria", subtitle: "Pronóstico para anticipar necesidades.",
      content: "Proyecto de predicción de casos de malaria por distrito del Perú, con validación de datos y un pipeline para explorar señales de alerta temprana.",
      stack: ["LightGBM", "MLflow", "Prefect", "Pandera", "FastAPI"],
      github: `${github}/malaria-prediction-peru`,
    },
  ],
  educationList: [
    { id: "unmsm", icon: unmsm, title: "Universidad Nacional Mayor de San Marcos", degree: "Estudios de Estadística", duration: "2022–2027 · En curso", content: "Formación en modelado estadístico y análisis cuantitativo. Becario PRONABEC (2024) por rendimiento académico sobresaliente." },
    { id: "tokyo", icon: tokyo, title: "The University of Tokyo", degree: "GCI World 2026 · Data Science & Machine Learning", duration: "Sep 2026–Actualidad", content: "Matsuo-Iwasawa Laboratory. Modelado supervisado y series temporales aplicados a insights de negocio y marketing." },
  ],
  achievements: [
    { id: "databricks", icon: databricks, event: "Advanced ML Operations", position: "Databricks" },
    { id: "duke", icon: duke, event: "MLOps Specialization", position: "Duke University" },
    { id: "stanford", icon: stanford, event: "Machine Learning Specialization", position: "DeepLearning.AI · Stanford" },
  ],
};

export const en = {
  ...es,
  // Only the supplied Spanish PDF has been refreshed; label its language honestly.
  resumeLink: resumeLinkEs,
  navLinks: [{ id: "about", title: "About" }, { id: "research", title: "Research" }, { id: "projects", title: "Projects" }, { id: "publications", title: "Publications" }, { id: "skills", title: "Experience" }, { id: "contactMe", title: "Contact" }],
  aboutMe: { ...es.aboutMe, location: "Lima, Peru", intro: "Statistics student at UNMSM. I turn business problems into measurable machine learning solutions, focusing on credit risk, advanced analytics and MLOps." },
  ui: {
    skip: "Skip to content", navigation: "Main navigation", openMenu: "Open menu", closeMenu: "Close menu", language: "Cambiar a español",
    heroLabel: "STATISTICS + MACHINE LEARNING", headline: "From data to", headlineAccent: "better decisions.",
    projectsCta: "Explore projects", cvCta: "Download CV", cvNote: "PDF · Spanish", focus: "From the business problem to the model in production.",
    caseLabel: "A CASE FROM MY PORTFOLIO", caseTitle: "From score to decision.", caseSubtitle: "Credit Risk Platform · Lending Club",
    chartTitle: "Default rate", baseline: "Reference portfolio", approved: "Approved portfolio", chartNote: "Project evaluation at a 0.18 threshold. These are not results from a live loan portfolio.",
    caseMetric: "applications approved", caseData: "loans analyzed", caseLink: "Explore the project", steps: ["Data", "PD model", "Credit policy"],
    impactLabel: "OPERATIONAL IMPACT", impactContext: "Mebol · 2024–2025", impact: [{ value: "83%", label: "less reporting time", note: "From 6 to 1 hour per week" }, { value: "28%", label: "fewer recording errors", note: "SQL validation and data quality" }, { value: "450+", label: "products monitored", note: "Operational Power BI dashboards" }],
    projectsEyebrow: "01 / SELECTED WORK", projectsTitle: "Real problems. Measurable solutions.", projectsIntro: "Credit risk, spatial analytics and applied AI. The problem, the solution and the evidence behind each project.",
    filtersLabel: "Filter projects", filters: [{ id: "all", label: "All" }, { id: "risk", label: "Risk & ML" }, { id: "ai", label: "Generative AI" }, { id: "spatial", label: "Spatial analytics" }],
    projectCount: "projects", featured: "FEATURED PROJECT", details: "Method & results", code: "Code", demo: "View demo", poster: "View poster", project: "View project",
    experienceEyebrow: "02 / EXPERIENCE & SKILLS", experienceTitle: "Analytics with business context.", experienceIntro: "I start by understanding the operation, then build a simple, maintainable solution that supports useful decisions.",
    workLabel: "PROFESSIONAL EXPERIENCE", skillsTitle: "Tools and technical judgment", skillsIntro: "A statistical foundation connected to the full model lifecycle.",
    educationEyebrow: "03 / CONTINUOUS LEARNING", educationTitle: "Learning that becomes practice.", educationIntro: "Statistics, machine learning and a commitment to continuous learning.",
    certificatesTitle: "Certifications", languagesTitle: "Languages", languages: "Native Spanish · English: Advanced English as a Second Language (Saylor)",
    awardLabel: "ORCHESTRATE HACKATHON · OPENAI × HACKERRANK", awardTitle: "Bronze medal. Global Top 54.", awardDescription: "Among more than 60,000 participants. A data-erasure auditor agent built in 24 hours, scoring 72.1/100.", awardLink: "Explore the agent", awardDate: "October 2026",
    contactEyebrow: "04 / LET'S CONNECT", contactTitle: "The next good decision starts with a conversation.", contactDescription: "Let's talk about credit risk, analytics or bringing a machine learning idea into practice.", contactCta: "Email me", backTop: "Back to top", footerNote: "Statistics, code and evidence-based decisions.",
  },
  experiences: [{ organisation: "Mebol", industry: "Food industry", title: "Warehouse Supervisor", duration: "2024–2025 · 6 months", location: "Lima, Peru", focus: "Analytics applied to operations", content: ["Reduced inventory recording errors by 28% by standardizing validation rules with purchasing and sales and implementing them in SQL.", "Automated inventory reporting with SQL and Excel, cutting processing from about 6 hours to 1 per week and freeing 5 hours for stock and replenishment analysis.", "Built Power BI dashboards tracking availability and traceability for more than 450 products to support warehouse decisions."] }],
  skills: [
    { title: "Risk & business", items: ["Probability of Default", "WoE/IV scorecards", "Approval policies", "Cost-sensitive cut-offs", "Backtesting", "KPIs"] },
    { title: "Statistics & modeling", items: ["Out-of-time validation", "Time series", "Calibration", "ROC-AUC · KS · Gini", "SHAP", "Statistical testing"] },
    { ...es.skills[2], title: "Data & machine learning" },
    { ...es.skills[3], title: "MLOps & engineering", items: [...es.skills[3].items.slice(0, 5), "Drift & retraining"] },
    { title: "Applied AI & communication", items: ["RAG · embeddings · MCP", "AI agents", "Power BI · Streamlit", "Scrum · Jira", "Stakeholder communication"] },
    { ...es.skills[5], title: "Cloud · foundations", note: "Hands-on Databricks experience. Foundational knowledge of Azure and AWS." },
  ],
  projects: [
    { ...es.projects[0], kind: "CREDIT RISK / MLOPS", subtitle: "From a PD model to an approval policy.", date: "Sep–Oct 2026", content: "Modeled probability of default on 887,000 Lending Club loans, compared four algorithms with a WoE/IV scorecard and connected predictions to credit decisions and a Databricks MLOps workflow.", metrics: [{ value: "0.691", label: "test ROC-AUC" }, { value: "61.3%", label: "approval in evaluation" }, { value: "169", label: "automated tests" }], details: ["Out-of-time validation and exclusion of 22 post-disbursement features to prevent data leakage. WoE/IV benchmark ROC-AUC: 0.681.", "At a 0.18 threshold and 5:1 FN:FP cost ratio, the default rate drops from 15.5% to 9.6% for the approved portfolio in the evaluation.", "CI/CD, Model Registry, champion/challenger and rollback. A temporal replay triggered two retraining runs; the challenger was not promoted without statistical evidence (p = 0.61)."] },
    { ...es.projects[1], kind: "SPATIAL ANALYTICS", subtitle: "Where to expand financial access.", content: "Combined financial, demographic and climate data from 327 districts to locate new service points while balancing coverage and El Niño exposure.", metrics: [{ value: "63,643", label: "adults covered in the optimization" }], details: ["25 proposed service points using integer programming (MCLP, CBC solver).", "The spatial Durbin model achieved AIC 1648 versus 1696; kriging reduced cross-validation RMSE by 23% compared with IDW.", "Findings presented in an interactive poster with maps and 29 figures."] },
    { ...es.projects[2], kind: "GENERATIVE AI / RISK", subtitle: "Evidence-based answers. Deterministic calculations.", content: "An assistant for SBS credit risk and insurance regulations with verifiable citations. Provisioning and classification use business rules kept separate from the LLM.", metrics: [{ value: "89.6%", label: "citation precision in evaluation" }], stack: ["Hybrid RAG", "FastAPI", "pgvector", "MCP", "Terraform"], details: ["Vector search + BM25, RRF fusion, reranking and abstention when evidence is insufficient.", "88 tests and eight CI/CD metrics; 91.7% intent detection and 100% adversarial containment on the evaluated dataset.", "Azure infrastructure written in Terraform and validated; not yet deployed to a real subscription."] },
    { ...es.projects[3], kind: "AI AGENTS / HACKATHON", subtitle: "The model perceives. The code decides.", content: "Built an agent in 24 hours to audit data-erasure requests, reconstruct identities and generate remediation plans. Bronze medal at OpenAI × HackerRank.", metrics: [{ value: "Top 54", label: "globally · over 60,000 participants" }], details: ["Final score: 72.1/100. Audited 518 requests with no contract violations.", "32/32 correct public sample cases; step precision 1.000, recall 0.979 and F1 0.990.", "Authoritative OCR and SHA-256 caching for offline reproducibility, with prompt-injection defenses."] },
    { ...es.projects[4], kind: "AI AGENTS / TEAM PROJECT", subtitle: "Connecting profiles, opportunities and skills.", date: "Jul–Aug 2026", content: "In a team of four, co-designed three agents and a statistical matching score to assess job fit, identify skill gaps and propose career paths.", metrics: [{ value: "3 agents", label: "classification, requirements and fit" }], details: ["All Things Agentic Hackathon 2026, Taskmaster track (Google Cloud).", "Exact matching, embedding preselection and one batch LLM call to reduce inference. Deployed on Cloud Run with FastAPI and React."] },
    { ...es.projects[5], kind: "MORE PROJECTS / MACHINE LEARNING", subtitle: "An end-to-end risk workflow.", content: "A credit risk modeling project with algorithm comparison, SHAP interpretability and services for exploring predictions." },
    { ...es.projects[6], kind: "MORE PROJECTS / ML FOR HEALTH", title: "Malaria early warning", subtitle: "Forecasting to anticipate needs.", content: "A district-level malaria forecasting project in Peru, with data validation and a pipeline to explore early-warning signals." },
  ],
  educationList: [
    { ...es.educationList[0], degree: "Statistics studies", duration: "2022–2027 · In progress", content: "Statistical modeling and quantitative analysis. PRONABEC scholarship recipient (2024) for outstanding academic performance." },
    { ...es.educationList[1], duration: "Sep 2026–Present", content: "Matsuo-Iwasawa Laboratory. Supervised modeling and time series applied to business insights and marketing." },
  ],
};

export default { es, en };
