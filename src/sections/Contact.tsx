import grainImage from '@/assets/images/grain.jpg';
import Dust from '@/assets/images/dust2.png';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/github.svg';
import EmailIcon from '@/assets/icons/email.svg';
import StarIcon from '@/assets/icons/star.svg';
import Image from 'next/image';

export const ContactSection = () => {
  return (
  <section id='contact' className='py-16 pt-14 lg:pt-14'>
    <div className='container border-t border-white/15'>
      <div className='flex flex-row justify-center mt-10 mb-10'>
        <StarIcon className='size-12 text-rose-900'/>
        <h2 className="font-serif text-3xl md:text-5xl text-center">Contato</h2>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-4'> 
        <div className='md:flex-1 w-full max-w-xl bg-gradient-to-r from-rose-900 to-rose-700 text-white p-10 rounded-3xl relative overflow-hidden z-0'>
          <div className='absolute inset-0 opacity-10 -z-10' style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>

          <h2 className='font-serif text-2xl md:text-3xl mb-6 text-center md:text-left'>
              Disponível para novas oportunidades!
          </h2>

          <div className='flex flex-col gap-4'>
            {/* Email */}
            <a
              href='mailto:polibozzano@gmail.com'
              className='flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-xl hover:bg-white/20 transition mb-2'
            >
              <EmailIcon className='size-10 shrink-0' />
              <span className='text-sm md:text-base break-all'>polibozzano@gmail.com</span>
            </a>

            <div className='flex gap-5 items-center justify-between ml-4 mr-4'>
              {/* GitHub */}
              <a
                href='https://github.com/polibozzano'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition'
              >
                <GithubIcon className='size-8 fill-white' />
              </a>

              {/* LinkedIn */}
              <a
                href='https://linkedin.com/in/polibozzano'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition'
              >
                <LinkedinIcon className='size-8 fill-white' />
              </a>

              {/* Currículo */}
              <a
                href='https://drive.google.com/file/d/1Q1xM7v4q5J5zo2ipgTusXvmFagNv5JQX/view?usp=sharing' 
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white/10 hover:bg-white/20 transition px-6 py-2 rounded-xl text-sm font-medium'
              >
                📄 Currículo
              </a>
            </div>
          </div>
        </div>
          {/* Foto */}
          <Image
            src={Dust}
            alt="Foto do Dust, meu gato"
            className='object-cover rounded-3xl w-[220px] h-[290px] lg:w-[320px] lg:h-[380px]'
          />
      </div>
    </div>
  </section>
)};
