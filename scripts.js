// SCRIPTS

$(document).ready(function () {
    $('.overlay,.modal_item_header_close').click(function () {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
        $('.modal_item').slideUp();
        return false;
    });
    $('.item,.item_mobile').click(function () {
        $('.overlay').fadeIn();
        $('.modal').fadeIn();
        $('.modal_item:eq(' + $(this).index() + ')').slideDown();
        return false;
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const directorIcon = document.getElementById('directorIcon');
    const directorAudio = document.getElementById('directorAudio');
    const playlistIcon = document.getElementById('playlistIcon');
    const playlistButton = document.getElementById('playlistButton');
    const audioList = document.getElementById('audioList');

    // Toggle da lista de áudio ao clicar no ícone da playlist
    playlistIcon.addEventListener('click', () => {
        audioList.classList.toggle('show');
    });

    // Exibir/ocultar lista ao clicar no botão Playlist
    playlistButton.addEventListener('click', () => {
        audioList.classList.toggle('show');
    });

    // Fechar a lista e parar qualquer áudio quando clicar fora da área da playlist
    document.addEventListener('click', (event) => {
        if (!playlistIcon.contains(event.target) && !playlistButton.contains(event.target) && !audioList.contains(event.target)) {
            audioList.classList.remove('show');
            stopAllAudio();
        }
    });



});
