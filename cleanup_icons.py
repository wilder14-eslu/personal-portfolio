import io
import re

with io.open('src/constants/data.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace any stray FaAws or FaChartBar inside si imports
c = re.sub(r'import\s+\{([\s\S]*?)\}\s+from\s+"react-icons/si";', lambda m: 'import { ' + ', '.join(sorted(set(i.strip() for i in m.group(1).replace('\n', '').split(',') if i.strip() and not i.strip().startswith('Fa') and not i.strip().startswith('Bs') and i.strip() != 'SiAmazonaws' and i.strip() != 'SiMicrosoftazure' and i.strip() != 'SiKubernetes'))) + ' } from "react-icons/si";', c)

# Use FaAws for AWS
c = c.replace('SiAmazonaws', 'FaAws')
# Use FaCogs for Azure and K8s just to be safe
c = c.replace('SiMicrosoftazure', 'FaCogs')
c = c.replace('SiKubernetes', 'FaDocker')

with io.open('src/constants/data.js', 'w', encoding='utf-8') as f:
    f.write(c)
print("cleaned up")
