//invoke react component
const React = require('react');
const students = require('../models/students.js');


export class Show extends React.Component {
  render() {
    const student = this.props.student;
    return (
      <div>
        <h1>Student Profile</h1>
        <table>
            <tbody>
                <tr>
                    <th>Name: </th>
                    <td>{student.name}</td>
                </tr>
                <tr>
                    <th>Age: </th>
                    <td>{student.age}</td>
                </tr>
                <tr>
                    <th><a href={`/students/${students.indexOf(student)}/grades`}>Grades: </a></th>
                    <td>{student.grades}</td>
                </tr>
                <tr>
                    <th>Attendance: </th>
                    <td>{student.attendance}</td>
                </tr>
                <tr>
                    <th>Picture: </th>
                    <td><img src={student.img} /></td>
                </tr>
            </tbody>
        </table>
        <button><a href='/students'>BACK</a></button>
        </div>
    )
  }
}

module.exports = Show;