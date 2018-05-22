//Creating Variables
var A = document.getElementById("input");
var B = document.getElementById("input2");
var C = document.getElementById("input3");
var D = document.getElementById("op");
var btn = document.getElementById("runBtn");
var btn2 = document.getElementById("runBtn");
var btn3 = document.getElementById("runBtn3");
var result = document.getElementsByClassName("outcome");

// Creating Function
function Calculate() {
    this.A = A
    this.B = B
    this.C = C
    this.D = D
    this.btn = btn
    this.btn2 = btn2
    this.btn3 = btn3
    this.result = result

Calculate.prototype.compute = function() {
    
    if (D == "+"){
        C = A+B; 
}
    else if (D == "-"){
        C = A-B; 
}
    else if (D == "/"){
        C = A/B; 
}
    else if (D == "*"){
        C = A*B;  
}

    result.innerHTML = C;
    return C;

}
    var p = new Calculate()

    //Mouse over
    btn.addEventListener("click", function(){
         

    btn2.addEventListener("click", function(){
        

    btn3.addEventListener("click", function() {

    p.compute() 

})
})
})

}
