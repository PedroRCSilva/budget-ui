# Clean Architecture Frontend

This repository contains an implementation a=of a front-end project using React, following Clean Architecture principes. This objective is to maintain an organized structure, scalability, and ease of maintenance.

## Project Structure

The following is the main structure project:

```
clean-architure-front/
├── src/
│   ├── components/             # Reusable Components 
│   ├── constants/              # Global Constants
│   ├── pages                   # Application Pages
│   │   └── page-name
│   │       ├── components/     # Page-Specifics components
│   │       ├── data/           # Types, Texts, utils for the page
│   │       ├── hooks/          # Hooks for logic that is not related to the User Interface
│   │       └── index.tsx       # Interface User Code 
│   │
│   ├── hooks/                  # Custom Hooks for the entire project
│   ├── providers/              # Setup and Context Providers
│   ├── services/               # Services for communication with APIs
│   ├── utils/                  # Utility Function
│   ├── global.css              # Global Styles
│   ├── main.tsx                # Main Entry File
│   └── vite-env.d.ts           # Vite Types
│
│
├── test/
│     ├── components  
│     ├── hooks                  # Hooks Tests
│     ├── utils                  # Utils function tests
│     └── page                   # Pages Tests
│         └── nome-pagina
│             ├── components/    # Tests Components Pages Specifics 
│             ├── hooks/         # Tests to a page hooks
│             └── index.test.tsx # Tests of Interface User
│
├── .husky/                      # Husky Setup to hooks of Git
├── .vscode/                     # Editor Setup VS Code
├── .gitignore                   # Files and Directories ignored by Git
├── .prettierrc                  # Prettier Setup
├── .prettierignore              # Files ignored by Prettier
├── coverage/                    # Coverage Report of tests
├── eslint.config.ts             # Eslint Setup
├── jest.config.ts               # Jest Setup
├── tsconfig.json                # TypeScript Setup
├── vite.config.ts               # Vite Setup
├── package.json                 # Dependencies and scripts of project
└── README.md                    # Project Documentation
```

## Technologies Used

- **React**: Lib to build  User Interfaces.
- **TypeScript**: JavaScript Superset which add static type.
- **Vite**: Fast Build Toolkit to Front Projects.
- **TailwindCSS**: Framework CSS.
- **Jest**: Tests Framework.
- **ESLint**: Linting Tool to maintain code quality..
- **Prettier**: Code Formating Tools .

## Available Scripts

In the `package.json` file, you can find the following scripts:

- `dev`: Start development server.
- `build`: Build application .
- `lint`: Run ESLint to check for issues problems in the code.
- `preview`: View the build application.
- `prepare`: Set up  Husky hooks .
- `test`: Run the unit tests.



## Tests Coverage

Coverage reports are generate in the `coverage/` directory. To view the reports, open the  `index.html` file inside `coverage/lcov-report/` in your browser.


## Licence

This project is licensed under the MIT License. See the `LICENSE` file to more informations.
