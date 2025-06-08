# 📦 eazy-git

`eazy-git` is a CLI tool that simplifies branch management in Git. It automates common workflows and maintains a consistent branch structure.

[![npm version](https://img.shields.io/npm/v/eazy-git.svg)](https://www.npmjs.com/package/eazy-git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/jaime00/eazy-git.svg)](https://github.com/jaime00/eazy-git/stargazers)
---


## 🚀 Installation

Install it globally with npm:

```bash
npm install -g eazy-git
````

Or clone it and Link it locally for development:

```bash
git clone https://github.com/jaime00/eazy-git.git
cd eazy-git
npm install
npm link
```

---


## ⚙️ Usage

Run the main command from the root of your Git repository:

```bash
eazy-git
```
or

```bash
eg
```

---


## 🧰 Available Commands

| Command | Description |
| ---------------------------- | --------------------------------------------- |
| `eazy-git`, `eg`, `asd` | Launch the interactive CLI to create and manage Git branches (note: `asd` is an easter egg command 🥚) |
| `pull` | Pull latest changes from remote repository (`git pull origin HEAD`) |
| `push` | Push local changes to remote repository (`git push origin HEAD`) |
| `removelast` | Undo last commit while preserving changes in working directory |
| `mergewith` | Merge current branch with another remote branch (defaults to `origin/develop`) |
| `commit` | Stage and commit changes with an interactive prompt |
| `back` | Switch back to the previously checked out branch |
| `checkout` | Switch to a specified branch or return to the previous branch if no branch name is provided |
| `log` | Display formatted commit history with details |
| `run` | Start development server (`npm run dev`) |
| `runrun` | Clean development server restart (removes `.next` folder and runs `npm run dev`) |
| `i` | Install project dependencies using configured auth token |
| `-version`, `-v` | Display installed package version |
| `-help`, `-h` *(under construction 🚧)* | Show command usage and documentation |

---


## 📁 Project Structure

The project is organized in a modular fashion for easy maintenance and extension. The main directory and file structure is detailed below:
```
eazy-git/
├── src/
│   ├── actions/
│   │   ├── git/
│   │   │   ├── checkout.js
│   │   │   ├── commit.js
│   │   │   ├── createBranchName.js
│   │   │   ├── createOriginalBranch.js
│   │   │   ├── createTemporalBranch.js
│   │   │   ├── mergewith.js
│   │   │   ├── pull.js
│   │   │   ├── push.js
│   │   │   └── removelast.js
│   │   ├── install/
│   │   │   ├── addNewConfig.js
│   │   │   ├── dropCurrentConfig.js
│   │   │   ├── generateNpmrc.js
│   │   │   ├── getCurrentConfig.js
│   │   │   └── showCurrentConfig.js
│   │   └── run/
│   │       └── commands.js
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
│   └── utils/
│       ├── handleUserCancellation.js
│       ├── hasGitInstalled.js
│       ├── isEmpty.js
│       └── validateTicketOfJIRA.js
│       
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
git clone https://github.com/jaime00/eazy-git.git
cd eazy-git
npm install
npm link
eazy-git # or use the abbreviated version with eg or asd

```

Please open an [issue](https://github.com/jaime00/eazy-git/issues) to report bugs or suggest improvements.

---


## 📝 License

Distributed under the MIT [License](LICENSE).

---


## 📬 Contact

- 🌐 **Portfolio**: [Visit my website](https://jaime00portfolio.netlify.app/)
- 💼 **LinkedIn**: [linkedin.com/in/jaime00](https://www.linkedin.com/in/jaime00)
- 📧 **Email**: [imjaimetorresv@gmail.com](mailto:imjaimetorresv@gmail.com)
- 🐙 **GitHub**: [github.com/jaime00](https://github.com/jaime00)

For contributions, bug reports, or suggestions, please open an [issue](https://github.com/jaime00/eazy-git/issues) in the repository.

---