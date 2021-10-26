var joke = "";
fetch("https://api.chucknorris.io/jokes/random")
.then(res=>res.json())
.then(data=>{
    console.log(data.value);
    joke = data.value;
    document.getElementById("root").innerHTML = joke;
});
document.getElementById("root").innerHTML = joke;

// setTimeout(()=>{alert("Hello")},1000);
// alert("hello222222")