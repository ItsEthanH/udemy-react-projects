
# Udemy React Projects

A repository for all the projects built alongside Maximilian Schwarzmüller's course [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).

The course was structured into 27 sections. Each section tackles a topic of React, being taught through a small project which you complete throughout the section. You are taught the topic, walked through the starting files of the project, then encouraged to do as much of the project as you can on your own before viewing the lectures for a walked-through solution. For the most part, this is the approach I followed, though for a better showing of my coding skills, I recommend you look through my other repositories :)  

Note that not every section has a project, as some sections are more theoretical and don't require practical learning. For these, I made some brief notes on my personal OneNote Notebook.

All projects can be cloned and ran from VS Code, as long as all dependencies are installed using ```npm install```. Note that some projects are built using Firebase or MongoDB as dummy backends. These projects will no longer work, due to the backends now being taken down.

<hr />

<details>
<summary><h1>Table of Contents</h1></summary>

- [Section 1: Getting Started](#s1)

- [Section 2: JavaScript Refresher](#s2)

- [Section 3: React Basics & Components](#s3)

- [Section 4: React State & Events](#s4)

- [Section 5: Rendering Lists & Conditional Content](#s5)

- [Section 6: Styling React Components](#s6)

- [Section 7: Debugging React Apps](#s7)

- [Section 8: Practice Project - A Complete Project with React](#s8)

- [Section 9: Fragments, Portals and Refs](#s9)

- [Section 10: Side Effects, Reducers and Context](#s10)

- [Section 11: Practice Project - Food Order App](#s11)

- [Section 12: Behind the Scenes of React](#s12)

- [Section 13: Class-Based Components](#s13)

- [Section 14: Sending HTTP Requests](#s14)

- [Section 15: Building Custom Hooks](#s15)

- [Section 16: Working with Forms and User Input](#s16)

- [Section 17: Practice Project - Adding HTTP & Forms to the Food Order App](#s17)

- [Section 18: Introduction to Redux](#s18)

- [Section 19: Advanced Redux](#s19)

- [Section 20: React Router](#s20)

- [Section 21: Deploying React Apps](#s21)

- [Section 22: Authentication with React](#s22)

- [Section 23: Introduction to Next.js](#s23)

- [Section 24: Animating React Apps](#s24)

- [Section 25: Replacing Redux with React Hooks](#s25)

- [Section 26: Testing React Apps](#s26)

- [Section 27: React + TypeScript](#s27)
</details>
<hr />

### Section 1: Getting Started
<a name="s1" />

*Project: None*

Overview of React, its uses, and how to use the course. No project given.

<hr />

### Section 2: JavaScript Refresher
<a name="s2" />

*Project: None*

A refresher of JavaScript fundamentals, such as functions, importing/exporting, OOP and reference vs primitive types. Small worked examples given, but not needed in this repo

<hr />

### Section 3: React Basics & Components
<a name="s3" />

*Project: [Budget Tracker](./03-react-components-and-hooks)*

Introduction to JSX, basic styling and handling data through the use of props. Began budget tracker project.

<hr />

### Section 4: React State & Events
<a name="s4" />

*Project: [Budget Tracker (cont.)](./03-react-components-and-hooks)*

Working with state, handling events and basic form handling. Added form to budget tracker, allowing users to enter their own content.

<hr />

### Section 5: Rendering Lists & Conditional Content
<a name="s5" />

*Project: [Budget Tracker (cont.)](./03-react-components-and-hooks)*

Rendering lists with Array.map(), using keys in lists and conditional rendering. Added a chart to budget tracker to visualise data.

<hr />

### Section 6: Styling React Components
<a name="s6" />

*Project: [Todo List](./06-styling-components)*

Setting styles inline, using styled components and using CSS modules. Created a basic todo app exploring these three possibilities.

<hr />

### Section 7: Debugging React Apps
<a name="s7" />

*Project: None*

How to best use the Dev Tools to get to the bottom of issues in React. No project given.

<hr />

### Section 8: Practice Project - A Complete Project with React
<a name="s8" />

*Project: [Users and Ages](./08-recap-and-practice)*

Consolidating knowledge up to this point by creating an application with a form and list. The form takes a name and age, while the list presents all the data in a stateful way. Error handling included.

<hr />

### Section 9: Fragments, Portals and Refs
<a name="s9" />

*Project: None*

Theory and practice of fragments, portals and refs. Small module, so project not included.

<hr />

### Section 10: Side Effects, Reducers and Context
<a name="s10" />

*Project: [Basic Authentication Page](./10-advanced-react-hooks)*

Working with more advanced react hooks, such as useEffect, useReducer and useContext. All of these are combined to create a basic authentication page, complete with form and error handling, and a dynamic UI.

<hr />

### Section 11: Practice Project - Food Order App
<a name="s11" />

*Project: [Food Order App](./11-food-order-app)*

The second project, using knowledge up to this point. This module focused on the creation of a food order app, with a menu and cart. This project gets improved upon in [Section 17](#s17).

<hr />

### Section 12: Behind the Scenes of React
<a name="s12" />

*Project: None*

Learning about the component lifecycle, and how useMemo and useCallback can be used to optimise applications. Small module, so project not included.

<hr />

### Section 13: Class-Based Components
<a name="s13" />

*Project: None*

Learning about the alternative way to write functions, making use of lifecycle methods in place of hooks. Small module, so project not included.

<hr />

### Section 14: Sending HTTP Requests
<a name="s14" />

*Project: [Star Wars Database](./14-sending-http-requests)*

How to make HTTP requests in a react context, utilising the Star Wars API to provide data to conditionally render in a React application

<hr />

### Section 15: Building Custom Hooks
<a name="s15" />

*Project: [Improved Todo List](./15-building-custom-hooks)*

How to reuse stateful logic through the creation of custom hooks. Project uses a custom useFetch hook to GET and POST requests to a firebase backend. Project won't work due to backend not in use

<hr />

### Section 16: Working with Forms and User Input
<a name="s16" />

*Project: [Advanced Authentication Form](./16-form-handling)*

Using custom hooks to handle different form states, providing great user feedback.

<hr />

### Section 17: Practice Project - Adding HTTP & Forms to the Food Order App
<a name="s17" />

*Project: [Food Order App - Improved!](./17-improved-food-order-app)*

Moving menu to a Firebase backend to make use of GET HTTP requests. Orders are now POSTed to the same backend. Form validation and handling also included. Project won't work due to backend not in use.

<hr />

### Section 18: Introduction to Redux
<a name="s18" />

*Project: [Authentication + Counter with Redux](./18-redux-basics)*

Learning about the alternative to using React Context - React Redux! Using Redux traditionally, with Redux Toolkit and with class-based components was all covered. Project is a combined authentication form and counter, with all state handled centrally with Redux.

<hr />

### Section 19: Advanced Redux
<a name="s19" />

*Project: [Redux Cart](./19-redux-advanced)*

Taking Redux to the next level by introducing asynchronous code. Using Redux with useEffect and Thunks covered by creating a small shop complete with cart logic.

<hr />
