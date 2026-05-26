https://123mwanjira.github.io/react-blog-vite-lab/

React Blog Site (Components & Props Lab)
Project Overview

This is a simple static React blog application built using Vite + React.
It demonstrates how to build a UI using components, props, and dynamic rendering.

The application renders blog content from src/data/blog.js.

 Purpose

This project demonstrates:

Creating reusable React components
Passing data using props
Rendering lists dynamically with .map()
Using default props for fallback values
Basic unit testing with Vitest + React Testing Library
Structuring a React project for maintainability
 Getting Started
1. Install dependencies
npm install
2. Start development server
npm run dev
3. Run tests (Vitest)
npm run test
 Component Structure
App (Root)
├── Header
├── About
└── ArticleList
    └── Article
 Components Breakdown
 App
Root component
Imports blog data
Passes props to child components
 Header
Displays blog name
Receives: name prop
 About
Displays blog image and description
Receives:
image (uses default fallback if not provided)
about text
Image includes alt text: "blog logo"
 ArticleList
Receives an array of posts
Uses .map() to render multiple Article components
Each item uses a unique key
 Article
Displays individual blog post
Receives:
title
date (default: "January 1, 1970")
preview
 Data Source

All blog content is stored in:

src/data/blog.js

It includes:

Blog name
About section text
Blog image
Array of articles
 Testing

Testing is done using:

Vitest
React Testing Library
jsdom environment
✔ Covered tests:
Header renders blog name correctly
About renders image and description correctly
Article renders title, date, and preview
ArticleList maps posts into Article components
▶ Run tests:
npm run test
 Troubleshooting (WSL Users)

If tests hang or fail:

npx vitest run App.test.jsx --reporter=verbose

Or reset dependencies:

rm -rf node_modules package-lock.json
npm install
 Status

✔ React components implemented
✔ Props correctly passed
✔ Dynamic rendering working
✔ Tests included
Author
Maurine Wanjira
