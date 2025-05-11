
const texto = ['Desarrollador', 'Freelancer', 'Creativo'];
let i = 0;
let j = 0;
let actual = '';
let escribiendo = true;

function animarTexto() {
  if (i < texto.length) {
    if (escribiendo) {
      if (j < texto[i].length) {
        actual += texto[i][j];
        j++;
        document.querySelector('.animado').textContent = actual;
        setTimeout(animarTexto, 100);
      } else {
        escribiendo = false;
        setTimeout(animarTexto, 1000);
      }
    } else {
      if (j > 0) {
        actual = actual.slice(0, -1);
        j--;
        document.querySelector('.animado').textContent = actual;
        setTimeout(animarTexto, 50);
      } else {
        escribiendo = true;
        i = (i + 1) % texto.length;
        setTimeout(animarTexto, 500);
      }
    }
  }
}
animarTexto();
