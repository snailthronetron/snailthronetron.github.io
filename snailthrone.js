var modal2 = document.getElementById("modal2");

var myContract;
var tronWeb;
var waiting = 0;
var currentAddr;

async function main() {
  if (typeof window.tronWeb === "undefined") {
    console.log("Waiting for tronWeb...");
    waiting += 1;
    if (waiting == 5) {
      // $("#tronWebModal").modal("hide");
      //  $("#noTronWebModal").modal("show");
      // $("#check").modal("show");
    }
    setTimeout(main, 1000);
  } else {
    tronWeb = window.tronWeb;
    myContract = await tronWeb
      .contract()
      .at("TVxHTUCSR66TSHjx55y3qWfZFQTjuTwozF");
    console.log(myContract);
    // myContract = await tronWeb.contract().at("TCzf7JntvZDmHVoPnhcsmJ4yBXhiX4tt1q");

    BigNumber = tronWeb.BigNumber;
    currentAddr = tronWeb.defaultAddress["base58"];
    console.log(currentAddr);
    setTimeout(function () {
      //  $("#tronWebModal").modal("hide");
      // $("#noTronWebModal").modal("hide");
      // $("#check").hide();
      // load100();
    }, 2000);
    setInterval(function () {
      maindata();
    }, 2000);
  }
}

// Get the <span> element that closes the modal
var span2 = document.getElementById("close2");

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};

/* PAST EVENT LOG */

var timeLaunch = 1592296381;
var launchBlock = 5434296;
var blockSpan = 14; //14s blocks on ETH mainnet
var startBlock = 0;
var ranLog = false;

// function checkBlock() {
//   web3.eth.getBlockNumber(function (error, result) {
//     ////console.log("block number is " + result);
//     startBlock = parseInt(result - 172800 / blockSpan); //~2 days
//     if (startBlock < launchBlock) {
//       startBlock = launchBlock;
//     }
//   });
// }

// checkBlock();

//Get timestamp for log
function dateLog(_blockNumber) {
  d = new Date((timeLaunch + (_blockNumber - launchBlock) * blockSpan) * 1000);
  //////////console.log(d);
  datetext = d.toTimeString();
  datetext = datetext.split(" ")[0];
}

/* VARIABLES */

var a_godTimer = "";
var godtimer_in_seconds = 0;
var god_numhours = 0;
var god_numminutes = 0;
var god_numseconds = 0;

var god_roundover = false;
var godtimer_lastminute = 300;
var i_godTimer = false;

var godtimerdoc;
var playereggdoc;

var a_pharaoh = "";
var a_tokenPrice = 0;
var a_tokenSellPrice = 0;
var a_maxSnail = 0;
var a_godPot = 0;
var a_frogPot = 0;
var a_snailPot = 0;
var a_playerSnail = 0;
var a_playerEgg = 0;
var a_playerProd = 0;
var a_playerHatchCost = 0;
var a_feedReward = 0;
var a_pharaohReq = 0;
var a_pharaohReq2 = 0;
var a_removeSnailReq = 0;
var f_buy = 0;
var f_sell = 0;
var f_sacrifice = 40;
var m_account = "waiting for web3";

var u_updateEvent = false;
var p_keepUpdating = false;

/* MODAL */

// Sacrifice modal
var modal3 = document.getElementById("modal3");

// Get the <span> element that closes the modal
var span3 = document.getElementById("close3");

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
};

function CloseModal3() {
  modal3.style.display = "none";
}

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var b_helpmodal = document.getElementById("helpmodal");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks the button, open the modal
b_helpmodal.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal on game info
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
};

/* GLOBAL LOOP */

//Changes u_updateLog to true, manual choice in case event watching fails
function startLogging() {
  u_updateEvent = true;
}

//Update log every few seconds if player chose to
function updateLog() {
  if (u_updateEvent == true || p_keepUpdating == true) {
    runLog();
  }
}

//Started once, to trigger the main loop and the egg loop
function maindata() {
  console.log("Main loop started.");
  controlLoop();
  controlLoopFast();
}

//Main loop
function controlLoop() {
  refreshData();
  setTimeout(controlLoop, 4000);
}

//Secondary loop for actions that need faster refresh
function controlLoopFast() {
  refreshDataFast();
  setTimeout(controlLoopFast, 200);
}

/* UTILITIES */

//Truncates ETH value to 3 decimals
function formatEthValue(ethstr) {
  return parseFloat(parseFloat(ethstr).toFixed(4));
}

//Truncates ETH value to 6 decimals
function formatEthValue2(ethstr) {
  return parseFloat(parseFloat(ethstr).toFixed(6));
}

//Truncates ETH address to first 8 numbers
function formatEthAdr(adr) {
  var _smallAdr = adr.substring(0, 10);
  var _stringLink =
    '<a href="https://etherscan.io/address/' +
    adr +
    '" target="_blank">' +
    _smallAdr +
    "</a>";
  return _stringLink;
}

//Conversion of Date to hh:mm:ss
var datetext;

function date24() {
  d = new Date();
  datetext = d.toTimeString();
  datetext = datetext.split(" ")[0];
}

//Referrals
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

function copyRef() {
  copyText.value = playerreflinkdoc.textContent;
  copyText.style.display = "block";
  copyText.select();
  document.execCommand("Copy");
  copyText.style.display = "none";
  //displayModalMessage("copied link to clipboard")
  //alert("Copied the text: " + copyText.value);
}

var playerreflinkdoc = document.getElementById("playerreflink");
var a_refLink =
  window.location.protocol +
  "//" +
  window.location.host +
  window.location.pathname +
  "?ref=" +
  web3.eth.accounts[0];
var copyText = document.getElementById("copytextthing");

/* STATE UPDATES */

//Refreshes game data
function refreshData() {
  updateEthAccount();
  updateGodRound();
  updateGodPot();
  updateRoundPot();
  updatePharaoh();
  updateGodTimer();
  updatePharaohReq();
  updateMaxSnail();
  updateContractBalance();
  updateFrogPot();
  updateSnailPot();
  updatePlayerSnail();
  updateTokenPrice();
  updatePlayerSnailValue();
  updateTokenSellPrice();
  updateMaxSnailSell();
  updatePlayerEgg();
  updatePlayerProd();
  updateHatchPrice();
  updateFullHatchCost();
  updateFeedReward();
  updateFullFeedReward();
  updateUnclaimedDiv();
  updatePlayerEarning();
  updatePlayerRef();
  updateButton();
  updateLog();
  //runLog();
}

//Refreshes some game data faster
function refreshDataFast() {
  fastupdateGodTimer();
  //fastupdatePlayerEgg();
  updateFieldBuy2();
  updateFieldSacrifice2();
  updateFieldSell2();
  updateSellEstimate();
  updateBuyEstimate();
  updatePharaohEstimate();
}

//Current ETH address in use
function updateEthAccount() {
  m_account = currentAddr;
}

//Current round
function updateGodRound() {
  var godrounddoc = document.getElementById("godround");
  godRound(function (req) {
    godrounddoc.textContent = req;
  });
}

//Full godpot
function updateGodPot() {
  var godpotdoc = document.getElementById("godpot");
  godPot(function (req) {
    a_godPot = req / 1e6;
    godpotdoc.textContent = a_godPot;
  });
}

//Current round pot (50% of godpot)
function updateRoundPot() {
  var roundpotdoc = document.getElementById("roundpot");
  roundpotdoc.textContent = a_godPot / 2;
}

//Current pharaoh
function updatePharaoh() {
  var pharaohdoc = document.getElementById("pharaoh");
  pharaoh(function (req) {
    a_pharaoh = "0x" + req.substring(26, 66);
    var b_pharaoh = formatEthAdr(a_pharaoh);
    if (god_roundover === false) {
      if (b_pharaoh === m_account) {
        pharaohdoc.innerHTML = "You Ascend in";
      } else {
        pharaohdoc.innerHTML = b_pharaoh + " Ascends in";
      }
    } else {
      if (b_pharaoh === m_account) {
        pharaohdoc.innerHTML =
          "YOU ARE THE SNAILGOD!<br>Claim your winnings by starting a new round.";
      } else {
        pharaohdoc.innerHTML =
          b_pharaoh +
          " is the SnailGod!<br>Start a new round to be next in line!";
      }
    }
  });
}

godtimerdoc = document.getElementById("godtimer");

//Local timer update
function fastupdateGodTimer() {
  if (i_godTimer == true) {
    var _blocktime = new Date().getTime(); //current "blocktime" in milliseconds
    var _timer = a_godTimer - _blocktime / 1000;

    if (_timer > 0) {
      godtimer_lastminute = 0;
      var _hours = Math.floor(_timer / 3600);
      if (_hours < 10) {
        _hours = "0" + _hours;
      }
      var _minutes = Math.floor((_timer % 3600) / 60);
      if (_minutes < 10) {
        _minutes = "0" + _minutes;
      }
      var _seconds = parseFloat((_timer % 3600) % 60).toFixed(0);
      if (_seconds < 10) {
        _seconds = "0" + _seconds;
      }

      godtimerdoc.innerHTML = _hours + ":" + _minutes + ":" + _seconds;
      god_roundover = false;
    } else if (_timer <= 0 && godtimer_lastminute < 300) {
      godtimerdoc.innerHTML = "[Waiting for blockchain confirmation...]";
      godtimer_lastminute++;
      god_roundover = false;
    } else {
      godtimerdoc.textContent =
        "[Round is over. Press the magic button below!]";
      god_roundover = true;
    }
  }
}

//Current round timer
function updateGodTimer() {
  godTimer(function (result) {
    a_godTimer = result;
    i_godTimer = true;
  });
}

//Show or hide relevant sacrifice/new round buttons
function updateButton() {
  if (god_roundover === false) {
    document.getElementById("showroundon").style.display = "block";
    document.getElementById("showroundoff").style.display = "none";
  } else {
    document.getElementById("showroundoff").style.display = "block";
    document.getElementById("showroundon").style.display = "none";
  }
}

//Current pharaoh requirement
function updatePharaohReq() {
  var pharaohreqdoc = document.getElementById("pharaohreq");
  var pharaohreq2doc = document.getElementById("pharaohreq2");
  //Check current pharaohReq
  pharaohReq(function (req) {
    a_pharaohReq = req;
  });
  //Check number of snails to remove
  ComputePharaohReq(function (req) {
    a_removeSnailReq = req;
  });
  //Remove snails from pharaohReq
  a_pharaohReq2 = a_pharaohReq - a_removeSnailReq;
  if (a_pharaohReq2 < 40) {
    a_pharaohReq2 = 40; //minimum req
  }

  pharaohreqdoc.textContent = a_pharaohReq2;
  pharaohreq2doc.textContent = a_pharaohReq2;
}

//Current max supply of snails
function updateMaxSnail() {
  var maxsnaildoc = document.getElementById("maxsnail");
  maxSnail(function (req) {
    a_maxSnail = req;
    maxsnaildoc.textContent = a_maxSnail;
  });
}

//Current ETH balance in contract
function updateContractBalance() {
  var contractbalancedoc = document.getElementById("contractbalance");
  GetContractBalance(function (req) {
    contractbalancedoc.textContent = req / 1e6;
  });
}

//Current frog pot
function updateFrogPot() {
  var frogpotdoc = document.getElementById("frogpot");
  frogPot(function (req) {
    a_frogPot = req / 1e6;
    frogpotdoc.textContent = a_frogPot;
  });
}

//Current snail pot
function updateSnailPot() {
  var snailpotdoc = document.getElementById("snailpot");
  snailPot(function (req) {
    a_snailPot = req / 1e6;
    snailpotdoc.textContent = a_snailPot;
  });
}

//Current player snail count
function updatePlayerSnail() {
  var playersnaildoc = document.getElementById("playersnail");
  GetMySnails(function (req) {
    a_playerSnail = req;
    playersnaildoc.textContent = a_playerSnail;
  });
}

//Current token price on buys
function updateTokenPrice() {
  var tokenpricedoc = document.getElementById("tokenprice");
  ComputeTokenPrice(function (req) {
    a_tokenPrice = parseFloat(req / 1e6).toFixed(7);
    tokenpricedoc.textContent = a_tokenPrice;
  });
}

//Current token price on sells
function updateTokenSellPrice() {
  var tokensellpricedoc = document.getElementById("tokensellprice");
  a_tokenSellPrice = a_tokenPrice / 2;
  tokensellpricedoc.textContent = a_tokenSellPrice;
}

//Maximum snails that can be sold
function updateMaxSnailSell() {
  var maxsnailselldoc = document.getElementById("maxsnailsell");
  var i_snailPot = a_snailPot / 10; //the maximum obtainable in one sale is 10%
  maxsnailselldoc.textContent = parseFloat(
    i_snailPot / a_tokenSellPrice
  ).toFixed(0); //divide that max by token price, round up to integer
}

//Current player snail ETH value
function updatePlayerSnailValue() {
  var playersnailvaluedoc = document.getElementById("playersnailvalue");
  playersnailvaluedoc.textContent = parseFloat(
    a_playerSnail * a_tokenSellPrice
  ).toFixed(4);
}

//Current player eggs
function updatePlayerEgg() {
  playereggdoc = document.getElementById("playeregg");
  ComputeMyEggs(currentAddr, function (req) {
    a_playerEgg = formatEthValue(req);
    //a_playerEgg = parseFloat(a_playerEgg / 1080000).toFixed(0); //TIME_TO_HATCH_1SNAIL
    playereggdoc.textContent = a_playerEgg;
  });
}

//Fast local update for player eggs
/*function fastupdatePlayerEgg(){
	playereggdoc = document.getElementById('playeregg');
	var b_playerEgg = a_playerEgg + (a_playerProd / 18000); //60 minutes * 60 seconds * 5 refreshes per second = 18000
	a_playerEgg = parseFloat(b_playerEgg).toFixed(4);
	playereggdoc.textContent = a_playerEgg;
}*/

//Current player prod
function updatePlayerProd() {
  var playerproddoc = document.getElementById("playerprod");
  a_playerProd = parseFloat((a_playerSnail * 0.08) / 24).toFixed(4); //8% per day, divided by 24 hours
  playerproddoc.textContent = a_playerProd;
}

//Current hatch price per egg
function updateHatchPrice() {
  var hatchpricedoc = document.getElementById("hatchprice");
  hatchpricedoc.textContent = a_tokenSellPrice;
}

//Current hatch cost for player
function updateFullHatchCost() {
  var fullhatchcostdoc = document.getElementById("fullhatchcost");
  var roundup = 0.000004;
  a_playerHatchCost = parseFloat(a_playerEgg * a_tokenSellPrice).toFixed(6);
  a_playerHatchCost = parseFloat(a_playerHatchCost + roundup).toFixed(6);
  fullhatchcostdoc.textContent = a_playerHatchCost;
}

//Current feed reward per egg
function updateFeedReward() {
  var feedrewarddoc = document.getElementById("feedreward");
  a_feedReward = parseFloat(a_frogPot / a_maxSnail).toFixed(8);
  feedrewarddoc.textContent = a_feedReward;
}

//Current feed reward for player
function updateFullFeedReward() {
  var fullfeedrewarddoc = document.getElementById("fullfeedreward");
  fullfeedrewarddoc.textContent = parseFloat(
    a_playerEgg * a_feedReward
  ).toFixed(8);
}

//Current unclaimed dividends for player
function updateUnclaimedDiv() {
  var playerdivdoc = document.getElementById("playerdiv");
  ComputeMyDivs(function (req) {
    var b_playerdiv = req / 1e6;
    playerdivdoc.textContent = b_playerdiv;
  });
}

//Current balance for player
function updatePlayerEarning() {
  var playerearningdoc = document.getElementById("playerearning");
  GetMyEarnings(function (req) {
    playerearningdoc.textContent = req;
  });
}

//Status of referral link for player
function updatePlayerRef() {
  if (a_playerSnail >= 300) {
    a_refLink =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?ref=" +
      web3.eth.accounts[0];
    playerreflinkdoc.innerHTML = "<br>" + a_refLink;
  } else {
    playerreflinkdoc.textContent = "Reach 300 snails to unlock.";
  }
}

//Lifetime divs - UNUSED
function updateMaxDiv() {
  var maxdivdoc = document.getElementById("maxdiv");
  divsPerSnail(function (req) {
    maxdivdoc.textContent = formatEthValue2(web3.fromWei(req, "ether"));
  });
}

/* LOCAL FIELD INPUT */

//Player input on buy
function updateFieldBuy2() {
  //var fieldbuydoc = document.getElementById('fieldBuy');
  f_buy = document.getElementById("fieldBuy").value;
  if (f_buy > 400000) {
    f_buy = 400000; //max 4 ETH per buy
  }
  var fieldbuy2doc = document.getElementById("fieldBuy2");
  fieldbuy2doc.textContent = f_buy;
}

//Buy estimate
function updateBuyEstimate() {
  var buyEstimatedoc = document.getElementById("buyestimate");
  buyEstimatedoc.textContent = parseFloat(f_buy / a_tokenPrice).toFixed(0);
}

//Player input on sell
function updateFieldSell2() {
  //var fieldbuydoc = document.getElementById('fieldBuy');
  f_sell = document.getElementById("fieldSell").value;
  var fieldsell2doc = document.getElementById("fieldSell2");
  fieldsell2doc.textContent = f_sell;
}

//Sell estimate
function updateSellEstimate() {
  var sellEstimatedoc = document.getElementById("sellEstimate");
  sellEstimatedoc.textContent = parseFloat(f_sell * a_tokenSellPrice).toFixed(
    6
  );
}

//Player input on sacrifice
function updateFieldSacrifice2() {
  f_sacrifice = document.getElementById("fieldSacrifice").value;
  if (f_sacrifice < 40) {
    f_sacrifice = 40;
  }
  var fieldsacrifice2doc = document.getElementById("fieldSacrifice2");
  fieldsacrifice2doc.textContent = f_sacrifice;
}

//Next requirement estimate
function updatePharaohEstimate() {
  var pharaohEstimatedoc = document.getElementById("pharaohestimate");
  pharaohEstimatedoc.innerHTML = parseInt(f_sacrifice) + parseInt(40);
}

/* WEB3 TRANSACTIONS */

//Buy snail tokens
function webBuySnail() {
  var ref = "TAQsPTD24zkCof8hgNAu9QQKj7m1duErzf";
  var weitospend = f_buy * 1e6;
  BuySnail(ref, weitospend, function () {});
}

//Baseline sacrifice using pharaohReq
function webClaimThrone() {
  BecomePharaoh(a_pharaohReq2, function () {});
}

//Sacrifice snail tokens using player input
function CheckSacrifice() {
  if (f_sacrifice < a_pharaohReq2) {
    modal3.style.display = "block";
  } else {
    webSacrificeSnail();
  }
}

function webSacrificeSnail() {
  BecomePharaoh(f_sacrifice, function () {});
}

//Sell snail tokens
function webSellSnail() {
  SellSnail(f_sell, function () {});
}

//Hatch eggs
function webHatchEgg() {
  var weitospend = a_playerHatchCost * 1e6;
  HatchEgg(weitospend, function () {});
}

//Feed eggs
function webFeedFrog() {
  FeedEgg(function () {});
}

//Claim divs
function webClaimDiv() {
  ClaimDivs(function () {});
}

//Withdraw earnings
function webWithdrawEarning() {
  WithdrawEarnings(function () {});
}

function webAscendGod() {
  AscendGod(function () {});
}

function AscendGod(callback) {
  myContract
    .AscendGod()
    .send({})
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function BecomePharaoh(_snails, callback) {
  myContract
    .BecomePharaoh(_snails)
    .send({})
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function BuySnail(_ref, eth, callback) {
  myContract
    .BuySnail(_ref)
    .send({ callValue: eth })
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function ClaimDivs(callback) {
  myContract
    .ClaimDivs()
    .send({})
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function FeedEgg(callback) {
  myContract
    .FeedEgg()
    .send({})
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function HatchEgg(eth, callback) {
  myContract
    .HatchEgg()
    .send({ callValue: eth })
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function SellSnail(_tokensSold, callback) {
  myContract
    .SellSnail(_tokensSold)
    .send({})
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function StartGame(eth, callback) {
  myContract
    .StartGame()
    .send({ callValue: eth })
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function WithdrawEarnings(callback) {
  myContract
    .WithdrawEarnings()
    .send({})
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function claimedDivs(callback) {
  myContract
    .claimedDivs()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function ComputeBuy(_ether, callback) {
  myContract
    .ComputeBuy(_ether)
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function ComputeMyDivs(callback) {
  myContract
    .ComputeMyDivs()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function ComputeMyEggs(adr, callback) {
  myContract
    .ComputeMyEggs(adr)
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function ComputePharaohReq(callback) {
  myContract
    .ComputePharaohReq()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function ComputeTokenPrice(callback) {
  myContract
    .ComputeTokenPrice()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function divsPerSnail(callback) {
  myContract
    .divsPerSnail()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function frogPot(callback) {
  myContract
    .frogPot()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function gameOwner(callback) {
  myContract
    .gameOwner()
    .call()
    .then((result) => {
      callback(result);
    });
}

function gameStarted(callback) {
  myContract
    .gameStarted()
    .call()
    .then((result) => {
      callback(result);
    });
}

function GetContractBalance(callback) {
  myContract
    .GetContractBalance()
    .call()
    .then((result) => {
      callback(result);
    });
}

function GetMyEarnings(callback) {
  myContract
    .GetMyEarnings()
    .call()
    .then((result) => {
      callback(result / 1e6);
    });
}

function GetMySnails(callback) {
  myContract
    .GetMySnails()
    .call()
    .then((result) => {
      callback(result);
    });
}

function GOD_TIMER_BOOST(callback) {
  myContract
    .GOD_TIMER_BOOST()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function GOD_TIMER_INTERVAL(callback) {
  myContract
    .GOD_TIMER_INTERVAL()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function GOD_TIMER_START(callback) {
  myContract
    .GOD_TIMER_START()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function godPot(callback) {
  myContract
    .godPot()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function godRound(callback) {
  myContract
    .godRound()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function godTimer(callback) {
  myContract
    .godTimer()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function hatcherySnail(callback) {
  GOD_TIMER_START;

  myContract
    .hatcherySnail()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function lastClaim(callback) {
  myContract
    .lastClaim()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function lastHatch(callback) {
  myContract
    .lastHatch()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function maxSnail(callback) {
  myContract
    .maxSnail()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function pharaoh(callback) {
  myContract
    .pharaoh()
    .call()
    .then((result) => {
      callback(result);
    });
}

function PHARAOH_REQ_START(callback) {
  myContract
    .PHARAOH_REQ_START()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function pharaohReq(callback) {
  myContract
    .pharaohReq()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function playerEarnings(callback) {
  myContract
    .playerEarnings()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function SNAIL_REQ_REF(callback) {
  myContract
    .SNAIL_REQ_REF()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function snailPot(callback) {
  myContract
    .snailPot()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function TIME_TO_HATCH_1SNAIL(callback) {
  myContract
    .TIME_TO_HATCH_1SNAIL()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function TOKEN_MAX_BUY(callback) {
  myContract
    .TOKEN_MAX_BUY()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function TOKEN_PRICE_FLOOR(callback) {
  myContract
    .TOKEN_PRICE_FLOOR()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

function TOKEN_PRICE_MULT(callback) {
  myContract
    .TOKEN_PRICE_MULT()
    .call()
    .then((result) => {
      callback(result.toNumber());
    });
}

/* EVENT WATCH */

// //Store transaction hash and event name for each event, and check before executing result, as web3 events fire twice (metamask?)
// var store_hash = [];
// var store_event = [];

// function checkHash(txhash, eventname) {
//   var i = 0;
//   var _name = false;
//   do {
//     if (store_hash[i] == txhash) {
//       if (store_event[i] == eventname) {
//         return 0;
//       }
//     }
//     i++;
//   } while (i < store_event.length);

//   //Add new tx hash and event name
//   store_hash.push(txhash);
//   store_event.push(eventname);

//   //Remove first entry if there's more than 8 entries saved
//   if (store_hash.length > 8) {
//     store_hash.shift();
//   }
//   if (store_event.length > 8) {
//     store_event.shift();
//   }
// }

/*

/* EVENTS */
/*
var logboxscroll = document.getElementById("logboxscroll");
var eventdoc = document.getElementById("event");

function runLog() {
  ranLog = true;
  myContract
    .allEvents({ fromBlock: startBlock, toBlock: "latest" })
    .get(function (error, result) {
      if (!error) {
        //////console.log(result);
        var i = 0;
        if (result.length > 0) {
          //check if we have events, if not stop the loop
          p_keepUpdating = true;
          for (i = 0; i < 40; i++) {
            //loop through only 40 events at most
            if (i < result.length) {
              //make sure there's enough events
              if (checkHash(result[i].transactionHash, result[i].event) != 0) {
                startBlock = result[i].blockNumber; //store the last blocknumber to start next loop
                dateLog(result[i].blockNumber);
                if (result[i].event == "HatchedSnail") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " hatched " +
                    result[i].args.snail +
                    " snails for " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethspent, "ether")
                    ) +
                    " ETH.";
                } else if (result[i].event == "SoldSnail") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " sold " +
                    result[i].args.snail +
                    " snails for " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethreward, "ether")
                    ) +
                    " ETH.";
                } else if (result[i].event == "BoughtSnail") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " bought " +
                    result[i].args.snail +
                    " snails for " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethspent, "ether")
                    ) +
                    " ETH.";
                } else if (result[i].event == "BecamePharaoh") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " sacrifices snails and claims the throne!";
                } else if (result[i].event == "WithdrewEarnings") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " withdrew " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethreward, "ether")
                    ) +
                    " ETH.";
                } else if (result[i].event == "ClaimedDivs") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " claimed " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethreward, "ether")
                    ) +
                    " ETH in divs.";
                } else if (result[i].event == "FedFrogking") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " fed the Frogking " +
                    result[i].args.egg +
                    " eggs and won " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethreward, "ether")
                    ) +
                    " ETH.";
                } else if (result[i].event == "Ascended") {
                  var _roundwon = result[i].args.round - 1;
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] " +
                    formatEthAdr(result[i].args.player) +
                    " ASCENDS!<br>The new SnailGod wins Round " +
                    _roundwon +
                    " and claims " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethreward, "ether")
                    ) +
                    " ETH.";
                } else if (result[i].event == "NewDivs") {
                  eventdoc.innerHTML +=
                    "<br>[~" +
                    datetext +
                    "] Another snail game just paid out " +
                    formatEthValue2(
                      web3.fromWei(result[i].args.ethreward, "ether")
                    ) +
                    " ETH in divs to all holders!";
                }
                logboxscroll.scrollTop = logboxscroll.scrollHeight;
              }
            }
          }
        } else {
          p_keepUpdating = false;
        }
      } else {
        ////////console.log("problem!");
      }
    });
}

var hatchEvent = myContract.HatchedSnail();

hatchEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " hatched " +
        result.args.snail +
        " snails for " +
        formatEthValue2(web3.fromWei(result.args.ethspent, "ether")) +
        " ETH.";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var soldEvent = myContract.SoldSnail();

soldEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " sold " +
        result.args.snail +
        " snails for " +
        formatEthValue2(web3.fromWei(result.args.ethreward, "ether")) +
        " ETH.";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var boughtEvent = myContract.BoughtSnail();

boughtEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " bought " +
        result.args.snail +
        " snails for " +
        formatEthValue2(web3.fromWei(result.args.ethspent, "ether")) +
        " ETH.";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var newpharaohEvent = myContract.BecamePharaoh();

newpharaohEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " sacrifices snails and claims the throne!";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var withdrewEvent = myContract.WithdrewEarnings();

withdrewEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " withdrew " +
        formatEthValue2(web3.fromWei(result.args.ethreward, "ether")) +
        " ETH.";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var claimedEvent = myContract.ClaimedDivs();

claimedEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " claimed " +
        formatEthValue2(web3.fromWei(result.args.ethreward, "ether")) +
        " ETH in divs.";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var fedEvent = myContract.FedFrogking();

fedEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " fed the Frogking " +
        result.args.egg +
        " eggs and won " +
        formatEthValue2(web3.fromWei(result.args.ethreward, "ether")) +
        " ETH.";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var ascendedEvent = myContract.Ascended();

ascendedEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      var _roundwon = result.args.round - 1;
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] " +
        formatEthAdr(result.args.player) +
        " ASCENDS!<br>The new SnailGod wins Round " +
        _roundwon +
        " and claims " +
        formatEthValue2(web3.fromWei(result.args.ethreward, "ether")) +
        " ETH.";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});

var divEvent = myContract.NewDivs();

divEvent.watch(function (error, result) {
  if (!error) {
    //console.log(result);
    if (checkHash(result.transactionHash, result.event) != 0) {
      date24();
      eventdoc.innerHTML +=
        "<br>[" +
        datetext +
        "] Another snail game just paid out " +
        formatEthValue2(web3.fromWei(result.args.ethreward, "ether")) +
        " ETH in divs to all holders!";
      logboxscroll.scrollTop = logboxscroll.scrollHeight;
    }
  }
});
*/

