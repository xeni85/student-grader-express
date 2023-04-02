//invoke react component
const React = require('react');
export class Show extends React.Component {
  render() {
    const student = this.props.student;
    return (
      <div>
        <h1>Instructor's Dashboard</h1>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{student.name}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{student.age}</td>
                </tr>
                <tr>
                    <th>Grades</th>
                    <td>{student.grades}</td>
                </tr>
                <tr>
                    <th>Attendance</th>
                    <td>{student.attendance}</td>
                </tr>
                <tr>
                    <th>Picture</th>
                    <td><img src={student.img} /></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
  }
}

module.exports = Show;