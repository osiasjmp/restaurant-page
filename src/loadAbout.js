function loadAbout() {

    let container = document.querySelector('.container');

    let div = document.createElement('div');
    div.classList = "section about";

    let h2 = document.createElement('h2');
    h2.innerHTML = "About";
    div.appendChild(h2);

    container.appendChild(div);
}

export { loadAbout }