//Learn Core Types 
// number string boolean
function learntype(numberOne: number, numberTwo: number , showResult: boolean , Text: string){
    if (showResult) {
        const cal = numberOne + numberTwo;
        console.log( Text + cal ); 
    }
    else{
        return 'Status Not Show Result'
    }
}

const number1 = 5;
const number2 = 2.8;
const printresult = true;
const reusultPhrase = 'Result is : '

learntype(number1, number2, printresult, reusultPhrase);

// Type Assignment and Type Inference 
let numberofone : number;
numberofone = 4; 
