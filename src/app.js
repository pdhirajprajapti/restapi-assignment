
const express=require('express');
const app = express();
require("../src/db/conn");
const Movieoverview=require("../src/models/mens");
const router=require("./routers/rout");

const port =3000;
app.use(express.json());
app.use(router);





app.listen(port, ()=>{
    console.log(`connection is live at port no. ${port}`)
})