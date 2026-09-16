import os
import re

base_dir = r"C:\Users\esluw\personal-portfolio"
src_dir = os.path.join(base_dir, "src")
constants_dir = os.path.join(src_dir, "constants")
components_dir = os.path.join(src_dir, "components")

data_js_content = """
import {
  AiFillGithub, AiFillLinkedin, AiFillMail
} from "react-icons/ai";

import {
  SiPython, SiR, SiMysql, SiMicrosoftexcel, SiGit, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiGooglecloud, SiFastapi, SiDocker, SiGithubactions, SiMlflow, SiXgboost, SiPowerbi, SiPostgresql, SiAmazonaws, SiReact
} from "react-icons/si";

import ml_project1 from "../assets/ml_project1.jpg";
import ml_project2 from "../assets/ml_project2.jpg";
import ds_analytics from "../assets/ds_analytics.jpg";
import unmsm from "../assets/unmsm.jpg";
import realml from "../assets/realml.jpg";

export const resumeLink = "https://drive.google.com/file/d/dummy-link/view?usp=sharing";
export const repoLink = "https://github.com/wildereslu.data-science/personal-portfolio";
export const callToAction = "https://linkedin.com/in/wilder_eslu-data";

const commonIcons = {
  SiPython, SiR, SiMysql, SiMicrosoftexcel, SiGit, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiGooglecloud, SiFastapi, SiDocker, SiGithubactions, SiMlflow, SiXgboost, SiPowerbi, SiPostgresql, SiAmazonaws, SiReact,
  AiFillGithub, AiFillLinkedin, AiFillMail,
  ml_project1, ml_project2, ds_analytics, unmsm, realml
};

export const en = {
  navLinks: [
    { id: "skills", title: "Skills & Experience" },
    { id: "education", title: "Education" },
    { id: "achievements", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "contactMe", title: "Contact Me" }
  ],
  educationList: [
    {
      id: "edu-1", icon: commonIcons.unmsm,
      title: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      degree: "Licenciatura, Statistics",
      duration: "May 2022 - Dec 2027",
      content1: "Focus on Data Science, Advanced Analytics, Machine Learning and MLOps.",
      content2: "PRONABEC Scholar (2024)."
    },
    {
      id: "edu-2", icon: commonIcons.ds_analytics,
      title: "Stanford University",
      degree: "Machine Learning Specialization",
      duration: "Nov 2025 - Apr 2026",
      content1: "Advanced algorithms, deep learning.",
      content2: ""
    }
  ],
  achievements: [
    { id: "a-1", icon: commonIcons.ds_analytics, event: "SQL for Data Science", position: "UC Davis", content1: "Aug 2026", content2: "", content3: "" },
    { id: "a-2", icon: commonIcons.ds_analytics, event: "Building with Artificial Intelligence", position: "Saylor", content1: "Jul 2026", content2: "", content3: "" },
    { id: "a-3", icon: commonIcons.ds_analytics, event: "Python Essentials for MLOps", position: "Duke", content1: "Jun 2026", content2: "", content3: "" },
    { id: "a-4", icon: commonIcons.ml_project1, event: "Machine Learning Specialization", position: "DeepLearning.AI", content1: "Apr 2026", content2: "", content3: "" }
  ],
  skills: [
    {
      title: "Languages & Tools",
      items: [
        { id: "pl-1", icon: commonIcons.SiPython, name: "Python" },
        { id: "pl-2", icon: commonIcons.SiR, name: "R" },
        { id: "pl-3", icon: commonIcons.SiMysql, name: "SQL" },
        { id: "pl-4", icon: commonIcons.SiGit, name: "Git/GitHub" }
      ]
    },
    {
      title: "AI & Data",
      items: [
        { id: "ad-1", icon: commonIcons.SiPandas, name: "pandas / NumPy" },
        { id: "ad-2", icon: commonIcons.SiScikitlearn, name: "scikit-learn" },
        { id: "ad-3", icon: commonIcons.SiTensorflow, name: "Feature Engineering" }
      ]
    },
    {
      title: "Machine Learning & MLOps",
      items: [
        { id: "ml-1", icon: commonIcons.SiFastapi, name: "FastAPI" },
        { id: "ml-2", icon: commonIcons.SiDocker, name: "Docker" },
        { id: "ml-3", icon: commonIcons.SiGithubactions, name: "CI/CD & GitHub Actions" },
        { id: "ml-4", icon: commonIcons.SiMlflow, name: "MLflow / SHAP" }
      ]
    }
  ],
  experiences: [
    {
      organization: "RealML",
      title: "Founder & CEO",
      duration: "Mar 2026 - Present",
      desc: [
        "Founder of RealML, an applied machine learning initiative focused on building data-driven products and intelligent systems that solve real-world business and operational problems.",
        "I lead the development of machine learning and decision intelligence solutions, combining statistical modeling, predictive analytics, and AI to transform data into actionable insights.",
        "Current focus areas include: Risk modeling, Predictive analytics, ML systems and MLOps, AI-powered products, Optimization."
      ],
      role: "ML Leadership",
      icon: commonIcons.realml
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Credit Risk ML Platform - End-to-End MLOps",
      github: "https://github.com/wilder14-eslu/credit-risk-ml-platform",
      link: "https://credit-risk-ml-platform-xk4rsvntltadpumscgcwko.streamlit.app/",
      image: commonIcons.ml_project1,
      content: "End-to-End credit risk evaluation platform (default prediction), built as a bank-grade MLOps exercise.",
      stack: [
        { id: "s-1", icon: commonIcons.SiPython },
        { id: "s-2", icon: commonIcons.SiMlflow },
        { id: "s-3", icon: commonIcons.SiDocker }
      ]
    },
    {
      id: "proj-2",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: commonIcons.ml_project2,
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
      image: commonIcons.ds_analytics,
      content: "A matching platform for professional profiles and companies, where a sequential multi-agent system audits real fit between both sides, and neither side sees the other until there is explicit, staged consent.",
      stack: [
        { id: "s-1", icon: commonIcons.SiGooglecloud },
        { id: "s-2", icon: commonIcons.SiReact }
      ]
    },
    {
      id: "proj-4",
      title: "Proyectos de Investigación",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: commonIcons.unmsm,
      content: "Research projects with documentation: Heteroscedasticity Analysis, Consumer Credit Demand, Bayesian Logistic Regression, etc.",
      stack: [
        { id: "s-1", icon: commonIcons.SiR },
        { id: "s-2", icon: commonIcons.SiPython }
      ]
    }
  ],
  socialMedia: [
    { id: "sm-1", icon: commonIcons.AiFillLinkedin, link: "https://linkedin.com/in/wilder_eslu-data" },
    { id: "sm-2", icon: commonIcons.AiFillGithub, link: "https://github.com/wilder14-eslu" },
    { id: "sm-3", icon: commonIcons.AiFillMail, link: "mailto:esluwilder@gmail.com" }
  ],
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Statistics @ UNMSM | Machine Learning Engineer",
    intro: "I am a Statistics student focused on Data Science, Advanced Analytics, Machine Learning, and MLOps, with an interest in transforming business problems into data-driven solutions that generate impact and can be taken to production. My training in Statistics allows me to provide a quantitative perspective to data analysis and model evaluation, while my experience in development and MLOps enables me to take analytical solutions beyond experimentation to usable and maintainable technological products."
  }
};

export const es = {
  navLinks: [
    { id: "skills", title: "Habilidades y Experiencia" },
    { id: "education", title: "Educación" },
    { id: "achievements", title: "Certificaciones" },
    { id: "projects", title: "Proyectos" },
    { id: "contactMe", title: "Contáctame" }
  ],
  educationList: [
    {
      id: "edu-1", icon: commonIcons.unmsm,
      title: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      degree: "Licenciatura, Estadística",
      duration: "May 2022 - Dic 2027",
      content1: "Enfoque en Data Science, Advanced Analytics, Machine Learning y MLOps.",
      content2: "Becario PRONABEC (2024)."
    },
    {
      id: "edu-2", icon: commonIcons.ds_analytics,
      title: "Stanford University",
      degree: "Machine Learning Specialization",
      duration: "Nov 2025 - Abr 2026",
      content1: "Algoritmos avanzados, deep learning.",
      content2: ""
    }
  ],
  achievements: [
    { id: "a-1", icon: commonIcons.ds_analytics, event: "SQL for Data Science", position: "UC Davis", content1: "Ago 2026", content2: "", content3: "" },
    { id: "a-2", icon: commonIcons.ds_analytics, event: "Building with Artificial Intelligence", position: "Saylor", content1: "Jul 2026", content2: "", content3: "" },
    { id: "a-3", icon: commonIcons.ds_analytics, event: "Python Essentials for MLOps", position: "Duke", content1: "Jun 2026", content2: "", content3: "" },
    { id: "a-4", icon: commonIcons.ml_project1, event: "Machine Learning Specialization", position: "DeepLearning.AI", content1: "Abr 2026", content2: "", content3: "" }
  ],
  skills: [
    {
      title: "Lenguajes y Herramientas",
      items: [
        { id: "pl-1", icon: commonIcons.SiPython, name: "Python" },
        { id: "pl-2", icon: commonIcons.SiR, name: "R" },
        { id: "pl-3", icon: commonIcons.SiMysql, name: "SQL" },
        { id: "pl-4", icon: commonIcons.SiGit, name: "Git/GitHub" }
      ]
    },
    {
      title: "IA y Datos",
      items: [
        { id: "ad-1", icon: commonIcons.SiPandas, name: "pandas / NumPy" },
        { id: "ad-2", icon: commonIcons.SiScikitlearn, name: "scikit-learn" },
        { id: "ad-3", icon: commonIcons.SiTensorflow, name: "Feature Engineering" }
      ]
    },
    {
      title: "Machine Learning y MLOps",
      items: [
        { id: "ml-1", icon: commonIcons.SiFastapi, name: "FastAPI" },
        { id: "ml-2", icon: commonIcons.SiDocker, name: "Docker" },
        { id: "ml-3", icon: commonIcons.SiGithubactions, name: "CI/CD y GitHub Actions" },
        { id: "ml-4", icon: commonIcons.SiMlflow, name: "MLflow / SHAP" }
      ]
    }
  ],
  experiences: [
    {
      organization: "RealML",
      title: "Founder & CEO",
      duration: "Mar 2026 - Actualidad",
      desc: [
        "Fundé y dirijo RealML, iniciativa personal de investigación aplicada en Machine Learning enfocada en construir productos basados en datos.",
        "Lidero el desarrollo de soluciones de riesgo, analítica predictiva y sistemas de Machine Learning.",
        "Áreas de enfoque: Modelamiento de riesgo, analítica predictiva, sistemas de ML y MLOps, productos impulsados por IA."
      ],
      role: "Liderazgo en ML",
      icon: commonIcons.realml
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Credit Risk ML Platform - End-to-End MLOps",
      github: "https://github.com/wilder14-eslu/credit-risk-ml-platform",
      link: "https://credit-risk-ml-platform-xk4rsvntltadpumscgcwko.streamlit.app/",
      image: commonIcons.ml_project1,
      content: "Plataforma de evaluación de riesgo crediticio de extremo a extremo, construida como ejercicio de MLOps de nivel bancario. Stack: Regresión Logística, XGBoost, LightGBM, CatBoost, MLflow, FastAPI, Docker.",
      stack: [
        { id: "s-1", icon: commonIcons.SiPython },
        { id: "s-2", icon: commonIcons.SiMlflow },
        { id: "s-3", icon: commonIcons.SiDocker }
      ]
    },
    {
      id: "proj-2",
      title: "Peru Malaria Early Warning Platform",
      github: "https://github.com/wilder14-eslu/malaria-prediction-peru",
      image: commonIcons.ml_project2,
      content: "Plataforma MLOps end-to-end para predecir casos de malaria y riesgo de brote por distrito x semana epidemiológica en Perú. Stack: LightGBM, Optuna, MLflow, SHAP, FastAPI, Evidently.",
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
      image: commonIcons.ds_analytics,
      content: "Plataforma de matching profesional basada en un sistema multiagente de IA. Evalúa fit real entre candidatos y empresas sin sesgos, usando Vertex AI, Google ADK y búsqueda vectorial en Firestore.",
      stack: [
        { id: "s-1", icon: commonIcons.SiGooglecloud },
        { id: "s-2", icon: commonIcons.SiReact }
      ]
    },
    {
      id: "proj-4",
      title: "Proyectos de Investigación",
      github: "https://github.com/wilder14-eslu/Proyectos-de-Investigacion",
      image: commonIcons.unmsm,
      content: "Proyectos con documentación: Análisis del Problema de Heterocedasticidad, Consumer Credit Demand, Regresión Logística Bayesiana, etc.",
      stack: [
        { id: "s-1", icon: commonIcons.SiR },
        { id: "s-2", icon: commonIcons.SiPython }
      ]
    }
  ],
  socialMedia: [
    { id: "sm-1", icon: commonIcons.AiFillLinkedin, link: "https://linkedin.com/in/wilder_eslu-data" },
    { id: "sm-2", icon: commonIcons.AiFillGithub, link: "https://github.com/wilder14-eslu" },
    { id: "sm-3", icon: commonIcons.AiFillMail, link: "mailto:esluwilder@gmail.com" }
  ],
  aboutMe: {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Statistics @ UNMSM | Machine Learning Engineer",
    intro: "Soy estudiante de Estadística enfocado en Data Science, Advanced Analytics, Machine Learning y MLOps, con interés en transformar problemas de negocio en soluciones basadas en datos que generen impacto y puedan llevarse a producción. Mi formación en Estadística me permite aportar una perspectiva cuantitativa, mientras que mi experiencia en desarrollo y MLOps me permite llevar soluciones analíticas hacia productos tecnológicos utilizables y mantenibles."
  }
};

const data = { en, es };
export default data;
"""

with open(os.path.join(constants_dir, "data.js"), "w", encoding="utf-8") as f:
    f.write(data_js_content)

i18n_content = """
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { "lang": "English" } },
      es: { translation: { "lang": "Español" } }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
"""

with open(os.path.join(src_dir, "i18n.js"), "w", encoding="utf-8") as f:
    f.write(i18n_content)

main_jsx = os.path.join(src_dir, "main.jsx")
with open(main_jsx, "r", encoding="utf-8") as f:
    main_content = f.read()

if "import './i18n'" not in main_content:
    main_content = "import './i18n';\n" + main_content
    with open(main_jsx, "w", encoding="utf-8") as f:
        f.write(main_content)

# Update all components
for comp in os.listdir(components_dir):
    if comp.endswith(".jsx") or comp.endswith(".js"):
        comp_path = os.path.join(components_dir, comp)
        with open(comp_path, "r", encoding="utf-8") as f:
            c = f.read()
        
        # skip if already modified
        if "useTranslation" in c and "import data" in c:
            continue
            
        modified = False
        if "import {" in c and "../constants" in c:
            # Replace import { ... } from "../constants" with import data from "../constants/data"
            c = re.sub(r'import\s+\{[^}]+\}\s+from\s+[\'"]\.\./constants[\'"];?', 'import data from "../constants/data";', c)
            # Find the component function declaration to inject the hook
            func_match = re.search(r'(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{|function\s+\w+\([^)]*\)\s*\{)', c)
            if func_match:
                func_start = func_match.end()
                
                # Figure out what variables were used in this file
                vars_needed = []
                for v in ["educationList", "achievements", "skills", "experiences", "projects", "socialMedia", "aboutMe", "navLinks", "resumeLink", "repoLink", "callToAction"]:
                    if v in c:
                        vars_needed.append(v)
                
                injection = f"\n  const {{ i18n }} = useTranslation();\n  const lang = i18n.language?.split('-')[0] || 'en';\n  const currentData = data[lang] || data.en;\n  const {{ {', '.join(vars_needed)} }} = currentData;\n"
                
                c = c[:func_start] + injection + c[func_start:]
                c = "import { useTranslation } from 'react-i18next';\n" + c
                modified = True
                
        if comp == "Navbar.jsx":
            # Add language switcher button
            if "languageSwitcher" not in c:
                # Just replace </nav> with button + </nav>
                switcher = """
      <div className="languageSwitcher ml-4">
        <button onClick={() => i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es')} className="text-white bg-dimBlue px-3 py-1 rounded">
          {i18n.language?.startsWith('es') ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>"""
                c = c.replace("</nav>", switcher)
                if not modified:
                    func_match = re.search(r'(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{|function\s+\w+\([^)]*\)\s*\{)', c)
                    if func_match:
                        func_start = func_match.end()
                        injection = f"\n  const {{ i18n }} = useTranslation();\n"
                        c = c[:func_start] + injection + c[func_start:]
                        c = "import { useTranslation } from 'react-i18next';\n" + c
                        modified = True

        if modified:
            with open(comp_path, "w", encoding="utf-8") as f:
                f.write(c)

print("i18n setup complete.")
