const express = require('express');
const app =express();
NOTES =[
    {
        "id":1,
        "title":"Fake Note",
        "description":"This is the first note"
    },
    {
        "id":2,
        "title":"Fake Note",
        "description":"This is the second note"
    },
    {
        "id":3,
        "title":"Fake Note",
        "description":"This is the third note"
    }
]
app.get('/',firstRoute)
function firstRoute(req,res){
    res.send('hi');
}
 app.get('/notes',(req,res)=>{
    res.send(NOTES);
 })
app.listen(3000,printMessage)
function printMessage(){
    console.log('Server is running on port 3000');

}