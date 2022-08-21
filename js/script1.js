let numberInput = document.querySelector('#inputNumero');

numberInput.addEventListener('input', event=>{
    let inputValue = event.target.value;
    let regExp = /[A-Z]/g;
    numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
});