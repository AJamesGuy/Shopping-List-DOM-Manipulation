const listInput = document.getElementById('list');
const addItemBtn = document.getElementById('add-item');

addItemBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (listInput.value == ''){
        // Nothing
    } else {

        const paper = document.querySelector('#paper');
        const listText = listInput.value;
        paper.innerHTML += `
        <p id="list-item">${listText}</p>
        <div class="buttons" id="buttons">
        <button class="completed-Btn" id="complete">Complete</button>
        <button class="delete-btn" id="delete">DELETE</button>
        </div>`
        // const paragraph = document.createElement('p')
        // const listDiv = document.createElement('div');
        // listDiv.setAttribute('class', 'list');
        // listDiv.setAttribute('id', 'listDiv');
        // paragraph.setAttribute('id', 'list-item');
        // listDiv.innerHTML += `
        // <div class="form-check form-switch">
        // <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
        // <label class="form-check-label" for="switchCheckDefault">complete/incomplete</label>
        // </div>
        // <button class="delete-btn" id="delete-btn">DELETE</button>
        // `
        // paragraph.innerText = `- ${listText}`;
        // paper.appendChild(paragraph)
        // paper.appendChild(listDiv)
        listInput.value = '';
    }
    });

        
document.addEventListener('click', (e) =>{
        if (e.target.id === 'delete'){
            e.target.parentElement.remove()
            const par = document.getElementById('list-item');
            par.remove()
    }
});
        

document.addEventListener('click', (e) =>{
    e.preventDefault()
    if (e.target.id === 'clear-all'){
        const paper = document.querySelector('#paper');
        paper.innerHTML = `<h2 class="title">--- Shopping List ---</h2>` 
    }
})


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('completed-Btn')){
        const paragraph = e.target.closest('.buttons').previousElementSibling;
        if (e.target.textContent === 'Complete'){
            paragraph.style.textDecoration = 'line-through';
            e.target.textContent = 'Incomplete';
        } else {
            paragraph.style.textDecoration = 'none';
            e.target.textContent = 'Complete';
        }
    }
})