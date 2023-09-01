 import  express  from "express";
import homeCotrollers from "../controllers/homeCotrollers";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeCotrollers.getHomePage);
    router.get('/about', homeCotrollers.getAboutPage);
    router.get('/crud', homeCotrollers.getCRUD);
    router.post('/post-crud', homeCotrollers.postCRUD);
    router.get('/get-crud', homeCotrollers.displayGetCRUD);
    router.get('/edit-crud', homeCotrollers.getEditCRUD );
    router.post('/put-crud', homeCotrollers.putCRUD);
    router.get('/delete-crud', homeCotrollers.deleteCRUD);
    router.post('/api/login',userController.handleLogin)
    return app.use("/",router, userController.handleLogin);
}
    
module.exports=  initWebRoutes;
