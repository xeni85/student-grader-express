//----------------------------------INITIALIZATION----------------------------------

//require express
const express = require('express');

//initialize express
const app = express();

//create PORT
const PORT = process.env.PORT || 3000;

//import students from students
const students = require('./models/students.js');

//set up view engine

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//----------------------------------MIDDLEWARE----------------------------------
//access data in POST requests
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

let floatingStudent;
//----------------------------------ROUTING----------------------------------

//GET '/' index : route dispalying a list of students

app.get('/students', (req, res) => {
    res.render( 'Index', {students: students});
});

// GET '/students/new'  new: route displaying a form to create a new student

app.get('/students/new', (req, res) => {
    res.send('new student form');
});
// POST 'students' create: route creating a new student
app.get('/students/:id/grades', (req, res) => {
    floatingStudent = req.params.id;
    console.log('floating student in get', floatingStudent);
    res.render('Grades', { student: students[req.params.id] });
});

app.post(`/students/:id/grades`, (req, res) => {
    console.log(req.body.grade);
    students[floatingStudent].grades.push(req.body.grade);
    console.log('floatingstudent in post', students[floatingStudent].grades)

    res.redirect(`/students/${floatingStudent}`);
});
// GET '/:id' show : route displaying a single student

app.get('/students/:id', (req, res) => {
    res.render('Show', { student: students[req.params.id] });
});

app.get('/students/:id/grades', (req, res) => {
    res.render('Grades', { student: students[req.params.id] });
});

// GET '/students/:id/edit' : route displaying a form to edit a student

app.get('/students/:id/edit', (req, res) => {
    res.send('edit student form');
});

// PATCH/PUT 'students/:id' update : route updating a student

app.put('/students/:id', (req, res) => {
    res.send('update student form');
});

// DELETE'students/:id' delete : route deleting a student
// '/students/:id/delete' : route displaying a form to delete a student

app.delete('/students/:id', (req, res) => {
    res.send('delete student form');
});

// 

//----------------------------------ROUTING----------------------------------


app.listen(PORT, () => {
    console.log(`App listening on PORT ` + PORT);
})