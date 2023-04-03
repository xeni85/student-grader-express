//invoke react component
const React = require('react');
const students = require('../models/students.js');


export class Show extends React.Component {
  render() {
    const student = this.props.student;
    return (
      <div style={myStyles}>
        <h1 style={{color:'white'}}>{student.name}'s Profile</h1>
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <th >Name: </th>
                    <td >{student.name}</td>
                </tr>
                <tr>
                    <th >Age: </th>
                    <td >{student.age}</td>
                </tr>
                <tr>
                    <th ><a style={linkStyle} href={`/students/${students.indexOf(student)}/grades`}>Grades: </a></th>
                    <td style={spanStyle}>{student.grades.map((grade, i)=><span key={i}>{grade}</span>)}</td>
                </tr>
                <tr>
                    <th>Attendance: </th>
                    <td>{student.attendance}</td>
                </tr>
                <tr>
                    <th>Picture: </th>
                    <td><img style={imgStyle} src={student.img} /></td>
                </tr>
            </tbody>
        </table>
        <button><a style={linkStyle} href='/students'>BACK</a></button>
        </div>
    )
  }
}

const myStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'purple',
    fontFamily: 'Helvetica',
}

const linkStyle = {
    textDecoration: 'none',
    color: 'darkblue',
    fontWeight: 'bold',
    textDecoration: 'underline',
};

const imgStyle = {
    width: '3em',
    height: '3em',
}

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    backgroundColor: 'white',
}

const spanStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5em',
    fontSize: '1em',
    color: 'darkblue',
    fontWeight: 'bold',
}

module.exports = Show;