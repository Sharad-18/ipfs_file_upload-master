window.onload = function () {
  if (window.ethereum !== "undefined") {
    this.ethereum.on("accountsChanged", handleAccountsChanged);
  }
};

let accounts;

const handleAccountsChanged = (a) => {
  console.log("accounts changed");
  accounts = a;
};

async function connectWallet() {
  accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      console.log(err.code);
    });
  console.log(accounts);
}

async function checkBalance() {
  let balance = await window.ethereum
    .request({
      method: "eth_getBalance",
      params: [accounts[0], "latest"],
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(parseInt(balance) / Math.pow(10, 18));
}

async function sendTransaction() {
    let params = [{
    "from": "0x73dD4A2ad1A0c29336459011444c70FAa055A6a7",
    "to": "0x4030a5b70697f20ed727d77eb45a165a7cdd2196",
    "gas": Number (21000).toString(16),
    "gasPrice": Number (2500000).toString(16),
    "value": Number (1000000000000000000).toString (16),
    }]
    let result = window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)=>{
        console.log(err)
    })
    }
