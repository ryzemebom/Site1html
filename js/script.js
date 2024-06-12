function carregarImagem(event) {
    var galeria = document.querySelector('.galeria');
    var galeriaItem = document.createElement('div');
    galeriaItem.className = 'galeria-item';

    var img = document.createElement('img');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.alt = 'Imagem carregada';

    galeriaItem.appendChild(img);
    galeria.appendChild(galeriaItem);
} function abrirModal(element) {
    var modal = document.getElementById("modal");
    var imgModal = document.getElementById("imgModal");
    modal.style.display = "block";
    imgModal.src = element.src;
}

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fechar a modal ao clicar fora dela
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}