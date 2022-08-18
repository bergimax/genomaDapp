async function main() {
    const GenomaChain = await ethers.getContractFactory("GenomaChain")
  
    // Start deployment, returning a promise that resolves to a contract object
    const genomaChain = await GenomaChain.deploy()
    console.log("Contract deployed to address:", genomaChain.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  
