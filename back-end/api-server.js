const express = require('express');
const app =express();
const port = 3000;
const bodyParser = require('body-parser');
// npm i body-parser
const database = require('./database');

const memos= [];
// request 의 body는 bodyParser를 이용하여 처리하므로 req 안에 있는 값을 가져올 때는 
// bodyParser module을 추가해주어야 한다!!
app.use(bodyParser.json());


app.get('/api/memos',async(req,res)=>{
    const result= await database.run("select * from memos");
    res.send(result);
});

app.post('/api/memos',async(req,res)=>{
    // prevent sql injection 
    // await database.run(`insert into memos (content) values ('${req.body.content}')`);
    await database.run('insert into memos (content) values (?)',[req.body.content]);
    const result = await database.run("select * from memos");
    res.send(result);
});

app.put('/api/memos/:id',async(req,res)=>{
    //await database.run(`update memos set content ='${req.body.content}' where id=${req.params.id} `);
    await database.run('update memos set content=? where id=?',[req.body.content,req.params.id]);
    const result = await database.run("select * from memos");
    res.send(result);
});


app.listen(port,()=>{
    console.log(`Memo App listening at http://localhost:${port}`);
});




