import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsGraphUp, BsLightbulb } from "react-icons/bs";
import { FaAws, FaBrain, FaChartBar, FaChartLine, FaCogs, FaDatabase, FaDocker, FaEye, FaFire, FaGithub, FaRobot } from "react-icons/fa";
import { SiDocker, SiFastapi, SiFirebase, SiGit, SiGithubactions, SiGoogle, SiGooglecloud, SiKeras, SiMlflow, SiMysql, SiOpenai, SiPostgresql, SiPrefect, SiPytorch, SiR, SiReact, SiScikitlearn, SiStreamlit, SiTensorflow, SiVite, SiPython } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";

import ml_banking_icon from "../assets/credit_risk_pipeline.webp";
import ai_health_icon from "../assets/malaria_wape_chart.webp";
import ai_hr_icon from "../assets/ai_hr_icon.jpg";
import investigacion from "../assets/investigacion.avif";
import devpost_icon from "../assets/Devpost.webp";

// Real institution/company photos
import realml_new from "../assets/realml_new.jpg";
import mebol_new from "../assets/mebol_new.png";
import municipalidad from "../assets/municipalidad.webp";
import stanford_new from "../assets/stanford_new.webp";
import unmsm_logo from "../assets/unmsm_logo.webp";
import unmsm_university from "../assets/UNMSM.webp";
import duke from "../assets/duke.webp";
import google from "../assets/google.webp";
import saylor from "../assets/saylor.webp";
import university_michigan from "../assets/university_michigan.jpg";

export const resumeLinkEs = "/CV_Wilder_Espinoza_ES.pdf";
export const resumeLinkEn = "/CV_Wilder_Espinoza_EN.pdf";
export const repoLink = "https://github.com/wilder14-eslu/personal-portfolio";
export const callToAction = "https://www.linkedin.com/in/wilder-eslu/";

const commonIcons = {
  SiPython, SiR, SiMysql, SiGooglecloud, SiGit, SiFastapi, SiDocker, SiGithubactions, SiPostgresql, SiReact,
  AiFillGithub, AiFillLinkedin, AiFillMail,
  investigacion,
  ml_banking_icon, ai_health_icon, ai_hr_icon,
  // Real photos
  realml_new, mebol_new, municipalidad,
  stanford_new, unmsm_logo, unmsm_university,
  duke, google, saylor, university_michigan,
};

const skills_en = [
  {
    title: "Languages & Tools",
    items: [
      { id: "s-1", icon: SiPython, name: "Python", color: "#3776AB" },
      { id: "s-2", icon: SiR, name: "R", color: "#276DC3" },
      { id: "s-3", icon: FaDatabase, name: "SQL", color: "#336791" },
      { id: "s-4", icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { id: "s-5", icon: FaChartBar, name: "Power BI", color: "#F2C811" },
      { id: "s-6", icon: FaCogs, name: "PySpark", color: "#E25A1C" }
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    items: [
      { id: "s-7", icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
      { id: "s-8", icon: FaBrain, name: "Gradient Boosting", color: "#1F77B4" },
      { id: "s-9", icon: SiTensorflow, name: "TensorFlow & Keras", color: "#FF6F00" },
      { id: "s-10", icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
      { id: "s-11", icon: FaChartLine, name: "Time Series & NLP", color: "#6C5B7B" },
      { id: "s-12", icon: BsGraphUp, name: "Computer Vision", color: "#355C7D" }
    ]
  },
  {
    title: "Generative AI & LLMs",
    items: [
      { id: "s-13", icon: FaRobot, name: "Gen AI & LLMs", color: "#FF007F" },
      { id: "s-14", icon: SiOpenai, name: "OpenAI & Gemini", color: "#10A37F" },
      { id: "s-15", icon: FaCogs, name: "RAG & MCP", color: "#00C4B6" },
      { id: "s-16", icon: FaDatabase, name: "Vector Search", color: "#5B2C6F" },
      { id: "s-17", icon: FaBrain, name: "AI Agents", color: "#F39C12" },
      { id: "s-18", icon: FaCogs, name: "Embeddings", color: "#2980B9" }
    ]
  },
  {
    title: "MLOps & Data Engineering",
    items: [
      { id: "s-19", icon: FaCogs, name: "MLOps & MLflow", color: "#0194E2" },
      { id: "s-20", icon: FaChartLine, name: "SHAP & Drift Detection", color: "#FF2B2B" },
      { id: "s-21", icon: FaDatabase, name: "Model Registry", color: "#138D75" },
      { id: "s-22", icon: SiFastapi, name: "FastAPI & Pydantic", color: "#009688" },
      { id: "s-23", icon: FaCogs, name: "Prefect & ETL/ELT", color: "#0052FF" }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { id: "s-24", icon: FaAws, name: "AWS, Azure, GCP", color: "#FF9900" },
      { id: "s-25", icon: SiDocker, name: "Docker & K8s", color: "#2496ED" },
      { id: "s-26", icon: SiGit, name: "Git & GitHub Actions", color: "#F05032" },
      { id: "s-27", icon: FaCogs, name: "CI/CD", color: "#2088FF" }
    ]
  },
  {
    title: "Metrics, Eval & Soft Skills",
    items: [
      { id: "s-28", icon: BsGraphUp, name: "ROC/PR-AUC, Gini, KS", color: "#4CAF50" },
      { id: "s-29", icon: FaChartLine, name: "Walk-Forward Validation", color: "#9C27B0" },
      { id: "s-30", icon: FaBrain, name: "Analytical Thinking", color: "#E67E22" },
      { id: "s-31", icon: FaCogs, name: "Problem Solving & Scrum", color: "#34495E" }
    ]
  }
];

const skills_es = [
  { ...skills_en[0], title: "Lenguajes y Herramientas" },
  { ...skills_en[1], title: "Machine Learning & Deep Learning" },
  { ...skills_en[2], title: "Generative AI & LLMs" },
  { ...skills_en[3], title: "MLOps & Data Engineering" },
  { ...skills_en[4], title: "Cloud y DevOps" },
  { ...skills_en[5], title: "Métricas, Eval y Soft Skills", items: [
    { id: "s-28", icon: BsGraphUp, name: "ROC/PR-AUC, Gini, KS", color: "#4CAF50" },
    { id: "s-29", icon: FaChartLine, name: "Walk-Forward Validation", color: "#9C27B0" },
    { id: "s-30", icon: FaBrain, name: "Pensamiento Analítico", color: "#E67E22" },
    { id: "s-31", icon: FaCogs, name: "Resolución de Problemas y Scrum", color: "#34495E" }
  ]}
];

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
      id: "edu-1", icon: commonIcons.unmsm_university,
      title: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      degree: "Licenciatura, Statistics",
      duration: "May 2022 - Dec 2027",
      content1: "Focus on Data Science, Advanced Analytics, Machine Learning and MLOps.",
      content2: "PRONABEC Scholar (2024)."
    }
  ],
  achievements: [
    { 
      id: "a-1", 
      icon: commonIcons.stanford_new, 
      event: "Machine Learning Specialization", 
      position: "DeepLearning.AI & Stanford", 
      content1: "Completed specialization", 
      project: "https://drive.google.com/file/d/14xpmUa2ejR1c9K0ldrOjsGt5xIUZakWz/view?usp=sharing" 
    },
    { 
      id: "a-2", 
      icon: commonIcons.duke, 
      event: "Python Essentials for MLOps", 
      position: "Duke University", 
      content1: "MLOps workflows & tools", 
      project: "https://drive.google.com/file/d/1xVxK6HXfXaQn7y5F8c4qcMokiLbzsU0D/view?usp=sharing" 
    },
    { 
      id: "a-3", 
      icon: commonIcons.saylor, 
      event: "Building with Artificial Intelligence", 
      position: "CS205 - Saylor Academy", 
      content1: "AI fundamentals & applications", 
      project: "https://drive.google.com/file/d/1WBgnbuFwAwgZJYzE3y06km6YaXIbut6h/view?usp=sharing" 
    },
    { 
      id: "a-4", 
      icon: commonIcons.university_michigan, 
      event: "Programming for Everybody (Python)", 
      position: "University of Michigan", 
      content1: "Python Basics", 
      project: "https://drive.google.com/file/d/1g1A59C-FWs9NllYtg4W0mElG9clEVsP7/view?usp=sharing" 
    },
    { 
      id: "a-5", 
      icon: commonIcons.saylor, 
      event: "Business-Proficient English", 
      position: "Saylor Academy", 
      content1: "ESL005", 
      project: "https://drive.google.com/file/d/14QQ1lPW92gd1htn8tpV8QSVHVmXwhnu7/view?usp=sharing" 
    },
    { 
      id: "a-6", 
      icon: commonIcons.saylor, 
      event: "Advanced English", 
      position: "Saylor Academy", 
      content1: "ESL004", 
      project: "https://drive.google.com/file/d/1LgUePfHX_u-ITkyT0FwKGwHtlUsXrUK2/view?usp=sharing" 
    },
    { 
      id: "a-7", 
      icon: commonIcons.google, 
      event: "Marketing Digital", 
      position: "Curso Especializado", 
      content1: "Marketing Digital", 
      project: "https://drive.google.com/file/d/15G9WVPyt34ikl-tky9bJpfE2zR4h-WTi/view?usp=sharing" 
    },
    { 
      id: "a-8", 
      icon: commonIcons.unmsm_logo, 
      event: "Certificado UNMSM", 
      position: "UNMSM", 
      content1: "Centro de Informática", 
      project: "https://drive.google.com/file/d/1nQMy2fuV5QcOZQ5K6mhj5VZYantkOySd/view?usp=sharing" 
    }
  ],
  skills: skills_en,
  experiences: [
    {
      organisation: "RealML",
      logo: commonIcons.realml_new,
      positions: [
        {
          title: "Founder & CEO",
          duration: "Mar 2026 - Present",
          content: [
            { text: "Founded and lead RealML, an applied Machine Learning initiative dedicated to architecting data-driven products that address concrete business challenges and improve user experiences." },
            { text: "Spearhead the end-to-end development of decision intelligence systems, translating raw data into scalable AI solutions that generate measurable value and optimize operational workflows." },
            { text: "Core expertise: Risk Modeling, Predictive Analytics, MLOps, AI-Powered Products, and Business Process Optimization." }
          ]
        }
      ]
    },
    {
      organisation: "Other Experience",
      logo: commonIcons.mebol_new,
      positions: [
        {
          title: "Warehouse Manager - Mebol",
          duration: "2023 - 2024 (1 year)",
          content: [
            { text: "Led inventory control and supply chain tracking using SQL and Excel, building structured tracking tables to improve traceability." }
          ]
        },
        {
          title: "Human Resources Assistant - Municipalidad",
          duration: "2024 (3 months)",
          content: [
            { text: "Managed personnel data (payroll, attendance, records) in Excel, coordinating across departments." }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Credit Risk ML Platform - End-to-End MLOps",
      github: "https://github.com/wilder14-eslu/credit-risk-ml-platform",
      link: "https://credit-risk-ml-platform-xk4rsvntltadpumscgcwko.streamlit.app/",
      image: commonIcons.ml_banking_icon,
      content: "End-to-end MLOps platform for automated credit risk assessment. Benchmarks 4 models (Logistic Regression, XGBoost, LightGBM, CatBoost) on ROC-AUC, PR-AUC, KS and calibration before promoting a champion model, with CI/CD pipelines and MLflow for tracking. Includes SHAP explainability and PSI-based drift monitoring to support regulatory review and sustained ROI.",
      stack: [
        { id: "t-1", icon: SiPython, name: "Python", color: "#3776AB" },
        { id: "t-2", icon: SiScikitlearn, name: "Scikit-learn / Gradient Boosting", color: "#F7931E" },
        { id: "t-3", icon: SiMlflow, name: "MLflow", color: "#0194E2" },
        { id: "t-4", icon: SiFastapi, name: "FastAPI", color: "#009688" },
        { id: "t-5", icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
        { id: "t-6", icon: SiPrefect, name: "Prefect", color: "#0052FF" },
        { id: "t-7", icon: FaEye, name: "SHAP", color: "#FF2B2B" },
        { id: "t-8", icon: SiDocker, name: "Docker", color: "#2496ED" },
        { id: "t-9", icon: SiGithubactions, name: "GitHub Actions / CI-CD", color: "#2088FF" },
        { id: "t-10", icon: SiStreamlit, name: "Streamlit", color: "#FF4B4B" }
      ]
    },
    {
      id: "proj-2",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: commonIcons.ai_health_icon,
      content: "Predictive ML system designed to proactively mitigate disease outbreaks and optimize the allocation of public health resources. LightGBM quantile-regression model beats the naive/moving-average baseline by 10-12% (WAPE 0.46 at 1 week to 0.54 at 4 weeks), with 80% prediction intervals covering ~94% of real outcomes. Containerized and deployed via FastAPI for seamless integration into real-time operational workflows.",
      stack: [
        { id: "t-1", icon: SiPython, name: "Python", color: "#3776AB" },
        { id: "t-2", icon: FaBrain, name: "LightGBM + Optuna", color: "#1F77B4" },
        { id: "t-3", icon: SiMlflow, name: "MLflow", color: "#0194E2" },
        { id: "t-4", icon: FaEye, name: "SHAP", color: "#FF2B2B" },
        { id: "t-5", icon: SiFastapi, name: "FastAPI", color: "#009688" },
        { id: "t-6", icon: FaFire, name: "Evidently (Drift)", color: "#E25A1C" },
        { id: "t-7", icon: FaChartLine, name: "Feature Engineering Temporal", color: "#6C5B7B" },
        { id: "t-8", icon: SiDocker, name: "Docker", color: "#2496ED" },
        { id: "t-9", icon: SiGithubactions, name: "CI / GitHub Actions", color: "#2088FF" }
      ]
    },
    {
      id: "proj-3",
      title: "Rumbo - AI Agent Recruitment Platform",
      github: "https://github.com/MelZarate-science/Rumbo",
      link: "https://rumbo-dev-25592102293.us-central1.run.app/app/",
      image: commonIcons.ai_hr_icon,
      content: "AI-driven talent acquisition platform leveraging LLMs and vector search to automate role classification and candidate scoring. Significantly reduces time-to-hire and improves match quality through autonomous AI agents. Highly scalable architecture deployed on Google Cloud Run to maximize HR operational efficiency.",
      stack: [
        { id: "t-1", icon: SiPython, name: "Python", color: "#3776AB" },
        { id: "t-2", icon: RiGeminiFill, name: "Gemini + Google ADK", color: "#8E75B2" },
        { id: "t-3", icon: FaRobot, name: "AI Agents", color: "#F39C12" },
        { id: "t-4", icon: FaDatabase, name: "Embeddings + Vector Search", color: "#5B2C6F" },
        { id: "t-5", icon: SiFastapi, name: "FastAPI + Pydantic", color: "#009688" },
        { id: "t-6", icon: SiReact, name: "React + Vite", color: "#61DAFB" },
        { id: "t-7", icon: TbBrandFirebase, name: "Firestore (Vector DB)", color: "#FFCA28" },
        { id: "t-8", icon: SiGooglecloud, name: "Google Cloud Run", color: "#4285F4" }
      ]
    },
    {
      id: "proj-4",
      title: "Statistical Research & Analysis",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: commonIcons.investigacion,
      content: "Data-driven research initiatives focusing on econometric modeling and consumer behavior. Translated complex statistical analyses (Bayesian Regression, Credit Demand) into strategic, actionable business recommendations for optimized financial decision-making.",
      stack: [
        { id: "s-1", icon: SiR, name: "R", color: "#276DC3" },
        { id: "s-2", icon: SiPython, name: "Python", color: "#3776AB" }
      ]
    }
  ],
  socialMedia: [
    { id: "sm-1", icon: commonIcons.AiFillLinkedin, link: "https://www.linkedin.com/in/wilder-eslu/" },
    { id: "sm-2", icon: commonIcons.AiFillGithub, link: "https://github.com/wilder14-eslu" },
    { id: "sm-3", icon: commonIcons.AiFillMail, link: "mailto:esluwilder@gmail.com" },
    { id: "sm-4", img: devpost_icon, link: "https://devpost.com/wilder14-eslu?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" }
  ],
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Machine Learning Engineer | MLOps Specialist",
    phone: "+51 910 049 106",
    intro: "Machine Learning Engineer specialized in MLOps and scalable AI solutions. I bridge the gap between statistical modeling and production by architecting robust data pipelines and deploying models that drive measurable business value. My expertise lies in automating ML lifecycles (CI/CD, Docker, MLflow, FastAPI) and translating complex data into actionable decision-intelligence systems."
  }
};

export const es = {
  resumeLink: resumeLinkEs, repoLink, callToAction,
  navLinks: [
    { id: "skills", title: "Habilidades y Experiencia" },
    { id: "education", title: "Educación" },
    { id: "achievements", title: "Certificaciones" },
    { id: "projects", title: "Proyectos" },
    { id: "contactMe", title: "Contáctame" }
  ],
  educationList: en.educationList,
  achievements: en.achievements,
  skills: skills_es,
  experiences: [
    {
      organisation: "RealML",
      logo: commonIcons.realml_new,
      positions: [
        {
          title: "Founder & CEO",
          duration: "Mar 2026 - Actualidad",
          content: [
            { text: "Fundador y líder de RealML, iniciativa de Machine Learning aplicado dedicada a la arquitectura de productos de datos que resuelven desafíos de negocio reales y mejoran la experiencia del usuario." },
            { text: "Dirijo el desarrollo end-to-end de sistemas de inteligencia de decisiones, transformando datos crudos en soluciones de IA escalables que generan valor medible y optimizan flujos operativos." },
            { text: "Áreas clave: Modelamiento de Riesgos, Analítica Predictiva, MLOps, Productos impulsados por IA y Optimización de Procesos." }
          ]
        }
      ]
    },
    {
      organisation: "Otras experiencias",
      logo: commonIcons.mebol_new,
      positions: [
        {
          title: "Encargado de Almacén - Mebol",
          duration: "2023 a 2024 (1 año)",
          content: [
            { text: "Lideré el control de inventario y seguimiento logístico con SQL y Excel, implementando tablas de seguimiento estructuradas para mejorar la trazabilidad." }
          ]
        },
        {
          title: "Auxiliar de Recursos Humanos - Municipalidad",
          duration: "2024 (3 meses)",
          content: [
            { text: "Gestioné datos de personal (planillas, asistencia, registros) en Excel, coordinando con distintas áreas." }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Credit Risk ML Platform - End-to-End MLOps",
      github: "https://github.com/wilder14-eslu/credit-risk-ml-platform",
      link: "https://credit-risk-ml-platform-xk4rsvntltadpumscgcwko.streamlit.app/",
      image: commonIcons.ml_banking_icon,
      content: "Plataforma MLOps end-to-end para la evaluación automatizada de riesgo crediticio. Compara 4 modelos (Regresión Logística, XGBoost, LightGBM, CatBoost) en ROC-AUC, PR-AUC, KS y calibración antes de promover un modelo campeón, con pipelines CI/CD y MLflow para trazabilidad. Integra explicabilidad SHAP y monitoreo de drift (PSI) para apoyar cumplimiento regulatorio y retorno de inversión sostenido.",
      stack: en.projects[0].stack
    },
    {
      id: "proj-2",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: commonIcons.ai_health_icon,
      content: "Sistema predictivo ML para anticipar brotes epidemiológicos y optimizar la asignación de recursos en salud pública. El modelo LightGBM con regresión por cuantiles supera al baseline (naive/media móvil) en 10-12% (WAPE de 0.46 a 1 semana hasta 0.54 a 4 semanas), con intervalos de predicción al 80% que cubren ~94% de los casos reales. Completamente contenerizado y desplegado vía FastAPI para integrarse de manera fluida en flujos operativos y de toma de decisiones en tiempo real.",
      stack: en.projects[1].stack
    },
    {
      id: "proj-3",
      title: "Rumbo - AI Agent Recruitment Platform",
      github: "https://github.com/MelZarate-science/Rumbo",
      link: "https://rumbo-dev-25592102293.us-central1.run.app/app/",
      image: commonIcons.ai_hr_icon,
      content: "Plataforma de reclutamiento impulsada por IA (LLMs y búsqueda vectorial) para automatizar la clasificación de roles y scoring de candidatos. Reduce considerablemente el tiempo de contratación y mejora la calidad del match mediante agentes autónomos. Arquitectura escalable desplegada en Google Cloud Run para maximizar la rentabilidad y eficiencia operativa de RRHH.",
      stack: en.projects[2].stack
    },
    {
      id: "proj-4",
      title: "Investigación Estadística y Análisis",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: commonIcons.investigacion,
      content: "Iniciativas de investigación basadas en datos centradas en modelamiento econométrico y comportamiento del consumidor. Traducción de análisis estadísticos complejos (Regresión Bayesiana, Demanda de Crédito) en recomendaciones de negocio estratégicas y accionables para la optimización de decisiones financieras.",
      stack: en.projects[3].stack
    }
  ],
  socialMedia: en.socialMedia,
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Machine Learning Engineer | MLOps Specialist",
    phone: "+51 910 049 106",
    intro: "Machine Learning Engineer especializado en MLOps e Inteligencia Artificial escalable. Conecto el modelamiento estadístico con entornos de producción mediante la arquitectura de pipelines robustos y el despliegue de modelos que generan un ROI medible para el negocio. Mi enfoque está en automatizar el ciclo de vida del ML (CI/CD, Docker, MLflow, FastAPI) y traducir datos complejos en sistemas de toma de decisiones estratégicas."
  }
};

const data = { en, es };
export default data;
