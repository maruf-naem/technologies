# Technologies

Technologies is a responsive React project created as part of my Programming Hero Assignment 5. Although it is a small project, building it helped me improve my problem-solving ability, React concepts, and overall coding skills.

The project displays different technologies and allows users to interact with them through different actions.

## The name of Technologies I have Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- Vite

## What features have I added?

- **Interactive Stack Management:** Users can add technology stacks/items and see them appear dynamically in the selected section.
- **Toast Notifications:** Toast messages are displayed based on different button actions to give users immediate feedback.
- **Remove All Items:** Users can remove all selected technology stacks at once.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML like code inside JavaScript or TypeScript. React uses JSX to make it easier to create and understand UI components.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is data managed inside a component. When state changes, React re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data inside a React component.

In this project, I used `useState` to manage the selected technology stacks and update the UI when a user adds or removes a stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook allows us to perform side effects in a React component, such as fetching data from an API or JSON file.

I used it to load the technology data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which items have changed, been added, or removed, so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

For example, I used conditional rendering to show text of the buttons in the cards, are they selected or not :

```tsx
{isSelected ? `${stack.name} added` : `${stack.name} Add`}
