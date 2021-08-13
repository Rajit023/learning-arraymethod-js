//1.indexOf()

//var NameList =["ram","john","harry","panda"];
//console.log(NameList.indexOf("harry"));


//2.lastIndexOf()
//var NameList =["ram","john","harry","panda","harry"];
//console.log(NameList.lastIndexOf("harry"));
//console.log(NameList.lastIndexOf("harry",2));


//3. includes()
//var NameList =["ram","john","harry","panda"];
//console.log(NameList.includes("panda"));



//filter

//find method

//const prices = [200,300,400,500,600,7000]
//price < 400
/* one method
const findElem = prices.find((currVal) => {
    return currVal < 400;
});
console.log(findElem);
*/
// another method beauty of fat arrow function
//console.log(prices.find((currVal) => currVal < 400 ));

//findIndexOf
//console.log(prices.findIndex((currVal) => currVal < 400 ));




//filtermethod
/*
const prices = [200,300,400,500,600,700]

//price < 400

const newPrice = prices.filter((elem,index) => {
    //return elem <400;
    return elem > 1400;
})
console.log(newPrice);
*/


//sort method

/*
const months=['march','jan','feb','dec']

console.log(months.sort());

const numbers=[1,3,5,7,9,4]
console.log(numbers.sort());

*/