import React, { useState, useEffect } from 'react';
import { projetosData, getAllCategories } from '../../data/projectsData';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projetosData);
  const categories = getAllCategories();

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projetosData);
    } else {
      setFilteredProjects(projetosData.filter(p => p.categoria === filter));
    }
  }, [filter]);

  return (
    <section id="projetos" className="projetos">
      <h2>Projetos</h2>
      
      {/* Filtros */}
      <div className="project-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'Todos' : cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProjects.map((projeto, index) => (
          <div key={projeto.id} className="card">
            <img 
              src={projeto.imagem} 
              alt={projeto.nome}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x180?text=Projeto';
              }}
            />
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <div className="tech-tags">
              {projeto.tecnologias.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-year">
              <i className="far fa-calendar-alt"></i> {projeto.ano}
            </div>
            <a href={projeto.link} className="project-link">
              Ver projeto <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;