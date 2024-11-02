# React Select Component

- use `npm install` to install all the required packages.
- use `npm run serve:development` to start project locally.

 ## Commands project supports:

  - To start the server in `development` mode
    - `"serve:development": "vite --port 3000 --open --mode dev"`
  - To start the server in `production` mode
    - `"serve:production": "vite --port 3000 --open --mode prod"`
  - To build the project in development mode
    - `"build:development": "vite build --mode dev"`
  - To build the project in production mode
    - `"build:production": "vite build --mode prod"`
  - Build command
    - `"build": "tsc -b && vite build"`
  - Fix all files according with esLint rules
    - `"eslint:fix": "eslint ./src --fix"`
  - Apply prettier rules on all files
    - `"prettier:fix": "prettier --write src"`
  - List all the lint issues in the project
    - `"lint": "eslint ./src --max-warnings=0 && prettier --check src"`
  - To fix all lint issues
    - `"lint:fix": "npm run eslint:fix && npm run prettier:fix"`
  - To check any type issue in the project
    - `"typecheck": "tsc --project tsconfig.json --noEmit"`
  - To view the preview
    - `"preview": "vite preview"`
