function XO(str) {
  return str.replace(/[^x]/ig, '').length == str.replace(/[^o]/gi, '').length;

}


console.log(XO("m"));
console.log(XO('xo'))
console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("Oo"))
console.log(XO("ooom"))