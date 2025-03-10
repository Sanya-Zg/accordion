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