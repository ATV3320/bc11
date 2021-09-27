const main = async () => {
    const [owner, randoPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    var arr = [];
    waveCount = await waveContract.getTotalWaves();
    
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
    waveTxn = await waveContract.connect(randoPerson).wave();
    arr.push(randoPerson.address);
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
    waveTxn = await waveContract.connect(randoPerson).wave();
    arr.push(randoPerson.address);
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
    console.log(arr);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}

runMain();
