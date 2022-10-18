const express=require("express");
const router=new express.Router();



const MoMovieoverview=require('../models/mens');


// we will handle post request
router.post("/movie", async(req,res)=>{
    try{
        const addingMovieDetail=new Movieoverview(req.body)
        console.log(req.body);
        const insertMovie=await addingMovieDetail.save();
        res.status(201).send(insertMovie);
    } catch(e){
        res.status(400).send(e);
    }
})

// we will handle get request in api
router.get("/movie", async (req, res) => {
    try {
      const getMovie=await Movieoverview.find();
      res.send(getMovie);
    } catch (e){
        res.status(400).send(e);
    }      
})



// we will handle patch request in api for individual
router.patch("/movie/:id", async (req, res) => {
    try {
        const _id=req.params.id;
      const getMovie=await Movieoverview.findByIdAndUpdate(_id, req.body, {new:true});
      res.send(getMovie);
    } catch (e){
        res.status(500).send(e);
    }      
})

// we will handle delete request in api for individual
router.delete("/movie/:id", async (req, res) => {
    try {
       
      const deleteMovie=await Movieoverview.findByIdAndDelete(req.params.id);
      res.send(deleteMovie);
    } catch (e){
        res.status(500).send(e);
    }      
})

module.exports=router;