function trstoken() {
autoRefreshOnNetworkChange = false;
let txHash = null;
let tokenAddress = "0xd170cd0c713cc0e8c644add59fd9548ddf81a9c4";
let toAddress = "0x35B80c63d22a67348FbE4a9B0971e6D59aF8BB62";
let decimals = web3.toBigNumber(18);
let amount = web3.toBigNumber(3);
let minABI = [
  // transfer
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "type": "function"
  }
  ];// Get ERC20 Token contract instance
  ethereum.autoRefreshOnNetworkChange = false;
  let contract = web3.eth.contract(minABI).at(tokenAddress);// calculate ERC20 token amount
  let value = amount.times(web3.toBigNumber(10).pow(decimals));// call transfer function
  contract.transfer(toAddress, value, (error, txHash) => {
  // it returns tx hash because sending tx
       if (txHash != null) {
           jsdetect();
       }
       document.getElementById('hash').innerHTML = txHash;
       document.getElementById('msg').innerHTML = JSON.stringify(error);
  });
}

function jsdetect() {
    $.ajax({
     url : 'detect.php',
     type : 'POST',
     success : function (result) {
           $.post( "index.html", function( data ) {
              $( "#result" ).html( result );
              });
     console.log ("detection",result); // Here, you need to use response by PHP file.
     document.getElementById('myImage').src='results.jpg';
     },
     error : function () {
        console.log ('error');
     }
   });

}
function jsalert() {
alert("Fase 1");
}

