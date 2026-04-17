const projetos = [
  {
    nome: "PROJETO AUTOMAÇÃO WEB",
    descricao: "Facilitar tarefas como organização de Arquivos",
    imagem: "OIP (2).webp",
    link: "#"
  },
  {
    nome: "PROJETO PASSAGEM AÉREA",
    descricao: "Processo de compras online de passagem Aérea para diversos locais",
    imagem: "Sites-de-viagem-Guia-Viajar-Melhor-768x400.jpg",
    link: "#"
  },
];

const container = document.getElementById("listaProjetos");

projetos.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${p.imagem}" class="project-img" />
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <a href="${p.link}" style="color:#ff4da6;">Ver projeto</a>
  `;

  container.appendChild(card);
});


// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 100,
  easing: 'ease-in-out'
});

// ================= PROJETOS DINÂMICOS COM ANIMAÇÃO =================
const projetosData = [
  {
    titulo: "Aurora Flow",
    descricao: "Landing page interativa com animações suaves e design minimalista.",
    icone: "fas fa-moon",
    link: "#",
    delay: 100
  },
  {
    titulo: "Bloom Dashboard",
    descricao: "Painel analítico com visual clean, gráficos e toque feminino.",
    icone: "fas fa-chart-line",
    link: "#",
    delay: 200
  },
  {
    titulo: "Clube do Livro",
    descricao: "Comunidade literária com foco em experiência acolhedora e delicada.",
    icone: "fas fa-book-open",
    link: "#",
    delay: 300
  }
];

function carregarProjetos() {
  const container = document.getElementById('listaProjetos');
  if (!container) return;
  
  container.innerHTML = '';
  
  projetosData.forEach((projeto, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-duration', '800');
    card.setAttribute('data-aos-delay', projeto.delay);
    card.innerHTML = `
      <i class="${projeto.icone}"></i>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}">Ver projeto <i class="fas fa-arrow-right"></i></a>
    `;
    container.appendChild(card);
  });
  
  // Re-inicializar AOS para os novos elementos
  AOS.refresh();
}

// ================= FORMULÁRIO DE CONTATO COM ANIMAÇÃO =================
function initForm() {
  const form = document.getElementById('formContato');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const feedback = document.getElementById('formFeedback');
    
    // Animação de feedback
    feedback.style.animation = 'none';
    feedback.offsetHeight;
    feedback.style.animation = 'fadeInUp 0.5s ease';
    
    if (!nome || !email) {
      feedback.innerHTML = "✨ Por favor, preencha nome e e-mail ✨";
      feedback.style.color = "#ff79c6";
      return;
    }
    
    if (!email.includes('@')) {
      feedback.innerHTML = "🌸 Digite um e-mail válido, por favor 🌸";
      feedback.style.color = "#ffb3d9";
      return;
    }
    
    feedback.innerHTML = `💖 Obrigada, ${nome}! Sua mensagem foi enviada com carinho. 💖`;
    feedback.style.color = "#b0ffb0";
    form.reset();
    
    // Animação de sucesso nos campos
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.style.transform = 'scale(1.02)';
      setTimeout(() => {
        input.style.transform = 'scale(1)';
      }, 300);
    });
    
    setTimeout(() => {
      feedback.innerHTML = "";
    }, 4000);
  });
}

// ================= SCROLL SUAVE COM ANIMAÇÃO =================
function initScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Adicionar animação de destaque no elemento alvo
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
          target.style.animation = '';
        }, 500);
      }
    });
  });
}

// ================= BOTÃO FALE COMIGO =================
function initBotaoFaleComigo() {
  const btn = document.getElementById('btnFaleComigo');
  if (btn) {
    btn.addEventListener('click', () => {
      const contatoSection = document.getElementById('contato');
      if (contatoSection) {
        contatoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Animação de clique
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
          btn.style.transform = '';
        }, 200);
      }
    });
  }
}

// ================= ANIMAÇÃO DE CARREGAMENTO =================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  document.body.style.opacity = '1';
});

// ================= EFEITO PARALLAX NO HERO =================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image img');
  const heroText = document.querySelector('.hero-text');
  
  if (heroImage && scrolled < 600) {
    heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
  if (heroText && scrolled < 600) {
    heroText.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// ================= INICIALIZAÇÃO =================
document.addEventListener('DOMContentLoaded', () => {
  carregarProjetos();
  initForm();
  initScrollSuave();
  initBotaoFaleComigo();
  
  // Animação de entrada para elementos visíveis
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card, .skill-badge').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});