const sticker1 = document.querySelector('.sticker-1');
const sticker2 = document.querySelector('.sticker-2');
const sticker3 = document.querySelector('.sticker33');
const verificarBtn = document.querySelector('verificar');
const resultado = document.querySelector('resultado');

verificarBtn.addEventListener('click', () => {
    const totalStickers = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);
    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        resultado.textContent = 'Llevas demasiados stickers';
    }
});
