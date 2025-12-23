const listInput = document.getElementById('list');
const addItemBtn = document.getElementById('add-item');

addItemBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const paper = document.querySelector('#paper');
    const listText = listInput.value;
    const paragraph = document.createElement('p')
    const listDiv = document.createElement('div');
    listDiv.setAttribute('class', 'list');
    paragraph.setAttribute('id', 'list-item');
    listDiv.innerHTML += `
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
            <label class="form-check-label" for="switchCheckDefault">complete/incomplete</label>
        </div>
        <button class="delete-btn" id="delete-btn">DELETE</button>
    `
    paragraph.innerText = listText;
    paper.appendChild(paragraph)
    paper.appendChild(listDiv)
    listInput.value = '';
    });

    // const 
    const deleteBtn = document.getElementById('delete-btn');
