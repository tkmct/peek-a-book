const hre = require("hardhat")
const fs = require("fs")

async function main() {
  const PeekABook = await hre.ethers.getContractFactory("PeekABook")
  const instance = await PeekABook.deploy()

  await instance.deployed()

  console.log("PeekABook deployed to:", instance.address)
  fs.writeFileSync(
    "./address.json",
    JSON.stringify({
      PeekABook: instance.address,
    })
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
