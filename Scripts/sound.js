 function startSound(src) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', src);
    audioElement.play();
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
