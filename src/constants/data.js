import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import {
  FaAws, FaBalanceScale, FaBrain, FaChartBar, FaChartLine, FaCheckCircle, FaDatabase, FaEye,
  FaFileExcel, FaFire, FaGlobe, FaMapMarkedAlt, FaPlug, FaShieldAlt, FaFlask, FaLayerGroup, FaRobot, FaSlidersH, FaSyncAlt, FaTrophy, FaTree, FaUsers,
} from "react-icons/fa";
import {
  SiApachespark, SiDatabricks, SiDocker, SiFastapi, SiGithubactions, SiGooglecloud, SiMlflow, SiOpenai, SiPostgresql,
  SiPrefect, SiPython, SiPytorch, SiR, SiReact, SiScikitlearn, SiStreamlit, SiTensorflow, SiTerraform, SiAmazonwebservices,
} from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";

import ml_banking_icon from "../assets/credit_risk_pipeline.webp";
import ai_health_icon from "../assets/malaria_wape_chart.webp";
import ai_hr_icon from "../assets/ai_hr_icon.jpg";
import devpost_icon from "../assets/Devpost.webp";

// Fotos y logos reales de instituciones y empresas
import mebol_new from "../assets/mebol_new.png";

import stanford_new from "../assets/stanford_new.webp";
import unmsm_university from "../assets/UNMSM.webp";
import duke from "../assets/duke.webp";
import saylor from "../assets/saylor.webp";
import university_michigan from "../assets/university_michigan.jpg";
import sql_cert from "../assets/sql_cert.svg";
import riskrag_icon from "../assets/riskrag.svg";
import investigacion_icon from "../assets/investigacion.avif";
import google_icon from "../assets/google.webp";
import orchestrate_icon from "../assets/realml_new.jpg";
import databricks_cert from "../assets/databricks_cert.svg";
import orchestrate_medal from "../assets/orchestrate_medal.svg";
import utokyo_logo from "../assets/utokyo_logo.svg";

export const resumeLinkEs = "/CV_Wilder_Espinoza_ES.pdf";
export const resumeLinkEn = "/CV_Wilder_Espinoza_EN.pdf";
export const repoLink = "https://github.com/wilder14-eslu/personal-portfolio";
export const callToAction = "https://www.linkedin.com/in/wilder-eslu/";

// ---------------------------------------------------------------------------
// Habilidades (basadas en el CV)
// ---------------------------------------------------------------------------
const skills_en = [
  {
    title: "Languages & Data",
    items: [
      { id: "s-1", icon: SiPython, name: "Python", color: "#3776AB" },
      { id: "s-2", icon: FaDatabase, name: "SQL", color: "#336791" },
      { id: "s-3", icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { id: "s-4", icon: SiApachespark, name: "PySpark", color: "#E25A1C" },
      { id: "s-23", icon: SiR, name: "R", color: "#276DC3" }
    ]
  },
  {
    title: "Modeling & Machine Learning",
    items: [
      { id: "s-5", icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
      { id: "s-6", icon: FaBrain, name: "XGBoost · LightGBM · CatBoost", color: "#1F77B4" },
      { id: "s-7", icon: FaSlidersH, name: "Optuna", color: "#6C5B7B" },
      { id: "s-8", icon: FaEye, name: "SHAP", color: "#FF2B2B" },
      { id: "s-24", icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" }
    ]
  },
  {
    title: "MLOps & Data Platforms",
    items: [
      { id: "s-9", icon: SiMlflow, name: "MLflow", color: "#0194E2" },
      { id: "s-10", icon: SiDatabricks, name: "Databricks", color: "#FF3621" },
      { id: "s-11", icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { id: "s-12", icon: SiDocker, name: "Docker", color: "#2496ED" },
      { id: "s-13", icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
      { id: "s-14", icon: SiPrefect, name: "Prefect", color: "#0052FF" }
    ]
  },
  {
    title: "Generative AI & LLMs",
    items: [
      { id: "s-15", icon: FaDatabase, name: "RAG", color: "#5B2C6F" },
      { id: "s-16", icon: FaPlug, name: "MCP", color: "#111827" },
      { id: "s-17", icon: SiPostgresql, name: "pgvector", color: "#4169E1" },
      { id: "s-18", icon: RiGeminiFill, name: "Gemini & Google ADK", color: "#8E75B2" }
    ]
  },
  {
    title: "Basic Knowledge",
    items: [
      { id: "s-19", icon: SiGooglecloud, name: "Vertex AI", color: "#4285F4" },
      { id: "s-20", icon: SiGooglecloud, name: "Cloud Run", color: "#34A853" },
      { id: "s-21", icon: SiAmazonwebservices, name: "Amazon Bedrock", color: "#FF9900" },
      { id: "s-22", icon: SiTerraform, name: "Terraform", color: "#7B42BC" }
    ]
  }
];

const skillNamesEs = {
  "Gemini & Google ADK": "Gemini y Google ADK",
};
const skillTitlesEs = [
  "Lenguajes y Datos",
  "Modelado y Machine Learning",
  "MLOps y Plataformas de Datos",
  "IA Generativa y LLMs",
  "Nociones Básicas",
];
const skills_es = skills_en.map((group, i) => ({
  title: skillTitlesEs[i],
  items: group.items.map((item) => ({ ...item, name: skillNamesEs[item.name] || item.name })),
}));

// ---------------------------------------------------------------------------
// Stacks de proyectos
// ---------------------------------------------------------------------------
const stacks = {
  riskrag: [
    { id: "t-1", icon: SiPython, name: "Python", color: "#3776AB" },
    { id: "t-2", icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { id: "t-3", icon: FaPlug, name: "MCP", color: "#111827" },
    { id: "t-4", icon: SiPostgresql, name: "PostgreSQL + pgvector", color: "#4169E1" },
    { id: "t-5", icon: SiAmazonwebservices, name: "Amazon Bedrock", color: "#FF9900" },
    { id: "t-6", icon: FaShieldAlt, name: "OWASP LLM Top 10", color: "#C0392B" },
    { id: "t-7", icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
    { id: "t-8", icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" }
  ],
  creditRisk: [
    { id: "t-1", icon: SiPython, name: "Python", color: "#3776AB" },
    { id: "t-2", icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
    { id: "t-3", icon: FaBrain, name: "XGBoost, LightGBM, CatBoost", color: "#1F77B4" },
    { id: "t-4", icon: SiMlflow, name: "MLflow", color: "#0194E2" },
    { id: "t-5", icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { id: "t-6", icon: SiDocker, name: "Docker", color: "#2496ED" },
    { id: "t-7", icon: FaEye, name: "SHAP", color: "#FF2B2B" },
    { id: "t-8", icon: SiStreamlit, name: "Streamlit", color: "#FF4B4B" }
  ],
  creditRisk2: [
    { id: "t-1", icon: SiDatabricks, name: "Databricks", color: "#FF3621" },
    { id: "t-2", icon: FaDatabase, name: "Delta Lake", color: "#00ADD4" },
    { id: "t-3", icon: FaLayerGroup, name: "Unity Catalog", color: "#5B2C6F" },
    { id: "t-4", icon: SiMlflow, name: "MLflow", color: "#0194E2" },
    { id: "t-5", icon: FaSlidersH, name: "Optuna", color: "#6C5B7B" },
    { id: "t-6", icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { id: "t-7", icon: SiStreamlit, name: "Streamlit", color: "#FF4B4B" }
  ],
  malaria: [
    { id: "t-1", icon: FaBrain, name: "LightGBM", color: "#1F77B4" },
    { id: "t-2", icon: SiMlflow, name: "MLflow", color: "#0194E2" },
    { id: "t-3", icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { id: "t-4", icon: SiDocker, name: "Docker", color: "#2496ED" },
    { id: "t-5", icon: SiPrefect, name: "Prefect", color: "#0052FF" },
    { id: "t-6", icon: FaCheckCircle, name: "Pandera", color: "#16A085" },
    { id: "t-7", icon: SiStreamlit, name: "Streamlit", color: "#FF4B4B" },
    { id: "t-8", icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" }
  ],
  rumbo: [
    { id: "t-1", icon: RiGeminiFill, name: "Gemini 3.5 + Google ADK", color: "#8E75B2" },
    { id: "t-2", icon: SiGooglecloud, name: "Vertex AI + Cloud Run", color: "#4285F4" },
    { id: "t-3", icon: FaRobot, name: "AI Agents", color: "#F39C12" },
    { id: "t-4", icon: TbBrandFirebase, name: "Firestore", color: "#FFCA28" },
    { id: "t-5", icon: SiFastapi, name: "FastAPI + Pydantic", color: "#009688" },
    { id: "t-6", icon: SiReact, name: "React", color: "#61DAFB" }
  ],
  geobanca: [
    { id: "t-1", icon: SiPython, name: "Python", color: "#3776AB" },
    { id: "t-2", icon: FaMapMarkedAlt, name: "GeoPandas + PySAL", color: "#2ECC71" },
    { id: "t-3", icon: FaGlobe, name: "Kriging + Spatial Models", color: "#1ABC9C" },
    { id: "t-4", icon: FaBrain, name: "Random Forest", color: "#1F77B4" },
    { id: "t-5", icon: FaEye, name: "SHAP", color: "#FF2B2B" },
    { id: "t-6", icon: FaChartBar, name: "QGIS", color: "#589632" }
  ],
  orchestrate: [
    { id: "t-1", icon: SiPython, name: "Python", color: "#3776AB" },
    { id: "t-2", icon: RiGeminiFill, name: "Gemini 3.8 Flash", color: "#8E75B2" },
    { id: "t-3", icon: FaRobot, name: "AI Agent", color: "#F39C12" },
    { id: "t-4", icon: FaShieldAlt, name: "GDPR Auditing", color: "#C0392B" },
    { id: "t-5", icon: FaDatabase, name: "Multi-DB Analysis", color: "#336791" }
  ],
};
const stackEs = (stack) =>
  stack.map((t) => ({ ...t, name: t.name === "AI Agents" ? "Agentes de IA" : t.name }));

const socialMedia = [
  { id: "sm-1", icon: AiFillLinkedin, link: "https://www.linkedin.com/in/wilder-eslu/" },
  { id: "sm-2", icon: AiFillGithub, link: "https://github.com/wilder14-eslu" },
  { id: "sm-3", icon: AiFillMail, link: "mailto:esluwilder@gmail.com" },
  { id: "sm-4", img: devpost_icon, link: "https://devpost.com/wilder14-eslu?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" }
];

// ---------------------------------------------------------------------------
// Inglés
// ---------------------------------------------------------------------------
export const en = {
  resumeLink: resumeLinkEn, repoLink, callToAction,
  navLinks: [
    { id: "skills", title: "Skills & Experience" },
    { id: "education", title: "Education" },
    { id: "achievements", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "contactMe", title: "Contact Me" }
  ],
  educationList: [
    {
      id: "edu-1", icon: unmsm_university,
      title: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      degree: "Bachelor of Science in Statistics",
      duration: "May 2022 - Dec 2027",
      content1: "Top third of the Professional School of Statistics.",
      content2: "PRONABEC scholarship (2024) for outstanding academic performance."
    },
    {
      id: "edu-2", icon: utokyo_logo,
      title: "GCI World 2026 — Matsuo-Iwasawa Laboratory, The University of Tokyo",
      degree: "International Data Science & Machine Learning Program",
      duration: "Sep 2026 - Present",
      content1: "Learned to transform data into actionable insights and business opportunities.",
      content2: "Developed skills in supervised modeling and time series analysis applied to marketing, customer behavior and strategic decisions."
    }
  ],
  achievements: [
    {
      id: "a-0-db", icon: databricks_cert,
      event: "Advanced Machine Learning Operations",
      position: "Databricks",
      content1: "I learned to build and manage production ML pipelines on Databricks with MLflow, Delta Lake and Unity Catalog."
    },
    {
      id: "a-0-orch", icon: orchestrate_medal,
      event: "Orchestrate Hackathon — Bronze Medal 🥉",
      position: "OpenAI × HackerRank · Top 54 / +60,000 participants",
      content1: "Designed a GDPR data-erasure auditor agent that scored 71.5/100 (94% data precision, 1.000 remediation precision, 32/32 benchmark states).",
      content2: "24-hour hackathon · October 24, 2026",
      github: "https://github.com/wilder14-eslu/Orchestrate-October-26"
    },
    {
      id: "a-1", icon: stanford_new,
      event: "Machine Learning Specialization",
      position: "DeepLearning.AI & Stanford University",
      content1: "I learned regression, classification, neural networks, decision trees and unsupervised learning, and how to apply them to real problems.",
      project: "https://drive.google.com/file/d/14xpmUa2ejR1c9K0ldrOjsGt5xIUZakWz/view?usp=sharing"
    },
    {
      id: "a-2", icon: sql_cert,
      event: "SQL for Data Science",
      position: "University of California, Davis",
      content1: "I learned to query, filter, join and aggregate data with SQL to prepare it for analysis."
    },
    {
      id: "a-3", icon: saylor,
      event: "Building with Artificial Intelligence (CS205)",
      position: "Saylor Academy",
      content1: "I learned AI fundamentals and how to build applications that use AI models.",
      project: "https://drive.google.com/file/d/1WBgnbuFwAwgZJYzE3y06km6YaXIbut6h/view?usp=sharing"
    },
    {
      id: "a-4", icon: duke,
      event: "Python Essentials for MLOps",
      position: "Duke University",
      content1: "I learned to write tested, maintainable Python and to build the tools and APIs used in MLOps workflows.",
      project: "https://drive.google.com/file/d/1xVxK6HXfXaQn7y5F8c4qcMokiLbzsU0D/view?usp=sharing"
    },
    {
      id: "a-5", icon: university_michigan,
      event: "Programming for Everybody (Getting Started with Python)",
      position: "University of Michigan",
      content1: "I learned the foundations of programming in Python: variables, conditionals, loops and functions.",
      project: "https://drive.google.com/file/d/1g1A59C-FWs9NllYtg4W0mElG9clEVsP7/view?usp=sharing"
    },
    {
      id: "a-6", icon: saylor,
      event: "Business-Proficient English (ESL005)",
      position: "Saylor Academy",
      content1: "I learned to communicate in English in professional and business settings.",
      project: "https://drive.google.com/file/d/14QQ1lPW92gd1htn8tpV8QSVHVmXwhnu7/view?usp=sharing"
    },
    {
      id: "a-7", icon: saylor,
      event: "Advanced English (ESL004)",
      position: "Saylor Academy",
      content1: "I learned to read, write and hold conversations in English at an advanced level.",
      project: "https://drive.google.com/file/d/1LgUePfHX_u-ITkyT0FwKGwHtlUsXrUK2/view?usp=sharing"
    }
  ],
  skills: skills_en,
  experiences: [
    {
      organisation: "Mebol (Food Industry)",
      logo: mebol_new,
      positions: [
        {
          title: "Data Analytics and Business Intelligence",
          duration: "Lima, Peru · 2024 – 2025 (6 months)",
          content: [
            { text: "Reduced recording errors by 28% through SQL queries that integrated, cleaned and validated data from multiple sources, strengthening consistency and integrity." },
            { text: "Automated reporting workflows with SQL and Excel, cutting weekly processing time from ~6 hours to 1 hour (83%) and freeing 5 hours per week." },
            { text: "Used Python for exploratory data analysis (EDA), anomaly detection, outlier identification and trend analysis, contributing to uncovering operational patterns." },
            { text: "Used PySpark for distributed processing and transformation of large data volumes, facilitating data preparation for analytical workflows." },
            { text: "Defined validation rules and standardization criteria with warehouse, purchasing and sales teams, strengthening data quality and reliability." },
            { text: "Built Power BI dashboards to monitor availability and traceability of 450+ products, enabling KPI tracking and data-driven operational decisions." }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "proj-rag",
      title: "RiskRAG: RAG Assistant for Credit Risk & Insurance",
      github: "https://github.com/wilder14-eslu/rag-riesgo-credito-seguros",
      image: riskrag_icon,
      content: "Helps credit risk and insurance analysts consult regulations with cited, verifiable answers, and calculates debtor classification and provisions with deterministic tools instead of relying on the LLM.",
      stack: stacks.riskrag
    },
    {
      id: "proj-1",
      title: "Credit Risk ML Platform: End-to-End MLOps",
      github: "https://github.com/wilder14-eslu/credit-risk-ml-platform",
      image: ml_banking_icon,
      content: "Helps a lender decide who to approve for credit by estimating how likely each applicant is to default and explaining the reason behind every decision.",
      stack: stacks.creditRisk
    },
    {
      id: "proj-2",
      title: "Credit Risk Platform 2.0: Lending Club on Databricks",
      github: "https://github.com/wilder14-eslu/credit-risk-platform-2.0",
      image: ml_banking_icon,
      content: "Keeps a bank's credit risk model reliable in production: it detects when customer behavior changes and automatically and safely retrains and replaces the model.",
      stack: stacks.creditRisk2
    },
    {
      id: "proj-3",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: ai_health_icon,
      content: "Forecasts how many malaria cases each district in Peru will have in the coming weeks, so health authorities can allocate resources and act before an outbreak.",
      stack: stacks.malaria
    },
    {
      id: "proj-4",
      title: "Rumbo: AI Agent Recruitment Matching Platform",
      devpost: "https://devpost.com/software/rumbo",
      image: ai_hr_icon,
      content: "Helps recruiters and candidates find the best fit between a profile and a job opening, using AI agents that read the role, extract its requirements and assess the match.",
      stack: stacks.rumbo
    },
    {
      id: "proj-geo",
      title: "GeoBanca Norte Peru: Spatial Analytics for Financial Channels",
      github: "https://github.com/wilder14-eslu/geobanca-norte-peru",
      image: investigacion_icon,
      content: "Identifies where to open new bank branches, ATMs and special offices in northern Peru by combining financial access data, spatial econometrics, climate risk from El Niño, and integer optimization to cover 63,643 adults with 25 service points.",
      stack: stacks.geobanca
    },
    {
      id: "proj-orch",
      title: "Orchestrate: GDPR Data-Erasure Auditor Agent 🥉",
      github: "https://github.com/wilder14-eslu/Orchestrate-October-26",
      image: orchestrate_icon,
      content: "Bronze Medal — Top 54 globally among +60,000 participants. Built an AI agent that audits data erasure requests (GDPR Art. 17) across databases, replicas, logs and screenshots, achieving 94% data precision and 100% reproducibility.",
      stack: stacks.orchestrate
    }
  ],
  socialMedia,
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Machine Learning Engineer | MLOps | Data Analytics",
    phone: "+51 910 049 106",
    intro: "Statistics student at UNMSM focused on advanced analytics for banking: probability of default models, scorecards, credit approval decisions and machine learning applied to business problems. I have built predictive and credit risk projects integrating temporal data validation, data leakage prevention, algorithm comparison, interpretability and decision evaluation. I complement this with business analytics: automated reports that cut processing time by 83% and helped reduce recording errors by 28%. I work with Python, SQL, Databricks, Google Cloud, Azure, REST APIs and CI/CD."
  }
};

// ---------------------------------------------------------------------------
// Español
// ---------------------------------------------------------------------------
export const es = {
  resumeLink: resumeLinkEs, repoLink, callToAction,
  navLinks: [
    { id: "skills", title: "Habilidades y Experiencia" },
    { id: "education", title: "Educación" },
    { id: "achievements", title: "Certificaciones" },
    { id: "projects", title: "Proyectos" },
    { id: "contactMe", title: "Contáctame" }
  ],
  educationList: [
    {
      ...en.educationList[0],
      degree: "Licenciatura en Estadística",
      duration: "Mayo 2022 - Dic 2027",
      content1: "Tercio Superior de la Escuela Profesional de Estadística.",
      content2: "Becario PRONABEC (2024) por rendimiento académico sobresaliente."
    },
    {
      ...en.educationList[1],
      title: "GCI World 2026 — Matsuo-Iwasawa Laboratory, The University of Tokyo",
      degree: "Programa Internacional de Data Science y Machine Learning",
      duration: "Sep 2026 - Actualidad",
      content1: "Aprendí a transformar datos en insights accionables y oportunidades de negocio.",
      content2: "Desarrollé competencias en modelado supervisado y análisis de series temporales, aplicados a marketing, comportamiento del cliente y decisiones estratégicas."
    }
  ],
  achievements: [
    { ...en.achievements[0], event: "Operaciones Avanzadas de Machine Learning",
      content1: "Aprendí a construir y gestionar pipelines de ML en producción sobre Databricks con MLflow, Delta Lake y Unity Catalog." },
    { ...en.achievements[1], event: "Hackathon Orchestrate — Medalla de Bronce 🥉",
      position: "OpenAI × HackerRank · Top 54 / +60,000 participantes",
      content1: "Diseñé un agente auditor de borrado y privacidad de datos (GDPR Art. 17) con score de 71.5/100 (94% precisión de datos, 1.000 de remediación, 32/32 benchmarks).",
      content2: "Hackathon de 24 horas · 24 de octubre de 2026" },
    { ...en.achievements[2], event: "Especialización en Machine Learning", position: "DeepLearning.AI y Stanford University",
      content1: "Aprendí regresión, clasificación, redes neuronales, árboles de decisión y aprendizaje no supervisado, y a aplicarlos a problemas reales." },
    { ...en.achievements[3], event: "SQL para Ciencia de Datos",
      content1: "Aprendí a consultar, filtrar, unir y agregar datos con SQL para prepararlos para el análisis." },
    { ...en.achievements[4], event: "Construyendo con Inteligencia Artificial (CS205)",
      content1: "Aprendí los fundamentos de la IA y a construir aplicaciones que usan modelos de IA." },
    { ...en.achievements[5], event: "Fundamentos de Python para MLOps",
      content1: "Aprendí a escribir Python probado y mantenible, y a construir las herramientas y APIs que se usan en flujos de MLOps." },
    { ...en.achievements[6], event: "Programación para Todos: Introducción a Python",
      content1: "Aprendí las bases de la programación en Python: variables, condicionales, bucles y funciones." },
    { ...en.achievements[7], event: "Inglés de Negocios (ESL005)",
      content1: "Aprendí a comunicarme en inglés en contextos profesionales y de negocios." },
    { ...en.achievements[8], event: "Inglés Avanzado (ESL004)",
      content1: "Aprendí a leer, escribir y conversar en inglés a nivel avanzado." }
  ],
  skills: skills_es,
  experiences: [
    {
      organisation: "Mebol (Industria Alimentaria)",
      logo: mebol_new,
      positions: [
        {
          title: "Data Analytics and Business Intelligence",
          duration: "Lima, Perú · 2024 – 2025 (6 meses)",
          content: [
            { text: "Reduje en 28% los errores de registro de inventario mediante consultas SQL para integrar, depurar y validar datos de distintas fuentes, fortaleciendo su consistencia e integridad." },
            { text: "Automaticé procesos de reportería con SQL y Excel, reduciendo el tiempo de procesamiento de ~6 a 1 hora semanal (83%) y liberando 5 horas de trabajo por semana." },
            { text: "Utilicé Python para el análisis exploratorio de datos (EDA), identificación de anomalías, valores atípicos, variaciones y tendencias, contribuyendo a detectar inconsistencias y patrones operativos." },
            { text: "Utilicé PySpark para el procesamiento y transformación distribuida de grandes volúmenes de datos, facilitando la preparación de información para análisis y flujos analíticos." },
            { text: "Definí reglas de validación y criterios de estandarización junto con las áreas de almacén, compras y ventas, fortaleciendo la calidad y confiabilidad de los datos." },
            { text: "Desarrollé dashboards en Power BI para monitorear la disponibilidad y trazabilidad de más de 450 productos, facilitando el seguimiento de KPIs y la toma de decisiones operativas." }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      ...en.projects[0],
      title: "RiskRAG: Asistente RAG Experto en Riesgo Crediticio y Seguros",
      content: "Ayuda a analistas de riesgo crediticio y seguros a consultar la normativa con respuestas citadas y verificables, y calcula la clasificación del deudor y las provisiones con herramientas deterministas en lugar de depender del LLM."
    },
    {
      ...en.projects[1],
      title: "Plataforma de Riesgo Crediticio con ML: MLOps de Extremo a Extremo",
      content: "Ayuda a una entidad financiera a decidir a quién aprobar un crédito, estimando la probabilidad de que cada solicitante no pague y explicando el porqué de cada decisión.",
      stack: stackEs(stacks.creditRisk)
    },
    {
      ...en.projects[2],
      title: "Plataforma de Riesgo Crediticio 2.0: Lending Club en Databricks",
      content: "Mantiene confiable el modelo de riesgo crediticio de un banco en producción: detecta cuándo cambia el comportamiento de los clientes y reentrena y reemplaza el modelo de forma automática y segura.",
      stack: stackEs(stacks.creditRisk2)
    },
    {
      ...en.projects[3],
      title: "Plataforma de Alerta Temprana de Malaria en Perú",
      content: "Anticipa cuántos casos de malaria tendrá cada distrito del Perú en las próximas semanas, para que las autoridades de salud distribuyan recursos y actúen antes de un brote.",
      stack: stackEs(stacks.malaria)
    },
    {
      ...en.projects[4],
      title: "Rumbo: Plataforma de Reclutamiento con Agentes de IA",
      content: "Ayuda a reclutadores y candidatos a encontrar el mejor encaje entre un perfil y una vacante, con agentes de IA que leen el puesto, extraen sus requisitos y evalúan la compatibilidad.",
      stack: stackEs(stacks.rumbo)
    },
    {
      ...en.projects[5],
      title: "GeoBanca Norte Perú: Analítica Espacial para Canales Financieros",
      content: "Identifica dónde abrir nuevas oficinas bancarias, cajeros y EOBs en el norte del Perú combinando datos de acceso financiero, econometría espacial, riesgo climático por El Niño y optimización entera para cubrir 63,643 adultos con 25 puntos de servicio.",
      stack: stackEs(stacks.geobanca)
    },
    {
      ...en.projects[6],
      title: "Orchestrate: Agente Auditor de Borrado de Datos (GDPR) 🥉",
      content: "Medalla de Bronce — Top 54 global entre +60,000 participantes. Construí un agente de IA que audita solicitudes de borrado de datos (GDPR Art. 17) a través de bases de datos, réplicas, logs y capturas de pantalla, logrando 94% de precisión de datos y 100% de reproducibilidad.",
      stack: stackEs(stacks.orchestrate)
    }
  ],
  socialMedia,
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Ingeniero de Machine Learning | MLOps | Analítica de Datos",
    phone: "+51 910 049 106",
    intro: "Estudiante de Estadística en la UNMSM, con enfoque en analítica avanzada para banca: modelos de probabilidad de default (PD), scorecards y decisiones de aprobación crediticia, además de machine learning aplicado a problemas de negocio. He desarrollado proyectos de modelamiento predictivo y riesgo crediticio que integran validación temporal de datos, prevención de data leakage, comparación de algoritmos, interpretabilidad y evaluación de decisiones. Complemento esta experiencia con analítica de negocio: automaticé reportes que redujeron 83% el tiempo de procesamiento y contribuí a disminuir 28% los errores de registro. Manejo Python, SQL, Databricks, Google Cloud, Azure, APIs REST y CI/CD."
  }
};

const data = { en, es };
export default data;
