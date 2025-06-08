# 📦 easy-git

`easy-git` is a CLI tool that simplifies branch management in Git. It automates common workflows and maintains a consistent branch structure.

[![npm version](https://img.shields.io/npm/v/easy-git.svg)](https://www.npmjs.com/package/easy-git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/jaime00/easy-git.svg)](https://github.com/jaime00/easy-git/stargazers)
---


## 🚀 Installation

Install it globally with npm:

```bash
npm install -g easy-git
````

Or clone it and Link it locally for development:

```bash
git clone https://github.com/jaime00/easy-git.git
cd easy-git
npm install
npm link
```

---


## ⚙️ Usage

Run the main command from the root of your Git repository:

```bash
easy-git
```
or

```bash
eg
```

---


## 🧰 Available Commands

| Command | Description |
| ---------------------------- | --------------------------------------------- |
| `easy-git`, `eg`, `asd` | Launch the interactive CLI to create and manage Git branches (note: `asd` is an little easter egg command 🥚) |
| `pull` | Pull from head |
| `push` | Push to head |
| `removelast` | Remove last commit |
| `mergewith` | Merge with another origin branch |
| `commit` | Commit changes |
| `back` | Go back to previous branch |
| `log` | Show commit log |
| `run` | npm run dev |
| `runrun` | Remove .next folder and run dev |
| `i` | Install dependencies with auth token |
| `-version`, `-v` | Display the installed version |
| `-help`, `-h` *(under construction 🚧)* | Display help or usage information |

---


## 📁 Project Structure

The project is organized in a modular fashion for easy maintenance and extension. The main directory and file structure is detailed below:
```
easy-git/
├── src/
│   ├── actions/
│   │   ├── git/
│   │   │   ├── back.js
│   │   │   ├── commit.js
│   │   │   ├── createBranchName.js
│   │   │   ├── createOriginalBranch.js
│   │   │   ├── createTemporalBranch.js
│   │   │   ├── mergewith.js
│   │   │   ├── pull.js
│   │   │   ├── push.js
│   │   │   └── removelast.js
│   │   └── install/
│   │       ├── addNewConfig.js
│   │       ├── dropCurrentConfig.js
│   │       ├── generateNpmrc.js
│   │       ├── getCurrentConfig.js
│   │       └── showCurrentConfig.js
│   ├── getters/
│   │   ├── git/
│   │   │   ├── getBranchType.js
│   │   │   ├── getCurrentBranch.js
│   │   │   ├── getCurrentPackageVersion.js
│   │   │   ├── getEnviroment.js
│   │   │   └── getTicketOfJIRA.js
│   │   └── install/
│   │       ├── config/
│   │       │   └── getLastConfig.js
│   │       ├── npm/
│   │       │   ├── getRegistryName.js
│   │       │   └── getRegistryURL.js
│   │       └── token/
│   │           ├── getApiKey.js
│   │           └── getEndpointURL.js
│   ├── utils/
│   │   ├── handleUserCancellation.js
│   │   ├── isEmpty.js
│   │   └── validateTicketOfJIRA.js
│   └── run-actions/
│       └── commands.js
├── build.js
├── git.js
├── index.js
├── install.js
├── run.js
├── package.json
└── README.md
```

---


## 🛠️ Contribute

Contributions welcome! To get started:

```bash
git clone https://github.com/jaime00/easy-git.git
cd easy-git
npm install
npm link
easy-git # or use the abbreviated version with eg or asd

```

Please open an [issue](https://github.com/jaime00/easy-git/issues) to report bugs or suggest improvements.

---


## 📝 License

Distributed under the MIT [License](LICENSE).

---


## 📬 Contact

- 🌐 **Portfolio**: [Visit my website](https://jaime00portfolio.netlify.app/)
- 💼 **LinkedIn**: [linkedin.com/in/jaime00](https://www.linkedin.com/in/jaime00)
- 📧 **Email**: [imjaimetorresv@gmail.com](mailto:imjaimetorresv@gmail.com)
- 🐙 **GitHub**: [github.com/jaime00](https://github.com/jaime00)

For contributions, bug reports, or suggestions, please open an [issue](https://github.com/jaime00/easy-git/issues) in the repository.

---