# Interview Practice Tracker

A responsive dashboard to track weekly interview preparation: add questions, filter them, and see your progress at a glance. Frontend only, no backend.

**Tech stack:** React (Vite), React Router, React Hook Form, Tailwind CSS v4

## Setup

```bash
# 1. clone the repository
git clone <your-repo-url>
cd <project-folder>

# 2. install dependencies
npm install

# 3. start the dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Features

- **Dashboard:** total questions, completed DSA problems, completed interview questions and machine-coding status.
- **Question tracker:** add, edit and delete questions with category (DSA / Git / Technical), difficulty (Easy / Medium / Hard) and status (Pending / In Progress / Completed).
- **Search and filters:** debounced title search plus category, status and difficulty filters that work together.
- **Progress:** completion percentage for each category and overall, shown with progress bars.
- **Persistence:** data is saved in LocalStorage and stays after a refresh.
- **Responsive UI:** desktop layout with a sidebar, and a slide-in drawer on mobile.
- **States and validation:** empty state, no-results state and inline form validation.

## Assumptions

- "Completed interview questions" counts completed questions from the **Git** and **Technical** categories. DSA is counted separately.
- Machine-coding is not a question category, so it is a separate status (Not Started / In Progress / Completed) that the user sets from the dashboard.
- Progress % = completed questions / total questions, rounded to a whole number. It shows 0% when there are no questions.
- Search matches the question title only and is case-insensitive.
- All data lives in the browser's LocalStorage (`questions` and `machineStatus` keys), so it is not shared across browsers or devices.
