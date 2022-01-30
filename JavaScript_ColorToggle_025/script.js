
const colorWhite = document.querySelector('#home-btn');
const colorRed = document.querySelector('#red-btn');
const colorOrange = document.querySelector('#orange-btn');
const colorPurple = document.querySelector('#purple-btn');
const colorGreen = document.querySelector('#green-btn');

const backgroundColor = document.body;

const menu = document.querySelector('#menu');
const menuImgColor = document.querySelector('#menu img');
let menuStatus = false;



function toggleColorMenu() {

    if (menuStatus === false) {
        let colorMenuList = document.querySelectorAll('.color-menu li');
        menuStatus = true;
        console.log(menuStatus);

        let arrayLength = colorMenuList.length;
        console.log(arrayLength);
        for (var i = 0; i < arrayLength; i++) {
            colorMenuList[i].style.visibility = 'visible';
        }
    }

    else {
        let colorMenuList = document.querySelectorAll('.color-menu li');
        menuStatus = false;
        console.log(menuStatus);

        let arrayLength = colorMenuList.length;
        console.log(arrayLength);
        for (var i = 0; i < arrayLength; i++) {
            colorMenuList[i].style.visibility = 'hidden';
        }
    }
}

menu.addEventListener('click', function () {
    toggleColorMenu();
})

colorWhite.addEventListener('click', function () {
    console.log('Background color changed to white.');
    backgroundColor.classList.toggle('white-background');
    backgroundColor.classList.remove('red-background', 'orange-background', 'purple-background', 'green-background');
    console.log(backgroundColor.classList);

    toggleColorMenu();

})

colorRed.addEventListener('click', function () {
    console.log('Background color changed to red.');
    backgroundColor.classList.toggle('red-background');
    backgroundColor.classList.remove('white-background', 'orange-background', 'purple-background', 'green-background');
    console.log(backgroundColor.classList);
    toggleColorMenu();

})

colorOrange.addEventListener('click', function () {
    console.log('Background color changed to orange.');
    backgroundColor.classList.toggle('orange-background');
    backgroundColor.classList.remove('red-background', 'white-background', 'purple-background', 'green-background');
    console.log(backgroundColor.classList);
    toggleColorMenu();

})

colorPurple.addEventListener('click', function () {
    console.log('Background color changed to purple.');
    backgroundColor.classList.toggle('purple-background');
    backgroundColor.classList.remove('red-background', 'orange-background', 'white-background', 'green-background');
    console.log(backgroundColor.classList);
    toggleColorMenu();

})

colorGreen.addEventListener('click', function () {
    console.log('Background color changed to green.');
    backgroundColor.classList.toggle('green-background');
    backgroundColor.classList.remove('red-background', 'orange-background', 'purple-background', 'white-background');
    console.log(backgroundColor.classList);
    toggleColorMenu();

})