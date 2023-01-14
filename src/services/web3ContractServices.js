let Web3 = require("web3");
let appServices = require("./appServices")
let ContractAbi = require("../connections/contractAbi.json")
// *************************unpaused methods***********************************************
let ContractWebHooks = async () => {
    try {
        var web3 = await new Web3(new Web3.providers.WebsocketProvider("wss://clean-damp-dust.matic-testnet.quiknode.pro/ae1509d26c0e04fdf2a68627c92f4c589e0d8a42/"));
        var contract = await new web3.eth.Contract(ContractAbi, "0x2Cd563E71B322bE41Dbb8055C7921FC9243b4e79");
        console.log(contract.events)
        // return
        contract.events.transfer(() => {
        }).on("connected", function (subscriptionId) {
            console.log('TransferSingle-SubID: ', subscriptionId);
        }).on('data', async (event) => {
            // console.log('Event:', event);
            let transactionHash = event.transactionHash;
            let objects = event.returnValues;
            let data = {
                message: objects.message,
                address: objects.account,
                transactionHash
            }
            console.log(data);
            appServices.sendEmail(JSON.stringify(data))

        }).on('error', function (error, receipt) {
            console.log('Error:', error, receipt);
        });
        // ******************************************************************************************************************
    } catch (error) {
        console.log("error while getting networks", error)
    }
}

ContractWebHooks()
