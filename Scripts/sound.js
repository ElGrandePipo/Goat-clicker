// CODE DE PAUL FOURNIER 

var sounds = [];

 function startSound(src) {
    var audioElement = document.createElement('audio');
    var id = Date.now();
    audioElement.setAttribute('id', 'sound' + id);
    audioElement.setAttribute('src', src);
    audioElement.volume = 0.2;
    audioElement.play();

    $('#sound' + id).bind('ended', function() {
        this.remove();
    });
}

function Sound() {
    this.id;
    this.label;
    this.src;

    Sound.prototype.getHtml = function() {
        return '<div class="span3"><a class="btn btn-primary btn-large" id="' + this.id + '">' + this.label + '</a></div>';
    }
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// Code inspiré des doge js qui trainent sur le net
function generationCssSound()
{
    // Get random positions
    var imageGoat = $("#mainGoat");

    // comment déterminer top : ne pas être entre top de l'image et top + height

    // comment déterminer left : ne doit pas être entre left de l'image et left + width

    // Comment déterminer right
    do { var h = Math.floor( Math.random() * $(window.top).height() - 100 ); } while (h >= imageGoat[0].y && h <= (imageGoat[0].y + imageGoat.height()));
    do { var w = Math.floor( Math.random() * $(window.top).width() - 250 ); } while (w >= imageGoat[0].x && w <= (imageGoat[0].x + imageGoat.width()));

    // Generate Style
    var style = { 
        "top":  h,
        "left": w
    }

    var orientation = Math.floor(( Math.random() * 71) - 35);

    style["-webkit-transform"] = "rotate(" + orientation + "deg)";
    style["-moz-transform"] = "rotate(" + orientation + "deg)";
    style["-o-transform"] = "rotate(" + orientation + "deg)";
    style["-webkit-transform"] = "rotate(" + orientation + "deg)";
    style["writing-mode"] = "lr-tb";

    return style;
}

$(function()
{
    $.ajax({
        type: "GET",
        url: "Sounds/sounds.xml",
        dataType: "xml",
        success: function(xml) { 
            
            // Chargement des sons
            $(xml).find('sound').each( function() {
                var sound = new Sound();
                sound.id = $(this).attr('id');
                sound.label = $(this).attr('label');
                sound.src = $(this).attr('src');
                sounds.push(sound);
            });
        }
    });   
});


