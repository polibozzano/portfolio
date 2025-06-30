import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
  "Curiosa",
  "Pensamento Visual",
  "Aprendizado Contínuo",
  "Movida a Café",
  "Team Player",
  "Apaixonada por Aprender",
  "UX First",
  "Atenta ao Usuário",
  "Criativa",
  "Ama Resolver Problemas",
]

export const TapeSection = () => {
  return (
    <div className='pb-20 overflow-x-clip'>
      <div className='bg-gradient-to-r from-rose-900 to-rose-700  -rotate-3 -mx-1'>
         <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'>
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word} className='inline-flex gap-5 items-center'>
                        <span className='text-neutral-900 uppercase font-extrabold text-sm'>
                          {word}
                        </span>
                        <StarIcon className='size-6 text-neutral-900 -rotate-12'/>
                                </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
    </div>
)};
