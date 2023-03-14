document.addEventListener("DOMContentLoaded", function() {

    fetch('assets/js/text.json')
    .then(response => response.json())
    .then(data => {
      document.title = data.title;
      document.getElementById('signIn').textContent = data.signIn;
      document.getElementById('logIn').textContent = data.logIn;
      document.getElementById('title').textContent = data.title;
      document.getElementById('subTitle').textContent = data.subTitle;
      document.getElementById('cardTitle').textContent = data.cardTitle;
      document.getElementById('cardSubTitle').textContent = data.cardSubTitle;
      document.getElementById('codeText').textContent = data.codeText;
      document.getElementById('footerText').textContent = data.footerText;
    });

// Seleziona tutti gli input numerici del form
const inputs = document.querySelectorAll("input[type='text']");

// Aggiungi l'event listener per la gestione dell'input
inputs.forEach((input, index) => {
  input.addEventListener('input', function(){
    this.value = this.value.replace(/[^0-9]/g,'');
    if (this.value.length == 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else if (this.value.length == 0 && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// Aggiungi l'event listener per la validazione del form
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  const code1 = document.getElementById("code1").value;
  const code2 = document.getElementById("code2").value;
  const code3 = document.getElementById("code3").value;
  const code4 = document.getElementById("code4").value;
  const code5 = document.getElementById("code5").value;
  const code6 = document.getElementById("code6").value;
  const code = code1 + code2 + code3 + code4 + code5 + code6;
  if (code.length !== 6 || isNaN(code)) {
    document.getElementById("error_message").innerHTML = "Il codice di autenticazione non è valido";
  } else {
    document.getElementById("error_message").innerHTML = "";
    this.submit();
  }
});

});
