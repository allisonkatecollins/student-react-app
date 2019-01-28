import React, { Component } from 'react'

export default class StudentList extends Component {
  render() {
    console.log(this.props.students);
    return (
      <section className="students">
      {
        
        this.props.students.map(student =>
          <div key={student.id}>
          <h4>{student.firstName} {student.lastName}</h4>
          </div>
          )
      }
      </section>
    )

  }
}