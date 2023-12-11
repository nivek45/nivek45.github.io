$(document).ready(function() {
    var temaSalvo = localStorage.getItem('tema');

    if (temaSalvo === 'dark-theme') 
    {
        $("body").css("background-color", "#000000");
        $("body").css("color", "#ffffff");
        $("#flexSwitchCheckDefault").prop("checked", true);
    }


    carregarConfiguracoesTema();

    $("#flexSwitchCheckDefault").on('change', function() {
        if (this.checked) 
        {
            $("body").css("background-color", "#000000");
            $("body").css("color", "#ffffff");
            salvarConfiguracoesTema('dark-theme');
        } 
        else 
        {
            $("body").css("background-color", "#ffffff");
            $("body").css("color", "#000000");
            salvarConfiguracoesTema('light-theme');
        }
    });

    
    function salvarConfiguracoesTema(tema) {
        localStorage.setItem('tema', tema);
    }


    function carregarConfiguracoesTema() {
        var temaSalvo = localStorage.getItem('tema');
        if (temaSalvo === 'dark-theme') 
        {
            $("body").css("background-color", "#000000");
            $("body").css("color", "#ffffff");
        } 
        else 
        {
            
            $("body").css("background-color", "#ffffff");
            $("body").css("color", "#000000");
        }
    }
});
