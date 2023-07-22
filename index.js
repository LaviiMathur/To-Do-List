import express from "express";
import bodyParser from "body-parser";



const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let newItems=[];
let workItems=[]
app.get("/", (req, res) => {
  res.render("index.ejs",{
    listItems : newItems,

  });
});
app.post("/submit",(req,res,)=>{
  var newItem = req.body["newItem"]
  newItems.push(newItem)
 
  res.redirect("/")
})
app.post("/reset",(req,res)=>{
  newItems=[]
  res.redirect("/");
})
app.get("/work",(req,res)=>{
  res.render("work.ejs",{
    workListItems : workItems,

  })
})
app.post("/workSubmit",(req,res,)=>{
  var workItem = req.body["workItem"]
  workItems.push(workItem)

  res.redirect("/work")
})
app.post("/workReset",(req,res)=>{
  workItems=[]
  res.redirect("/work");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
