const translations = {
    en: {
        "nav.education": "education",
        "nav.experience": "professional experience",
        "nav.projects": "projects",
        "nav.contacts": "contacts",
        "header.role": "Computer Engineering Student",
        "header.description": "Final-year <strong>Computer Engineering student</strong> with hands-on experience as <strong>Software Developer</strong> and <strong>AI Engineer</strong>. Passionate about <strong>automation</strong> and <strong>process optimization</strong>, with strong <strong>Python</strong> skills and a <strong>data-driven approach</strong> to problem-solving. Proven ability to transform manual workflows into efficient <strong>automated solutions</strong>. Fluent in English, with excellent communication skills and ability to present technical concepts to diverse audiences.",
        "section.education": "education",
        "edu.uni.title": "Computer Engineering",
        "edu.uni.degree_prefix": "Bachelor's Degree, ",
        "edu.uni.name": "UNIMORE &#8599;",
        "edu.uni.courses": "Relevant courses: Numerical Analysis, Statistics, Databases, Internet Web & Cloud, Image Processing, Machine Learning.",
        "edu.hs.title": "Scientific High School",
        "edu.hs.name": "Istituto Superiore Ettore Sanfelice &#8599;",
        "section.experience": "professional experience",
        "exp.kosmo.date": "Jul 2025 - Sep 2025",
        "exp.uber.date": "Feb 2026 - May 2026",
        "exp.uber.desc1": "Transforming manual processes into efficient, <strong>automated solutions</strong> using <strong>Python</strong>.",
        "exp.uber.desc2": "Developing <strong>self-operating dashboards</strong> and end-to-end automation of entire workflows.",
        "exp.uber.desc3": "Designing and optimizing <strong>business processes</strong> and <strong>data pipelines</strong> at a regional and global scale.",
        "exp.kosmo.desc1": "<strong>Automated document processing pipeline</strong> by developing <strong>Python</strong> scripts for cleaning and preprocessing company documentation, reducing manual effort by <strong>80%</strong>.",
        "exp.kosmo.desc2": "Designed and developed <strong>RESTful API</strong> endpoints for intelligent chatbot integration using <strong>Python</strong> and <strong>FastAPI</strong>.",
        "exp.kosmo.desc3": "Built end-to-end <strong>RAG chatbot</strong> using <strong>LangChain</strong>, <strong>LLMs</strong> via <strong>Ollama</strong>, embeddings and <strong>Qdrant</strong> vector database for automated customer support.",
        "exp.kosmo.desc4": "Implemented <strong>pattern recognition algorithms</strong> for question similarity matching, improving response accuracy.",
        "exp.kosmo.desc5": "Integrated technical documentation and company data to improve information retrieval and enable <strong>self-operating support system</strong>.",
        "exp.delta.date": "Jun 2024 - Sep 2024",
        "exp.delta.desc1": "Designed and implemented <strong>advanced analytical dashboards</strong> for CRM system using <strong>data-driven approach</strong>, enabling real-time monitoring of business KPIs.",
        "exp.delta.desc2": "Developed web applications and automation scripts using <strong>PHP</strong>, <strong>HTML</strong>, <strong>CSS</strong> and <strong>SQL</strong>.",
        "exp.delta.desc3": "Created <strong>data visualization solutions</strong> for operational metrics, improving decision-making efficiency.",
        "exp.delta.desc4": "Analyzed business processes to identify optimization opportunities and implemented technical solutions.",
        "exp.delta.desc5": "Fixed software bugs and provided technical support.",
        "section.projects": "projects",
        "proj.sentiment": "A machine learning model to classify text as positive or negative.",
        "proj.playground": "Fullstack Web App developed with Django to explore backend development.",
        "proj.followers": "A tool to analyze your GitHub followers, identify who's not following back, and visualize network stats.",
        "proj.iot": "IoT system for safety monitoring in construction sites using Python and MQTT.",
        "section.contacts": "contacts",
        "contacts.desc": "Feel free to reach out to me via email or connect with me on social media.",
        "loc.mantova": "Mantova, Italy",
        "loc.viadana": "Viadana, Italy",
        "loc.krakow": "Krakow, Poland"
    }
};

function setLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations.en && translations.en[key]) {
            element.innerHTML = translations.en[key];
        }
    });

    document.documentElement.lang = 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage();
});
