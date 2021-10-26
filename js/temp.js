// const persons = [
//     {name:"Henriette", age:54},
//     {name:"Samuel", age:12},
//     {name:"Marc", age:43, title:"Chefen"},
// ];

// persons.filter(el=>el.age > 12).forEach(el=>console.log(el.name, el.title));
// //console.log(newPersons);

// const persons_phone = persons.map(el=>{
//     el.phone = 43;
//     return el;
// });
// persons_phone.forEach(el=>console.log(el));

// const name = "Beate";
// const sentence = `${name} er



// væk`;
// console.log(sentence);


function mul(x) {
    return function (y) {
        return x * y;
      };
  }
  const mul3 = mul(3);
  const result = mul3(5);