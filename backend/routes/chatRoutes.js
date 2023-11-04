const express= require("express")
const {protect} = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require("../controllers/chatControllers");

const router = express.Router();

 router.route('/').post(protect, accessChat); //creating or fetching one on one chat
 router.route("/").get(protect, fetchChats); //fetching all chats of particular user
 router.route('/group').post(protect, createGroupChat);
 router.route('/rename').put(protect, renameGroup);
 router.route('/groupremove').put(protect, removeFromGroup);
 router.route("/groupadd").put(protect, addToGroup);

module.exports = router;