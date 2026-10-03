# kdl-code-example
Generated for the code example for applying for the RSE role at KDL.

### Repository link
https://github.com/arunng21/kdl-code-example

### Live view link
https://arunng21.github.io/kdl-code-example/

## Explaination
The attached code in the repository is a lightweight next.js/TS/TailwindCSS implementation of the full code of my project new project under development. The code is a single page application using one of the API enpoints providing the database stats in the new FAST API backend. The full openAPI specification of the backend is in `/src/app/api/reference/openapi.json` and has been converted to TypeScript using `openapi-typescript` and saved at `src/lib/api/generated/schema.ts`. The backend was developed as a collaborative effort. Much of the coding was done by my team and so I haven't attached the code. The application can be run locally using docker but has also been automated using GitHub Actions and hosted in GitHub page. Usage of GitHub copilot in code completion and few file generation.