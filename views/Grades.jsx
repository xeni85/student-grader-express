import React, { useState } from 'react'


const Grades = (props) => {

  return (
    <div style={myStyles}>Grades
       <form action={`/students/student/grades`} method="POST">
        <input type="number" name="grade" min={0} max={100}/>
        <input type="submit" name="" value="Add Grade"/>
      </form>
    </div>
  )
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

export default Grades;
