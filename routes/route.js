import express from "express";
import { saveSentEmails , getEmails, moveEmailstoBin, toggleStarredEmails} from "../controller/email-controller.js";


const routes = express.Router();

routes.post("/save" , saveSentEmails);

routes.get("/emails/:type",getEmails);
routes.post("/save-draft", saveSentEmails);
routes.post("/bin",moveEmailstoBin);
routes.post("/starred",toggleStarredEmails);


export default routes;