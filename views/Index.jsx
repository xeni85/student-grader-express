const React = require('react');

    class Index extends React.Component {
      render() {
          const { students } = this.props;
          return (
                  <div>
                      <h1>Students Index Page</h1>
                      <table>
                          {students.map((student, i) => {
                              return (

                                        <tr key={i}>
                                            <th>Name: </th>
                                            <td><a href={`/students/${i}`}>{student.name}</a></td>
                                            <th>Picture: </th>
                                            <td><a href={`/students/${i}`}><img src={student.img} alt={student.name} /></a></td>
                                        </tr>
                              );
                          })}
                        </table>
                  </div>
          );
      }
    }
    module.exports = Index;