
// 1a Ans)
const oddNum = [ 1, 2, 3, 4, 5, 6, 7];
 const sign = function(num){
     for(let i=0; i < num.length; i++){
        if(num[i]%2 !== 0){
        console.log(num[i]);
        }
 }
 }
 sign(oddNum);
//  1b Ans)
 const changeCaps = ["sunder","naveen"];
 const capsResult = function(result){
     const geek = result[0].split('');
     const geeks = geek[0].toUpperCase() 
     const geekss = geeks + geek[1] + geek[2] + geek[3] + geek[4] + geek[5];
     const live = result[1].split('');
     const lives = live[0].toUpperCase()
     const livess = lives + live[1] + live[2] + live[3] + live[4] + live[5]
     const finalGeeks = [geekss , livess];
      console.log(finalGeeks);

 }
 capsResult(changeCaps); 

// 1c Ans)

 const inTake = [1,2,3];
 const sum = function(num){
                 const add = num[0] + num[1] + num[2];
                  console.log(add);
         }
      sum(inTake);

//  1d Ans)
      const variant = [2, 3, 4, 5, 6, 7];
  const returnVariant = function(number){
     for(let i=1; i<number.length; i++)
           if (number[i]%2 != 0){
               console.log(number[i]);
           }
  }
  returnVariant(variant);

//   1e Ans)
   const palidr = ["madam", "mom"];
   ((find) => {
        const value = find[0].split('').reverse().join("");
        const values = find[1].split('').reverse().join("");
        const finalValues = [value , values];
        console.log(finalValues);

   })(palidr);
//    1f Ans)
      const needValue = [1, 2, 3, 4, 5];
     const valueNeed = [1, 2, 3, 4, 5];
      const medianNum = function(number,prime){
    const value = number.length
    const values = Math.round(value/2)
    const value2 = prime.length
    const valuess2 = Math.round(value2/2)
    const  finalOutput = [values , valuess2]
    console.log(finalOutput);                                                            
}
 medianNum(needValue,valueNeed);

//  1g Ans)
   const improper = ["mango","orange","apple","mango","apple"];
  ((pass) => {
      const output = [...new Set(pass)];
      console.log(output);
  })(improper);

// 1h Ans)
const rotateValue = [1, 2, 3, 4, 5];
   const rotatingArr = function (arr, k){
      const value = arr.concat();
      for(let i=0; i<k; i++){
        const values = value.shift();
        value.push(values);
      }
      console.log(value)
   }
   rotatingArr(rotateValue, 2);


//    Arrow types  

//  2a Ans)
      const valuesOdd = [ 1, 2, 3, 4, 5, 6, 7];
     const oddValues = (num) => {
         for(let i=0; i < num.length; i++){
            if(num[i] %2 != 0){
            console.log(num[i]);
            }
     }
}
oddValues(valuesOdd);

// 2b Ans)
  
  const strings = ["sunder","naveen"];
  const stringvalue = (result) =>{
        const geek = result[0].split('');
     const geeks = geek[0].toUpperCase() 
     const geekss = geeks + geek[1] + geek[2] + geek[3] + geek[4] + geek[5];
     const live = result[1].split('');
     const lives = live[0].toUpperCase()
     const livess = lives + live[1] + live[2] + live[3] + live[4] + live[5]
     const finalGeeks = [geekss , livess];
      console.log(finalGeeks);
  }
  stringvalue(strings);

//  2c Ans) 
   
  const giveOutput = [1,2,3]
  const addition = (sum) =>{
       const add = sum[0] + sum[1] + sum[2];
       console.log(add);
 }
  addition(giveOutput);

//   2d Ans)

const primeOutput = [2, 3, 4, 5, 6, 7];

const outPrime = (output) => {
    for(let i=1; i<output.length; i++)
           if (output[i]%2 != 0){
               console.log(output[i]);
           }
}
 outPrime(primeOutput);

//  2e Ans)
  
  const various = (Input) => {
        const value = Input[0].split('').reverse().join("");
        const values = Input[1].split('').reverse().join("");
        const finalValues = [value , values];
        console.log(finalValues);
  }
  various(palidr);

