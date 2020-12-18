## Deere Project 4 Starter Code- "Shindy"

This app serves JSON data only. There are no views. You'll build a React app to communicate with this Express app. Since there are no views, you'll want to use Postman to test that your endpoints are working before writing the React code.

Note - this app has no views and each endpoint is prefaced with `/api`.

```js
// server.js
app.use("/api/auth", require("./controllers/authController.js"));
app.use("/api/users", require("./controllers/usersController.js"));
app.use("/api/chars", require("./controllers/charsController.js"));
```
## Links to Front-end & Heroku
Front-end Repo: https://github.com/zotacy/SEI-project4-shindy-frontend
Front-end Heroku: https://shindyapp.herokuapp.com/shindy
Back-end Repo: https://github.com/zotacy/SEI-project4-shindy-backend
Back-end Heroku: https://shindy-api.herokuapp.com/

## Set Up
1. Fork and clone this repo
2. `cd` into the folder and run `npm install`
3. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=shindy
   ```

4. Check out your `config/config.json` file. 
   PostGreSQL database: `shindy` in pgAdmin or from any directory in the Terminal:

   ```
   createdb shindy
   ```

5. Sequelize is included in the app. You have a `User` model. Run `npx sequelize db:migrate` to create the `Users` table in your database.

6. Run `nodemon`.
7. Open Postman to confirm that your app is working on `localhost:3000/`.

![](https://i.imgur.com/VEkRBk9.png)
<br>

## Routes
Following routes available...

#### `server.js`
- GET `localhost:3000/`

#### `controllers/authController.js`
- POST `localhost:3000/api/auth/signup`
- POST `localhost:3000/api/auth/login`
- GET `localhost:3000/api/auth/logout`

#### `controllers/usersController.js`
- GET `localhost:3000/api/users/profile/:id`

## To Deploy
- [Heroku Node Express Deployment](https://git.generalassemb.ly/jdr-0622/node-express-heroku-deployment)
- [Heroku React Deployment](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes)
- [Project 4 Starter Code Heroku Deployment Link](https://deere-project4-express.herokuapp.com/)

  ![](https://i.imgur.com/hy2jymA.png)

<br>

