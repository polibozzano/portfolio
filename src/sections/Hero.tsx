'use client';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import minhaFoto from '@/assets/images/eu.png'
import Image from 'next/image';
import { motion } from "framer-motion";

export const HeroSection = () => {
  return <div className='py-32 md:pt-40 md:pb-28 relative z-0 overflow-x-clip'>
    <div
     className='absolute inset-0 -z-30 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_0%,black_80%,transparent)]' 
     style={{
        backgroundImage:`url(${grainImage.src})`
    }}
    ></div>


    <div className="container max-w-5xl px-4 mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-6'>

          
          {/* Coluna - Text */}
        <div>
            <div className='bg-neutral-950 border border-neutral-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
              <div className='bg-green-500 size-2.5 rounded-full relative'>
                <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
              </div>
              <div className='text-sm font-medium'>Disponível para trabalho remoto</div>
            </div>

          <h1 className='mt-8 text-left text-lg md:text-xl text-white/60'>
              <span className="block text-white text-2xl md:text-4xl lg:text-5xl font-serif tracking-wide">
                const minhaMissao = <span className="text-rose-600 font-bold"> &quot;interfaces bonitas e funcionais&quot;</span>;
              </span>
            </h1>
            
            <p className='mt-6 text-white/60 md:text-lg'>
              &#47;&#47; Poliana Bozzano, 26 anos. 
              Apaixonada por detalhes e interfaces bem pensadas.
            </p>

            {/* Terminal */}
            <div className="bg-neutral-800 text-green-400 font-mono text-sm mt-6 px-4 py-3 rounded-lg shadow-inner border border-white/5">
              <p><span className="text-white">$</span> git push origin main</p>
              <p>✓ Portfolio atualizado com sucesso</p>
            </div>

            <div className='flex flex-col md:flex-row mt-8 gap-4'>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 md:px-8 min-w-[180px] h-12 rounded-xl whitespace-nowrap hover:scale-[1.05] transition"
              >
                <span className='font-semibold'>Meus projetos</span>
                <ArrowDown className='size-4'/>
              </a>
              <a href="#contact" className='inline-flex items-center justify-center gap-2 border border-rose-900 bg-rose-900 text-white h-12 px-6 md:px-8 min-w-[200px] rounded-xl whitespace-nowrap hover:scale-[1.05] transition'>
                <span>👋🏻</span>
                <span className='font-semibold'>Vamos conectar</span>
              </a>
            </div>
          </div>
          

        {/* Coluna - Foto */}
        <div className="relative flex justify-center md:justify-end">
            <div className="relative rounded-full p-1 ring-2 ring-white/10">
    
        {/* Símbolo <> */}
          <motion.div 
            className="absolute -top-4 -left-6 text-2xl text-rose-500 font-mono"
            initial={{ y: -3 }}
            animate={{ y: 3 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            &lt;&gt;
          </motion.div>

        {/* Foto */}
        <Image
          src={minhaFoto}
          alt="Foto da desenvolvedora"
          className="rounded-full shadow-lg w-64 md:w-80 object-cover"
          priority
        />

      {/* Símbolo </> */}
      <motion.div 
        className="absolute -bottom-4 -right-6 text-2xl text-rose-500 font-mono"
        initial={{ y: 3 }}
        animate={{ y: -3 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        &lt;/&gt;
      </motion.div>
    
      {/* Tags <code> */}
      <span className="absolute -top-5 left-4 text-xs text-white/30">&lt;code&gt;</span>
      <span className="absolute -bottom-5 right-4 text-xs text-white/30">&lt;/code&gt;</span>
  </div>
</div>



        </div>
      </div>
  </div>;
};
