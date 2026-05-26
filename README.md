# React Blog Site (Components & Props Lab)

##  Project Description
This is a simple static blog site built using React and Vite.  
The project focuses on practicing components, props, and rendering lists of data dynamically.

---

##  Component Structure

App
├── Header
├── About
└── ArticleList
    └── Article

---

##  How to Run the Project

1. Install dependencies:
npm install


2. Start development server:

npm run dev


3. Open in browser:

http://localhost:5173/


---

## Features
## Data Structure

All blog content is stored in:
src/data/blog.js

This includes:
- Blog name
- About section
- Image
- Array of blog posts

- Functional React components
- Props passed from parent to child
- Dynamic rendering of article list
- Default props handling
- Accessible image usage

## Components

### Header
- Displays blog title
- Receives: name (prop from App)
- Rendered inside App


---
### About
- Displays image + blog description
- Receives:
  - image (blog logo)
  - about (text content)
- Uses accessible image with alt text "blog logo"

### Article
- Displays individual blog post
- Receives:
  - title
  - date (default: "January 1, 1970")
  - preview
- Rendered inside ArticleList

### ArticleList
- Renders multiple Article components
- Uses `.map()` to loop through posts
- Receives:
  - posts (array from App)
- Each Article has a unique key (post.id)

##  Testing

Basic rendering tests using React Testing Library.

---

##  Expected Output

The application displays:

- Blog title in header
- Blog logo and description in About section
- List of articles rendered dynamically
- Each article includes title, date, and preview text

##  Author
Maurine Wanjira
Student project – React Components & Props Lab