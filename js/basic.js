jQuery(function($) {


    //script que permite identificar el navegador del usuario

    /*var navegador = navigator.userAgent;
    if (navigator.userAgent.indexOf('MSIE') !=-1) {
        document.write('está usando Internet Explorer ...');
    } else if (navigator.userAgent.indexOf('Firefox') !=-1) {
        document.write('está usando Firefox ...');
    } else if (navigator.userAgent.indexOf('Chrome') !=-1) {
        document.write('está usando Google Chrome ...');
    } else if (navigator.userAgent.indexOf('Opera') !=-1) {
        document.write('está usando Opera ...');
    } else {
        document.write('está usando un navegador no identificado ...');
    }*/



    $('#basic-modal .basic').click(function(e) {
        //e.preventDefault();

        var video = document.getElementById("video");
        var src = "video/ogg/";
        $('#video_src').attr("src", src + e.target.id + ".ogv");

        /*var audio = document.getElementById("audio");

        $('#audio').attr('loop', true);
        $('#audio').attr('volume', 0.5);

        var src_audio = "audio/wav/";
        var number_song = Math.floor((Math.random() * 6) + 1);

        $('#audio_src').attr("src", src_audio + number_song + ".wav");

        audio.addEventListener('ended', function(){
            this.currentTime = 0;
            this.play();
        }, false);*/

        if (e.target.id == "oficina-abuelo") {
            $('#titulo').text("Oficina del Abuelo");
        } else if (e.target.id == "sala-visitas") {
            $('#titulo').text("Sala de Visitas");
        } else if (e.target.id == "jardin-begonias") {
            $('#titulo').text("Jardín de las Begonias");
        } else if (e.target.id == "cuarto-abuelos") {
            $('#titulo').text("Cuarto de los Abuelos");
        } else if (e.target.id == "cuarto-sara") {
            $('#titulo').text("Cuarto de Sara Emilia");
        } else if (e.target.id == "cuarto-gabito") {
            $('#titulo').text("Cuarto de Gabo Niño");
        } else if (e.target.id == "cuarto-trastos") {
            $('#titulo').text("Cuarto de los Trastos");
        } else if (e.target.id == "cuarto-hospital") {
            $('#titulo').text("Cuarto de Hospital");
        } else if (e.target.id == "taller-plateria") {
            $('#titulo').text("Taller de Platería");
        } else if (e.target.id == "comedor") {
            $('#titulo').text("Comedor");
        } else if (e.target.id == "sala-recibo") {
            $('#titulo').text("Sala de Recibo");
        } else if (e.target.id == "cocina") {
            $('#titulo').text("La Cocina y su Despensa");
        } else if (e.target.id == "cuarto-guajiros") {
            $('#titulo').text("Cuarto de los Guajiros");
        } else if (e.target.id == "oficina-admin") {
            $('#titulo').text("Oficina de Administración");
        } else if (e.target.id == "creditos") {
            $('#titulo').text("Créditos");
        } else if (e.target.id == "gabofantasias") {
            $('#titulo').text("Fantasías de Gabito");
        }


        $('#basic-modal-content').modal();

        video.load();
        video.play();

        return false;

    });

});