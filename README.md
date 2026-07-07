Questly
Questly is a gamified education platform designed to make learning feel like an adventure instead of a chore. Built as part of the Sarathi project, Questly transforms study material into interactive quests, challenges, and reward-driven progress tracking — helping learners stay motivated while they build real knowledge and skills.
Table of Contents
• About the Project •
Features
• Demo • Tech Stack •
Getting Started ◦
Prerequisites ◦ Installation ◦ Running Locally • Project Structure
• How It Works • Roadmap •
Contributing• Known Issues
•
License
•
Contact
• Acknowledgements
About the Project
Traditional e-learning platforms often struggle with one thing: keeping learners engaged.
Questly tackles this problem head-on by wrapping educational content in game mechanics —
points, levels, streaks, and quests — so that studying feels rewarding rather than repetitive.
Whether you’re a student trying to stay consistent with revision, or an educator looking for a fresh
way to deliver content, Questly aims to bridge the gap between fun and functional learning.
This repository currently contains the core front-end experience (questly.html), with more
modules planned as the project grows.
Features
•
•
Gamified Learning Paths — Lessons are broken into quests with clear objectives and
rewards.
Points & Levels — Learners earn XP and level up as they complete challenges.•
•
•
•
Streak Tracking — Encourages daily consistency through visual streak counters.
Progress Dashboard — A clean visual summary of what’s been completed and what’s
next.
Simple, Clean UI — Lightweight interface built with plain HTML/CSS/JS — no heavy
frameworks required.
Responsive Design — Works across desktop and mobile browsers.
Note: Feature set is actively evolving. See Roadmap for what’s planned next.
Demo
A live preview link will be added here once the project is deployed (e.g., via GitHub Pages, Netlify,
or Vercel).
Live Demo: Coming soon
Tech Stack
This project is currently built using core web technologies, keeping things lightweight and
dependency-free:
• HTML5 — Structure and content• CSS3 — Styling and layout
• JavaScript (Vanilla) — Interactivity and logic
No build tools or frameworks are required to run the current version — just a browser.
Getting Started
Follow these steps to get a local copy up and running.
Prerequisites
You just need a modern web browser. Optionally, a local development server (like the VS Code Live
Server extension) makes testing smoother.
Installation
1. Clone the repository:
2. Navigate into the project directory:
Running LocallySince this is a static HTML project, you have a couple of easy options:
Option 1: Open directly
Just double-click questly.html, or open it via your browser's File > Open
menu.
Option 2: Use a local server (recommended for best results)
# If you have Python installed
python -m http.server 8000
Then visit http://localhost:8000/questly.html in your browser.
Project Structure
Sarathi/
│
├── questly.html
└── README.md
# Main entry point for the Questly experience
# Project documentation (this file)
As the project grows, this structure will expand to include dedicated folders for assets, scripts,
and styles.How It Works
At a high level, Questly is structured around a simple learning loop:
1. Choose a Quest — Learners pick a topic or module to begin.
2. Complete Challenges — Interactive tasks test understanding along the way.
3. Earn Rewards — Points, badges, or level-ups are granted for progress.
4. Track Growth — A dashboard view shows overall progress and streaks.
This loop is designed to be repeated daily, reinforcing consistency — one of the biggest predictors of
real learning outcomes.
Roadmap
Planned improvements for future versions:
•
[ ] Add user authentication and persistent progress storage
•
•
•
•
•
[ ] Build out a backend (API) to support multiple users
[ ] Add more quest categories and subject areas
[ ] Introduce leaderboards for friendly competition
[ ] Add badge/achievement system
[ ] Mobile app version•
[ ] Deploy live demo via GitHub Pages
See the open issues for a full list of proposed features and known issues.
Contributing
Contributions make the open-source community an amazing place to learn, inspire, and create. Any
contributions you make are greatly appreciated.
1. Fork the repository
2. Create your feature branch:
3. Commit your changes:
4. Push to the branch:
5. Open a Pull Request
Known Issues
• No backend or persistent storage yet — progress will reset on page reload.•
Currently single-file (questly.html) — styles/scripts may be inlined and will be
modularized in future updates.
If you spot a bug, feel free to open an issue.
License
Distributed under the MIT License. See LICENSE for more information. (Add a LICENSE file if you
haven’t already.)
Contact
Sarathikrr — GitHub: @Sarathikrr
Project Link: https://github.com/Sarathikrr/Sarathi
Acknowledgements• •
Inspiration from gamification principles in modern ed-tech platforms Icons and emojis used for visual flair in this README
• Thanks to anyone who tests, uses, or contributes to this project! ⭐ If you find this project interesting, consider giving it a star on GitHub — it helps a lot!
