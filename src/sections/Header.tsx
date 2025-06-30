export const Header = () => {
  return (
  <div className="fixed top-4 w-full z-10">
      <div className="absolute left-5 top-6 -translate-y-1/2 p-4">
        <h1 className="font-serif text-3xl tracking-wide">
          ☕ PBZZ<span className="text-rose-800 font-extrabold">.</span>
        </h1>
      </div>
    <nav className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#" className="nav-item">Home</a>
      <a href="#about" className="nav-item">Sobre</a>
      <a href="#projects" className="scroll-smooth nav-item">Projetos
      </a>
      <a href="#contact" className="scroll-smooth nav-item bg-rose-800 text-white hover:bg-white hover:text-rose-800">Contato</a>
    </nav>
  </div>
)};
