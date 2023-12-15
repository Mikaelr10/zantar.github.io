function checarSenha() {
    var passwordInput = document.getElementById("senhaEntry").value;

    if (passwordInput === "ALICE") {
        window.location.href = "zantar_fts.html";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}s