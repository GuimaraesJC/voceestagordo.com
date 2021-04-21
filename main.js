const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const imcResult = document.getElementById('imc-result');
const jokeParagraph = document.getElementById('joke');
const jokeVideoLink = document.getElementById('joke-video');

const resultRows = document.querySelectorAll('section.table tr:not(.table-headers)');

const phrases = {
  0: 'Tá deitando na agulha e se cobrindo com a linha?',
  1: 'Boa, campeão!',
  2: '"Faz academia, mas não adianta nada. Eu que sou gordinho, domino a mulherada..."', 
  3: 'E aí, fofura, bora tomar jeito?'
}


function handleCalculate() {
  const height = parseFloat(heightInput.value.replace(',', '.'));
  const weight = parseFloat(weightInput.value.replace(',', '.'));

  if (!height || !weight) {
    // TODO: Colocar aviso de que campos não podem estar vazios.
    return;
  }

  imcResult.textContent = (weight / (height * height)).toFixed(2).replace('.', ',');


  handleActivateResultRow(parseFloat(imcResult.textContent));
}

function handleClean() {
  heightInput.value = '';
  weightInput.value = '';

  imcResult.textContent = '0,00';
  jokeParagraph.textContent = '';
  jokeVideoLink.className = 'hide';

  resetResultRows();
}

function handleActivateResultRow(result) {
  resetResultRows();

  if (result < 18.5) {
    resultRows[0].className = 'active';
    jokeParagraph.textContent = phrases[0];
    jokeVideoLink.className = 'hide';
  } else if (result >= 18.5 && result < 25) {
    resultRows[1].className = 'active';
    jokeParagraph.textContent = phrases[1];
    jokeVideoLink.className = 'hide';
  } else if (result >= 25 && result < 30) {
    resultRows[2].className = 'active';
    jokeParagraph.textContent = phrases[2];
    jokeVideoLink.className = 'hide';
  } else if (result >= 30 && result < 40) {
    resultRows[3].className = 'active';
    jokeParagraph.textContent = phrases[3];
    jokeVideoLink.className = 'hide';
  } else {
    resultRows[4].className = 'active';
    jokeParagraph.textContent = '';
    jokeVideoLink.className = '';
  }
}

function resetResultRows() {
  for (const row of resultRows) {
    row.className = '';
  }
}

function validateNumericsAndComma(event) {
  if (!event.key.match(/[0-9\,]+/g)) {
    event.preventDefault();
  }


  // 
}