const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')
const audio = document.createElement('audio');
audio.src = 'sound.mp3';

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for(placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragStart (event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}
function dragEnd (event) {
    event.target.classList.remove('hold');
    event.target.classList.remove('hide');
    event.target.classList.add('dropped');
}

function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
    
}
function drop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
    audio.play();
}