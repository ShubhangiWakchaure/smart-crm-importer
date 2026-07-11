# Smart CRM Importer

An AI-powered CRM CSV Importer built with Next.js, Express.js, TypeScript, and Google's Gemini API.

## Features

- Upload CSV files
- Preview uploaded CSV data
- AI-powered CRM field mapping using Gemini
- Batch processing for efficient imports
- Standardizes CRM fields
- Displays imported CRM records
- Responsive UI with Tailwind CSS
- Automatic cleanup of uploaded CSV files

---

## Tech Stack

### Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript
- Multer
- csv-parser
- Google Gemini API

---

## Project Structure

```
smart-crm-importer
│
├── frontend
│   ├── app
│   ├── components
│   ├── services
│   └── types
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── prompts
│   ├── uploads
│   └── server.ts
│
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/ShubhangiWakchaure/smart-crm-importer
```

Go to the project

```bash
cd smart-crm-importer
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

Open another terminal

```bash
cd frontend
npm install
npm run dev
```

Visit

```
http://localhost:3000
```

---

## Workflow

1. Upload CSV
2. Preview CSV
3. Confirm Import
4. Backend parses CSV
5. Records are processed in batches
6. Gemini maps CRM fields
7. Results displayed on UI

---

## AI Processing

- Uses Google Gemini API
- Prompt-based CRM field extraction
- Batch processing
- Automatic retry for temporary API failures
- Uploaded CSV files are deleted after processing

---

## Future Improvements

- Progress bar during AI processing
- Database integration
- Background job queue
- Authentication
- Export processed CRM records
- Support larger CSV files with streaming

---
## Known Limitations

- The application uses the free Google Gemini API.
- Very large CSV files may be affected by Gemini API rate limits or quota restrictions.
- Batch processing and retry logic are implemented to improve reliability.

## Author

Shubhangi Wakchaure