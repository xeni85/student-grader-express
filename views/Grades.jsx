import React, { useState } from 'react'

const Grades = (props) => {

  return (
    <div>Grades
       <form action={`/students/${props.student}/grades`} method="POST">
        <input type="number" name="grade"/>
        <input type="submit" name="" value="Add Grade"/>
      </form>
    </div>
  )
}

export default Grades

// export class Grades extends React.Component {
    
//   render() {
//     const val = document.querySelector('.input').value
    
    
//     this.handleSubmit = (event) => {
//         student.grades.push(val);
//       };
//     //
    
//     return (
//       <div>
// <form>
//         <label>
//           New Grade:
//           <input
//             type="number"
//             value={this.state.value}
//             onChange={this.handleSubmit}
//             className='input'
//           />
//         </label>
//         <button type="submit">Add Grade</button>
//       </form>
//       {console.log(student)}
//       </div>

//     )
//   }
// }

// module.exports = Grades;