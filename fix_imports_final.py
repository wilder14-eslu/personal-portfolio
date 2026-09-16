import io
import re

with io.open('src/constants/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# completely remove ALL import { ... } from "react-icons/..."
content = re.sub(r'import\s+\{[\s\S]*?\}\s+from\s+"react-icons/[a-z]+";', '', content)

new_imports = """import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaAws, FaBrain, FaChartBar, FaChartLine, FaCogs, FaDatabase, FaDocker, FaGithub, FaRobot } from "react-icons/fa";
import { SiDocker, SiFastapi, SiGit, SiGithubactions, SiGoogle, SiGooglecloud, SiKeras, SiMysql, SiOpenai, SiPostgresql, SiPytorch, SiR, SiReact, SiScikitlearn, SiTensorflow, SiPython } from "react-icons/si";
"""

content = new_imports + '\n' + content.strip()

with io.open('src/constants/data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("fixed")
