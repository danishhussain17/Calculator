# 🧮 React Calculator (Vite + Tailwind)

A simple and responsive calculator built using **React**, **Vite**, and **Tailwind CSS**.
It supports basic arithmetic operations with a clean UI and smooth user experience.

---

## 🚀 Features

* Basic operations: ➕ ➖ ✖️ ➗
* Percentage (%) support
* Delete (DEL) and Clear (C) functionality
* Responsive grid layout
* Clean and minimal UI with Tailwind CSS
* Real-time input display

---

## 🛠️ Tech Stack

* **React** – UI library
* **Vite** – Fast build tool
* **Tailwind CSS** – Styling
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── index.css
 └── main.jsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-calculator.git
```

2. Navigate to the project folder:

```bash
cd react-calculator
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

---

## 🧠 How It Works

* User input is stored in state (`val`)
* Button clicks update the input dynamically
* Operators and numbers are appended as strings
* Expression is processed and evaluated when `=` is clicked
* Display shows `0` when input is empty

---

## 🎯 Key Functions

* `handleClick()` → Adds values to input
* `handleClear()` → Resets input
* `handleDEL()` → Removes last character
* `handleCal()` → Evaluates expression

---

## ⚠️ Notes

* Avoid using `|` (bitwise OR) for display — use `||` instead
* Expressions should be properly formatted before evaluation
* For production apps, avoid using `eval()` and prefer safer libraries

---

## 📸 UI Preview

Simple grid-based calculator layout with responsive design.

---

## 🔥 Future Improvements

* Keyboard input support
* Advanced operations (√, power, brackets)
* History tracking
* Better animations and button feedback
* Dark mode 🌙

---

## 🤝 Contributing

Feel free to fork this project and improve it!

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Danish Hussain**

---

⭐ If you like this project, give it a star on GitHub!
