pragma solidity >= 0.5.0;

contract UserInfoList {
  uint public userCount = 0;

  struct User {
    uint id;
    string firstName;
    string lastName;
  }

  mapping(uint => User) public users;

  event UserCreated(
    uint id,
    string firstName,
    string lastName
  );

//   event TaskCompleted(
//     uint id,
//     bool completed
//   );

  constructor() public {
    createUser("P", "Satid");
    // createTask("Sample Task");
  }

  function createUser(string memory firstName, string memory lastName) public {
    userCount ++;
    users[userCount] = User(userCount,firstName, lastName);
    emit UserCreated(userCount, firstName, lastName);
  }

//   function toggleCompleted(uint _id) public {
//     Task memory _task = tasks[_id];
//     _task.completed = !_task.completed;
//     tasks[_id] = _task;
//     emit TaskCompleted(_id, _task.completed);
//   }
}