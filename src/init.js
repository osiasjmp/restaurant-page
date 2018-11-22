function pageInit() {

    createContainer();
    createNav();
}

function createContainer() {

    let content = document.querySelector('#content');

    let container = document.createElement('div');
    container.classList = 'container';

    let classArray = ["banner", "nav"];

    classArray.forEach((className) => {
        let div = document.createElement('div');
        div.classList = className;
        container.appendChild(div);
    });

    content.appendChild(container);
}

function createNav() {

    let nav = document.querySelector('.nav');

    let ul = document.createElement('ul');
    
    let list = ["About", "Menu", "History"];

    list.forEach((listName) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `#${listName.toLowerCase()}`;
        a.id = `a${listName}`;
        a.innerHTML = listName;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
}

export { pageInit }