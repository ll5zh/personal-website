const sections = document.querySelector('.body').children;
for (let i = 0; i < sections.length; ++i) {
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

function populateAbout() {
    
    about.forEach((item) => {
        let row = aboutInfo.insertRow(-1);
        let key = row.insertCell(0);
        let value = row.insertCell(1);
        key.style.cssText = 'background-color: #96C291';
        value.style.cssText = 'text-align: right; background-color: #FFB7B7';
        key.innerHTML = item[0];
        value.innerHTML = item[1];
    });
}

populateAbout();

// Experience Section - Skills //

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

// Experience Section - Work //

const Job = (title, employer, time, img, tasks) => {
    return { title, employer, time, img, tasks };
};

const Jobs = (() => {
    const jobList = [
        Job(
            'Information Technology Support',
            'University of Waterloo',
            'May 2023 - Aug. 2023',
            'images/uwaterloo.png',
            [
                'Imaged 20+ computers & laptops for departmental use',
                'Troubleshooted customer issues regarding editing web content, malfunctioning hardware/equipment, software installations, network connections, & data management',
                'Updated & maintained the Department of Psychology website using WCMS by fixing 150+ broken links & creating/editing 20+ faculty profile webpages',
                'Worked on a Perl script to help parse through HTML webpages & obtain networking information for database maintenance',
                'Worked on a Python script to automate the deletion of files 90 days or older within the department\'s Centre for Mental Health Research & Treatment (CMHRT)',
            ],
        ),
        Job(
            'Teaching Assistant',
            'Olympiads School',
            'Jul. 2021 - Jun. 2022',
            'images/olympiads.png',
            [
                'Provided written feedback for elementary school & high school students on contest-level mathematics & science homework assignments',
                'Maintained class spreadsheets by updating student grades on a weekly basis'
            ],
        ),
    ];
    const printJobs = () => {
        jobList.forEach((item) => {
            const row = work.insertRow(-1);
            const logoCell = row.insertCell(0);
            const infoCell = row.insertCell(1);
            const logo = document.createElement('img');
            logo.src = item.img;
            // include something for logo height/width requirements
            logo.style.cssText = 'width: 15rem';
            logoCell.appendChild(logo);
            logoCell.style.cssText = 'background-color: #96C291; padding: 1.5rem';
            const title = document.createElement('div');
            title.innerHTML = item.title.toUpperCase();
            title.style.cssText = 'font-size: 1.2rem; font-weight: 800';
            const employer = document.createElement('div');
            employer.innerHTML = item.employer + ' (' + item.time + ')';
            employer.style.cssText = 'font-size: 1.2rem, font-style: italic; font-weight: 800';
            const tasks = document.createElement('ul');
            item.tasks.forEach((item) => {
                const task = document.createElement('li');
                task.innerHTML = item;
                tasks.appendChild(task);
            })
            infoCell.appendChild(title);
            infoCell.appendChild(employer);
            infoCell.appendChild(tasks);
            infoCell.style.cssText = 'background-color: #FFB7B7; padding: 2rem';
        });
    };
    return {
        jobList,
        printJobs,
    }
})();

Jobs.printJobs();

// Interests Section //

const interestsInfo = document.querySelector('.interests-info');

const Interest = (name, image, desc) => {
    return { name, image, desc };
};

const Interests = (() => {
    const interestList = [
        Interest(
            'Piano',
            'images/gtspiano.svg',
            'I\'ve been playing the piano since I was 6 years old. After obtaining my Associate Diploma (ARCT) in Piano Performance through the Royal Music Conservatory (RCM), I started writing my own piano arrangements of my favourite songs and uploading them to YouTube!\n\nYou can find my covers @gtspiano on <button style="height: auto; text-decoration: underline"><a href="https://www.instagram.com/gtspiano/">Instagram</a></button> and <button style="height: auto; text-decoration: underline"><a href="https://www.youtube.com/@gtspiano">Youtube</a></button>.'
        ),
        Interest(
            'Singing',
            'images/ifc.jpg',
            'I joined my first choir when I was 10 years old, and sang with multiple vocal ensembles throughout high school. In university, I joined the University of Waterloo A Cappella Club (UWACC) and have enjoyed performing with various groups on campus! Noteably in Winter 2023, I competed with In Full Colour (IFC) at the the International Championship of Collegiate A Cappella (ICCA) and performed at the Los Angeles A Cappella Festival (LAAF)!'
        ),
        Interest(
            'Bullet Journaling',
            'images/bujo.jpg',
            'Bullet journaling is often used as an artistic method of planning, journaling, and crafting in a single book. I love using both art and journaling to create scrapbook spreads of my favourite entertainments, music, and memories. As such, I love collecting all sorts of stationery, such as notebooks, pens, washi tape, and stickers!'
        ),
    ];
    const printInterests = () => {
        interestList.forEach((item, index) => {
            const interest = document.createElement('div');
            const name = document.createElement('div');
            name.innerHTML = item.name;
            name.style.cssText = 'background-color: #302d29; color: #F4EEEE; font-size: 1.5rem; border-radius: 1.5rem; text-align: center; padding: 0.5rem 0';
            const image = document.createElement('img');
            image.src = item.image;
            image.style.cssText = 'max-width: 30vw; min-width: 0; border-radius: 3rem;';
            const desc = document.createElement('div');
            desc.innerHTML = item.desc;
            desc.style.cssText = 'text-align: center';
            interest.appendChild(name);
            interest.appendChild(image);
            interest.appendChild(desc);
            interestsInfo.appendChild(interest);
            if (index % 2 == 0) {
                interest.style.cssText = 'background-color: #FFB7B7; padding: 1.7rem; border-radius: 3rem';
            } else {
                interest.style.cssText = 'background-color: #96C291; padding: 1.7rem; border-radius: 3rem';
            }
        });
    };
    return {
        interestList,
        printInterests,
    };
})();

Interests.printInterests();

// Connect Section //

const connectInfo = document.querySelector('.connect');

const Contact = (title, icon, link) => {
    return { title, icon, link };
};

const Connect = (() => {
    const connectList = [
        Contact(
            'Email',
            'images/outlook.svg',
            'mailto:ll5zhang@uwaterloo.ca',
        ),
        Contact(
            'LinkedIn', 
            'images/linkedin.svg', 
            'https://www.linkedin.com/in/lzhanglucia/',
        ),
        Contact(
            'GitHub',
            'images/github.svg',
            'https://github.com/ll5zh',
        ),
    ];
    const printConnect = () => {
        connectList.forEach((item) => {
            const row = document.createElement('button');
            row.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; align-items: center; justify-content: center; background-color: #F4EEEE; padding: 1rem; border: 0.1rem #89b983 solid; border-radius: 2rem; align-self: center; width: 23rem';
            const title = document.createElement('div');
            title.innerHTML = item.title;
            title.style.cssText = 'color: #302d29; font-size: 1.2rem; text-decoration: underline';
            const icon = document.createElement('img');
            icon.style.cssText = 'max-height: 5rem';
            icon.src = item.icon;
            row.addEventListener('click', function(e) {
                window.open(item.link, '_blank');
            });
            row.appendChild(title);
            row.appendChild(icon);
            connectInfo.appendChild(row);
        });
    };
    return {
        connectList,
        printConnect,
    }
})();

Connect.printConnect();

// Contact Form //

const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;
    const emailVal = email.value;
    const phoneVal = phone.value;
    const messageVal = message.value;
    const sendTo = 'lzhanglucia@gmail.com';
    document.location = "mailto:"+sendTo+"?subject="+firstNameVal+" "+lastNameVal+": Contacting Lucia Zhang&body="+"EMAIL:%0D%0A"+emailVal+"%0D%0A%0D%0APHONE:%0D%0A"+phoneVal+"%0D%0A%0D%0AMESSAGE:%0D%0A"+messageVal;
})