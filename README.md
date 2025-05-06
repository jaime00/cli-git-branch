# 📦 git-flow-js

`git-flow-js` is a CLI tool that simplifies branch management in Git. It automates common workflows and maintains a consistent branch structure.

[![npm version](https://img.shields.io/npm/v/git-flow-js.svg)](https://www.npmjs.com/package/git-flow-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/jaime00/git-flow-js.svg)](https://github.com/jaime00/git-flow-js/stargazers)
---


## 🚀 Installation

Install it globally with npm:

```bash
npm install -g git-flow-js
````

Or clone it and Link it locally for development:

```bash
git clone https://github.com/jaime00/git-flow-js.git
cd git-flow-js
npm install
npm link
```

---


## ⚙️ Usage

Run the main command from the root of your Git repository:

```bash
git-flow-js
```
or

```bash
gfjs
```

---


## 🧰 Available Commands

| Command | Description |
| ---------------------------- | --------------------------------------------- |
| `git-flow-js`, `gfjs` | Run the interactive flow to manage branches |
| `-version`, `-v` | Display the installed version |
| `-help`, `-h` *(under construction 🚧)* | Display help or usage information |

---


## 📁 Project Structure

The project is organized in a modular fashion for easy maintenance and extension. The main directory and file structure is detailed below:
```
git-flow-js/
├── src/
│ ├── actions/
│ │ ├── createOriginalBranch.js
│ │ ├── createTemporalBranch.js
│ │ └── createBranchName.js
│ ├── getters/
│ │ ├── getCurrentPackageVersion.js
│ │ ├── getBranchType.js
│ │ ├── getTicketOfJIRA.js
│ │ ├── getEnviroment.js
│ │ └── getCurrentBranch.js
│ └── utils/
│ └── validateTicketOfJIRA.js
├── index.js
├── package.json
└── README.md
```

---


## 🛠️ Contribute

Contributions welcome! To get started:

```bash
git clone https://github.com/jaime00/git-flow-js.git
cd git-flow-js
npm install
npm link
git-flow-js # or use the abbreviated version gfjs

```

Please open an [issue](https://github.com/jaime00/git-flow-js/issues) to report bugs or suggest improvements.

---


## 📝 License

Distributed under the MIT [License](LICENSE).

---


## 📬 Contact

- 🌐 **Portfolio**: [Visit my website](https://jaime00portfolio.netlify.app/)
- 💼 **LinkedIn**: [linkedin.com/in/jaime00](https://www.linkedin.com/in/jaime00)
- 📧 **Email**: [imjaimetorresv@gmail.com](mailto:your-email@example.com)
- 🐙 **GitHub**: [github.com/jaime00](https://github.com/jaime00)

For contributions, bug reports, or suggestions, please open an [issue](https://github.com/jaime00/git-flow-js/issues) in the repository.

---