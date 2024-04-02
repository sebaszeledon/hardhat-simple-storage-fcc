//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7; //My first comment in solidity

//EVM, Ethereum Virtual Machine
//Avalanche, Fantom, Polygon are compatible

contract SimpleStorage {
    uint256 favoriteNumber;
    //People public person = People({favoriteNumber: 8, name: "Sebastian"});

    mapping(string => uint256) public nameToFavoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    //view, pure don´t modify the state
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    //calldata, memory, storage
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
