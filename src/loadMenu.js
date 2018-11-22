function loadMenu() {

    let container = document.querySelector('.container');

    let div = document.createElement('div');
    div.classList = "section menu";

    let h2 = document.createElement('h2');
    h2.innerHTML = "Menu";
    div.appendChild(h2);

    container.appendChild(div);
}

export { loadMenu }