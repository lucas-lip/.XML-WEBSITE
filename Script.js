function showSection(sectionId) {
    
    // Oculta todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.remove('active');
    });
  
    // Mostra a seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }
  