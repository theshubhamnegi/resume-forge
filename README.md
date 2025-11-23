# Resume Forge (Naukri Tailor)

## What is it?
Resume Forge is a modern, AI-powered web application designed to help job seekers tailor their resumes to specific job descriptions. Built with Next.js and powered by Google's Gemini AI, it intelligently rewrites your resume's "Overview" and "Project Achievements" to align with the requirements, keywords, and culture of the job you are applying for.

The application takes your existing resume (in JSON format) and a job description as input, and produces an optimized version of your resume that highlights your most relevant experiences, increasing your chances of getting noticed by recruiters and ATS (Applicant Tracking Systems).

## Why we are building it?
In today's competitive job market, a generic resume is often not enough. Recruiters and automated systems look for specific keywords and relevant experience that match the job description. Manually rewriting a resume for every application is time-consuming and difficult.

We are building Resume Forge to:
1.  **Save Time**: Automate the tedious process of customizing resumes for each job application.
2.  **Improve Relevance**: Use advanced AI to identify and emphasize the skills and experiences that matter most to the specific employer.
3.  **Beat the ATS**: Ensure resumes contain the right keywords and terminology to pass through automated filters.
4.  **Enhance Quality**: Provide professional, concise, and impact-driven phrasing for achievements.

## Key Features
-   **AI-Powered Optimization**: Uses Google's Gemini Flash model to analyze job descriptions and rewrite resume content.
-   **Smart Tailoring**: Specifically targets the "Overview" and "Experience/Project" sections to align with the job's non-negotiable skills, soft skills, and business problems.
-   **Live Preview**: Real-time rendering of the resume as you edit or optimize it.
-   **JSON-Based**: Uses a structured JSON format for resumes, allowing for easy parsing, validation, and manipulation.
-   **Privacy-Focused**: Your API key is used directly in the browser (client-side), giving you control over your usage.
-   **Strict Constraints**: The AI is prompted to follow strict length and formatting rules to ensure the output fits a standard resume layout.

## Technical Architecture
-   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **AI Model**: Google Gemini (via `@google/genai` SDK)
-   **Validation**: Zod & `zod-to-json-schema` for structured AI output and runtime validation.
-   **Icons**: Lucide React

## Future Plan
We have an ambitious roadmap to make Resume Forge the ultimate career tool:

1.  **PDF Export**: Native support for exporting the rendered resume to a high-quality PDF.
2.  **Multiple Templates**: Offer a variety of professional resume templates to choose from.
3.  **User Accounts**: Allow users to sign up, save their base resume, and keep a history of tailored resumes for different applications.
4.  **Cover Letter Generation**: Generate a matching cover letter based on the tailored resume and job description.
5.  **Resume Scoring**: Provide a "match score" to estimate how well the resume fits the job description before and after optimization.

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
-   **Node.js**: Version 18.17 or later (required for Next.js 15+).
-   **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd resume-modifier
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Usage Guide

1.  **Get an API Key**:
    -   Go to [Google AI Studio](https://aistudio.google.com/).
    -   Create a new API key.

2.  **Configure the App**:
    -   In the Resume Forge interface (top right), paste your **Gemini API Key**.
    -   *Note: The key is stored in your browser's local state and is not sent to any backend server other than Google's API.*

3.  **Input Data**:
    -   **Job Description**: Paste the full job description you are applying for into the left-hand text area.
    -   **Resume JSON**: Paste your current resume in the JSON format into the bottom-left text area. (A sample resume is loaded by default).

4.  **Optimize**:
    -   Click the **"Optimize with AI"** button.
    -   Wait for the AI to rewrite your "Overview" and "Project Achievements".
    -   Review the changes in the **Live Preview** on the right.
