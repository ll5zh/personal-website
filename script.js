const sections = document.querySelector('.body').children;
for (let i = 0; i < sections.length; ++i) {
    console.log(i);
    if (i % 2 == 1) {
        sections[i].style.backgroundColor = '#F4EEEE';
        const title = sections[i].querySelector('.h1');
        title.style.cssText = 'text-align: right';
    } else {
        sections[i].style.backgroundColor = '#FFDBAA';
    }
}

// About Section //

const about = [
    ['Name', 'Lucia Zhang'],
    ['Pronouns', 'she/her'],
    ['Age', '19'],
    ['Studying at...', 'University of Waterloo'],
    ['Program', 'Computer Science']
]
const aboutInfo = document.querySelector('#about-info');
console.log(aboutInfo);

function populateAbout() {
    
    about.forEach((item) => {
        console.log(item);
        let row = aboutInfo.insertRow(-1);
        let key = row.insertCell(0);
        let value = row.insertCell(1);
        key.style.cssText = 'background-color: #96C291';
        value.style.cssText = 'text-align: right; background-color: #FFB7B7';
        key.innerHTML = item[0];
        value.innerHTML = item[1];
    });
    console.log(about);
}

populateAbout();

// Experience Section //

const generalExp = document.querySelector('#general-exp');
const webExp = document.querySelector('#web-exp');
const scriptExp = document.querySelector('#script-exp');

const Skill = (name, icon) => {
    return { name, icon };
};

const Skills = (() => {
    const general = [
        Skill('Python', 'images/python.svg'),
        Skill('Racket', 'images/racket.svg'),
    ];
    const web = [
        Skill('HTML', 'images/html.svg'),
        Skill('CSS', 'images/css.svg'),
        Skill('JavaScript', 'images/javascript.svg'),
    ];
    const script = [
        Skill('Bash', 'images/bash.svg'),
        Skill('Perl', 'images/perl.svg'),
    ];
    const printSkills = () => {
        general.forEach((item, index) => {
            // create a button with formatting of name + img
            const skillBtn = document.createElement('button');
            skillBtn.innerHTML = item.name;
            const icon = document.createElement('img');
            icon.src = item.icon;
            icon.style.cssText = 'height: 3rem';
            skillBtn.appendChild(icon);
            // remember to incorporate flex wrap styling in css
            // alternate colours (pink/green) given modulo 2
            skillBtn.style.cssText = 'background-color: #FFB7B7';
            generalExp.appendChild(skillBtn);
        });
        web.forEach((item) => {
            // create a button with formatting of name + img
            const skillBtn = document.createElement('button');
            skillBtn.innerHTML = item.name;
            const icon = document.createElement('img');
            icon.src = item.icon;
            icon.style.cssText = 'height: 3rem';
            skillBtn.appendChild(icon);
            // remember to incorporate flex wrap styling in css
            // alternate colours (pink/green) given modulo 2
            skillBtn.style.cssText = 'background-color: #96C291';
            webExp.appendChild(skillBtn);
        });
        script.forEach((item) => {
            // create a button with formatting of name + img
            const skillBtn = document.createElement('button');
            skillBtn.innerHTML = item.name;
            const icon = document.createElement('img');
            icon.src = item.icon;
            icon.style.cssText = 'width: 3rem';
            skillBtn.appendChild(icon);
            // remember to incorporate flex wrap styling in css
            // alternate colours (pink/green) given modulo 2
            skillBtn.style.cssText = 'background-color: #FFB7B7';
            scriptExp.appendChild(skillBtn);
        });
    };
    return {
        general,
        web,
        script,
        printSkills,
    };
})();

Skills.printSkills();