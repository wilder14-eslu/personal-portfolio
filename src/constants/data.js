import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsGraphUp, BsLightbulb } from "react-icons/bs";
import { FaAws, FaBrain, FaChartBar, FaChartLine, FaCogs, FaDatabase, FaDocker, FaEye, FaFire, FaGithub, FaRobot } from "react-icons/fa";
import { SiDocker, SiFastapi, SiFirebase, SiGit, SiGithubactions, SiGoogle, SiGooglecloud, SiKeras, SiMlflow, SiMysql, SiOpenai, SiPostgresql, SiPrefect, SiPytorch, SiR, SiReact, SiScikitlearn, SiStreamlit, SiTensorflow, SiVite, SiPython } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";

import ml_project1 from "../assets/ml_project1.jpg";
import ml_project2 from "../assets/ml_project2.jpg";
import ds_analytics from "../assets/ds_analytics.jpg";
import placeholder from "../assets/placeholder.svg";
import ml_banking_icon from "../assets/ml_banking_icon.jpg";
import ai_health_icon from "../assets/ai_health_icon.jpg";
import ai_hr_icon from "../assets/ai_hr_icon.jpg";
import data_research_icon from "../assets/data_research_icon.jpg";
import ai_cert_icon from "../assets/ai_cert_icon.jpg";
import python_coding_icon from "../assets/python_coding_icon.jpg";
import investigacion from "../assets/investigacion.avif";
import devpost_icon from "../assets/Devpost.webp";

// Real institution/company photos
import realml_new from "../assets/realml_new.jpg";
import mebol_new from "../assets/mebol_new.png";
import municipalidad from "../assets/municipalidad.webp";
import stanford_new from "../assets/stanford_new.webp";
import unmsm_logo from "../assets/unmsm_logo.webp";
import duke from "../assets/duke.webp";
import google from "../assets/google.webp";
import saylor from "../assets/saylor.webp";
import university_michigan from "../assets/university_michigan.jpg";

export const resumeLink = "/CV_Wilder_Espinoza_ES.pdf";
export const repoLink = "https://github.com/wilder14-eslu/personal-portfolio";
export const callToAction = "https://www.linkedin.com/in/wilder-eslu/";

const commonIcons = {
  SiPython, SiR, SiMysql, SiGooglecloud, SiGit, SiFastapi, SiDocker, SiGithubactions, SiPostgresql, SiReact,
  AiFillGithub, AiFillLinkedin, AiFillMail,
  ml_project1, ml_project2, ds_analytics, placeholder, investigacion,
  ml_banking_icon, ai_health_icon, ai_hr_icon, data_research_icon, ai_cert_icon, python_coding_icon,
  // Real photos
  realml_new, mebol_new, municipalidad,
  stanford_new, unmsm_logo,
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
  resumeLink, repoLink, callToAction,
  navLinks: [
    { id: "skills", title: "Skills & Experience" },
    { id: "education", title: "Education" },
    { id: "achievements", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "contactMe", title: "Contact Me" }
  ],
  educationList: [
    {
      id: "edu-1", icon: commonIcons.unmsm_logo,
      title: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      degree: "Licenciatura, Statistics",
      duration: "May 2022 - Dec 2027",
      content1: "Focus on Data Science, Advanced Analytics, Machine Learning and MLOps.",
      content2: "PRONABEC Scholar (2024)."
    },
    {
      id: "edu-2", icon: commonIcons.stanford_new,
      title: "Stanford University",
      degree: "Machine Learning Specialization",
      duration: "Nov 2025 - Apr 2026",
      content1: "Advanced algorithms, deep learning.",
      content2: ""
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
      organisation: "Municipalidad",
      logo: commonIcons.municipalidad,
      positions: [
        {
          title: "Human Resources Assistant",
          duration: "2024 (3 months)",
          content: [
            { text: "Optimized personnel data management (payrolls, attendance, administrative records) using advanced Excel workflows, streamlining inter-departmental communication and ensuring strict data confidentiality." }
          ]
        }
      ]
    },
    {
      organisation: "Mebol",
      logo: commonIcons.mebol_new,
      positions: [
        {
          title: "Warehouse Manager",
          duration: "2023 - 2024 (1 year)",
          content: [
            { text: "Led inventory control and supply chain tracking using SQL and Excel. Designed and implemented structured data pipelines that significantly improved inventory traceability and reduced operational bottlenecks." }
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
      content: "Developed a bank-grade, end-to-end Machine Learning platform for credit risk assessment to optimize loan approval processes. Features rigorous model benchmarking (XGBoost, LightGBM) and a robust MLOps pipeline (MLflow, FastAPI, Prefect, Docker, CI/CD). Integrates SHAP for regulatory explainability and data drift monitoring to ensure long-term model reliability.",
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
      content: "Engineered an Early Warning ML System to predict and mitigate malaria outbreaks across districts. Designed to support public health decision-making, the platform uses LightGBM, automated retraining policies, and walk-forward validation to guarantee accurate forecasting. Fully containerized and deployed with FastAPI and MLflow for seamless production use.",
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
      content: "Architected an AI-driven recruitment platform that transcends keyword matching to intelligently connect talent with job opportunities. Leverages LLMs (Gemini), vector search, and autonomous AI agents for semantic role classification and compatibility scoring. Built to enhance HR efficiency and user engagement, deployed on Google Cloud Run.",
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
      content: "Led in-depth statistical research projects targeting business intelligence and econometric modeling. Topics include Consumer Credit Demand, Bayesian Logistic Regression, and Heteroscedasticity Analysis. Translated complex mathematical insights into strategic recommendations.",
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
    tagLine: "Statistics @ UNMSM | Machine Learning Engineer",
    phone: "+51 910 049 106",
    intro: "I am a Statistics student and aspiring Machine Learning Engineer passionate about transforming business problems into end-to-end data solutions. My approach starts with deeply understanding business needs to ask the right analytical questions, model the data, and deliver actionable results. I combine my quantitative rigor with MLOps best practices (FastAPI, Docker, CI/CD) to take models beyond experimentation, building scalable and maintainable products. I am currently seeking an internship where I can contribute to Advanced Analytics and ML teams to drive real-world impact."
  }
};

export const es = {
  resumeLink, repoLink, callToAction,
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
      organisation: "Municipalidad",
      logo: commonIcons.municipalidad,
      positions: [
        {
          title: "Auxiliar de Recursos Humanos",
          duration: "2024 (3 meses)",
          content: [
            { text: "Optimicé la gestión de datos de personal (planillas, asistencia, registros administrativos) mediante flujos de trabajo avanzados en Excel, agilizando la comunicación interdepartamental y garantizando una estricta confidencialidad." }
          ]
        }
      ]
    },
    {
      organisation: "Mebol",
      logo: commonIcons.mebol_new,
      positions: [
        {
          title: "Encargado de Almacén",
          duration: "2023 a 2024 (1 año)",
          content: [
            { text: "Lideré el control de inventario y el seguimiento logístico utilizando SQL y Excel. Diseñé e implementé pipelines de datos estructurados que mejoraron significativamente la trazabilidad del inventario y redujeron cuellos de botella operativos." }
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
      content: "Desarrollé una plataforma end-to-end de Machine Learning a nivel bancario para la evaluación de riesgo crediticio, diseñada para optimizar la aprobación de préstamos. Implementa benchmarking riguroso (XGBoost, LightGBM) y un pipeline completo de MLOps (MLflow, FastAPI, Prefect, CI/CD). Integra SHAP para explicabilidad regulatoria y monitoreo de drift para garantizar la fiabilidad del modelo en el tiempo.",
      stack: en.projects[0].stack
    },
    {
      id: "proj-2",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: commonIcons.ai_health_icon,
      content: "Ingeniería de un Sistema de Alerta Temprana con ML para predecir y mitigar brotes de malaria por distrito. Diseñada para respaldar la toma de decisiones en salud pública, la plataforma utiliza LightGBM, políticas de reentrenamiento automático y validación walk-forward para garantizar predicciones precisas. Totalmente contenerizada y desplegada con FastAPI y MLflow para un uso ágil en producción.",
      stack: en.projects[1].stack
    },
    {
      id: "proj-3",
      title: "Rumbo - AI Agent Recruitment Platform",
      github: "https://github.com/MelZarate-science/Rumbo",
      link: "https://rumbo-dev-25592102293.us-central1.run.app/app/",
      image: commonIcons.ai_hr_icon,
      content: "Arquitectura de una plataforma de reclutamiento impulsada por IA que trasciende la búsqueda por palabras clave para conectar talento con oportunidades laborales de forma inteligente. Utiliza LLMs (Gemini), búsqueda vectorial y agentes autónomos para la clasificación semántica y scoring de compatibilidad. Creada para maximizar la eficiencia de RRHH y la retención de usuarios, desplegada en Google Cloud Run.",
      stack: en.projects[2].stack
    },
    {
      id: "proj-4",
      title: "Investigación Estadística y Análisis",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: commonIcons.investigacion,
      content: "Lideré proyectos de investigación estadística profunda enfocados en inteligencia de negocios y modelamiento econométrico. Los temas incluyen Demanda de Crédito al Consumidor, Regresión Logística Bayesiana y Análisis de Heterocedasticidad. Traducción de insights matemáticos complejos en recomendaciones estratégicas claras.",
      stack: en.projects[3].stack
    }
  ],
  socialMedia: en.socialMedia,
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Statistics @ UNMSM | Machine Learning Engineer",
    phone: "+51 910 049 106",
    intro: "Soy estudiante de Estadística enfocado en Machine Learning y MLOps, con la convicción de que los datos deben resolver problemas de negocio reales. Mi metodología inicia comprendiendo la necesidad operativa para plantear preguntas analíticas, explorar modelos y construir soluciones accionables end-to-end. Combino mi rigor cuantitativo con ingeniería de software (FastAPI, Docker, CI/CD) para llevar los modelos más allá de la experimentación y convertirlos en productos mantenibles. Busco aportar valor como Intern en equipos de Advanced Analytics y ML para escalar soluciones de alto impacto."
  }
};

const data = { en, es };
export default data;
