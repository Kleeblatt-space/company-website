import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# find all style objects and convert nested single quotes
def fix_quotes(match):
    style_str = match.group(0)
    # just replace internal ' with " if it's nested
    return style_str.replace("''SF Mono', Monaco, monospace'", '"\'SF Mono\', Monaco, monospace"')

content = content.replace("''SF Mono', Monaco, monospace'", '"\'SF Mono\', Monaco, monospace"')
content = content.replace("'\"SF Mono\", Monaco, monospace'", '"\'SF Mono\', Monaco, monospace"')

# What if it was 'font-family': ''SF Mono', Monaco, monospace'
content = re.sub(r"''SF Mono', Monaco, monospace'", '"\'SF Mono\', Monaco, monospace"', content)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
