import { pageInit } from './init';
import { loadAbout } from './loadAbout';
import { loadMenu } from './loadMenu';
import { loadHistory } from './loadHistory';

pageInit();
loadAbout();

let aIds = ["aAbout", "aMenu", "aHistory"];
aIds.forEach((id) => {
    let a = document.getElementById(id);
    a.addEventListener('click', () => {
        removeSection();
        if (id == "aAbout") {
            loadAbout();
        }
        if (id == "aMenu") {
            loadMenu();
        }
        if (id == "aHistory") {
            loadHistory();
        }
    });
});

function removeSection() {
    let container = document.querySelector('.container');
    container.removeChild(document.querySelector('.section'));
}