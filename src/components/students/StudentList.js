import React, { Component } from 'react'

export default class StudentList extends Component {
  render() {
    return (
      <section className="students">
      {
        this.props.students.map(student =>
          <p key={student.id}>
          <h4>{student.firstName} {student.lastName}</h4>
          </p>
          )
      }
      </section>
    )
  }
}