pragma solidity >=0.5.0 <0.7.0;


contract stacking {
  string username = 'testuser';

  function getName() public view returns (string memory) {
    return username;
  }

  function setName(string calldata newName) external {
    username = newName;
  }
}
