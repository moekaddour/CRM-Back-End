import { addNewContact, getAllContacts,getContactById,updateContact,deleteContact } from "../controllers/crmControllers";
import {registerUser, loginUser, checkAuth} from "../controllers/userControllers"
const routes = app => {
  app
    .route("/contact")
    .get(checkAuth, getAllContacts)
    .post(checkAuth, addNewContact);

  app
    .route("/contact/:id")
    .get(checkAuth, getContactById)
    .put(checkAuth, updateContact)
    .delete(checkAuth, deleteContact);

    app.route("/signup")
    .post(registerUser)

    app.route("/signin")
    .post(loginUser)
};

export default routes;
