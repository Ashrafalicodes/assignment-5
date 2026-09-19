# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```
# 🚀 DevStack

**Build Your Ideal Development Stack.**
DevStack lets you browse different technologies and put together a development stack that fits your needs.

![DevStack Screenshot](./screenshots/home.png)

🔗 **Live Demo:** [your-live-link-here](https://your-live-link-here)

## ✨ Features

- Browse technology cards with category, difficulty level, and rating
- Add technologies to your stack with the "Add to Stack" button
- The button is disabled for technologies already in your stack
- View your selected technologies in the "Your Stack" panel
- Get instant feedback through toast notifications
- Responsive design (mobile, tablet, desktop)

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Building the UI |
| TypeScript | Type-safe code |
| Tailwind CSS | Styling |
| React Toastify | Toast notifications |
| Vite | Build tool |

## 📦 Installation

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/devstack.git

# Go to the project folder
cd devstack

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

## 📁 Project Structure

```
devstack/
├── public/
│   └── Project.json        # Technology data
├── src/
│   ├── components/
│   │   ├── Project.tsx     # Loads the data (with Suspense)
│   │   ├── AllProject.tsx  # Technology card + Add to Stack button
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

## 🔮 Future Improvements

- [ ] Save the stack to localStorage or a database
- [ ] Search and category filters
- [ ] User authentication (Sign in / Sign up)
- [ ] Option to share your stack

## 🤝 Contributing

Contributions are welcome! Please open an issue before making any major changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
GitHub:(https://github.com/Ashrafalicodes)



Qestion and answer ---


Q:What is JSX, and why is it used in React?

Ans: jsx is syntex extension for  write html and javascript and react use to render things in ui.

Q: What is the difference between props and state?

A: propsed is read only data passed from parent to child and state is data managed system inside a component

Q:1. What does the `useState` hook do, and where did you use it in this project?

A: useState is a React hook that lets a function component store it use in app componenet

Q:What does the useEffect hook do, and why did you need it to load the JSON dataWhat does the useEffect hook do, and why did you need it to load the JSON data

A: USEEFFECT with an empty dependency array runs the fetch only once, when the component mounts, instead of on every re-render

Q: Why does every item in a .map() list need a unique key prop?

A: key render is unique id 

Q:Conditional rendering means showing different UI depending on a condition ?

A:Conditional rendering means showing different UI depending on a condition
Example:<div className=" bg-white shadow-sm border border-gray-200 rounded-xl p-6 relative">
      {/* Badge - top right */}
      {singlebook.badge && (
        <span className="absolute top-6 right-6 bg-blue-50 text-blue-500 text-xs font-medium px-3 py-1 rounded-full">
          {singlebook.badge}
        </span>


