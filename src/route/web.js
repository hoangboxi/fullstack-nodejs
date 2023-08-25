 import  express  from "express";
import homeCotrollers from "../controllers/homeCotrollers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeCotrollers.getHomePage);
    router.get('/about', homeCotrollers.getAboutPage);
    router.get('/crud', homeCotrollers.getCRUD);
    router.post('/post-crud', homeCotrollers.postCRUD);
    router.get('/get-crud', homeCotrollers.displayGetCRUD);
    router.get('/edit-crud', homeCotrollers.getEditCRUD );
    router.post('/put-crud', homeCotrollers.putCRUD);
    // router.get('/delete-crud', homeCotrollers.deleteCRUD);
    return app.use("/",router);
}
    
module.exports=  initWebRoutes;
