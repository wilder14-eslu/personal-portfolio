import io
import re

with io.open('src/constants/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add placeholder import
content = content.replace(
    'import realml from "../assets/realml.jpg";',
    'import realml from "../assets/realml.jpg";\nimport placeholder from "../assets/placeholder.svg";'
)
content = content.replace(
    'ml_project1, ml_project2, ds_analytics, unmsm, realml\n};',
    'ml_project1, ml_project2, ds_analytics, unmsm, realml, placeholder\n};'
)

new_exp_en = """    {
      organisation: "RealML",
      logo: commonIcons.realml,
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
      logo: commonIcons.placeholder,
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
      logo: commonIcons.placeholder,
      positions: [
        {
          title: "Warehouse Manager",
          duration: "2023 - 2024 (1 year)",
          content: [
            { text: "Managed inventory control using Excel and SQL, implementing structured tracking tables that improved information traceability." }
          ]
        }
      ]
    }"""

new_exp_es = """    {
      organisation: "RealML",
      logo: commonIcons.realml,
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
      logo: commonIcons.placeholder,
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
      logo: commonIcons.placeholder,
      positions: [
        {
          title: "Encargado de Almacén",
          duration: "2023 a 2024 (1 año)",
          content: [
            { text: "Administré el control de inventarios mediante Excel y SQL, implementando tablas de seguimiento estructuradas que mejoraron la trazabilidad de la información." }
          ]
        }
      ]
    }"""

# Replace in en block
content = re.sub(r'\{\s*organisation:\s*"RealML"[\s\S]*?\}\s*\]\s*\}\s*', new_exp_en, content, count=1)
# Replace in es block
content = re.sub(r'\{\s*organisation:\s*"RealML"[\s\S]*?\}\s*\]\s*\}\s*', new_exp_es, content, count=1)

with io.open('src/constants/data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("added experiences")
