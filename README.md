# Fatma Ali | Portfolio

A personal portfolio website for Fatma Ali, built with Next.js and designed to showcase projects, experience, skills, and contact information in a clean modern UI.

## Overview

This portfolio highlights:

- A strong personal brand and introduction
- Experience and education history
- Project showcases with detailed descriptions
- Skills and technology stack
- A working contact form powered by Resend
- Responsive design with light/dark theme support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Resend for email delivery

## Project Structure

```bash
app/
├── api/
│   └── contact/
│       └── route.ts
├── components/
├── data/
│   └── portfolioData.ts
├── globals.css
├── layout.tsx
├── page.tsx
public/
└── images/
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the project root and add your email delivery key:

```bash
RESEND_API_KEY=your_resend_api_key
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` — run the app locally
- `npm run build` — build the production bundle
- `npm run start` — serve the production build
- `npm run lint` — run ESLint checks

## Contact

For business inquiries or collaboration opportunities, use the contact form on the site or reach out directly:

- Email: fatma.ali.mansour1@gmail.com
- GitHub: https://github.com/fatmaali311
- LinkedIn: https://linkedin.com/in/fatmaali311

## License

This project is for personal portfolio use and is not intended for redistribution.
