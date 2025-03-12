document.querySelectorAll('.accord-header').forEach(el => {
  el.addEventListener('click', function() {
    const question = this.closest('.question');
    const content = question.parentElement.querySelector('.accord-content');
    const plusIcon = question.querySelector('.plus');
    const contentWrapper = document.querySelector('.content');

    const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);

    content.classList.toggle('active');
    plusIcon.classList.toggle('active');

    if (content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
      
      let totalHeight = 0;
      document.querySelectorAll('.accord-content.active').forEach(activeContent => {
        totalHeight += activeContent.scrollHeight;
      });
      
        contentWrapper.style.height = totalHeight ? (totalHeight + 445) + "px" : "445px";
     
  })
})


const accordeon = [
  {
    id: 1,
    title: 'What is Frontend Mentor, and how will it help me?',
    text: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.'
  },
  {
    id: 2,
    title: 'Is Frontend Mentor free?',
    text: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
  },
  {
    id: 3,
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    text: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!'
  },
  {
    id: 4,
    title: 'How can I get help if I\'m stuck on a challenge?',
    text: 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
  }
]

document.querySelectorAll('.accord-item .accord-header').forEach((button, index) => {
  button.textContent = accordeon[index].title;
})

document.querySelectorAll('.accord-content p').forEach((text, i) => {
  text.textContent = accordeon[i].text;
})
