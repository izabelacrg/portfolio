/* ===== MENU RESPONSIVO ===== */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Abre/fecha o menu e atualiza o atributo de acessibilidade
function setMenu(open) {
    // Com o 2º argumento, toggle força adicionar (true) ou remover (false) a classe
    navMenu.classList.toggle("active", open);
    // Informa a leitores de tela se o menu está aberto ou fechado
    menuToggle.setAttribute("aria-expanded", open);
}

// Inverte o estado atual ao clicar no botão hambúrguer
menuToggle.addEventListener("click", () => setMenu(!navMenu.classList.contains("active")));
// Fecha o menu ao clicar em um link (senão ele continuaria aberto sobre a seção)
navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
// Permite fechar com a tecla Esc (acessibilidade por teclado)
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });


/* ===== TEMA CLARO / ESCURO =====
   O tema é um atributo data-theme na tag <html>; o CSS troca as cores
   a partir dele. A escolha fica salva no localStorage. */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
    // Descobre o tema atual (salvo, ou o do sistema se nunca foi escolhido)
    const atual = root.dataset.theme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const novo = atual === "dark" ? "light" : "dark";

    root.dataset.theme = novo;
    // try/catch: o localStorage pode estar bloqueado (ex.: navegação privada).
    // A chave "tema" é a mesma lida pelo script do <head> no index.html
    try { localStorage.setItem("tema", novo); } catch (e) { /* ignora */ }
});


/* ===== FORMULÁRIO: validação + simulação de envio ===== */
const form = document.getElementById("contactForm");
// Cada chave é o id de um campo do HTML; o valor é a mensagem de "campo vazio"
const campos = {
    name: "Informe seu nome.",
    email: "Informe seu e-mail.",
    message: "Digite uma mensagem."
};
// Formato básico de e-mail: algo@algo.algo, sem espaços
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sucesso = document.getElementById("successMessage");

form.addEventListener("submit", event => {
    event.preventDefault();                              // impede o recarregamento da página
    sucesso.textContent = "";                            // limpa mensagem de um envio anterior
    let valido = true;

    // Percorre cada campo; o <small> de erro segue o padrão id + "Error" (ex.: nameError)
    for (const id in campos) {
        const valor = document.getElementById(id).value.trim();   // trim ignora espaços nas pontas
        const erro = document.getElementById(id + "Error");
        erro.textContent = "";

        if (valor === "") {                              // campo vazio
            erro.textContent = campos[id];
            valido = false;
        } else if (id === "email" && !emailRegex.test(valor)) {   // formato inválido
            erro.textContent = "Digite um e-mail válido.";
            valido = false;
        }
    }

    if (valido) {                                        // simula o envio
        // Não há back-end: nenhum dado é realmente enviado
        sucesso.textContent = "Mensagem enviada com sucesso!";
        form.reset();
        sucesso.focus();                                 // move o foco para a mensagem (leitores de tela)
    }
});