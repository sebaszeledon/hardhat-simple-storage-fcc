const {ethers} = require("hardhat"); //8:41:42

async function main(){
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.getDeployedCode();
    console.log(`Deployed contract to: ${simpleStorage.target}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

