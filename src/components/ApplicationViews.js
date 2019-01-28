//Create a react app where when the user goes to `/students`, they see a list of students from the following data
//Each student should be displayed with their first name and then last name.

import React, { Component } from "react"
import { Route } from 'react-router-dom'
import StudentList from "./students/StudentList"
import StudentManager from "../modules/StudentManager"

export default class ApplicationViews extends Component {
  state = {
    students: []
  }

   componentDidMount() {
    StudentManager.getAll().then(students => {
      this.setState({
        students: students
      })
    })
  }

  render() {
    return(
      <React.Fragment>
         <Route exact path="/students" render={(props) => {
         return <StudentList students={this.state.students} />
      }} />
      </React.Fragment>
    )
  }
}