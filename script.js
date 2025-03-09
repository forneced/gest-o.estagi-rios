<<<<<<< HEAD
// Função para abrir o modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function updateDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR');
    document.getElementById('current-date').innerText = formattedDate;
}
window.onload = updateDate;
=======
// Função para abrir o modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function updateDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR');
    document.getElementById('current-date').innerText = formattedDate;
}
window.onload = updateDate;
>>>>>>> 754bd4a5d921250ed60686d367a6216a2645fe04
