import Card from "@/components/Card";
import bookImage from '@/assets/images/capa_livro.jpg';
import Image from "next/image";
import Dust from '@/assets/images/dust.jpg'

import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TypescriptIcon from "@/assets/icons/typescript.svg";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType : JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType : HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType : CssIcon,
  },
  {
    title: 'React',
    iconType : ReactIcon,
  },
  {
    title: 'Photoshop',
    iconType : ChromeIcon,
  },
  {
    title: 'GitHub',
    iconType : GithubIcon,
  },
    {
    title: 'Typescript',
    iconType : TypescriptIcon,
  },
]

const hobbies = [
  {
    title: 'Crochê',
    emoji: '🧶',
  },
  {
    title: 'Jardinagem',
    emoji: '🪴',
  },
  {
    title: 'Games',
    emoji: '🎮',
  },
  {
    title: 'Academia',
    emoji: '🏋🏻‍♀️',
  },
  {
    title: 'Muay-Thai',
    emoji: '🥊',
  },
  {
    title: 'Trilhas',
    emoji: '🏔️',
  },
    {
    title: 'Violino',
    emoji: '🎻',
  },
]

export const AboutSection = () => {
  return (
  <section id='about' className="py-14 lg:py-20">
      <div className='container'>
        <div>
        <div className="flex justify-center">
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-rose-900 to-rose-600 text-center bg-clip-text text-transparent'>Sobre Mim</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">Um pouquinho do meu universo</h2>
        {/*<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">"Onde vive? O que faz? O que come?" - Globo Repórter</p>*/}
      </div>

      {/*Leituras*/}
      <div className='mt-20 flex flex-col gap-8'>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
            <CardHeader
              title='Leituras'
              description='O que estou lendo nesse momento'
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt='Book Cover' />
            </div>
          </Card>
        
        {/*Ferramentas*/}
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
          <CardHeader title='Tech Stack'/>
          <ToolboxItems 
            items={toolboxItems} 
            className=""
            itemsWrapperClassName="animate-move-left [animation-duration:20s]"/>
          <ToolboxItems 
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName="animate-move-right [animation-duration:20s]"/>
        </Card>
        </div>

        {/*Hobbies*/}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-7 lg:grid-cols-4">
        <Card className="h-auto p-0 flex flex-col md:col-span-4 lg:col-span-2">
          <CardHeader title='Além dos códigos' description='Interesses e hobbies além do universo digital' className="px-6 py-6" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="inline-flex items-center justify-between gap-2 px-4 py-2 bg-gradient-to-r from-rose-900 to-rose-700 rounded-full shadow-md"
              >
                <span className="font-medium text-neutral-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        {/*Dust*/}
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader title='Dust' description="Apenas uma foto do meu gato" />
          <div className="border-2 border-white/10 rounded-lg mx-7 md:mx-9 -mt-2 md:-mt-4 lg:mx-20">
            <Image src={Dust} alt='Gato' className="rounded-lg"/>
          </div>
        </Card>
        </div>
      </div>
    </div>
  </section>
)};
