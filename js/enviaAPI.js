function enviaAPI(event) {
  const data = new FormData(event.target)
  const userName = data.get('nome')
  const userEmail = data.get('email')
  const userSenha = data.get('senha')
  const dataNascimento = data.get('nascimento')
  let url = 'https://prog-bolsas-api.herokuapp.com/'
  let xhr = new XMLHttpRequest()

  xhr.open('POST', url, true)
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }

  let formatted = {
    nome: userName,
    email: userEmail,
    senha: userSenha,
    nascimento: dataNascimento,
  }
  xhr.send(JSON.stringify(formatted))
}
