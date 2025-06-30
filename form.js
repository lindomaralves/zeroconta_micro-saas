document.getElementById("formComerciante").addEventListener("submit", async function (e) {
  e.preventDefault();

  const dados = Object.fromEntries(new FormData(this).entries());

  const resposta = await fetch("https://hook.us2.make.com/mtgwnqhce6yms9sozm1697j4nc93uf5k", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  const msg = document.getElementById("mensagemRetorno");

  if (resposta.ok) {
    msg.textContent = "Comerciante cadastrado com sucesso!";
    this.reset();
  } else {
    msg.textContent = "Erro ao enviar dados. Tente novamente.";
  }
});
