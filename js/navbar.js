const ancoras = [
    { "url": "/index.html", "texto": "Home"},
    { "url": "/EXERCICIOS/exercicio1.html", "texto": "Exerc. 1"},
    { "url": "/EXERCICIOS/exercicio2.html", "texto": "Exerc. 2"},
    { "url": "/EXERCICIOS/exercicio3.html", "texto": "Exerc. 3"},
    { "url": "/EXERCICIOS/exercicio4.html", "texto": "Exerc. 4"},
    { "url": "/EXERCICIOS/exercicio5.html", "texto": "Exerc. 5"},
    { "url": "/EXERCICIOS/exercicio6.html", "texto": "Exerc. 6"},
    { "url": "/EXERCICIOS/exercicio7.html", "texto": "Exerc. 7"}
    
];

function criaAncora(url, texto) {

    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;

    return ancora;
}

// Crie uma função e a utilize para gerar os elementos do tipo <li>
function criaLi(ancora) {
    
    const li = document.createElement('li');
    li.appendChild(ancora);
    
    return li;
}  
    
function criaUlNav(ancora) {

    const ul = document.createElement ('ul');

    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLi(a);
        ul.appendChild(li);
    })

    return ul;
} 

// <a> do Home
//const aHome = criaAncora('/index.html', 'Home');

// <li> do Home>
//const liHome = criaLi(aHome);

// <a> do exercício 1
//const aExercicio1 = criaAncora('/exercicios/exercicio1.html', 'Exerc. 1');

// <li> do exercício 1
//const liExercicio1 = criaLi(aExercicio1);

// <a> do exercício 6
//const aExercicio6 = criaAncora('/exercicios/exercicio6.html', 'Exerc. 6');

 //<li> do exercício 6 </li>
//const liExercicio6 = criaLi(aExercicio6);

// <ul> do menu
//const ulNav = document.createElement('ul');
//ulNav.append(liHome, liExercicio1, liExercicio6);//

// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));

// Aqui segue de acordo com a solução do professor...

// <span>Desafios & Exercícios</span>
const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Desafios & Exercícios';

// <div class="logo">
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);

// <div class="logo-menu">
const divLogoMenu = document.createElement('div');
divLogoMenu.classList.add('logo-menu');
divLogoMenu.append(divLogo, nav);

// <header>
const header = document.createElement('header');
header.appendChild(divLogoMenu);

// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);


// ** Estilos do Navbar **
const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.head.appendChild(linkNavbar);
