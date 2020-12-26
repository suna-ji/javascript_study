// javascript는 application의 business logic을 담당 -> 데이터를 코드로부터 분리하자.
// var clothes = [
//     { img: """, category = "tshirt", color: "pink", gender: "female", size = "large" },
//     { img: "", category = "tshirt", color: "pink", gender: "male", size = "small" },
//     { img: "", category = "pants", color: "pink", gender: "male", size = "small" },
//     { img: "", category = "pants", color: "yellow", gender: "female", size = "large" },
// ]

// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items)
}
// Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
    `;
}
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if (key == null || value == null) {
        return;
    } else {
        const filteredItems = items.filter(item => item[key] === value);
        displayItems(filteredItems);
    }

}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    // 이벤트 리스너를 하나씩 등록하기 보다 컨테이너에 등록해서 한곳에서 핸들링하도록 하는게 효율적(이벤트 위임)
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}


// json파일을 동적으로 불러와야함 -> 시간이 걸림 -> promise리턴
// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);
