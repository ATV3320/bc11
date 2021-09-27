// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
//address of deployed contract: 0xa4d3352a441B32A3E47cFb85850BcE98B76f275a
import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    // address[] theBook;

    constructor() {
        console.log("Preach Power.");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }
    // function addToBook(address x) public {
    //     theBook.push(x);
    // }

    // function showTheBook() public view returns(address[] memory) {
    //     console.log("So, these are the people who waved at us while you were gone: %s", theBook);
    //     return theBook;
    // }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
