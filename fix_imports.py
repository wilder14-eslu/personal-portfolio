import io
import re

with io.open('src/constants/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    items = match.group(1).replace('\n', '').split(',')
    clean_items = [i.strip() for i in items if i.strip()]
    unique_items = sorted(set(clean_items))
    return 'import {\n  ' + ',\n  '.join(unique_items) + '\n} from "react-icons/si";'

# Replace all occurrences of import { ... } from "react-icons/si" with a single one?
# No, if there are multiple import statements for react-icons/si, re.sub with replacer will deduplicate WITHIN each statement, but not across multiple statements.
# Let's extract ALL items from all react-icons/si imports, remove the statements, and insert a new one.

all_si_items = set()

def extractor(match):
    items = match.group(1).replace('\n', '').split(',')
    for i in items:
        if i.strip():
            all_si_items.add(i.strip())
    return ''

content = re.sub(r'import\s+\{([\s\S]*?)\}\s+from\s+"react-icons/si";', extractor, content)

new_import = 'import {\n  ' + ',\n  '.join(sorted(list(all_si_items))) + '\n} from "react-icons/si";'
content = new_import + '\n' + content

with io.open('src/constants/data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("deduped")
