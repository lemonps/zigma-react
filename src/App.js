import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import { abi, address } from './config'
import UserList from './userList'

class App extends Component {
  componentWillMount() {
    this.loadBlockChainData()
  }

  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545 ")
    await window.ethereum.enable();
    const network = await web3.eth.net.getNetworkType()
    console.log("network: ", network)

    const account = await web3.eth.getAccounts()
    this.setState({ account: account[0] })
    console.log("account", account[0])

    //web3 link to smart contract
    const userList = new web3.eth.Contract(abi, address)
    this.setState({ userList })
    console.log("userList", userList)

    //get nummber of user inside blockchain
    const userCount = await userList.methods.userCount().call()
    this.setState({ userCount })
    console.log("count: " + userCount)

    //get all users from blockchain
    for (var i = 1; i <= userCount; i++) {
      const user = await userList.methods.users(i).call()
      this.setState({
        users: [...this.state.users, user]
      })
    }

    // const task = await todoList.methods.tasks(1).call()
    // this.setState({ tasks: task })

    console.log("users", this.state.users)
    this.setState({ loading: false })
  }

  //initialize variable
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      userCount: 0,
      users: [],
      loading: true
    }
    this.createUser = this.createUser.bind(this)
    // this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  //create user and push information to blockchain
  createUser(firstName, lastName) {
    // const x = 0
    this.setState({ loading: true })
    console.log("name:", firstName)
    console.log("lastName:", lastName)
    this.state.userList.methods.createUser(firstName, lastName).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      }
      )
  }

  render() {
    return (
      <div className="pt-5">
        {/* <p>Your account: {this.state.account}</p> */}
        {/* <p>user Count: {this.state.userCount}</p> */}
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow" id="navZigma">
          <a className="navbar-brand col-sm-10" >Zigma</a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              <UserList
                count={this.state.userCount}
                users={this.state.users}
                createUser={this.createUser} />
              {/* {this.state.loading 
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> 
                : <UserList 
                  users = {this.state.users} 
                  createUser = {this.createUser}/>
              } */}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
