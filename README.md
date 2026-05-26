https://123mwanjira.github.io/react-blog-vite-lab/
React Blog Site (Components & Props Lab)
 Project Description

A simple static blog site built using React and Vite.
This project focuses on practicing components, props, and dynamic rendering of lists.

 Tech Stack
React
Vite
JavaScript (ES6+)
React Testing Library
 Component Structure
App
├── Header
├── About
└── ArticleList
    └── Article
 How to Run the Project
1. Install dependencies
npm install
2. Start development server
npm run dev
3. Open in browser
http://localhost:5173/
 Features
Functional React components
Props passed from parent to child
Dynamic rendering using .map()
Default props handling
Accessible images
Basic testing setup
 Data Structure

All blog data is stored in:

src/data/blog.js

It includes:

Blog name
About section
Image
Array of blog posts
 Components
Header
Displays blog title
Receives: name prop
About
Displays blog image and description
Props:
image
about
ArticleList
Renders list of articles using .map()
Receives: posts array
Article
Displays individual post
Props:
title
date (default: "January 1, 1970")
preview
 Testing

Basic rendering tests using React Testing Library.

 Author

Maurine Wanjira
Student project – React Components & Props Lab
