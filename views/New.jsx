const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div style={myStyles}>
              <h1 style={{color: 'white'}}>New Student Page</h1>
              {/* NOTE: action will be the route, method will be the HTTP verb */}
              <form style={myForms} action="/students/new" method="POST">
                Name: <input type="text" name="name" /><br/>
                Age: <input type="text" name="age" /><br/>
                Grades: <input type="number" name="grades"  /><br/>
                Attendance: <input type="text" name="attendance" /><br/>
                Picture: <input type="text" name="src" /><br/>
                <div style={myBtns}>
                    <input type="submit" name="" value="Create Student"/>
                    <button><a href='/students'>BACK</a></button>
                </div>
              </form>

          </div>);
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
        fontFamily: 'Helvetica',
    }

    const myForms = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '50vw',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
    }

    const myBtns = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
module.exports = New;