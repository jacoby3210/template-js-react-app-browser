 ### Setup Vite
  - init Vite-Vue-JavaScript project.
  - install 'vite-plugin-console-pro'. Simplifies work with index.js files;
  - install 'vite-plugin-static-copy'. Simplifies transfer files into a release;

### Setup node modules
  - npm install
    - prop-types 
    - react-aria 
    - react-redux, 
    - react-router-dom 
    - @reduxjs/toolkit. 

  - npm install 
    - **sass**, 
    - **msw** - 

    - **jest** - 
      - using the Jest Framework to run tests;
      - install packages: jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom jest-environment-jsdom babel-jest identity-obj-proxy;
      - project settings: babel.config.cjs and jest.config.cjs; 

### Setup folders \ files
  - Adding:
    - folder '.\docs'  - for storing project supporting documentation.
      - folder '.\docs\snippets' - file \ folder templates.
      - ".\docs\CHANGELOG.md".
      - ".\docs\ROADMAP.md".
    - folder '.\src\code' - application maintance.
    - folder '.\src\gui' - vue basic components /layouts / widgets.
    - folder '.\src\pages' - vue application pages.
    - folder '.\src\pages\router' - vue application nav.
    - folder '.\sys' - place here the files needed to build the application depending on the target platform.
    - add '.\README.md.

  - Editing
    - edit index.html support FontAwesome library.
    - redistribute functionality between main.jsx and app.jsx. Renaming Main.jsx to router.jsx;

### Setup git repository
  - create dev/release/temp branch.
  - update .gitignore;

### Notices
  - The project is pre-configured for publication on github pages