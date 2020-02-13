import React, {Component} from 'react';
import './App.css'; 

class UserList extends Component{
  render() {
    return (
        <div id="content">
            <form id = "form">
              <div className="form-row">
                <div className = "col">
                  <input 
                    id="firstName" 
                    ref = {(input) => {this.firstName = input}} 
                    type="text" className="form-control" 
                    placeholder="Enter First Name" 
                    required/>
                  <input type="submit" hidden= {true}/> 
                </div>

                <div className = "col">
                  <input 
                    id="lastName" 
                    ref = {(input) => {this.lastName = input}} 
                    type="text" className="form-control" 
                    placeholder="Enter Last Name" 
                    required/>
                  <input type="submit" hidden= {true}/>
                </div>
              </div>

              {/* <input 
                id="firstName" 
                ref = {(input) => {this.firstName = input}} 
                type="text" className="form-control" 
                placeholder="Enter First Name" 
                required/>
              <input type="submit" hidden= {true}/>  */}

              {/* <input 
                id="lastName" 
                ref = {(input) => {this.lastName = input}} 
                type="text" className="form-control" 
                placeholder="Enter Last Name" 
                required/>
              <input type="submit" hidden= {true}/> */}

              <input 
                id="address" 
                ref = {(input) => {this.address = input}} 
                type="text" className="form-control" 
                placeholder="Enter Address" 
                required/>
              <input type="submit" hidden= {true}/>

              <input 
                id="mobileNo" 
                ref = {(input) => {this.mobileNo = input}} 
                type="text" className="form-control" 
                placeholder="Enter Mobile Number" 
                required/>
              <input type="submit" hidden= {true}/>

              <input 
                id="email" 
                ref = {(input) => {this.email = input}} 
                type="text" className="form-control" 
                placeholder="Enter Email" 
                required/>
              <input type="submit" hidden= {true}/>

              <input 
                id="job" 
                ref = {(input) => {this.job = input}} 
                type="text" className="form-control" 
                placeholder="Enter Job" 
                required/>
              <input type="submit" hidden= {true}/>

              <input 
                id="age" 
                ref = {(input) => {this.age = input}} 
                type="text" className="form-control" 
                placeholder="Enter Age" 
                required/>
              <input type="submit" hidden= {true}/>

              <input 
                id="salary" 
                ref = {(input) => {this.salary = input}} 
                type="text" className="form-control" 
                placeholder="Enter Salary" 
                required/>
              <input type="submit" hidden= {true}/>

              <input 
                id="nationalID" 
                ref = {(input) => {this.nationalID = input}} 
                type="text" className="form-control" 
                placeholder="Enter National ID" 
                required/>
              <input type="submit" hidden= {true}/>
            </form>

            {/* <ul id="userList" className="list-unstyled">
              { this.props.users.map((user, key) => {
                return(
              <div className="userTemplate" className="checkbox" key = {key}>
                <label>
                  <input type="checkbox"
                    name = {user.id}
                    defaultChecked = {user.completed}
                    ref = {(input) => {
                    this.checkbox = input
                    }}
                    onClick = {(event) => {
                    this.props.toggleCompleted(user.id)
                    console.log("userID", user.id)}}/> 
                  <span className="content">
                    {user.firstName + " " + user.lastName}
                    {user.lastName}
                    {console.log(user.lastName)}</span>
                </label>
              </div>
                )
              })}
            </ul> */}

            <button type="button" className = "btn btn-primary"
              onClick = {(event) => {
                event.preventDefault()
                //create user after click submit
                this.props.createUser(this.firstName.value, this.lastName.value)
                console.log(this.firstName.value)
              }}
              >Submit</button>

            <ul id="completedUserList" className="list-unstyled">
            </ul>
        </div>
    );
  }
}

export default UserList;