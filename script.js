let array = [];

function insertValue() {
    const index = parseInt(document.getElementById('index').value);
    const value = parseInt(document.getElementById('value').value);
    if (!isNaN(index) && !isNaN(value) && index >= 0 && index <= array.length) {
        array.splice(index, 0, value);
        renderArray();
    }
}

function deleteValue() {
    const index = parseInt(document.getElementById('index').value);
    if (!isNaN(index) && index >= 0 && index < array.length) {
        array.splice(index, 1);
        renderArray();
    }
}

function updateValue() {
    const index = parseInt(document.getElementById('index').value);
    const value = parseInt(document.getElementById('value').value);
    if (!isNaN(index) && !isNaN(value) && index >= 0 && index < array.length) {
        array[index] = value;
        renderArray();
    }
}

function renderArray() {
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = '';
    array.forEach((value, index) => {
        const element = document.createElement('div');
        element.className = 'array-element';
        element.textContent = value;
        arrayContainer.appendChild(element);
    });
}

