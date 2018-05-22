
// Obtaining user input
    var input = document.getElementById("input");
    var btn = document.getElementById("runBtn");
    var result = document.getElementsByClassName("result");

    function Palin(input) {
        this.input = input 
    }

    Palin.prototype.reverse = function() {
        
        var x = input.value;
        y = x.split("").reverse().join("");
        if (y == x){
            return alert("Great.  This is a palindrome.")
        }
        else{
            return alert("Please try again.")
        }
        }

        var p = new Palin(input.value)

        //Mouse over
        btn.addEventListener("click", function() {

        p.reverse() 
        console.log()

        // Validate the input
        if (!input.value) {
            return alert("Please enter a word.");
        }

        





    })
  
