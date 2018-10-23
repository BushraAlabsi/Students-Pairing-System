const express = require('express');

// app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
// const userApiRouter = require('./usersApiRouter.js');
const db = require('./database/index');
const database = require('./database/db');

const path =require('path');
const ObjectId = require('mongodb').ObjectID;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api/users', userApiRouter);

app.use(express.static(path.join(__dirname)))


app.get('/', function (req, res) {
res.render("index");	
});


app.post('/api/student',function(req,res){
    const student = new database.Student(req.body);
    student.save()
    .then(item => {
     res.send("item saved to database");
 })
    .catch(err => {
        console.log(err)
        res.status(400).send("unable to save to database");
    });


})
app.get('/api/student',function(req,res){
    // const studentId = parseInt(req.params.studentId)

    database.Student.find({})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })

})


app.post('/api/history',function(req,res){
    const history = new database.History(req.body);
    history.save()
    .then(item => {
     res.send("item saved to database");
 })
    .catch(err => {
        console.log(err)
        res.status(400).send("unable to save to database");
    });


})
app.get('/api/history',function(req,res){
    // const studentId = parseInt(req.params.studentId)

    database.History.find({})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })

})
app.put('/api/student/:studentId', (req, res) => {
	const id = req.params.studentId;
	console.log(id)
    const newValue = req.body;
    database.Student.findOneAndUpdate({_id:ObjectId(id)}, newValue)
    .then( previousValue => {
        database.Student.findOne({ _id : id })
        .then(updated => {
            res.send(updated);
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        next(err)
    })

});

app.delete('/api/student/:id', (req, res)=> {
        const id = req.params.id;
        database.Student.findByIdAndRemove(id)
        .then(()=>{
            res.send('removed')
        })
        .catch(err => {
            console.log(err)
        })
})

app.get('/*', function (req, res) {
res.render("index");	
});

const port = process.env.PORT || 3000;

const server = app
.listen(port, () => console.log(`Listening on ${ port }`));