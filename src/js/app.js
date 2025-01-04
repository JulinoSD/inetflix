const btn = document.querySelector('.btn-menu')
const closeBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')

btn.addEventListener('click', function () {
    console.log('Click funcionando')
    if (!modal.classList.contains('hidden')) {
        modal.classList.add('hidden')
    }
})
closeBtn.addEventListener('click', function () {
    console.log('Fechar modlal')
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden')
        console.log('remover hidden')
    } else {
        modal.classList.add('hidden')
        console.log('adicionar hidden')
    }
})
