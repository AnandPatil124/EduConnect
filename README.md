# EduConnect — Student Learning Support Portal

EduConnect is a beginner-friendly educational website built with HTML, CSS, and vanilla JavaScript. It supports the aims of **United Nations Sustainable Development Goal 4 (Quality Education)** by bringing learning notes and self-assessment into one accessible interface.

> This is a student project for educational purposes. It is not affiliated with or endorsed by the United Nations.

## Features

- Responsive home page and navigation
- Study resource cards with working search and subject filters
- Built-in quick notes for Python, DBMS, Machine Learning, Computer Networks, and AI
- Link to the official Python tutorial
- Four multiple-choice quizzes, each with five questions
- Automatic scoring, answer explanations, and retry option
- Progress dashboard with attempts, average score, and best score
- Quiz history saved in browser `localStorage`
- Clear-progress confirmation
- Light/dark theme preference saved locally
- Keyboard-friendly controls and responsive layouts

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser localStorage (no server or account required)

## Project structure

```text
EduConnect/
├── index.html
├── style.css
├── script.js
├── README.md
└── materials/
```

## Run locally

### Option 1: Open directly
1. Extract the project folder.
2. Open `index.html` in Chrome, Edge, or Firefox.

### Option 2: VS Code Live Server
1. Open the `EduConnect` folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

No package installation, API key, database, or backend is required.

## How to use

1. Browse study cards or search by topic.
2. Click **Read quick notes** to open notes in a modal.
3. Use the Official Python Tutorial link to visit Python's documentation.
4. Select a quiz from the Practice Zone.
5. Answer all five questions and submit.
6. Review the score and explanations.
7. Open **My Progress** to view saved attempts.
8. Use the theme button to switch between light and dark modes.

## Testing checklist

- [ ] Home and section navigation works
- [ ] Search filters cards by keywords
- [ ] Subject filter works
- [ ] Quick notes open and close
- [ ] All quiz answer options can be selected
- [ ] Previous/Next controls work
- [ ] Unanswered questions are caught before submission
- [ ] Score and answer explanations are correct
- [ ] Results persist after refresh
- [ ] Average and best scores update
- [ ] Clear-progress confirmation works
- [ ] Theme preference persists after refresh
- [ ] Layout works on desktop and mobile widths

## Limitations

- Progress is saved only in the current browser and device. It is not synced between devices.
- There is no login, remote database, or teacher/admin portal.
- Sample notes and quiz questions are intended for demonstration and should be checked before academic use.
- Resource availability may change for external websites.

## Future improvements

- Add optional student accounts and a backend database.
- Allow educators to upload verified notes and create quizzes.
- Add multilingual content and accessibility settings.
- Add more subjects, question banks, and progress visualizations.
- Collect user feedback to assess whether the site improves access to learning resources.

## SDG 4 connection

SDG 4 aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. EduConnect is a small educational prototype intended to make learning resources and self-assessment easier to access.
