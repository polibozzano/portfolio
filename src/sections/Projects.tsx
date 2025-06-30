import promptinho from "@/assets/images/promptinho.png";
import dashboardPokemon from "@/assets/images/dashboard-pokemon.png";
import vittaagendamento from "@/assets/images/vitta-painelagendamento.png"
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import Card from '@/components/Card';

const portfolioProjects = [
  {
    slug: "vitta",
    company: "Projeto Pessoal",
    year: "2025",
    title: "Vitta - Painel de Agendamento",
    results: [
      { title: "Autenticação de Usuários e Admins com Firebase Auth" },
      { title: "Gerenciamento de Dados em Tempo Real com Firestore" },
      { title: "Rotas Protegidas com React Router Dom e Tipagem de Acesso" },
      { title: "Interface Responsiva com Tailwind CSS e Componentização" },
      { title: "Organização de Estado e Performance com React Hooks" }
    ],
    link: "https://vitta-eight.vercel.app",
    image: vittaagendamento,
  },
  {
    slug: "promptinho",
    company: "Projeto Pessoal",
    year: "2025",
    title: "Promptinho",
    results: [
      { title: "Interface Responsiva com Tailwind e Framer Motion" },
      { title: "Integração com LLMs via OpenRouter com Histórico Contextual" },
      { title: "Controle de Inputs com RHF e Validação com Zod" },
      { title: "Gerenciamento de Sessões com Local Storage" },
      { title: "Rate Limiting e Segurança no Backend com Edge Middleware" },
    ],
    link: "https://promptinho.vercel.app",
    image: promptinho,
  },
  {
    slug: "pokemon",
    company: "Projeto Pessoal",
    year: "2025",
    title: "Pokemon Dashboard",
    results: [
      { title: "Renderização do Lado do Servidor (SSR)" },
      { title: "Integração de APIs e Gestão de Dados" },
      { title: "Interface Responsiva e Interativa" },
    ],
    link: "https://dashboard-pokemon.vercel.app",
    image: dashboardPokemon,
    
  },
];

export const ProjectsSection = () => {
  return (
  <section id='projects' className="px-8 lg:max-w-5xl lg:mx-auto pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-rose-900 to-rose-700 text-center bg-clip-text text-transparent'>Na prática</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">Projetos em Destaque</h2>
    </div>

    <div className="flex flex-col mt-10 md:mt-20 gap-20">
      {portfolioProjects.map((project, projectIndex) => (
        <Card 
          key={project.title} 
          className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
          style={{
            top: `calc(64px + ${projectIndex *40}px`
          }}
        >
          <div className="absolute inset-0 -z-10 opacity-5" 
            style={{
            backgroundImage: `url(${grainImage.src})`}}>
            </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16">
            <div className="bg-gradient-to-r from-rose-900 to-rose-700 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
            </div>

          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">{project.title}</h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
            {project.results.map((result) => (
              <li className='flex gap-2 text-sm md:text-base text-white/50'>
                <CheckIcon className='size-5 md:size-6' />
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 ">
          <a href={`/projects/${project.slug}`}>
            <button className="border border-white text-white h-12 w-full md:w-auto md:px-8 rounded-xl font-medium inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/10 transition">
              <span>Ver mais</span>
              <ArrowUpRightIcon className='size-4' />
            </button>
          </a>
          <a href={project.link}>
            <button className="bg-white text-neutral-950 h-12 w-full md:w-auto md:px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
              <span>Demo</span>
              <ArrowUpRightIcon className='size-4'/>
            </button>
          </a>
          </div>

          </div>
          <div className='relative'>
          <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full 
          lg:max-w-none"/>
          </div>
          </div>
        </Card>
      ))}
    </div>
  </section>
)};
