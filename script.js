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
}

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