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

app.post('/students', (req, res) => {
    res.send('create student form');
})

// GET '/:id' show : route displaying a single student

app.get('/students/:id', (req, res) => {
    res.render('Show', { student: students[req.params.id] });
});

// GET '/students/:id/edit' : route displaying a form to edit a student

app.get('/students/:id/edit', (req, res) => {
    res.send('edit student form');
});

// PATCH/PUT 'students/:id' update : route updating a student

app.patch('/students/:id', (req, res) => {
    res.send('update student form');
});

// DELETE'students/:id' delete : route deleting a student
// '/students/:id/delete' : route displaying a form to delete a student

app.delete('/students/:id', (req, res) => {
    res.send('delete student form');
});

// '/

//----------------------------------ROUTING----------------------------------


app.listen(PORT, () => {
    console.log(`App listening on PORT ` + PORT);
})