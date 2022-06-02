'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    document.getElementById('modal-form').reset()
}



document.getElementById('modalClose').addEventListener('click', closeModal)


document.getElementById('print').addEventListener('click', ()=>print())