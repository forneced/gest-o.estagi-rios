// Função para abrir o modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Função para exibir a data atual
function showDate() {
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date();
    dateElement.innerText = currentDate.toLocaleDateString('pt-BR');
}

// Função para abrir o "Sobre"
function openSobre() {
    alert("Aqui você pode adicionar informações sobre a empresa.");
}

// Função para abrir a Lei nº 11.788
function openLei() {
    window.open("https://www.jusbrasil.com.br/topicos/10630218/lei-n-11788-de-25-de-setembro-de-2008", "_blank");
}

// Chama a função para exibir a data ao carregar a página
window.onload = showDate;
