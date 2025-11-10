import json
from jinja2 import Environment, FileSystemLoader
from xhtml2pdf import pisa 

# Define input/output filenames
JSON_PATH = 'resume_data.json'
HTML_TEMPLATE = 'resume_template.html'
OUTPUT_PDF = 'shubham_negi_resume.pdf'

def generate_resume_pdf():
    # 1. Read JSON Data
    try:
        with open(JSON_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {JSON_PATH} not found.")
        return

    # 2. Render HTML with Jinja2
    env = Environment(loader=FileSystemLoader('.'))
    template = env.get_template(HTML_TEMPLATE)
    rendered_html = template.render(**data)

    # 3. Convert to PDF using xhtml2pdf
    print(f"Generating {OUTPUT_PDF}...")
    with open(OUTPUT_PDF, "wb") as pdf_file:
        pisa_status = pisa.CreatePDF(
            src=rendered_html,   # The HTML content
            dest=pdf_file        # The output file handle
        )

    # 4. Check for errors
    if pisa_status.err:
        print(f"Error generating PDF: {pisa_status.err}")
    else:
        print(f"Success! Resume saved to: {OUTPUT_PDF}")

if __name__ == "__main__":
    generate_resume_pdf()