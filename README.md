[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sRKW9Tsr)

Langkah -langkah :

1. Make node.js project: npm init -y
2. Install express.js & dotenv package: npm i express dotenv
3. Install Typescript, @types/express, & @types/node package: npm i -D typescript @types/express @types/node
4. Generating tsconfig.json: npx tsc --init
5. Make index.ts file that contain our server code
6. In tsconfig.json, make new folder call dist, by uncomment outDir.
   ```
   "outDir": "./dist"
   ```
7. Install nodemon: npm i -D nodemon
8. Instal concurrently: npm i -D concurrently
