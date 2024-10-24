function toggle(){
    let para=document.getElementById("para1");

    if(para.textContent==""){
        para.textContent="Hello";
    }
    else{
        para.textContent="";
    }
}