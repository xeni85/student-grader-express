const React = require('react');
    class Index extends React.Component {
      render() {
          const { students } = this.props;
          return (
                  <div style={myStyles}>
                      <h1 style={{color: 'white'}}>Students Index Page</h1>
                      <table style={tableStyle}>
                          {students.map((student, i) => {
                              return (
                                        <tr key={i}>
                                            <th style={{color: 'purple'}}>Name: </th>
                                            <td ><a style={linkStyle} href={`/students/${i}` }>{student.name}</a></td>
                                            <td><a href={`/students/${i}`}><img style={imgStyle} src={student.img} alt={student.name} /></a></td>
                                        </tr>
                              );
                          })}
                        </table>
                        <class><button type="submit" value="Submit"><a href={'/students/new'}>Add a Student</a></button></class>
                  </div>
          );
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
        color: 'white',
        fontFamily: 'Helvetica',
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'purple',
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
    module.exports = Index;