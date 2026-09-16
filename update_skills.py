import re
import codecs

with codecs.open('src/constants/data.js', 'r', 'utf-8') as f:
    content = f.read()

# I need to add icons to data.js imports
new_imports = """
import {
  FaBrain, FaRobot, FaDatabase, FaChartLine, FaCogs, FaAws, FaDocker, FaGithub
} from "react-icons/fa";
import {
  SiPython, SiR, SiPostgresql, SiPowerbi, SiScikitlearn, SiTensorflow, SiKeras, SiPytorch, SiOpenai, SiFastapi, SiDocker, SiKubernetes, SiGithubactions, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiGit, SiGoogle
} from "react-icons/si";
import { BsGraphUp } from "react-icons/bs";
"""

new_skills_en = """  skills: [
    {
      title: "Languages & Tools",
      items: [
        { id: "s-1", icon: SiPython, name: "Python" },
        { id: "s-2", icon: SiR, name: "R" },
        { id: "s-3", icon: FaDatabase, name: "SQL" },
        { id: "s-4", icon: SiPostgresql, name: "PostgreSQL" },
        { id: "s-5", icon: SiPowerbi, name: "Power BI" },
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
        { id: "s-24", icon: SiAmazonaws, name: "AWS, Azure, GCP" },
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
  ],"""

new_skills_es = new_skills_en.replace("Languages & Tools", "Lenguajes y Herramientas")
new_skills_es = new_skills_es.replace("Cloud & DevOps", "Cloud y DevOps")
new_skills_es = new_skills_es.replace("Metrics, Eval & Soft Skills", "Métricas, Eval y Soft Skills")
new_skills_es = new_skills_es.replace("Analytical Thinking", "Pensamiento Analítico")
new_skills_es = new_skills_es.replace("Problem Solving & Scrum", "Resolución de Problemas y Scrum")

# Replace EN skills
content = re.sub(r'  skills: \[\s*\{\s*title: "Languages & Tools".*?\}\s*\],\s*experiences:', new_skills_en + '\n  experiences:', content, flags=re.DOTALL)

# Replace ES skills
content = re.sub(r'  skills: \[\s*\{\s*title: "Lenguajes y Herramientas".*?\}\s*\],\s*experiences:', new_skills_es + '\n  experiences:', content, flags=re.DOTALL)
# fallback if it's named something else like "IA y Datos"
content = re.sub(r'  skills: \[\s*\{\s*title: ".*?Herramientas".*?\}\s*\],\s*experiences:', new_skills_es + '\n  experiences:', content, flags=re.DOTALL)

# Inject imports at the top
content = new_imports + '\n' + content

with codecs.open('src/constants/data.js', 'w', 'utf-8') as f:
    f.write(content)

print("done")
