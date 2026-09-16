import io

with io.open('src/constants/data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_imports = """import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";

import {
  FaAws,
  FaBrain,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaRobot
} from "react-icons/fa";

import {
  BsGraphUp
} from "react-icons/bs";

import {
  SiAmazonaws,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGoogle,
  SiGooglecloud,
  SiKeras,
  SiKubernetes,
  SiMicrosoftazure,
  SiMysql,
  SiOpenai,
  SiPostgresql,
  SiPowerbi,
  SiPytorch,
  SiR,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiPython
} from "react-icons/si";
"""

with io.open('src/constants/data.js', 'w', encoding='utf-8') as f:
    f.write(new_imports + "".join(lines[36:]))

print("Fixed imports")
