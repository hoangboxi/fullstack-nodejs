import  db from '../models/index';
import CRUDService from '../services/CRUDService'

let getHomePage = async(req , res) => {
    try {
        let data = await db.User.findAll();
        console.log("-----------------------")
        console.log(data)
        console.log("-----------------------")
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
    let data = await db.User.findAll();

    return res.render('homepage.ejs');
}
let getAboutPage = (req , res) => {
    return res.render('test/about.ejs'); 
    
}
let getCRUD = (req , res) => {
    return res.render('crud.ejs');
}
let postCRUD = async(req , res) => {
    let messge =await CRUDService.createNewUser(req.body);
    console.log(messge)

    return res.send('post crud from  server');
}
let displayGetCRUD = async(req, res)=> {
    let data = await CRUDService.getAllUser();
    console.log( data)
    return res.render("displayCRUD",{
        dataTable: data
    })
}
let getEditCRUD = async(req, res)=> {
    let userId= req.query.id;
    if(userId){
        let userData= await CRUDService.getUserInforById(userId);
        console.log(userData)
        return res.render('editCRUD.ejs',{
            user: userData
        });
            
    }
    else{
        return res.send('User not found!');
    }
}
let putCRUD = async(req,res)=> {
    let data=req.body;
    let allUsers= await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs',{
        dataTable: allUsers
    });

}
// let deleteCRUD = async(req,res)=>{
//     let id= req.query.id;
//     if(id){
//         await CRUDService.deleteUserById(id);
//         return res.send('Delete the user succeed!')
//     }else{
//         return res.send('User not found')
//     }
   
// }

// object: {
//    key: ''

//    value: ''
//}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage:getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:  putCRUD,
    // deleteCRUD: deleteCRUD,

}