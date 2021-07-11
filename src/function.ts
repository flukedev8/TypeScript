// function Return Types and Void
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResul(num: number): void  { //แม่งไม่ มีการ return สนตีนอะไรกลับไปทั้งนั้นและ
    console.log('Result: ' + num);
}

printResul(add(4,23));

//function types 
let com : Function;
 com = add ; 

 console.log(com (1,4));

 //Call backs
 function addAndHndle(n1:number, n2:number , cb:(num: number)=> void) {
     const result = n1+n2
     cb(result)
 }
 
 addAndHndle(10,20, (result)=>{
     console.log(result);
 });

 //The Naver Type

function generateError(message:string, code: number): never {
    throw {
        message: message,
        errorCode: code
    }
}

generateError('An eroor occurrend!', 500);