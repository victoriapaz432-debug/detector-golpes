function analisarMensagem() {
    let mensagem = document.getElementById("mensagem").value;
    let resultado = document.getElementById("resultado");
    let historico = document.getElementById("historico");

    mensagem = mensagem.toLowerCase();

    if (
        mensagem.includes("pix") ||
        mensagem.includes("urgente") ||
        mensagem.includes("senha") ||
        mensagem.includes("clique aqui") ||
        mensagem.includes("link")
    ) {
        resultado.innerHTML = "⚠️ Possível golpe detectado!";
        resultado.style.color = "red";
    } else {
        resultado.innerHTML = "✅ Mensagem aparentemente segura.";
        resultado.style.color = "green";
    }

    let item = document.createElement("li");
    let agora = new Date();
    item.textContent = agora.toLocaleTimeString() + " - " + mensagem;
    historico.appendChild(item);
}

function trocarTema() {
    document.body.classList.toggle("modo-claro");
}

function entrarSistema() {
    window.location.href = "index.html";
}

function sairSistema() {
    window.location.href = "login.html";
}

setInterval(function () {
    let relogio = document.getElementById("relogio");
    if (relogio) {
        let agora = new Date();
        relogio.innerHTML = agora.toLocaleTimeString();
    }
}, 1000);