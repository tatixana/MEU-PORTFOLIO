// Array de objetos contendo todos os projetos
// Este arquivo centraliza os dados para renderização dinâmica

export const projetosData = [
  {
    id: 1,
    nome: "PROJETO AUTOMAÇÃO WEB",
    descricao: "Facilitar tarefas como organização de Arquivos",
    imagem: "/OIP (2).webp",  // Imagem na pasta public/
    link: "#",
    tecnologias: ["Python", "Selenium", "Automation"],
    ano: "2024",
    categoria: "Automação"
  },
  {
    id: 2,
    nome: "PROJETO PASSAGEM AÉREA",
    descricao: "Processo de compras online de passagem Aérea para diversos locais",
    imagem: "/Sites-de-viagem-Guia-Viajar-Melhor-768x400.jpg",
    link: "#",
    tecnologias: ["React", "API", "Travel Tech"],
    ano: "2024",
    categoria: "Web App"
  },
  {
    id: 3,
    nome: "Aurora Flow",
    descricao: "Landing page interativa com animações suaves e design minimalista.",
    imagem: "https://via.placeholder.com/300x180/ff79c6/ffffff?text=Aurora+Flow",
    link: "#",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    ano: "2023",
    categoria: "Landing Page"
  },
  {
    id: 4,
    nome: "Bloom Dashboard",
    descricao: "Painel analítico com visual clean, gráficos e toque feminino.",
    imagem: "https://via.placeholder.com/300x180/ffb3d9/0f0f0f?text=Bloom+Dashboard",
    link: "#",
    tecnologias: ["React", "Chart.js", "UI/UX", "Styled Components"],
    ano: "2024",
    categoria: "Dashboard"
  },
  {
    id: 5,
    nome: "Clube do Livro",
    descricao: "Comunidade literária com foco em experiência acolhedora e delicada.",
    imagem: "https://via.placeholder.com/300x180/ff79c6/ffffff?text=Clube+do+Livro",
    link: "#",
    tecnologias: ["Node.js", "Express", "MongoDB", "JWT"],
    ano: "2023",
    categoria: "Backend"
  },
  {
    id: 6,
    nome: "Task Flow",
    descricao: "Aplicativo de gerenciamento de tarefas com design intuitivo.",
    imagem: "https://via.placeholder.com/300x180/ffb3d9/0f0f0f?text=Task+Flow",
    link: "#",
    tecnologias: ["React", "Redux", "Tailwind CSS"],
    ano: "2024",
    categoria: "Produtividade"
  }
];

// Função para filtrar projetos por categoria
export const filterProjectsByCategory = (category) => {
  if (category === 'all') return projetosData;
  return projetosData.filter(project => project.categoria === category);
};

// Função para buscar projeto por ID
export const getProjectById = (id) => {
  return projetosData.find(project => project.id === id);
};

// Lista de todas as tecnologias únicas
export const getAllTechnologies = () => {
  const techs = projetosData.flatMap(project => project.tecnologias);
  return [...new Set(techs)];
};

// Lista de todas as categorias
export const getAllCategories = () => {
  const categories = projetosData.map(project => project.categoria);
  return ['all', ...new Set(categories)];
};