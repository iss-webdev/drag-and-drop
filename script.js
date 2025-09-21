const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');
const list4 = document.querySelector('list-4');


for (const card of cards) {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
}

for (const list of lists) {
    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('drop', dragDrop);
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', this.id);
}

function dragEnd(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
}

function dragLeave(e) {
    e.preventDefault();

    setTimeout(() => {
        this.classList.remove('over');
    }, 50);
}

function dragDrop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const card = document.getElementById(id);

    this.appendChild(card);

    this.classList.remove('over');
}

