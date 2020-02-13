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
    createUser("p", "p");
    // createUser("xa", "wewc");
  }

  function createUser(string memory _firstName, string memory _lastName) public {
    userCount ++;
    users[userCount] = User(userCount, _firstName, _lastName);
    emit UserCreated(userCount, _firstName, _lastName);
  }
}