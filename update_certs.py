import io
import re

with io.open('src/constants/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_achievements = """  achievements: [
    { 
      id: "a-1", 
      icon: commonIcons.unmsm, 
      event: "Machine Learning Specialization", 
      position: "DeepLearning.AI & Stanford", 
      content1: "Completed specialization", 
      project: "/certificados/Machine Learning Specialization (DeepLearning.AI and Stanford).pdf" 
    },
    { 
      id: "a-2", 
      icon: commonIcons.ds_analytics, 
      event: "Python Essentials for MLOps", 
      position: "Duke University", 
      content1: "MLOps workflows & tools", 
      project: "/certificados/Python Essentials for MLOps  (Duke University).pdf" 
    },
    { 
      id: "a-3", 
      icon: commonIcons.ds_analytics, 
      event: "Building with Artificial Intelligence", 
      position: "CS205", 
      content1: "Saylor Academy", 
      project: "/certificados/CS205-- Building with Artificial Intelligence.pdf" 
    },
    { 
      id: "a-4", 
      icon: commonIcons.ds_analytics, 
      event: "Programming for Everybody (Python)", 
      position: "University of Michigan", 
      content1: "Python Basics", 
      project: "/certificados/Programming for Everybody (Getting Started with Python) -  University of Michigan.pdf" 
    },
    { 
      id: "a-5", 
      icon: commonIcons.unmsm, 
      event: "Business-Proficient English", 
      position: "Saylor Academy", 
      content1: "ESL005", 
      project: "/certificados/ESL005-- Business-Proficient English as a Second Language.pdf" 
    },
    { 
      id: "a-6", 
      icon: commonIcons.unmsm, 
      event: "Advanced English", 
      position: "Saylor Academy", 
      content1: "ESL004", 
      project: "/certificados/ESL004-- Advanced English as a Second Language.pdf" 
    },
    { 
      id: "a-7", 
      icon: commonIcons.placeholder, 
      event: "Marketing Digital", 
      position: "Curso Especializado", 
      content1: "Marketing Digital", 
      project: "/certificados/Marketing Digital.pdf" 
    },
    { 
      id: "a-8", 
      icon: commonIcons.unmsm, 
      event: "Certificado UNMSM", 
      position: "UNMSM", 
      content1: "Centro de Informática", 
      project: "/certificados/0004272-2022-UAC-CINFO-DGSU_UNMSM.pdf" 
    }
  ],"""

content = re.sub(r'  achievements: \[[^\]]+?\],', new_achievements, content, count=1)

with io.open('src/constants/data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("updated achievements")
