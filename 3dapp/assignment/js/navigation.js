$(document).ready(function(){
    
    SelectPage();

    function SelectPage(){
        $("#home").show();
        $("#models").hide();
        $("#interactions").hide();

        $("#navHome").click(function(){
            $('#home').show();
            $("#models").hide();
            $("#interactions").hide();
        });

        $("#navModels").click(function(){
            $('#home').hide();
            $("#models").show();
            $("#interactions").show();
        });


    }



});