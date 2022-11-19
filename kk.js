let items = document.querySelectorAll(".kk > .item");
let stan = false;
let win = false;

let tablicaWer = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function wer(){
    tablicaWer.forEach(e=>{
        if(
            items[e[0]].innerText != "" &&
            items[e[0]].innerText == items[e[1]].innerText &&
            items[e[0]].innerText == items[e[2]].innerText 
        ){
            win = true;
            items[e[0]].classList.add(`win`);
            items[e[1]].classList.add(`win`);
            items[e[2]].classList.add(`win`);
            alert(`wygrał ${items[e[2]].innerText}`)
        };
    });
};

window.alert = (e)=>{
    let w = document.querySelector('.wiadomosc');
    w.classList.remove('hide');
    w.querySelector("h1").innerText = e;

    // console.log(e);
};

document.querySelector('.wiadomosc span').addEventListener('click',e=>{
    location.reload();
});

items.forEach (e =>{
    e.addEventListener('click', t =>{
        let it = t.target;
        if(it.innerText == "" && !win){
            it.innerText = (stan ? "O" : "X");
            stan = !stan;
            wer();
        };
    });
});

document.querySelector('#newGame').onmouseenter = () =>{
    document.querySelector('#newGame').style.transform = 'scale(1.2)';
};

document.querySelector('#newGame').onmouseleave = () =>{
    document.querySelector('#newGame').style.transform = 'scale(1)';
};