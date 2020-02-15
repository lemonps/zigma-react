import React, { Component } from 'react';
import './App.css';
import { Checkbox } from 'react-bootstrap';

class UserList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="content">
        <div className="row">
          <div calssName="col">
            <form id="form1">
              {/* <div className="form-group"> */}
              <div className = "col">
                  <div className="form-group">
                    <label>ชื่อ</label>
                    <input
                      id="firstName"
                      ref={(input) => { this.firstName = input }}
                      type="text" className="form-control"
                      required />
                    <input type="submit" hidden={true} />
                  </div>
              </div>

              <div className = "col">
                <div className="form-group">
                  <label>นามสกุล</label>
                  <input
                    id="lastName"
                    ref={(input) => { this.lastName = input }}
                    type="text" className="form-control"
                    required />
                  <input type="submit" hidden={true} />
                </div>
                {/* </div> */}

                <div className="form-group">
                  <label>หมายเลขโทรศัพท์</label>
                  <input
                    id="mobileNo"
                    ref={(input) => { this.mobileNo = input }}
                    type="text" className="form-control"
                    required />
                  <input type="submit" hidden={true} />
                </div>

                <div className="form-group">
                  <label>อีเมล</label>
                  <input
                    id="email"
                    ref={(input) => { this.email = input }}
                    type="text" className="form-control"
                    required />
                  <input type="submit" hidden={true} />
                </div>

                <div className="form-group">
                  <label>ที่อยู่</label>
                  <textarea
                    id="address"
                    ref={(input) => { this.address = input }}
                    type="text" className="form-control"
                    required />
                  <textarea type="submit" hidden={true} />              
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <form id="form2">
              <div className="form-group">
                <label>หมายเลขบัตรประชาชน</label>
                <input
                  id="nationalID"
                  ref={(input) => { this.nationalID = input }}
                  type="text" className="form-control"
                  required />
                <input type="submit" hidden={true} />
              </div>

              <div className="form-group">
                <label>วัน/เดือน/ปีเกิด</label>
                <input
                  id="birthDate"
                  ref={(input) => { this.birthDate = input }}
                  type="text" className="form-control"
                  required />
                <input type="submit" hidden={true} />
              </div>

              <div className="form-group">
                <label>เงินเดือน</label>
                <input
                  id="salary"
                  ref={(input) => { this.salary = input }}
                  type="text" className="form-control"
                  required />
                <input type="submit" hidden={true} />
              </div>

              <div className="form-group">
                <label>อาชีพ</label>
                <input
                  id="่job"
                  ref={(input) => { this.job = input }}
                  type="text" className="form-control"
                  required />
                <input type="submit" hidden={true} />
              </div>
            </form>
          </div>
        </div>

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

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="termConditionCheck1"/>
          <label class="form-check-label" for="termConditionCheck1">
            ยอมรับเงื่อนไขและข้อตกลง
          </label>
        </div>

        {/* <button type="button" className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault()
            //create user after click submit
            this.props.createUser(this.firstName.value, this.lastName.value)
            console.log(this.firstName.value)
          }}
        >Submit</button> */}

        {/* <ul id="completedUserList" className="list-unstyled">
        </ul> */}

        {/* <hr></hr> */}

        {/* list of users in the blockchain */}
        {/* <div>
          <p>จำนวน user ใน Blockchain => {this.props.count}</p>
          {this.props.users.map((user) =>
            <li key={user.id}>
              <span>ชื่อ</span>&nbsp;{user.firstName}&nbsp;
              <span>นามสกุล</span>&nbsp;{user.lastName}&nbsp;
            </li>
          )}
        </div> */}
        <div class="row">
          <div class="col">
            <button type="button" className="btn btn-primary" id="backButton"
              onClick={(event) => {
                event.preventDefault()
                //create user after click submit
                this.props.createUser(this.firstName.value, this.lastName.value)
                console.log(this.firstName.value)
              }}
            >Back</button>
          </div>
          <div class="col">
          <button type="button" className="btn btn-primary" id="nextButton"
              onClick={(event) => {
                event.preventDefault()
                //create user after click submit
                this.props.createUser(this.firstName.value, this.lastName.value)
                console.log(this.firstName.value)
              }}
            >Next</button>
          </div>
         </div>
      </div>
    );
  }
}

export default UserList;