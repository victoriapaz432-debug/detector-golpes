// Trava e destrava o botão conforme o textarea
document.getElementById("mensagem").addEventListener("input", function () {
    let btn = document.getElementById("btnAnalisar");
    btn.disabled = this.value.trim() === "";
});

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
        mensagem.includes("link") ||
        mensagem.includes("cpf") ||
        mensagem.includes("cartão") ||
        mensagem.includes("prêmio") ||
        mensagem.includes("ganhou")
    ) {
        resultado.innerHTML = "🔴 Alto risco de golpe detectado!";
        resultado.style.color = "red";

    } else if (
        mensagem.includes("banco") ||
        mensagem.includes("conta") ||
        mensagem.includes("atualizar")
    ) {
        resultado.innerHTML = "🟡 Mensagem suspeita. Verifique antes de confiar.";
        resultado.style.color = "orange";

    } else {
        resultado.innerHTML = "🟢 Mensagem aparentemente segura.";
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

function salvarConfig() {
    let config = document.getElementById("configSalva");
    if (config) {
        config.innerHTML = "⚙️ Configurações atualizadas com sucesso.";
    }
}

setInterval(function () {
    let relogio = document.getElementById("relogio");
    if (relogio) {
        let agora = new Date();
        relogio.innerHTML = agora.toLocaleTimeString();
    }
}, 1000);
