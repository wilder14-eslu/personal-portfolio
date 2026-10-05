import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import {
  FaAws, FaBalanceScale, FaBrain, FaChartBar, FaChartLine, FaCheckCircle, FaDatabase, FaEye,
  FaFileExcel, FaFire, FaFlask, FaLayerGroup, FaRobot, FaSlidersH, FaSyncAlt, FaTree, FaUsers,
} from "react-icons/fa";
import {
  SiDatabricks, SiDocker, SiFastapi, SiGithubactions, SiGooglecloud, SiMlflow, SiOpenai, SiPostgresql,
  SiPrefect, SiPython, SiPytorch, SiR, SiReact, SiScikitlearn, SiStreamlit, SiTensorflow,
} from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";

import ml_banking_icon from "../assets/credit_risk_pipeline.webp";
import ai_health_icon from "../assets/malaria_wape_chart.webp";
import ai_hr_icon from "../assets/ai_hr_icon.jpg";
import investigacion from "../assets/investigacion.avif";
import devpost_icon from "../assets/Devpost.webp";

// Fotos y logos reales de instituciones y empresas
import mebol_new from "../assets/mebol_new.png";
import municipalidad from "../assets/municipalidad.webp";
import stanford_new from "../assets/stanford_new.webp";
import unmsm_logo from "../assets/unmsm_logo.webp";
import unmsm_university from "../assets/UNMSM.webp";
import duke from "../assets/duke.webp";
import google from "../assets/google.webp";
import saylor from "../assets/saylor.webp";
import university_michigan from "../assets/university_michigan.jpg";
import sql_cert from "../assets/sql_cert.svg";

export const resumeLinkEs = "/CV_Wilder_Espinoza_ES.pdf";
export const resumeLinkEn = "/CV_Wilder_Espinoza_EN.pdf";
export const repoLink = "https://github.com/wilder14-eslu/personal-portfolio";
export const callToAction = "https://www.linkedin.com/in/wilder-eslu/";

// ---------------------------------------------------------------------------
// Habilidades (basadas en el CV)
// ---------------------------------------------------------------------------
const skills_en = [
  {
    title: "Languages & BI",
    items: [
      { id: "s-1", icon: SiPython, name: "Python", color: "#3776AB" },
      { id: "s-2", icon: FaDatabase, name: "SQL", color: "#336791" },
      { id: "s-3", icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { id: "s-4", icon: SiR, name: "R", color: "#276DC3" },
      { id: "s-5", icon: FaFileExcel, name: "Advanced Excel", color: "#217346" },
      { id: "s-6", icon: FaChartBar, name: "Power BI", color: "#F2C811" }
    ]
  },
  {
    title: "Machine Learning",
    items: [
      { id: "s-7", icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
      { id: "s-8", icon: FaBrain, name: "XGBoost, LightGBM, CatBoost", color: "#1F77B4" },
      { id: "s-9", icon: FaTree, name: "Random Forest", color: "#2E7D32" },
      { id: "s-10", icon: FaSlidersH, name: "Optuna", color: "#6C5B7B" },
      { id: "s-11", icon: FaEye, name: "SHAP", color: "#FF2B2B" },
      { id: "s-12", icon: FaChartLine, name: "Forecasting (ARIMA/ETS)", color: "#355C7D" }
    ]
  },
  {
    title: "MLOps & Data Engineering",
    items: [
      { id: "s-13", icon: SiMlflow, name: "MLflow & Model Registry", color: "#0194E2" },
      { id: "s-14", icon: FaBalanceScale, name: "Champion/Challenger", color: "#138D75" },
      { id: "s-15", icon: FaLayerGroup, name: "A/B Testing", color: "#8E44AD" },
      { id: "s-16", icon: FaFire, name: "Drift (PSI, DDM, Evidently)", color: "#E25A1C" },
      { id: "s-17", icon: SiPrefect, name: "Prefect & ETL/ELT", color: "#0052FF" },
      { id: "s-18", icon: FaCheckCircle, name: "Pandera & Data Quality", color: "#16A085" }
    ]
  },
  {
    title: "Cloud, DevOps & Serving",
    items: [
      { id: "s-19", icon: SiGooglecloud, name: "GCP (Vertex AI, Cloud Run)", color: "#4285F4" },
      { id: "s-20", icon: SiDatabricks, name: "Databricks & Delta Lake", color: "#FF3621" },
      { id: "s-21", icon: SiDocker, name: "Docker", color: "#2496ED" },
      { id: "s-22", icon: SiGithubactions, name: "GitHub Actions CI/CD", color: "#2088FF" },
      { id: "s-23", icon: SiFastapi, name: "FastAPI & Pydantic", color: "#009688" },
      { id: "s-24", icon: SiStreamlit, name: "Streamlit", color: "#FF4B4B" }
    ]
  },
  {
    title: "Generative AI & Deep Learning",
    items: [
      { id: "s-25", icon: RiGeminiFill, name: "Gemini & Google ADK", color: "#8E75B2" },
      { id: "s-26", icon: SiOpenai, name: "OpenAI", color: "#10A37F" },
      { id: "s-27", icon: FaRobot, name: "AI Agents", color: "#F39C12" },
      { id: "s-28", icon: FaDatabase, name: "RAG & Vector Search", color: "#5B2C6F" },
      { id: "s-29", icon: SiTensorflow, name: "TensorFlow & Keras", color: "#FF6F00" },
      { id: "s-30", icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" }
    ]
  },
  {
    title: "Statistics, Evaluation & Soft Skills",
    items: [
      { id: "s-31", icon: BsGraphUp, name: "ROC-AUC, PR-AUC, Gini, KS", color: "#4CAF50" },
      { id: "s-32", icon: FaFlask, name: "Hypothesis Tests & Bootstrap", color: "#9C27B0" },
      { id: "s-33", icon: FaSyncAlt, name: "Walk-Forward Validation", color: "#00838F" },
      { id: "s-34", icon: FaAws, name: "AWS & Kubernetes (basics)", color: "#FF9900" },
      { id: "s-35", icon: FaBrain, name: "Analytical Thinking", color: "#E67E22" },
      { id: "s-36", icon: FaUsers, name: "Teamwork & Scrum", color: "#34495E" }
    ]
  }
];

const skillNamesEs = {
  "Advanced Excel": "Excel Avanzado",
  "Forecasting (ARIMA/ETS)": "Pronóstico (ARIMA/ETS)",
  "MLflow & Model Registry": "MLflow y Registro de Modelos",
  "Champion/Challenger": "Campeón/Retador",
  "A/B Testing": "Pruebas A/B",
  "Prefect & ETL/ELT": "Prefect y ETL/ELT",
  "Pandera & Data Quality": "Pandera y Calidad de Datos",
  "Databricks & Delta Lake": "Databricks y Delta Lake",
  "FastAPI & Pydantic": "FastAPI y Pydantic",
  "Gemini & Google ADK": "Gemini y Google ADK",
  "AI Agents": "Agentes de IA",
  "RAG & Vector Search": "RAG y Búsqueda Vectorial",
  "TensorFlow & Keras": "TensorFlow y Keras",
  "Hypothesis Tests & Bootstrap": "Pruebas de Hipótesis y Bootstrap",
  "Walk-Forward Validation": "Validación Walk-Forward",
  "AWS & Kubernetes (basics)": "AWS y Kubernetes (nociones)",
  "Analytical Thinking": "Pensamiento Analítico",
  "Teamwork & Scrum": "Trabajo en Equipo y Scrum",
};
const skillTitlesEs = [
  "Lenguajes e Inteligencia de Negocios",
  "Machine Learning",
  "MLOps e Ingeniería de Datos",
  "Nube, DevOps y Despliegue",
  "IA Generativa y Aprendizaje Profundo",
  "Estadística, Evaluación y Habilidades Blandas",
];
const skills_es = skills_en.map((group, i) => ({
  title: skillTitlesEs[i],
  items: group.items.map((item) => ({ ...item, name: skillNamesEs[item.name] || item.name })),
}));

// ---------------------------------------------------------------------------
// Stacks de proyectos
// ---------------------------------------------------------------------------
const stacks = {
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
  research: [
    { id: "t-1", icon: SiR, name: "R", color: "#276DC3" },
    { id: "t-2", icon: SiPython, name: "Python", color: "#3776AB" }
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
    }
  ],
  achievements: [
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
    },
    {
      id: "a-8", icon: google,
      event: "Digital Marketing",
      position: "Specialized Course",
      content1: "I learned the fundamentals of digital marketing.",
      project: "https://drive.google.com/file/d/15G9WVPyt34ikl-tky9bJpfE2zR4h-WTi/view?usp=sharing"
    },
    {
      id: "a-9", icon: unmsm_logo,
      event: "UNMSM Certificate",
      position: "Centro de Informática, UNMSM",
      content1: "Computer skills certificate.",
      project: "https://drive.google.com/file/d/1nQMy2fuV5QcOZQ5K6mhj5VZYantkOySd/view?usp=sharing"
    }
  ],
  skills: skills_en,
  experiences: [
    {
      organisation: "Municipalidad de Áncash",
      logo: municipalidad,
      positions: [
        {
          title: "Junior Data Scientist",
          duration: "2024 (3 months) · Áncash, Peru",
          content: [
            { text: "Led the processing, validation and organization of personnel data in Excel, coordinating with multiple areas to ensure the consistency, integrity and confidentiality of institutional information." },
            { text: "Designed tracking tables and structured reports that standardized information delivery to municipal management, reducing consolidation time and manual errors in recurring reports." },
            { text: "Implemented data quality controls (duplicate, outlier and missing-field detection), ensuring decisions were based on reliable, auditable information." },
            { text: "Gathered requirements from department heads and administrative teams, prioritizing deliverables and turning operational needs into clear, timely reports." }
          ]
        }
      ]
    },
    {
      organisation: "Mebol (Food Industry)",
      logo: mebol_new,
      positions: [
        {
          title: "Junior Data Analyst",
          duration: "2023 - 2024 (1 year) · Lima, Peru",
          content: [
            { text: "Managed inventory control with advanced Excel and SQL, implementing tracking tables that improved product traceability and real-time stock visibility." },
            { text: "Designed and ran SQL queries on operational databases to consolidate, validate and clean information, reducing recording errors and ensuring consistency across sources." },
            { text: "Automated the generation of periodic inventory reports, cutting manual preparation time and freeing the team for analysis and decision-making." },
            { text: "Coordinated with warehouse, purchasing and sales to align inventory data with daily operations, identifying discrepancies and proposing improvements to recording processes." },
            { text: "Documented procedures and data structures, leaving traceability and making operational continuity and onboarding of new team members easier." }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Credit Risk ML Platform: End-to-End MLOps",
      github: "https://github.com/wilder14-eslu/credit-risk-ml-platform",
      link: "https://credit-risk-ml-platform-xk4rsvntltadpumscgcwko.streamlit.app/",
      image: ml_banking_icon,
      content: "Probability of default (PD) platform on 150K applicants: ROC-AUC 0.870, Gini 0.741, KS 0.582, PR-AUC 0.407 and ECE 0.0027. The approval threshold is set by expected cost (-38% cost vs. approving everyone; the top decile captures 56% of defaults, 5.6x lift). Includes SHAP explainability, PSI drift monitoring, a Champion/Challenger scheme, statistical validation (Nadeau-Bengio, DeLong, bootstrap) and 0.41 ms (p50) inference latency.",
      stack: stacks.creditRisk
    },
    {
      id: "proj-2",
      title: "Credit Risk Platform 2.0: Lending Club on Databricks",
      github: "https://github.com/wilder14-eslu/credit-risk-platform-2.0",
      image: ml_banking_icon,
      content: "Credit risk platform on 2.26M real loans (2007-2018) with Level 2 MLOps on Databricks. Out-of-time validation with no leakage or censoring bias, A/B testing with automatic model promotion based on AUC bootstrap, drift detection (PSI, KS, DDM, Page-Hinkley), prior shift analysis, continuous retraining and rollback.",
      stack: stacks.creditRisk2
    },
    {
      id: "proj-3",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: ai_health_icon,
      content: "Probabilistic malaria forecasting with 25 years of MINSA data (1.21M cases, 1,645 districts). A quantile LightGBM model (q0.1/q0.5/q0.9) reaches a 1-week WAPE of 0.41, 12% better than the best baseline (Diebold-Mariano test, p < 1e-20). Validated with walk-forward, block bootstrap, pinball loss, WIS and interval coverage; 45 tests and CI with ruff, mypy, pytest and Docker.",
      stack: stacks.malaria
    },
    {
      id: "proj-4",
      title: "Rumbo: AI Agent Recruitment Matching Platform",
      github: "https://github.com/MelZarate-science/Rumbo",
      link: "https://rumbo-dev-25592102293.us-central1.run.app/app/",
      image: ai_hr_icon,
      content: "Multi-agent system with 3 agents (Role Classifier, Requirement Extractor, Fit Auditor) built with Google ADK and Gemini 3.5 on Vertex AI, deployed on Cloud Run with a FastAPI backend, structured outputs with Pydantic, Firestore and a React frontend. Built for Google Cloud's All Things Agentic Hackathon.",
      stack: stacks.rumbo
    },
    {
      id: "proj-5",
      title: "Statistical Research & Analysis",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: investigacion,
      content: "Data-driven research focused on econometric modeling and consumer behavior. Turned complex statistical analyses (Bayesian Regression, Credit Demand) into strategic, actionable business recommendations for financial decision-making.",
      stack: stacks.research
    }
  ],
  socialMedia,
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Machine Learning Engineer | MLOps | Data Analytics",
    phone: "+51 910 049 106",
    intro: "Data professional with a background in Statistics (UNMSM, top third) and over a year of experience in data analytics and management in the public sector and the food industry. I build end-to-end ML systems: credit risk platforms on 2.26M loans (ROC-AUC 0.870), probabilistic malaria forecasting with MINSA data and AI agents with Gemini and Google ADK."
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
    }
  ],
  achievements: [
    { ...en.achievements[0], event: "Especialización en Machine Learning", position: "DeepLearning.AI y Stanford University",
      content1: "Aprendí regresión, clasificación, redes neuronales, árboles de decisión y aprendizaje no supervisado, y a aplicarlos a problemas reales." },
    { ...en.achievements[1], event: "SQL para Ciencia de Datos",
      content1: "Aprendí a consultar, filtrar, unir y agregar datos con SQL para prepararlos para el análisis." },
    { ...en.achievements[2], event: "Construyendo con Inteligencia Artificial (CS205)",
      content1: "Aprendí los fundamentos de la IA y a construir aplicaciones que usan modelos de IA." },
    { ...en.achievements[3], event: "Fundamentos de Python para MLOps",
      content1: "Aprendí a escribir Python probado y mantenible, y a construir las herramientas y APIs que se usan en flujos de MLOps." },
    { ...en.achievements[4], event: "Programación para Todos: Introducción a Python",
      content1: "Aprendí las bases de la programación en Python: variables, condicionales, bucles y funciones." },
    { ...en.achievements[5], event: "Inglés de Negocios (ESL005)",
      content1: "Aprendí a comunicarme en inglés en contextos profesionales y de negocios." },
    { ...en.achievements[6], event: "Inglés Avanzado (ESL004)",
      content1: "Aprendí a leer, escribir y conversar en inglés a nivel avanzado." },
    { ...en.achievements[7], event: "Marketing Digital", position: "Curso Especializado",
      content1: "Aprendí los fundamentos del marketing digital." },
    { ...en.achievements[8], event: "Certificado UNMSM",
      content1: "Certificado en informática." }
  ],
  skills: skills_es,
  experiences: [
    {
      organisation: "Municipalidad de Áncash",
      logo: municipalidad,
      positions: [
        {
          title: "Científico de Datos Jr.",
          duration: "2024 (3 meses) · Áncash, Perú",
          content: [
            { text: "Lideré el procesamiento, validación y organización de datos de personal en Excel, coordinando con múltiples áreas para asegurar consistencia, integridad y confidencialidad de la información institucional." },
            { text: "Diseñé tablas de seguimiento y reportes estructurados que estandarizaron la entrega de información a la gestión municipal, reduciendo tiempos de consolidación y errores manuales en reportes recurrentes." },
            { text: "Implementé controles de calidad de datos (detección de duplicados, valores atípicos y campos incompletos), garantizando decisiones basadas en información confiable y auditable." },
            { text: "Levanté requerimientos con jefaturas y equipos administrativos, priorizando entregables y traduciendo necesidades operativas en reportes claros y oportunos." }
          ]
        }
      ]
    },
    {
      organisation: "Mebol (Industria Alimentaria)",
      logo: mebol_new,
      positions: [
        {
          title: "Analista de Datos Jr.",
          duration: "2023 - 2024 (1 año) · Lima, Perú",
          content: [
            { text: "Administré el control de inventarios con Excel avanzado y SQL, implementando tablas de seguimiento que mejoraron la trazabilidad de productos y la visibilidad del stock en tiempo real." },
            { text: "Diseñé y ejecuté consultas SQL sobre bases de datos operativas para consolidar, validar y depurar información, reduciendo errores de registro y asegurando consistencia entre fuentes." },
            { text: "Automaticé la generación de reportes periódicos de inventario, disminuyendo el tiempo de elaboración manual y liberando al equipo para el análisis y la toma de decisiones." },
            { text: "Coordiné con almacén, compras y ventas para alinear la información de inventarios con la operación diaria, identificando discrepancias y proponiendo mejoras en los procesos de registro." },
            { text: "Documenté procedimientos y estructuras de datos, dejando trazabilidad y facilitando la continuidad operativa y la incorporación de nuevos integrantes." }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      ...en.projects[0],
      title: "Plataforma de Riesgo Crediticio con ML: MLOps de Extremo a Extremo",
      content: "Plataforma de probabilidad de incumplimiento (PD) sobre 150K solicitantes: ROC-AUC 0.870, Gini 0.741, KS 0.582, PR-AUC 0.407 y ECE 0.0027. El umbral de aprobación se define por costo esperado (-38% de costo frente a aprobar a todos; el decil superior concentra el 56% de los incumplimientos, lift de 5.6x). Incluye explicabilidad con SHAP, monitoreo de drift con PSI, esquema campeón/retador, validación estadística (Nadeau-Bengio, DeLong, bootstrap) y latencia de inferencia de 0.41 ms (p50).",
      stack: stackEs(stacks.creditRisk)
    },
    {
      ...en.projects[1],
      title: "Plataforma de Riesgo Crediticio 2.0: Lending Club en Databricks",
      content: "Plataforma de riesgo crediticio sobre 2.26M de préstamos reales (2007-2018) con MLOps Nivel 2 en Databricks. Validación fuera de tiempo (out-of-time) sin fuga de datos ni sesgo de censura, pruebas A/B con promoción automática de modelos basada en bootstrap del AUC, detección de drift (PSI, KS, DDM, Page-Hinkley), análisis de cambio en la distribución a priori, reentrenamiento continuo y reversión de modelos (rollback).",
      stack: stackEs(stacks.creditRisk2)
    },
    {
      ...en.projects[2],
      title: "Plataforma de Alerta Temprana de Malaria en Perú",
      content: "Pronóstico probabilístico de malaria con 25 años de datos del MINSA (1.21M casos, 1,645 distritos). Un modelo LightGBM cuantil (q0.1/q0.5/q0.9) logra un WAPE de 0.41 a 1 semana, 12% mejor que el mejor modelo de referencia (test de Diebold-Mariano, p < 1e-20). Validado con walk-forward, bootstrap por bloques, pérdida pinball, WIS y cobertura de intervalos; 45 pruebas automatizadas e integración continua con ruff, mypy, pytest y Docker.",
      stack: stackEs(stacks.malaria)
    },
    {
      ...en.projects[3],
      title: "Rumbo: Plataforma de Reclutamiento con Agentes de IA",
      content: "Sistema multiagente de 3 agentes (clasificador de roles, extractor de requisitos y auditor de compatibilidad) construido con Google ADK y Gemini 3.5 en Vertex AI, desplegado en Cloud Run con backend en FastAPI, salidas estructuradas con Pydantic, Firestore y frontend en React. Desarrollado para el hackathon All Things Agentic de Google Cloud.",
      stack: stackEs(stacks.rumbo)
    },
    {
      ...en.projects[4],
      title: "Investigación Estadística y Análisis",
      content: "Investigación basada en datos centrada en modelamiento econométrico y comportamiento del consumidor. Traducción de análisis estadísticos complejos (Regresión Bayesiana, Demanda de Crédito) en recomendaciones de negocio estratégicas y accionables para la toma de decisiones financieras."
    }
  ],
  socialMedia,
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Ingeniero de Machine Learning | MLOps | Analítica de Datos",
    phone: "+51 910 049 106",
    intro: "Profesional de datos con formación en Estadística (UNMSM, Tercio Superior) y más de un año de experiencia en analítica y gestión de datos en el sector público y la industria alimentaria. Construyo sistemas de ML de extremo a extremo: plataformas de riesgo crediticio sobre 2.26M de préstamos (ROC-AUC 0.870), pronóstico probabilístico de malaria con datos del MINSA y agentes de IA con Gemini y Google ADK."
  }
};

const data = { en, es };
export default data;
