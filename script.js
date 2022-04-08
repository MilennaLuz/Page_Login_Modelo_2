let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
function retornaDados() {
    console.log(' teste ')
    fetch('https://api.github.com/users/MilennaLuz')
    .then(function(response){
        console.log(response.ok);
     return response.json();
    })
    .then(function(data){
        console.log(data.name,data.id);
    });
}

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('retornaDados'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.login && senha.value == item.id){  // ALTERAR DEPOIS DE ACORDO COM API
       
      userValid = {
         nome: item.name, // ALTERAR DEPOIS DE ACORDO COM API
         user: item.login,  // ALTERAR DEPOIS DE ACORDO COM API
         senha: item.id     // ALTERAR DEPOIS DE ACORDO COM API
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'https://api.github.com/users/MilennaLuz'        // ALTERAR DEPOIS 
    let mathRandom = Math.random().toString(16).substring(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}