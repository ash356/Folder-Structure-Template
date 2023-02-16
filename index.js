import express from "express";
import initApp from './Src/app.router.js'
const app = express();
const port = 5000;
initApp(app, express);
app.listen(port, () => {
  console.log(`Server Is Runing.....Port: ${port}`);
});
