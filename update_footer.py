import io
import re

with io.open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace imports
content = content.replace(
    'import { socialMedia, aboutMe } from "../constants";\nimport { profilePic } from "../assets";\nimport { layout } from "../style";\nimport { resumeLink, repoLink } from "../constants";',
    'import { profilePic } from "../assets";\nimport { layout } from "../style";\nimport data from "../constants/data";\nimport { useTranslation } from "react-i18next";'
)

# Replace component definition
content = content.replace(
    'const Footer = () => (',
    '''const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { socialMedia, aboutMe, resumeLink, repoLink } = currentData;
  return ('''
)

# Close the return
content = content.replace(
    ');\n\nexport default Footer;',
    ');\n};\n\nexport default Footer;'
)

# Remove the Star button
star_regex = r'<a href=\{repoLink\} target="_blank">\s*<Button\s*styles="mt-10 inline-flex items-center justify-center"\s*text="Star"\s*icon=\{AiFillGithub\}\s*/>\s*</a>'
content = re.sub(star_regex, '', content, flags=re.DOTALL)

# Fix Alt Text
content = content.replace('alt="Parth Mittal"', 'alt={aboutMe.name}')

# Remove Made with...
content = re.sub(r'<p>\s*Made with 💙 by Parth Mittal & the Open Source Community\s*</p>', '', content, flags=re.DOTALL)

with io.open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Footer")
