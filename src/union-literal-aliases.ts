//Union Types
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 36);
// console.log(combinedAges);

const combinedName = combine("Fluke", "Wie");
// console.log(combinedName);

//Literal Types & Type Aliases
type Combinable = number| string;   // Type Aliases
type ConversionDescriptor = 'as-number'| 'as-Text'; //Literal + Aliases

function combineLiteral(
    input1: Combinable, 
    input2: Combinable ,
    resultLiteral: ConversionDescriptor) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultLiteral === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
//   if (resultLiteral === 'as-number') {
//       return +result;
//   }else {
//       return result.toString();
//   }
  return result;
}

const combinedAgesLiterral = combineLiteral(30, 36, 'as-number');
console.log(combinedAgesLiterral);

const combinedNameLiterral = combineLiteral("Fluke", "Wie", 'as-Text');
console.log(combinedNameLiterral);
