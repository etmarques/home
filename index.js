

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', ()=> {
    var toast = new bootstrap.Toast(toastLiveExample);
    var copiar = document.getElementById("copy-text-btn");
    copiar.innerHTML = "Copiar"

    toast.show()
  })
}

function copiarTexto() {
  // Get the text field
  var copyText = document.getElementById("texto");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  
  // Alert the copied text
  var copiado = document.getElementById("copy-text-btn");
  copiado.innerHTML = "Copiado!"
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})

const textoTools = document.getElementById('txtFooter');

function escreveTTp(num) {
  id = ('w' + num)
  getTTip = document.getElementById(id).getAttribute('data-value');
  textoTools.textContent = getTTip;
}

function apagaTTp() {
  textoTools.textContent = null;
}

