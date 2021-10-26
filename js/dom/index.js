console.log("hello");   
document.getElementById("inner").onclick = (evt)=>alert(evt.target.innerHTML);
document.getElementById("outer").onclick = ()=>alert("Outer");