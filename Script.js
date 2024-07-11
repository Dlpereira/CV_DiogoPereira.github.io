function toggleLanguage() {
    var portuguesSection = Array.from(document.getElementsByClassName('portugues'));
    var inglesSection = Array.from(document.getElementsByClassName('ingles'));
    
    if (portuguesSection.length === inglesSection.length) {
        portuguesSection.map((element, index) => {
            // Toggle display for the portugues section
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
            // Toggle display for the corresponding ingles section
            inglesSection[index].style.display = inglesSection[index].style.display === 'none' ? 'block' : 'none';
        });
    }
  }