// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlockChat {

  event MessageSpoken(string message, address speaker);

  function saySomething(string calldata message) external returns(string memory) {

    emit MessageSpoken(message, msg.sender);

    return 'thank you for that beautiful message!';
  }  

}
