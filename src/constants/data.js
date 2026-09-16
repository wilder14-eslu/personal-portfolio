import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaAws, FaBrain, FaChartBar, FaChartLine, FaCogs, FaDatabase, FaDocker, FaGithub, FaRobot } from "react-icons/fa";
import { SiDocker, SiFastapi, SiGit, SiGithubactions, SiGoogle, SiGooglecloud, SiKeras, SiMysql, SiOpenai, SiPostgresql, SiPytorch, SiR, SiReact, SiScikitlearn, SiTensorflow, SiPython } from "react-icons/si";

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
      { id: "s-1", icon: SiPython, name: "Python" },
      { id: "s-2", icon: SiR, name: "R" },
      { id: "s-3", icon: FaDatabase, name: "SQL" },
      { id: "s-4", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "s-5", icon: FaChartBar, name: "Power BI" },
      { id: "s-6", icon: FaCogs, name: "PySpark" }
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    items: [
      { id: "s-7", icon: SiScikitlearn, name: "Scikit-learn" },
      { id: "s-8", icon: FaBrain, name: "XGBoost/LightGBM/CatBoost" },
      { id: "s-9", icon: SiTensorflow, name: "TensorFlow & Keras" },
      { id: "s-10", icon: SiPytorch, name: "PyTorch" },
      { id: "s-11", icon: FaChartLine, name: "Time Series & NLP" },
      { id: "s-12", icon: BsGraphUp, name: "Computer Vision" }
    ]
  },
  {
    title: "Generative AI & LLMs",
    items: [
      { id: "s-13", icon: FaRobot, name: "Gen AI & LLMs" },
      { id: "s-14", icon: SiOpenai, name: "OpenAI & Gemini" },
      { id: "s-15", icon: FaCogs, name: "RAG & MCP" },
      { id: "s-16", icon: FaDatabase, name: "Vector Search" },
      { id: "s-17", icon: FaBrain, name: "AI Agents" },
      { id: "s-18", icon: FaCogs, name: "Embeddings" }
    ]
  },
  {
    title: "MLOps & Data Engineering",
    items: [
      { id: "s-19", icon: FaCogs, name: "MLOps & MLflow" },
      { id: "s-20", icon: FaChartLine, name: "SHAP & Drift Detection" },
      { id: "s-21", icon: FaDatabase, name: "Model Registry" },
      { id: "s-22", icon: SiFastapi, name: "FastAPI & Pydantic" },
      { id: "s-23", icon: FaCogs, name: "Prefect & ETL/ELT" }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { id: "s-24", icon: FaAws, name: "AWS, Azure, GCP" },
      { id: "s-25", icon: SiDocker, name: "Docker & K8s" },
      { id: "s-26", icon: SiGit, name: "Git & GitHub Actions" },
      { id: "s-27", icon: FaCogs, name: "CI/CD" }
    ]
  },
  {
    title: "Metrics, Eval & Soft Skills",
    items: [
      { id: "s-28", icon: BsGraphUp, name: "ROC/PR-AUC, Gini, KS" },
      { id: "s-29", icon: FaChartLine, name: "Walk-Forward Validation" },
      { id: "s-30", icon: FaBrain, name: "Analytical Thinking" },
      { id: "s-31", icon: FaCogs, name: "Problem Solving & Scrum" }
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
    { id: "s-28", icon: BsGraphUp, name: "ROC/PR-AUC, Gini, KS" },
    { id: "s-29", icon: FaChartLine, name: "Walk-Forward Validation" },
    { id: "s-30", icon: FaBrain, name: "Pensamiento Analítico" },
    { id: "s-31", icon: FaCogs, name: "Resolución de Problemas y Scrum" }
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
            { text: "Founder of RealML, an applied machine learning initiative focused on building data-driven products and intelligent systems that solve real-world business and operational problems." },
            { text: "I lead the development of machine learning and decision intelligence solutions, combining statistical modeling, predictive analytics, and AI to transform data into actionable insights." },
            { text: "Current focus areas include: Risk modeling, Predictive analytics, ML systems and MLOps, AI-powered products, Optimization." }
          ]
        }
      ]
    },
    {
      organisation: "Municipalidad (Áncash, Perú)",
      logo: commonIcons.municipalidad,
      positions: [
        {
          title: "Human Resources Assistant",
          duration: "2024 (3 months)",
          content: [
            { text: "Processed and organized personnel data (payrolls, attendance, administrative records) using Excel, coordinating with different internal areas and ensuring institutional information confidentiality." }
          ]
        }
      ]
    },
    {
      organisation: "Mebol (Food Industry)",
      logo: commonIcons.mebol_new,
      positions: [
        {
          title: "Warehouse Manager",
          duration: "2023 - 2024 (1 year)",
          content: [
            { text: "Managed inventory control using Excel and SQL, implementing structured tracking tables that improved information traceability." }
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
      content: "End-to-End credit risk evaluation platform (default prediction), built as a bank-grade MLOps exercise.",
      stack: [
        { id: "s-1", icon: commonIcons.SiPython },
        { id: "s-3", icon: commonIcons.SiDocker }
      ]
    },
    {
      id: "proj-2",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: commonIcons.ai_health_icon,
      content: "End-to-end MLOps platform to predict malaria cases and outbreak risk by district (UBIGEO) x epidemiological week in Peru.",
      stack: [
        { id: "s-1", icon: commonIcons.SiPython },
        { id: "s-2", icon: commonIcons.SiFastapi },
        { id: "s-3", icon: commonIcons.SiGithubactions }
      ]
    },
    {
      id: "proj-3",
      title: "Rumbo - AI Agent Recruitment Matching Platform",
      github: "https://github.com/MelZarate-science/Rumbo",
      link: "https://rumbo-dev-25592102293.us-central1.run.app/app/",
      image: commonIcons.ai_hr_icon,
      content: "A matching platform for professional profiles and companies, where a sequential multi-agent system audits real fit between both sides.",
      stack: [
        { id: "s-1", icon: commonIcons.SiGooglecloud },
        { id: "s-2", icon: commonIcons.SiReact }
      ]
    },
    {
      id: "proj-4",
      title: "Proyectos-de-Investigacion",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: commonIcons.investigacion,
      content: "Proyectos con documentación: Análisis del Problema de Heterocedasticidad, Consumer Credit Demand, Regresión Logística Bayesiana, etc.",
      stack: [
        { id: "s-1", icon: commonIcons.SiR },
        { id: "s-2", icon: commonIcons.SiPython }
      ]
    }
  ],
  socialMedia: [
    { id: "sm-1", icon: commonIcons.AiFillLinkedin, link: "https://www.linkedin.com/in/wilder-eslu/" },
    { id: "sm-2", icon: commonIcons.AiFillGithub, link: "https://github.com/wilder14-eslu" },
    { id: "sm-3", icon: commonIcons.AiFillMail, link: "mailto:esluwilder@gmail.com" }
  ],
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Statistics @ UNMSM | Machine Learning Engineer",
    intro: "I am a Statistics student focused on Data Science, Advanced Analytics, Machine Learning and MLOps, interested in transforming business problems into data-driven solutions."
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
            { text: "Fundé y dirijo RealML, iniciativa personal de investigación aplicada en Machine Learning enfocada en construir productos basados en datos." },
            { text: "Lidero el desarrollo de soluciones de riesgo, analítica predictiva y sistemas de Machine Learning." },
            { text: "Áreas de enfoque: Modelamiento de riesgo, analítica predictiva, sistemas de ML y MLOps, productos impulsados por IA." }
          ]
        }
      ]
    },
    {
      organisation: "Municipalidad (Áncash, Perú)",
      logo: commonIcons.municipalidad,
      positions: [
        {
          title: "Auxiliar de Recursos Humanos",
          duration: "2024 (3 meses)",
          content: [
            { text: "Procesé y organicé datos de personal (planillas, asistencia, registros administrativos) en Excel, coordinando con distintas áreas internas y asegurando la confidencialidad de la información institucional." }
          ]
        }
      ]
    },
    {
      organisation: "Mebol. Industria alimentaria.",
      logo: commonIcons.mebol_new,
      positions: [
        {
          title: "Encargado de Almacén",
          duration: "2023 a 2024 (1 año)",
          content: [
            { text: "Administré el control de inventarios mediante Excel y SQL, implementando tablas de seguimiento estructuradas que mejoraron la trazabilidad de la información." }
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
      content: "Plataforma de evaluación de riesgo crediticio de extremo a extremo, construida como ejercicio de MLOps de nivel bancario.",
      stack: en.projects[0].stack
    },
    {
      id: "proj-2",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: commonIcons.ai_health_icon,
      content: "Plataforma MLOps end-to-end para predecir casos de malaria y riesgo de brote por distrito x semana epidemiológica en Perú.",
      stack: en.projects[1].stack
    },
    {
      id: "proj-3",
      title: "Rumbo - AI Agent Recruitment Matching Platform",
      github: "https://github.com/MelZarate-science/Rumbo",
      link: "https://rumbo-dev-25592102293.us-central1.run.app/app/",
      image: commonIcons.ai_hr_icon,
      content: "Plataforma de matching profesional basada en un sistema multiagente de IA. Evalúa fit real entre candidatos y empresas sin sesgos.",
      stack: en.projects[2].stack
    },
    {
      id: "proj-4",
      title: "Proyectos de Investigación",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: commonIcons.investigacion,
      content: "Proyectos con documentación: Análisis del Problema de Heterocedasticidad, Consumer Credit Demand, Regresión Logística Bayesiana, etc.",
      stack: en.projects[3].stack
    }
  ],
  socialMedia: en.socialMedia,
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Statistics @ UNMSM | Machine Learning Engineer",
    intro: "Soy estudiante de Estadística enfocado en Data Science, Advanced Analytics, Machine Learning y MLOps, con interés en transformar problemas de negocio en soluciones basadas en datos que generen impacto y puedan llevarse a producción. Mi formación en Estadística me permite aportar una perspectiva cuantitativa, mientras que mi experiencia en desarrollo y MLOps me permite llevar soluciones analíticas hacia productos tecnológicos utilizables y mantenibles."
  }
};

const data = { en, es };
export default data;
