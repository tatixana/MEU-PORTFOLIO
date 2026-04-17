import React, { useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';

function App() {
  useEffect(() => {
    // Efeito parallax no scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('.hero-image img');
      const heroText = document.querySelector('.hero-text');
      
      if (heroImage && scrolled < 600) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
      if (heroText && scrolled < 600) {
        heroText.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value.trim();
    const email = e.target.email.value.trim();
    const mensagem = e.target.mensagem.value.trim();
    const feedback = document.getElementById('formFeedback');
    
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
    e.target.reset();
    
    setTimeout(() => {
      feedback.innerHTML = "";
    }, 4000);
  };

  return (
    <div className="App">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img src="/image.jpeg" alt="minha foto" />
        </div>
        <div className="hero-text">
          <h2>Olá, me chamo <span>Ttilane</span></h2>
          <p>
            Desenvolvedora criativa que transforma ideias em experiências digitais delicadas e modernas.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projetos')} className="btn-rosa">
              Ver projetos
            </button>
            <button onClick={() => scrollToSection('contato')} className="btn-outline">
              Entrar em contato
            </button>
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="sobre">
        <h2>Sobre mim</h2>
        <div className="sobre-container">
          <div className="sobre-texto">
            <p>
              Sou Ttilane, desenvolvedora apaixonada por unir código e sensibilidade. 
              Adoro criar interfaces que acolhem e encantam, sempre com atenção aos detalhes. 
              Acredito que a tecnologia pode ser feminina, suave e poderosa ao mesmo tempo.
            </p>
          </div>
          <div className="skills">
            <span><i className="fab fa-html5"></i> HTML5</span>
            <span><i className="fab fa-css3-alt"></i> CSS3</span>
            <span><i className="fab fa-js"></i> JavaScript</span>
            <span><i className="fab fa-python"></i> Python</span>
            <span><i className="fab fa-react"></i> React</span>
            <span><i className="fas fa-palette"></i> UI/UX</span>
          </div>
        </div>
      </section>

      {/* Projects Section - Componente com renderização dinâmica */}
      <Projects />

      {/* Contato Section */}
      <section id="contato" className="contato">
        <h2>Contato</h2>
        <form id="formContato" onSubmit={handleSubmit}>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
          <input type="email" id="email" name="email" placeholder="Seu email" required />
          <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem delicada..." rows="3"></textarea>
          <button type="submit" className="btn-rosa">
            Enviar mensagem <i className="fas fa-paper-plane"></i>
          </button>
          <p id="formFeedback" className="form-feedback"></p>
        </form>
        <div className="social-links">
          <a href="#" className="social-icon" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon" aria-label="Discord"><i className="fab fa-discord"></i></a>
        </div>
      </section>

      <footer>
        <p>© 2026 Developer - Ttilane</p>
      </footer>
    </div>
  );
}

export default App;