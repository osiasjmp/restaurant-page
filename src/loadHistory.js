function loadHistory() {

    let container = document.querySelector('.container');

    let div = document.createElement('div');
    div.classList = "section history";

    let h2 = document.createElement('h2');
    h2.innerHTML = "History";
    div.appendChild(h2);

    container.appendChild(div);
}

export { loadHistory }