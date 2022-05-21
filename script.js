let button = document.querySelector('button')

button.addEventListener('click', ()=> {
  alert('Wow! Thank you for hiring me')
  document.querySelector('button').disabled = true;
  button.textContent= 'Hired';
})