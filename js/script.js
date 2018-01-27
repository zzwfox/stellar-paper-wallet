
var qrcodeAddress = new QRCode(document.getElementById("qrcodeAddress"),{width: 120,height: 120});
var qrcodeSecret = new QRCode(document.getElementById("qrcodeSecret"),{width: 120, height: 120});

newstellar();

function newstellar() {
  var keypair = StellarSdk.Keypair.random();
  var address = keypair.accountId();
  var seed = keypair.seed();
  var addrurl = "https://stellarchain.io/address/"+address;
  document.getElementById("address").innerHTML = address;
  document.getElementById("secret").innerHTML = seed;
  document.getElementById("addr").href = addrurl;
  qrcodeAddress.makeCode(address);
  qrcodeSecret.makeCode(seed);
}
