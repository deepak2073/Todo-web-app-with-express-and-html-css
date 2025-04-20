const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser-json');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.get('/todos',(req,res)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        
        res.json(JSON.parse(data));
    })

});
app.post('/todos',(req,res)=>{
    let obj = {
        id:Math.floor(Math.random()*1000000),
        task: req.body.task,
        completed: req.body.completed,
        description: req.body.description
    }
    let array = [];
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        array = JSON.parse(data);
        array.push(obj);
        fs.writeFile("todos.json",JSON.stringify(array),(err)=>{
            if(err){
                console.error(err);
                return;
            }
            res.status('200').json(obj);
        });
    });
});
app.delete('/todos/:id',(req,res)=>{
    let array = [];
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        array = JSON.parse(data);
        let index = findIndex(array,parseInt(req.params.id));
        if(index == -1) res.status('404').send();
        else{
            array.push(array[index]);
            array[index] = array[array.length-2];
            array.pop();
            array.pop();
            fs.writeFile("todos.json",JSON.stringify(array),(err)=>{
                if(err){
                    console.error(err);
                    return;
                }
                res.status('200').send("Successfully deleted");
            });
            
        }
    })
});
function findIndex(array,id){
    for(let i = 0;i <array.length;i ++){
      if(array[i].id === id) return i;
    }
    return -1;
}
function getFileData(filepath){
    let arr = [];
    fs.readFile(filepath,"utf-8",(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        array = JSON.parse(data);
        return array;
    })
    
}
app.listen(port,()=>{
    console.log(`app example listening on port ${port}`);
})
