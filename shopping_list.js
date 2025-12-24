const listInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-btn');
const shoppingList = document.getElementById('shopping-list');
const totalCountSpan = document.getElementById('total-count');
const remainingCountSpan = document.getElementById('remaining-count');
const completedCountSpan = document.getElementById('completed-count');

let total = 0;
let remaining = 0;
let completed = 0;

addItemBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (listInput.value == ''){
        // Nothing
    } else {
        const listText = listInput.value;
        
        const listItem = document.createElement('li');
        listItem.className = 'shopping-item';
        listItem.innerHTML = `
            <h2 class="item-text">${listText}</h2>
            <div class="buttons">
                <button class="completed-Btn">Complete</button>
            </div>
        `;
        
        shoppingList.appendChild(listItem);
        listInput.value = '';
        total += 1;
        remaining += 1;
        stats();
    }
});
        
document.addEventListener('click', (e) => {
    if (e.target.id === 'clear-completed'){
        const completeBtns = document.querySelectorAll('.completed-Btn');
        Array.from(completeBtns).forEach(button => {
            if (button.innerText === 'Incomplete'){
                const listItem = button.closest('li');
                total -= 1;
                completed -= 1;
                listItem.remove();
            }
        });
        stats();
    }
});

document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'clear-all'){
        shoppingList.innerHTML = '';
        total = 0;
        remaining = 0;
        completed = 0;
        stats();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('completed-Btn')){
        const itemText = e.target.closest('li').querySelector('.item-text');
        if (e.target.textContent === 'Complete'){
            itemText.style.textDecoration = 'line-through';
            e.target.textContent = 'Incomplete';
            remaining -= 1;
            completed += 1;
        } else {
            itemText.style.textDecoration = 'none';
            e.target.textContent = 'Complete';
            remaining += 1;
            completed -= 1;
        }
        stats();
    }
});

const stats = () => {
    totalCountSpan.textContent = total;
    remainingCountSpan.textContent = remaining;
    completedCountSpan.textContent = completed;
};