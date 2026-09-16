import re
import os
import urllib.request

base_dir = r"C:\Users\esluw\personal-portfolio"
assets_dir = os.path.join(base_dir, "src", "assets")
constants_file = os.path.join(base_dir, "src", "constants", "index.js")
assets_index_file = os.path.join(assets_dir, "index.js")

# Download 3 images for projects/experiences
image_names = ["ml_project1.jpg", "ml_project2.jpg", "ds_analytics.jpg", "unmsm.jpg", "realml.jpg"]
seeds = ["ml1", "ml2", "ds1", "uni", "realml"]
for img, seed in zip(image_names, seeds):
    url = f"https://picsum.photos/seed/{seed}/400/400"
    img_path = os.path.join(assets_dir, img)
    if not os.path.exists(img_path):
        urllib.request.urlretrieve(url, img_path)

# Update assets/index.js (append if not present)
with open(assets_index_file, "r", encoding="utf-8") as f:
    assets_content = f.read()

new_exports = []
for img in image_names:
    var_name = img.split(".")[0]
    if var_name not in assets_content:
        import_stmt = f"import {var_name} from './{img}';\n"
        assets_content = import_stmt + assets_content
        new_exports.append(var_name)

if new_exports:
    # try to find the export statement
    export_idx = assets_content.find("export {")
    if export_idx != -1:
        # insert into export {
        parts = assets_content.split("export {")
        assets_content = parts[0] + "export {\n  " + ",\n  ".join(new_exports) + ",\n" + parts[1]
    
with open(assets_index_file, "w", encoding="utf-8") as f:
    f.write(assets_content)

# Define the new content for constants
new_education = """export const educationList = [
  {
    id: "education-1",
    icon: unmsm,
    title: "Universidad Nacional Mayor de San Marcos (UNMSM)",
    degree: "Licenciatura en Estadística",
    duration: "may. 2022 - dic. 2027",
    content1: "Tercio Superior de la Escuela Profesional de Estadística.",
    content2: "Becario PRONABEC (2024) por rendimiento académico sobresaliente.",
  }
];"""

new_achievements = """export const achievements = [
  {
    id: "a-1",
    icon: ml_project1,
    event: "Machine Learning Specialization",
    position: "DeepLearning.AI y Stanford University",
    content1: "abril de 2026",
    content2: "",
    content3: "",
  },
  {
    id: "a-2",
    icon: ds_analytics,
    event: "SQL for Data Science",
    position: "University of California, Davis",
    content1: "agosto de 2026",
    content2: "",
    content3: "",
  },
  {
    id: "a-3",
    icon: ml_project2,
    event: "Building with Artificial Intelligence",
    position: "Saylor University",
    content1: "julio de 2026",
    content2: "",
    content3: "",
  },
  {
    id: "a-4",
    icon: realml,
    event: "Python Essentials for MLOps",
    position: "Duke University",
    content1: "junio de 2026",
    content2: "",
    content3: "",
  },
  {
    id: "a-5",
    icon: ds_analytics,
    event: "Programming for Everybody (Getting Started with Python)",
    position: "University of Michigan",
    content1: "marzo de 2026",
    content2: "",
    content3: "",
  }
];"""

new_skills = """export const skills = [
  {
    title: "Lenguajes y Herramientas",
    items: [
      { id: "pl-1", icon: SiPython, name: "Python" },
      { id: "pl-2", icon: SiR, name: "R" },
      { id: "pl-3", icon: SiMysql, name: "SQL" },
      { id: "pl-4", icon: SiMicrosoftexcel, name: "Excel avanzado" },
      { id: "pl-5", icon: SiGit, name: "Git/GitHub" }
    ],
  },
  {
    title: "IA y Datos",
    items: [
      { id: "f-1", icon: SiPandas, name: "pandas" },
      { id: "f-2", icon: SiNumpy, name: "NumPy" },
      { id: "f-3", icon: SiScikitlearn, name: "scikit-learn" },
      { id: "f-4", icon: SiTensorflow, name: "Feature Engineering" },
      { id: "f-5", icon: SiGooglecloud, name: "EDA" }
    ],
  },
  {
    title: "Machine Learning y MLOps",
    items: [
      { id: "t-1", icon: SiFastapi, name: "FastAPI" },
      { id: "t-2", icon: SiDocker, name: "Docker" },
      { id: "t-3", icon: SiGithubactions, name: "GitHub Actions" },
      { id: "t-4", icon: SiMlflow, name: "MLflow" },
      { id: "t-5", icon: SiXgboost, name: "XGBoost & LightGBM" }
    ],
  },
  {
    title: "Herramientas y Cloud",
    items: [
      { id: "c-1", icon: SiPowerbi, name: "Power BI" },
      { id: "c-2", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "c-3", icon: SiGooglecloud, name: "Vertex AI" },
      { id: "c-4", icon: SiAmazonaws, name: "AWS" }
    ],
  }
];"""

new_experiences = """export const experiences = [
  {
    organization: "RealML",
    title: "Founder & CEO",
    duration: "marzo de 2026 - actualidad",
    desc: ["Fundé y dirijo RealML, iniciativa personal de investigación aplicada en Machine Learning.",
           "Lidero el desarrollo de soluciones de riesgo, analítica predictiva y sistemas de Machine Learning.",
           "Construí y documenté públicamente en GitHub tres plataformas de extremo a extremo."],
    role: "Liderazgo en ML",
    icon: realml,
  },
  {
    organization: "Municipalidad (Áncash, Perú)",
    title: "Auxiliar de Recursos Humanos",
    duration: "2024 · 3 meses",
    desc: ["Procesé y organicé datos de personal (planillas, asistencia, registros administrativos) en Excel.",
           "Coordinando con distintas áreas internas y asegurando la confidencialidad de la información institucional."],
    role: "Auxiliar",
    icon: ds_analytics,
  },
  {
    organization: "Mebol. Industria alimentaria",
    title: "Encargado de Almacén",
    duration: "2023 - 2024 · 1 año",
    desc: ["Administré el control de inventarios mediante Excel y SQL.",
           "Implementando tablas de seguimiento estructuradas que mejoraron la trazabilidad de la información."],
    role: "Administración de Datos",
    icon: ml_project1,
  }
];"""

new_projects = """export const projects = [
  {
    id: "project-1",
    title: "Credit Risk ML Platform",
    github: "https://github.com/wildereslu/credit-risk-ml",
    link: "https://demo.creditrisk.com",
    image: ml_project1,
    content: "Plataforma de evaluación de riesgo crediticio end-to-end: benchmark de 4 algoritmos (Regresión Logística, XGBoost, LightGBM, CatBoost), API en FastAPI, demo en Streamlit, monitoreo de drift (PSI) y reentrenamiento automático vía CI/CD.",
    stack: [
      { id: "icon-1", icon: SiPython },
      { id: "icon-2", icon: SiFastapi },
      { id: "icon-3", icon: SiGithubactions },
    ],
  },
  {
    id: "project-2",
    title: "Peru Malaria Early Warning Platform",
    github: "https://github.com/wildereslu/malaria-warning",
    image: ml_project2,
    content: "Plataforma de Machine Learning para predecir la incidencia de malaria por distrito y semana epidemiológica en Perú y detectar riesgo de brote: feature engineering temporal, LightGBM + Optuna, validación walk-forward, monitoreo de drift con Evidently y política de reentrenamiento automático.",
    stack: [
      { id: "icon-1", icon: SiPython },
      { id: "icon-2", icon: SiXgboost },
    ],
  },
  {
    id: "project-3",
    title: "Rumbo",
    github: "https://github.com/wildereslu/rumbo",
    link: "https://demo.rumbo.com",
    image: ds_analytics,
    content: "Plataforma de matching profesional con un sistema multiagente (Gemini vía Vertex AI y Google ADK): a cargo del diseño de los agentes de IA, la extracción de requisitos y la evaluación de compatibilidad entre candidato y puesto; desplegada en Google Cloud Run.",
    stack: [
      { id: "icon-1", icon: SiGooglecloud },
      { id: "icon-2", icon: SiPython },
    ],
  }
];"""

new_socialMedia = """export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://linkedin.com/in/wilder_eslu-data",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/wildereslu.data-science",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:esluwilder@gmail.com",
  },
];"""

new_aboutMe = """export const aboutMe = {
    name: "Wilder Gilmer Espinoza Luna",
    tagLine: "Data Science | Machine Learning | Analytics",
    intro: "Estudiante de Estadística en la Universidad Nacional Mayor de San Marcos (UNMSM), enfocado en Data Science, Machine Learning y MLOps. Me interesa entender primero el problema y el negocio, y a partir de ahí construir soluciones basadas en datos: desde el análisis y el modelamiento hasta el despliegue, el monitoreo y la mejora continua del producto. He desarrollado proyectos end-to-end combinando estadística, machine learning e ingeniería para construir sistemas en contexto real.",
}"""

with open(constants_file, "r", encoding="utf-8") as f:
    content = f.read()

# Add missing imports for Icons
icons_to_import_si = ["SiPython", "SiR", "SiMysql", "SiMicrosoftexcel", "SiGit", "SiPandas", "SiNumpy", "SiScikitlearn", "SiTensorflow", "SiGooglecloud", "SiFastapi", "SiDocker", "SiGithubactions", "SiMlflow", "SiXgboost", "SiPowerbi", "SiPostgresql", "SiAmazonaws"]
for icon in icons_to_import_si:
    if icon not in content:
        # insert into react-icons/si import
        if "react-icons/si" in content:
            content = re.sub(r'(} from "react-icons/si";)', r'  ' + icon + ',\n\1', content)

# Replace sections
def replace_block(content, var_name, new_block):
    pattern = r'export const ' + var_name + r'\s*=\s*(?:\[|\{).*?(?=\nexport const |\Z)'
    # We will just do simple text splitting because regex matching large arrays might be tricky
    return content

# Using text replacement
sections = [
    ("export const educationList = [", new_education),
    ("export const achievements = [", new_achievements),
    ("export const skills = [", new_skills),
    ("export const experiences = [", new_experiences),
    ("export const projects = [", new_projects),
    ("export const socialMedia = [", new_socialMedia),
    ("export const aboutMe = {", new_aboutMe)
]

for section_start, replacement in sections:
    start_idx = content.find(section_start)
    if start_idx != -1:
        # Find next export const or end of file
        next_export = content.find("export const ", start_idx + 1)
        if next_export == -1:
            end_idx = len(content)
        else:
            end_idx = next_export
        
        # some trailing stuff might be missed but it's fine if we replace correctly
        content = content[:start_idx] + replacement + "\n\n" + content[end_idx:]

# Handle missing icon imports by replacing the si imports
si_import_match = re.search(r'import \{([\s\S]*?)\} from "react-icons/si";', content)
if si_import_match:
    existing_icons = [i.strip() for i in si_import_match.group(1).split(",") if i.strip()]
    for icon in icons_to_import_si:
        if icon not in existing_icons:
            existing_icons.append(icon)
    new_si_import = "import {\n  " + ",\n  ".join(existing_icons) + "\n} from \"react-icons/si\";"
    content = content[:si_import_match.start()] + new_si_import + content[si_import_match.end():]
else:
    content = "import {\n  " + ",\n  ".join(icons_to_import_si) + "\n} from \"react-icons/si\";\n" + content

# Handle assets imports
asset_import_match = re.search(r'import \{([\s\S]*?)\} from "../assets";', content)
if asset_import_match:
    existing_assets = [i.strip() for i in asset_import_match.group(1).split(",") if i.strip()]
    for new_asset in ["ml_project1", "ml_project2", "ds_analytics", "unmsm", "realml"]:
        if new_asset not in existing_assets:
            existing_assets.append(new_asset)
    new_asset_import = "import {\n  " + ",\n  ".join(existing_assets) + "\n} from \"../assets\";"
    content = content[:asset_import_match.start()] + new_asset_import + content[asset_import_match.end():]

# Update the header link names and call to action
content = content.replace("Mittal", "Wilder")
content = content.replace("Parth", "Espinoza")
content = content.replace("https://github.com/mittal-parth/personal-portfolio", "https://github.com/wildereslu.data-science/personal-portfolio")
content = content.replace("https://www.linkedin.com/in/mittal-parth", "https://linkedin.com/in/wilder_eslu-data")

with open(constants_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated successfully.")
