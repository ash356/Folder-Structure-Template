import userRouter from "./Modules/UserModule/user.router.js";
import productRouter from "./Modules/ProductModule/product.router.js";
const initApp = (app, express) => {
  app.use(express.json());
  app.get("/", (req, res) => {
    res.json({ message: "Home Page" });
  });
  app.use("/user", userRouter);
  app.use("/product", productRouter);
  app.use((req, res) => {
    res.json({ message: "Error 404 Page Not Found !" });
  });
};
export default initApp;
