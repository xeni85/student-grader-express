const React = require('react');


export class Grades extends React.Component {

    
  render() {
    // const student = this.props.student;
    // const inputVal = this.props.inputVal;
    // let newGrade;
    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     newGrade = value;
    //   };
    //onChange={handleChange} value={inputVal}
    //onClick={student.grades.push[value]}
    return (
      <div>
        <form>
            <input type='number' placeholder='enter grade'/>
        </form>
        <button >Add Grade</button>
      </div>
    )
  }
}

module.exports = Grades;