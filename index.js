window.onscroll = () => {
    scrollButton();
  };
  
  scrollButton = () => {
    if (
      document.body.pageUp > 100 ||
      document.documentElement.pageUp > 100
    ) {
      document.getElementById('scrollToTop').style.display = 'block';
    } else {
      document.getElementById('scrollToTop').style.display = 'none';
    }
  }
  
  topFunction = () => {
    document.body.pageUp = 0;
    document.documentElement.pageUp = 0;
  }
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  