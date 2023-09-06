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