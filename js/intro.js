//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#wand").show();
    $("#wand2").hide();
    $("#mirror").show();
    $("#text").hide();
    $("#text2").show();
    $("#text5").hide();
    $("#bar").show();
    $("#text6").show();
    $("#barr").hide();

    $("#wand").click(function(){
        $("#wand2").show();
        $("#wand").hide();
    });

    $("#text3").click(function(){
        $("#text").toggle();
        $("#text3").hide();
        $("#text2").hide();
    });

    $("#text").click(function(){
        $("#text3").toggle();
        $("#text2").show();
        $("#text").hide();
    });

    $("#gif").click(function(){
        $("#text5").toggle();
        $("#gif").hide();
        $("#txt7").hide();
    });
   
    $("#text5").click(function(){
        $("#gif").toggle();
        $("#text5").hide();
        $("#txt7").show();
    });

    $("#text6").click(function(){
        $("#barr").toggle(); 
        $("#barr").show();
        $("#bar").hide();
    });

    $("#barr").click(function(){
        $("#bar").toggle();
        $("#barr").hide();
        $("#bar").show();
    })

    
    });

