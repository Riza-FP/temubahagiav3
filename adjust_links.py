import os

def replace_in_file(file_path, replacements):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements.items():
        content = content.replace(old, new)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

static_dir = 'static'

# Replacements for root files
root_replacements = {
    'href="/">': 'href="index.html">',
    'href="/about"': 'href="about.html"',
    'href="/articles"': 'href="articles.html"',
    'href="/testimony"': 'href="testimony.html"',
    'href="/finding-me"': 'href="finding-me.html"',
    'href="/finding-us"': 'href="finding-us.html"',
    'href="/finding-you"': 'href="finding-you.html"',
    'src="/img': 'src="img',
    "url('/img": "url('img",
}
for i in range(1, 5):
    root_replacements[f'href="/articles/{i}"'] = f'href="articles/{i}.html"'

# Replacements for files in articles subdir
articles_replacements = {
    'href="/">': 'href="../index.html">',
    'href="/about"': 'href="../about.html"',
    'href="/articles"': 'href="../articles.html"',
    'href="/testimony"': 'href="../testimony.html"',
    'href="/finding-me"': 'href="../finding-me.html"',
    'href="/finding-us"': 'href="../finding-us.html"',
    'href="/finding-you"': 'href="../finding-you.html"',
    'src="/img': 'src="../img',
    "url('/img": "url('../img",
}
for i in range(1, 5):
    articles_replacements[f'href="/articles/{i}"'] = f'href="{i}.html"'


for root, dirs, files in os.walk(static_dir):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            if root == static_dir:
                replace_in_file(file_path, root_replacements)
            elif os.path.basename(root) == 'articles':
                replace_in_file(file_path, articles_replacements)

print("Link adjustment complete.")