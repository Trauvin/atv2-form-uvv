function verifyField(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    target.classList.add('invalid');
  }
  else {
    target.classList.remove('invalid');
  }

  calculeAverage();
}


function calculeAverage() {
  const tr = document.querySelectorAll('tr');
  
  const incrementoMagico = 5;
  let n = 0;

  // percorre o forumlario pegando só os campos que interessam
  // e preenche o campo média com a média das notas
  for (let i = 1; i < tr.length; i++) {

    let nota1 = +document.forms[0].elements[n+1].value;
    let nota2 = +document.forms[0].elements[n+2].value;
    let avg = (nota1 + nota2) / 2;
    document.forms[0].elements[n+4].value = avg;

    if (avg >= 7) {
      document.forms[0].elements[n+4].classList.add('aprovado');
    } 

    n += incrementoMagico;
  }
}


// jogar dentro de um array as notas
// pegar pelo atr name 'prova1'.value e 'prova2'.value
// mas como casar as notas?
// talvez criando uma função itere sobre o array de acordo com o index e preenche

form.addEventListener('change', verifyField);