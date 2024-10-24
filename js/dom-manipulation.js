function display(){
    //get <p> through its id
    document.getElementById("para1");
    alert(document.getElementById("para1").innerText);
    document.getElementById("para1").innerHTML="new content"
}