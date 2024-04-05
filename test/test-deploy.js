const {ethers} = require("hardhat");
const {expect, assert} = require("chai"); //9:38

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage;
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        // assert
        // expect
        assert.equal(currentValue.toString(), expectedValue)
    });
    it("Should update when we call store", async function (){
        const expectedValue = "8";
        const transactionResponse = await simpleStorage.store(expectedValue);
        await transactionResponse.wait(1);
        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue)
    });
    // Command to look for keyword: yarn hardhat test --grep store
    // Also, adding in the code it.only will run a specific part of the test
    it("Should get person and their favorite number", async function (){
        const expectedName = "Sebas";
        const expectedNumber = "8";
        const transactionResponse = await simpleStorage.addPerson(expectedName, expectedNumber);
        await transactionResponse.wait(1);
        const { favoriteNumber, name } = await simpleStorage.people(0);

        assert.equal(expectedName, name);
        assert.equal(expectedNumber, favoriteNumber);
    });

});