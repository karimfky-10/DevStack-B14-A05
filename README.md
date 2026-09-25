# 🚀 DevStack

### Explore. Choose. Build Your Stack.

**DevStack** is a responsive web application where users can explore different development technologies and create their own personalized technology stack.  
The project is built with modern frontend technologies and focuses on a clean UI, responsive design, and interactive user experience.

---

## 🌐 Live Project

🔗 **Live Demo:** _Add your live deployment link here_

🔗 **GitHub Repository:** _Add your GitHub repository link here_

---

## ✨ Features

### 1. 🧩 Explore Technologies
Users can browse different technologies such as **React, Vue.js, Next.js, Node.js, TypeScript, Docker**, and more.

### 2. ➕ Build Your Own Stack
Users can select technologies from the cards and add them to their personal development stack.

### 3. 📱 Fully Responsive Design
The website works smoothly across **desktop, tablet, and mobile devices** with a responsive navigation menu and mobile drawer.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| ⚛️ React | Building the user interface |
| 📘 TypeScript | Type-safe JavaScript development |
| 🎨 Tailwind CSS | Styling and responsive design |
| ⚡ Vite | Fast development environment |
| 🟨 JavaScript | Application logic |
| 📦 JSON | Storing technology/card data |
| 🔗 Git & GitHub | Version control and project hosting |

---

## 📂 Project Highlights

The project includes:

- Responsive Navbar
- Mobile Hamburger Menu
- Mobile Drawer Navigation
- Technology Cards
- Technology Categories
- Add-to-Stack functionality
- Selected Stack Counter
- Empty Stack Message
- Responsive Grid Layout
- JSON-based technology data
- Interactive UI elements

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.

It makes React components easier to read and write because we can describe the UI directly inside our component.

```jsx
function App() {
  return <h1>Hello DevStack</h1>;
}
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a **parent component to a child component**.

**State** is data that belongs to a component and can change over time.

### Simple example:

```text
Props → Parent → Child

State → Component's own changing data
```

For example, in DevStack, technology information can be passed to a card through **props**, while selected technologies can be managed using **state**.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage changing data inside a component.

In this project, I used `useState` to keep track of the technologies selected by the user.

For example:

```tsx
const [added, setAdded] = useState([]);
```

When the user clicks the **Add to Stack** button, the selected technology is added to the state.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run some code after a component renders.

It is commonly used for tasks such as:

- Loading data
- Fetching APIs
- Updating the document
- Running side effects

If the project loads technology data from a JSON file or external data source, `useEffect` can be used to load that data when the component starts.

Example:

```tsx
useEffect(() => {
  // Load JSON data
}, []);
```

The empty `[]` means the effect runs when the component is initially loaded.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand **which item was changed, added, or removed**.

Example:

```tsx
cards.map(card => (
  <Card key={card.id} card={card} />
))
```

Here, `card.id` gives every card a unique identity.

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI depending on a condition.

For example, if the user has not selected any technology, we can show an empty-stack message:

```tsx
{added.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <Stack items={added} />
)}
```

So, when there are no selected technologies, the empty message is displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

```tsx
<Card title="React" />
```

The child receives it:

```tsx
function Card({ title }) {
  return <h2>{title}</h2>;
}
```

If the child needs to send something back to the parent, the parent can pass a **function as a prop**.

### Parent:

```tsx
<Card onAdd={handleAdd} />
```

### Child:

```tsx
<button onClick={() => onAdd(card)}>
  Add to Stack
</button>
```

So the basic idea is:

```text
Parent
   ↓
  Props
   ↓
Child
   ↓
Callback Function
   ↓
Parent
```

---

## 🎯 Project Goal

The main goal of **DevStack** is to practice and demonstrate modern React development concepts such as:

- Components
- Props
- State
- Hooks
- Event Handling
- Conditional Rendering
- Array `.map()`
- JSON Data
- TypeScript
- Responsive Design
- Tailwind CSS

---

## 👨‍💻 Developer

**Yasin**

Built with ❤️ using **React + TypeScript + Tailwind CSS**

---

⭐ If you like this project, consider giving the repository a **star**!