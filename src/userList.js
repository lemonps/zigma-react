import React, {Component} from 'react';

class UserList extends Component{
  render() {
    return (
        <div id="content">
            <form onSubmit = {(event) => {
                event.preventDefault()
                this.props.createUser(this.user.value)
                console.log(this.user.value)
            }}>
              <input 
                id="newUser" 
                ref = {(input) => {this.user = input}} 
                type="text" className="form-control" 
                placeholder="Add user..." 
                required/>
              <input type="submit" hidden= {true}/>
            </form>
            <ul id="userList" className="list-unstyled">
              {/* <div className="userTemplate" className="checkbox">
                <label>
                  <input type="checkbox" />
                  <span className="content">user content goes here...</span>
                </label>
              </div> */}
              { this.props.users.map((user, key) => {
                return(
              <div className="userTemplate" className="checkbox" key = {key}>
                <label>
                  <input type="checkbox"
                    // name = {user.id}
                    defaultChecked = {user.completed}
                    // ref = {(input) => {
                    //     this.checkbox = input
                    // }}
                    onClick = {(event) => {
                        this.props.toggleCompleted(user.id)
                        console.log("userID", user.id)}}/>
                  <span className="content">{user.firstName}</span>
                </label>
              </div>
                )
              })}
            </ul>
            <ul id="completedUserList" className="list-unstyled">
            </ul>
        </div>
    );
  }
}

export default UserList;