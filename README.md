# Structure of the Project Directories

1. **Root Directory**: This contains configuration files and folders for the entire project.
    - [package.json](package.json): Manages project dependencies and scripts.
    - [tsconfig.json](tsconfig.json): Configuration for TypeScript.
    - [tailwind.config.js](tailwind.config.js): Configureation for Tailwind.css library
    - `node_modules/`: Folder containing all the npm packages.
        - This folder is in the `.gitignore` - after running ```npm install``` it'll be created in your local directories.
    - [.gitignore](.gitignore): Specifies files to be ignored by git.
    - [README.md](README.md): Documentation for the project.

2. **Public Directory**: This is where static files like the `index.html` and other logos live.
    - [index.html](public/index.html): The main HTML file.

3. **Src Directory**: The core of the React application.
    - [classes/](src/classes/) and `utility functions`: Provides key functionalities and logic that support the operation of the React components.
    - [components/](src/components/): Folder for all React components.
        - Each component might have its own folder with a `.tsx` file and an optional `.css` or `.scss` file.
    - [contexts/](src/context/): React context providers and consumers.
    - [pages](src/pages/): Different pages of the React app (can contain multiple components)
    - [index.tsx:](src/index.tsx) The entry point for the React application.
    - [App.tsx](src/App.tsx): The root React component.
    - [utils/]() or [helpers/](): Utility functions used across the project.
        - Not yet used in our project, but intend to next semester
    - [services/](): Contains files for API calls or other external services.
        - Not yet used in our project, but intend to next semester
    - [hooks/](): Custom React hooks.
        - Not yet used in our project, but intend to next semester
    - [assets/](): Static assets like images, fonts, etc.
        - Not yet used in our project, but intend to next semester