/******************
 * YOUR CODE HERE *
 ******************/
const call = function(name){
  name()
}

const callTwice = function(name){
name()
name()
}


const callXTimes = function(name, count){
  for (let i = 0; i < count; i ++) {
    name();
}
}

const returnFromFunc = function(name){
  return name()
}

const modifyString = function (str,name){
  return name(str)


}

const modifyNumber = function (num,name){
  return name(num)
}

const modifyAnything = function (name1, name){
return name(name1)
}

const twoFuncs = function (name1,name2){
  return 
}



/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}
