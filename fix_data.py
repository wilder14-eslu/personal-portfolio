import io
import re

with io.open('src/constants/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    items = match.group(1).split(',')
    clean_items = [i.strip() for i in items if i.strip()]
    unique_items = sorted(set(clean_items))
    return "import {\n  " + ",\n  ".join(unique_items) + "\n} from \"react-icons/si\";"

new_content = re.sub(r'import\s+\{([\s\S]*?)\}\s+from\s+"react-icons/si";', replacer, content)

with io.open('src/constants/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fixed imports in data.js")
