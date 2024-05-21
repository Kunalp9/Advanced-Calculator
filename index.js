var buttonsArr = ["0","1","2","3","4","5","6","7","8","9","plus","minus","close-bracket","open-bracket","multiply","division","decimal","backspace"];


var result = 0;

for(let i = 0; i<buttonsArr.length; i++){
    $("#"+buttonsArr[i]).on("click",function(){
        $("#"+buttonsArr[i]).addClass("button-click");
        setTimeout(function(){
            $("#"+buttonsArr[i]).removeClass("button-click");
        },200);
    })    
}

$("#inputNumber").on("keydown",function(event){
    const key = event.key;

    if(key==="=" || key==="Enter"){
        calculate();
    }
    else if (key === '\b') {
        handleBackspace();
    }
    else{
        if (/[+\-*()./]/.test(key)){
            document.getElementById("output").value += key ;
            clearInput();
        }
        else if(/[0-9]/.test(key)){

            appendToResult(key);

        }
    }    
})

$("#backspace").on("click", function(){
    handleBackspace();
    $("#inputNumber").val($("#inputNumber").val().slice(0, -1));
})


$("#calcThemeLight").on("click", function(){
    $("#calcThemeLight").addClass("active");
    $("#calcThemeDark").removeClass("active");
    $(".transparent-box").addClass("transparentBoxThemeLight").removeClass("transparent-box");
    $(".transparent-box2").addClass("transparent-box2LightTheme").removeClass("transparent-box2");
    $(".calculator").addClass("calculator-light-theme").removeClass("calculator");
    $(".display").addClass("display-theme-light").removeClass("display");
    $(".buttons").addClass("buttons-light-theme").removeClass("buttons");
    $("#inputBox, #inputNumber, #outputBox, #output").css({backgroundColor:"white",color:"black", borderRadius:"20px 20px 0 0"});

})

$("#calcThemeDark").on("click", function(){
    $(".transparentBoxThemeLight").removeClass("transparentBoxThemeLight").addClass("transparent-box");
    $(".transparent-box2LightTheme").removeClass("transparent-box2LightTheme").addClass("transparent-box2");
    $(".calculator-light-theme").removeClass("calculator-light-theme").addClass("calculator");
    $(".display-theme-light").removeClass("display-theme-light").addClass("display");
    $("#inputNumber").removeClass("inputBoxThemeLight");
    $("#calcThemeDark").addClass("active");
    $("#calcThemeLight").removeClass("active");
    $(".buttons-light-theme").removeClass("buttons-light-theme").addClass("buttons");
    $("#inputBox, #inputNumber, #outputBox, #output").css({backgroundColor:"black",color:"white", borderRadius:"20px 20px 0 0"}); 
})

function clearOutput(){
    $("#output").val("");
    $("#output").css("color","grey");
}

function handleBackspace() {
    let currentResult = $("#output").val();
    $("#output").val(currentResult.slice(0, -1));
  }

function clearInput(){
    $("#inputNumber").val("");  
}

function calculate(){
    if($("#calcThemeDark").hasClass("active")){
        
        $("#output").css("color","white");

    }
    else{
        
        $("#output").css("color","black");

    }

    document.getElementById("output").value = eval(document.getElementById("output").value) ;
    $("#inputNumber").val("");  
}

function appendToResult(key){
    document.getElementById("output").value += key ;
}
