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