const express=require("express")
const leadController=require("../controllers/leadController")
const router=express.Router()
router.post("/newLead",leadController.gettingLead)

module.exports=router