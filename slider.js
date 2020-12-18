let slider = document.getElementById('slider');
let active = document.getElementById("active");

let countTagsInController =
    document.getElementsByClassName('controller')[0].getElementsByTagName('div').length;

let countLines = countTagsInController - 1;

let arrLines = [];

let change = 100 / countLines;
console.log(change);

let controller = document.getElementsByClassName('controller')[0].clientWidth;
console.log(controller);

active.style.width = `${controller / countLines}px`;
console.log(active.style.width);

let changeActive = controller / countLines;

for (let i = 0; i < countLines; i++) {

    arrLines[i] = document.getElementById(`line-${i + 1}`);
    arrLines[i].style.width = `${(controller / countLines) - 3}px`;
    console.log(arrLines[i].style.width)
    arrLines[i].onclick = function () {
        slider.style.transform = `TranslateX(${-i * change}%)`;
        console.log(slider.style.transform);
        active.style.left = `${i * changeActive}px`;
        console.log(active.style.left);
    }
}

for (let i = 0; i < countLines; i++) {
    arrLines[i] = document.getElementById(`line-${i + 1}`);
    console.log(arrLines[i]);
}