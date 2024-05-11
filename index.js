const querywrapper = require("./DB/querywrapper");
const express = require("express");                                                   
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
let port = 3000;
app.listen(port,()=>{
    console.log("Server is running port 3000");
});
app.get("/employee/:id",async (req,res)=>{
    try {
        const sql  = "select * from employee where id = ?"
        const [employee] = await querywrapper(sql,[req.params.id])
        res.send(employee);
    } catch (error) {
        console.log(error);
    }
});
app.delete("/employee/:id",async(req,res)=>{
    try{
        const sql = 'Delete from employee where id=?'
        const [employee] = await querywrapper(sql,[req.params.id])
        res.send(employee);
    }catch(err){
        console.log(err);
    }
});
app.patch("/employee",async(req,res)=>{
    try{
        const sql = `update employee SET ? WHERE Id =${req.body.Id} `
        const [employee] = await querywrapper(sql,[req.body])
        res.send(employee);
    }catch(err){
        console.log(err);
    }
});






