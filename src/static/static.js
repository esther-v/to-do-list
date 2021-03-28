let checkbutton = document.getElementsByClassName('check');
console.log(checkbutton);
checkbutton.addEventListener('click', tacheFaite);

function tacheFaite(e){
    e.target.parentNode.classList.toggle('finDeTache')
  }