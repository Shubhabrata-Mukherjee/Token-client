	Items = new Meteor.Collection('items');
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
////0xdd2ed1850ddfd41905b9644fe1a99583b84577bf
contractAddress="0x930870e4609f631db0ef7ef2250788f0a3f5c778"

Address2="0x3Bf7eF7f5a53e8b8cCda64e8E052FAfEaF8b571D"
Address1="0x4614ddE68b2aB8053cB9d5a7144dEE9160d9e86B"
Address3="0x3c44fD217DF464db21Da31A71F3C3C226067EfdD"
Address4="0x5B3015261c28e79C6F8Fa2a6996c1C9AC16806cE"

ABIArray=[{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getInitialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"request","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sell","outputs":[{"name":"revenue","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"vidAdress","type":"address"},{"name":"supply","type":"uint256"},{"name":"name","type":"string"},{"name":"owner","type":"address"},{"name":"buyprice","type":"uint256"}],"name":"addVid","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"ReturnResult","type":"event"}]
mydata="60606040526040805190810160405280600c81526020017f41707074616420546f6b656e00000000000000000000000000000000000000008152506000908051906020019062000051929190620001b4565b506040805190810160405280600281526020017f2424000000000000000000000000000000000000000000000000000000000000815250600190805190602001906200009f929190620001b4565b5060028060006101000a81548160ff021916908360ff1602179055506103e8600355600260055560026006553415620000d757600080fd5b6040516200112738038062001127833981016040528080519060200190919080518201919060200180519060200190919080518201919050505b83600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083600481905550826000908051906020019062000174929190620001b4565b5080600190805190602001906200018d929190620001b4565b5081600260006101000a81548160ff021916908360ff1602179055505b5050505062000263565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001f757805160ff191683800117855562000228565b8280016001018555821562000228579182015b82811115620002275782518255916020019190600101906200020a565b5b5090506200023791906200023b565b5090565b6200026091905b808211156200025c57600081600090555060010162000242565b5090565b90565b610eb480620002736000396000f300606060405236156100ce576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301c6adc3146100d357806306fdde031461012257806318160ddd146101b157806327e235e3146101da578063313ce56714610227578063378dc3dc146102565780634b7503341461027f57806370a08231146102a857806381a4a6d8146102f55780638620410b1461031e57806395d89b4114610347578063d845a4b3146103d6578063e4849b32146103ee578063fc9fd4c714610425575b600080fd5b610108600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104d2565b604051808215151515815260200191505060405180910390f35b341561012d57600080fd5b6101356106b7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101765780820151818401525b60208101905061015a565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bc57600080fd5b6101c4610755565b6040518082815260200191505060405180910390f35b34156101e557600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061075b565b6040518082815260200191505060405180910390f35b341561023257600080fd5b61023a610773565b604051808260ff1660ff16815260200191505060405180910390f35b341561026157600080fd5b610269610786565b6040518082815260200191505060405180910390f35b341561028a57600080fd5b61029261078c565b6040518082815260200191505060405180910390f35b34156102b357600080fd5b6102df600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610792565b6040518082815260200191505060405180910390f35b341561030057600080fd5b6103086107aa565b6040518082815260200191505060405180910390f35b341561032957600080fd5b6103316107b5565b6040518082815260200191505060405180910390f35b341561035257600080fd5b61035a6107bb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039b5780820151818401525b60208101905061037f565b50505050905090810190601f1680156103c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103ec6004808035906020019091905050610859565b005b34156103f957600080fd5b61040f6004808035906020019091905050610976565b6040518082815260200191505060405180910390f35b341561043057600080fd5b6104d0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610adb565b005b600081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610520576106b1565b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540110156105ad576106b1565b81600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074d5780601f106107225761010080835404028352916020019161074d565b820191906000526020600020905b81548152906001019060200180831161073057829003601f168201915b505050505081565b60045481565b60096020528060005260406000206000915090505481565b600260009054906101000a900460ff1681565b60035481565b60055481565b60086020528060005260406000206000915090505481565b600060035490505b90565b60065481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108515780601f1061082657610100808354040283529160200191610851565b820191906000526020600020905b81548152906001019060200180831161083457829003601f168201915b505050505081565b60006006548281151561086857fe5b04905080600354101561087a57610972565b80600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508060036000828254039250508190555081600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600960003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b5050565b600081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156109c457610ad6565b8160036000828254019250508190555081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550600554820290503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501515610a6857610ad5565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3809050610ad6565b5b919050565b610ae3610d6d565b85816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508481602001818152505083816040018190525082816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508181608001818152505080600a60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019080519060200190610c5a929190610dcf565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015590505084600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fae10df2cf9336fbefb05f712e9df37cf12865a44351e271c87b5b5a9ccfc650160405180806020018281038252600b8152602001807f566964656f20416464656400000000000000000000000000000000000000000081525060200191505060405180910390a15b505050505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001610da5610e4f565b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e1057805160ff1916838001178555610e3e565b82800160010185558215610e3e579182015b82811115610e3d578251825591602001919060010190610e22565b5b509050610e4b9190610e63565b5090565b602060405190810160405280600081525090565b610e8591905b80821115610e81576000816000905550600101610e69565b5090565b905600a165627a7a723058200da3d5fab096018f84b372d0e895c73d17436cb52addbcfe6c0ed993b18ec75f0029";

myContract = web3.eth.contract(ABIArray).at(contractAddress); 
console.log(web3.isConnected());
var initialSupply=1000;
var tokenName="Apptad Token";
var decimalUnits=2;
var tokenSymbol="$$";
/*var amount=4;
var amount1=2;
var amount2=1;*/
var sellPrice=2;
var buyPrice= 2;


Router.route('/',{where: 'server'})
    .get(function(){
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify('something client'));
    })

  // POST /message - {message as post data}
  // Add new message in MongoDB collection.

    .post(function(){
        myContract.request.sendTransaction(
      amount,{from:Address2,to:contractAddress,value:web3.toWei(amount,"ether")},
      function(err,address){
      if(!err) console.log(address);});

        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    });
  



Template.request.events({
  'click button'(event, instance) {
	document.getElementById('go_to_vedio').disabled = false;
    var template = Template.instance();
    var clientNameVar = document.getElementById('ClientName').value;
  var clientEmailVar = document.getElementById('ClientEmail').value;
  var clientAddressVar = document.getElementById('ClientAddress').value;
  var amount = document.getElementById('amount').value;
  /*if (clientNameVar == "") {
        alert("Name must be filled out");
        return false;
    }*/
  Items.insert({
    name:$('.ClientName').val(),
    email:$('.ClientEmail').val(),
    address:$('.ClientAddress').val(),
    amount:$('.amount').val()
  });
  $('.ClientName').val('');
  $('.ClientEmail').val('');
  $('.ClientAddress').val('');
  $('.amount').val('');
console.log(web3.isConnected());

    myContract.request.sendTransaction(
amount,{from:clientAddressVar,to:contractAddress,value:web3.toWei(amount,"ether")},
function(err,address){
if(!err)
console.log(address);});
  },
});

Template.transferFrom.events({
  'click button'(event, instance) {
    var template = Template.instance();
    
     var clientAddress2Var = document.getElementById('ClientAddress2').value;
    var clientAddress1Var = document.getElementById('ClientAddress1').value;
  var amount1 = document.getElementById('amount1').value;
  
myContract.transferFrom(clientAddress2Var,Address4,amount1,
function(err,address){
if(!err)
console.log(address);});
  },
});

Template.sell.events({
  'click button'(event, instance) {
 var template = Template.instance();
 var clientAddress3Var = document.getElementById('ClientAddress3').value;
 var amount2 = document.getElementById('amount2').value;
    myContract.sell(clientAddress3Var, amount2,{from:clientAddress3Var,to:contractAddress },
    function(err,address){
      if(!err)
        console.log(address);
    });
  }
});
    
  



Template.hello.onCreated(function helloOnCreated() {

  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    
  },
});

Template.hello.events({
  'click button'(event, instance) {
    var template = Template.instance();
web3.eth.getBalance(contractAddress,
function(err,res){
TemplateVar.set(template,"counter",res);
});
  },
});
Template.hello1.onCreated(function helloOnCreated() {

  this.counter = new ReactiveVar(0);
});

Template.hello1.helpers({
  counter() {
    
  },
});

Template.hello1.events({
  'click button'(event, instance) {
    var template = Template.instance();
web3.eth.getBalance(Address1,
function(err,res){
TemplateVar.set(template,"counter",res);
});
  },
});
Template.hello2.onCreated(function helloOnCreated() {

  this.counter = new ReactiveVar(0);
});

Template.hello2.helpers({
  counter() {
    
  },
});

Template.hello2.events({
  'click button'(event, instance) {
    var template = Template.instance();
web3.eth.getBalance(Address2,
function(err,res){
TemplateVar.set(template,"counter",res);
});
  },
});
Template.hello4.onCreated(function helloOnCreated() {

  this.counter = new ReactiveVar(0);
});

Template.hello4.helpers({
  counter() {
    
  },
});


Template.hello4.events({
  'click button'(event, instance) {
    var template = Template.instance();
web3.eth.getBalance(Address3,
function(err,res){
TemplateVar.set(template,"counter",res);
});
  },
});

Template.hello11.onCreated(function helloOnCreated() {

  this.counter = new ReactiveVar(0);
});

Template.hello11.helpers({
  counter() {
    
  },
});

Template.hello11.events({
  'click button'(event, instance) {
    var template = Template.instance();
web3.eth.getBalance(Address4,
function(err,res){
TemplateVar.set(template,"counter",res);
});
  },
});

Template.hello3.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.initialSupply(function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});

Template.hello5.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.balanceOf.call(Address1,function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});
Template.hello6.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.balanceOf.call(Address2,function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});
Template.hello7.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.balanceOf.call(Address3,function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});
Template.hello12.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.balanceOf.call(Address4,function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});

Template.hello8.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.name.call(function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});

Template.hello9.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.symbol(function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});

/*Template.hello10.events({
  'click button'(event, instance) {
  var template = Template.instance();
myContract.totalSupply(function(err,res){
TemplateVar.set(template,"counter",res);
});
},
});*/







/*Template.sell.events({
  'click button'(event, instance) {
    var template = Template.instance();
myContract.sell.sendTransaction(
amount2,{value: amount2*sellPrice},
function(err,address){
if(!err)
console.log(address);});
  },
});*/



 var date = new Date();


Template.time.helpers({


timeVal: function(){ return new Date(); }});


Template.addVid.events({
   'click button'(event, instance) {
 	document.getElementById('go_to_vedio').disabled = false;
    var template = Template.instance();
    var videoNameVar = document.getElementById('videoName').value;
  var supplyVar = document.getElementById('supply').value;
  var VidAddressVar = document.getElementById('VidAddress').value;
  var ownerAddressVar = document.getElementById('ownerAddress').value;
  var buyPriceVar = document.getElementById('buyPrice').value;
  /*if (clientNameVar == "") {
        alert("Name must be filled out");
        return false;
    }*/
  // Items.insert({
  //   name:$('.ClientName').val(),
  //   email:$('.ClientEmail').val(),
  //   address:$('.ClientAddress').val(),
  //   amount:$('.amount').val()
  // });
  $('.videoName').val('');
  $('.supply').val('');
  $('.VidAddress').val('');
  $('.ownerAddress').val('');
  $('.buyPrice').val('');
console.log(web3.isConnected());

    myContract.addVid.sendTransaction(
VidAddressVar,supplyVar,videoNameVar,ownerAddressVar,buyPriceVar,{from:Address1},
function(err,result){
if(!err){
      console.log(result);
    }
    else {
      console.log(err);
    }
    });
  },
});
