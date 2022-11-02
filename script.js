// Determine if a field is blank
function isBlank(inputField){
    if (inputField.value=="") {
        return true;
    }
    return false;
}


// remove all error styles from the div passed in
function makeClean(element){
    element.classList.remove("error");		
}

function displayText(){
    {document.getElementById("errors").innerHTML = document.getElementById("errors").value;}
}


window.addEventListener("load", function() {    

    var hilightableInputs = document.querySelectorAll(".hilightable");
    console.log(hilightableInputs);
    for (var i=0; i < hilightableInputs.length; i++) {
        hilightableInputs[i].addEventListener("focus", function(e) 
    {
            e.target.classList.toggle(".highlight");    
        });
        hilightableInputs[i].addEventListener("blur", function(e) 
    {
            e.target.classList.toggle(".highlight");
        });
    }

    var requiredInputs = document.querySelectorAll(".required");
    console.log(requiredInputs );
        for (var i=0; i < requiredInputs.length;i++) {
        requiredInputs[i].addEventListener("change", function(e) {
            makeClean(e.target);
        });
    }

    var mainForm = document.getElementById("mainForm");
    mainForm.addEventListener("submit", function(e) {
    var requiredInputs = document.querySelectorAll(".required");
        for (var i=0; i < requiredInputs.length; i++){
            if( isBlank(requiredInputs[i]) ){
                e.preventDefault();
                requiredInputs[i].classList.add("error");;
            }
            else {
                var msg = "Your form has been submitted! ";
                var errorArea = document.getElementById("errors");
                errorArea.innerHTML = "<p>" + msg + "</p>";
                setTimeout(function(){
                    mainForm.submit();

                },5000);
            }
        }
        

    });



});


