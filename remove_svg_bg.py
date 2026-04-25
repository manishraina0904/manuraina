import glob, re
files = glob.glob('assets/skill-*.svg')
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    new_content = re.sub(r'<rect width="160" height="160"[^>]+>\s*', '', content)
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        count += 1
print(f'Processed {count} files out of {len(files)} files.')
