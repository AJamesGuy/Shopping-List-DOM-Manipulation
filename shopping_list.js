const listInput = document.getElementById('list');
const addItemBtn = document.getElementById('add-item');

let total = 0;
let remaining = 0;
let completed = 0;
addItemBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (listInput.value == ''){
        // Nothing
    } else {

        const paper = document.querySelector('#paper');
        const listText = listInput.value;
        paper.innerHTML += `
        <div class="shopping-item">
        <h2 id="list-item">${listText}</h2>
        <div class="buttons" id="buttons">
        <button class="completed-Btn" id="complete">Complete</button>
        </div>
        </div>`
        listInput.value = '';
        total += 1;
        remaining += 1;
        stats()
    }
    });
        
document.addEventListener('click', (e =>{
    if (e.target.id === 'clear-completed'){
        const completeBtns = document.getElementsByClassName('completed-Btn');
        Array.from(completeBtns).forEach(button =>{
            if (button.innerText === 'Incomplete'){
                button.parentElement.parentElement.remove()
            }
        })
    }
}))

document.addEventListener('click', (e) =>{
    e.preventDefault()
    if (e.target.id === 'clear-all'){
        const paper = document.querySelector('#paper');
        paper.innerHTML = `<h2 class="title">Shopping List</h2>`
        total = 0;
        remaining = 0;
        completed = 0;
        stats()
    }
})


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('completed-Btn')){
        const paragraph = e.target.closest('.buttons').previousElementSibling;
        if (e.target.textContent === 'Complete'){
            paragraph.style.textDecoration = 'line-through';
            e.target.textContent = 'Incomplete';
            remaining -= 1;
            completed += 1;
        } else {
            paragraph.style.textDecoration = 'none';
            e.target.textContent = 'Complete';
            remaining += 1;
            completed -= 1;
        }
        stats()
    }
})

const stats = () => {
    const totalCount = document.getElementsByTagName('h4')[0];
    const remainingCount = document.getElementsByTagName('h4')[1];
    const completedCount = document.getElementsByTagName('h4')[2];
    const stats = document.getElementsByClassName('stats')[0];
    totalCount.innerText = `Total: ${total}`;
    remainingCount.innerText = `Remaining: ${remaining}`;
    completedCount.innerText = `Completed: ${completed}`;
    stats.appendChild(totalCount);
    stats.appendChild(remainingCount);
    stats.appendChild(completedCount);
}