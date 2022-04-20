const insertNav = (parent) => {

    const nav = document.createElement('nav');
    const button = document.createElement('button');

    button.classList.add('burger');

    nav.appendChild(button);

    const lineOne = document.createElement('div');
    const lineTwo = document.createElement('div');

    lineOne.classList.add('line', 'line-one');
    lineTwo.classList.add('line', 'line-two');

    button.appendChild(lineOne);
    button.appendChild(lineTwo);

    const menu = document.createElement('ul');
    menu.classList.add('menu');

    nav.appendChild(menu);

    for (let i = 0; i < 3; i++) {
        const a = document.createElement('a');
        a.classList.add('item');
        const li = document.createElement('li');
        li.innerText = 'Item';
        a.appendChild(li);
        menu.appendChild(a);
    }

    button.addEventListener('click', () => {
        menu.classList.toggle('shown');
        lineOne.classList.toggle('active');
        lineTwo.classList.toggle('active');
    })

    parent.appendChild(nav);
}

export {insertNav};