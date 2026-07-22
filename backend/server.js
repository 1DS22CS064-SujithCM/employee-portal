const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const employees = [

    {
        id:1,
        name:"Alice",
        department:"HR"
    },

    {
        id:2,
        name:"Bob",
        department:"Finance"
    },

    {
        id:3,
        name:"Charlie",
        department:"Engineering"
    }

];

app.get("/",(req,res)=>{

    res.send("Employee Portal Backend");

});

app.get("/health",(req,res)=>{

    res.json({
        status:"UP"
    });

});

app.get("/employees",(req,res)=>{

    console.log("Database Username:",
        process.env.DB_USERNAME);

    console.log("Database Password:",
        process.env.DB_PASSWORD);

    res.json(employees);

});

app.listen(3000,()=>{

    console.log("Server running on port 3000");

});