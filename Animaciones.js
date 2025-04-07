const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const contenedor = document.querySelector('.contenedor');


btnNo.addEventListener('mouseover', () => {
  btnNo.style.position = 'absolute';

  const contRect = contenedor.getBoundingClientRect();
  const maxX = contRect.width - btnNo.offsetWidth - 10;
  const maxY = contRect.height - btnNo.offsetHeight - 10;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
});


btnNo.addEventListener('click', () => {
  alert("¡No es justo! Tienes que darle que sí 🥺");
});


btnSi.addEventListener('click', () => {
  window.location.href = '2dapagina.html';
});
