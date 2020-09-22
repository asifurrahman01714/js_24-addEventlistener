function addstyle(){
    var myid = document.getElementById("headid");
    myid.classList.add("heading");
}

function removestyle(){
    var myid = document.getElementById("headid");
    myid.classList.remove("heading");
}

document.querySelector(".btn").addEventListener("click", function(){
    alert("Hello");
});

document.querySelector("#head-2").addEventListener("mouseover",function(){
    var myid = document.getElementById("head-2");
    myid.classList.add("heading");
});

document.querySelector("#head-2").addEventListener("mouseout",function(){
    var myid = document.getElementById("head-2");
    myid.classList.remove("heading");
});

document.querySelector("#btn-1").addEventListener("click",function(){
    var myid = document.getElementById("head-3");
    myid.innerHTML="button 1 clicked";
});

document.querySelector("#btn-2").addEventListener("click",function(){
    var myid = document.getElementById("head-3");
    myid.innerHTML="button 2 clicked";
});

document.querySelector("#btn-3").addEventListener("click",function(){
    var myid = document.getElementById("head-3");
    myid.innerHTML="button 3 clicked";
});


var len = document.querySelectorAll(".mybutton").length;
for( var i = 0; i<len ; i++ ){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){

        var text=this.innerHTML;
        document.querySelector(".head-4").innerHTML= text + " is clicked";
    
    
    });
}




