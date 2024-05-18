

document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#red").onclick =function(){
        document.querySelector("#demo").style.color = "red"

    }


    document.querySelector("#blue").onclick =function(){
        document.querySelector("#demo").style.color = "blue"
    }



    document.querySelector("#green").onclick =function(){
        document.querySelector("#demo").style.color = "green"
    }

}
)


document.addEventListener("DOMContentLoaded",function () {
    
    document.querySelector("form").onsubmit = function(){


    var value = document.querySelector("#list").value;
    var result = document.querySelector("#output");
    if(value==""){
        return false;
    }
    else{



    var myLi   = document.createElement("li");
    myLi.innerHTML  = value;
    result.appendChild(myLi);
    var value = document.querySelector("#list").value = "";

    return false;
    }  }  
})



