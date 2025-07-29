// src/app/components/home/achievements/index.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SingleAchievement from './SingleAchievement'

function UXUIMilestones() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [milestonesList, setMilestonesList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hitos revolucionarios del UX/UI
        const uxuiMilestones = [
          {
            icon: '/images/home/achievement/framer_award.svg',
            dark_icon: '/images/home/achievement/dark_framer_award.svg',
            sub_title: 'Revolución del Mouse',
            title: 'Douglas Engelbart presenta el primer mouse y la interfaz gráfica, cambiando para siempre la interacción humano-computadora.',
            year: '1968',
            url: 'https://www.dougengelbart.org/',
          },
          {
            icon: '/images/home/achievement/dribble_award.svg',
            dark_icon: '/images/home/achievement/dribble_award.svg',
            sub_title: 'Nacimiento del GUI',
            title: 'Xerox Alto introduce la primera interfaz gráfica comercial con ventanas, iconos y menús.',
            year: '1973',
            url: 'https://computerhistory.org/',
          },
          {
            icon: '/images/home/achievement/awward_award.svg',
            dark_icon: '/images/home/achievement/dark_awward_award.svg',
            sub_title: 'Era del Diseño Centrado en el Usuario',
            title: 'Don Norman publica "The Design of Everyday Things", estableciendo los principios fundamentales del UX.',
            year: '1988',
            url: 'https://jnd.org/',
          },
          {
            icon: '/images/home/achievement/framer_award.svg',
            dark_icon: '/images/home/achievement/dark_framer_award.svg',
            sub_title: 'Web para Todos',
            title: 'Tim Berners-Lee crea la World Wide Web, democratizando el acceso a la información global.',
            year: '1990',
            url: 'https://www.w3.org/',
          },
          {
            icon: '/images/home/achievement/dribble_award.svg',
            dark_icon: '/images/home/achievement/dribble_award.svg',
            sub_title: 'Revolución Táctil',
            title: 'Apple iPhone redefine la interacción móvil con gestos táctiles intuitivos y diseño minimalista.',
            year: '2007',
            url: 'https://www.apple.com/',
          },
          {
            icon: '/images/home/achievement/awward_award.svg',
            dark_icon: '/images/home/achievement/dark_awward_award.svg',
            sub_title: 'Diseño Responsivo',
            title: 'Ethan Marcotte introduce el concepto de Responsive Web Design, adaptando interfaces a cualquier pantalla.',
            year: '2010',
            url: 'https://alistapart.com/article/responsive-web-design/',
          }
        ];
        
        setMilestonesList(uxuiMilestones)
      } catch (error) {
        console.error('Error fetching milestones:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.2 },
  })

  return (
    <section id='hitos'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-4xl text-center mx-auto'>
              <h2>
                Los hitos que revolucionaron el
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}diseño digital
                </span>
              </h2>
              <p className='text-dark_black/60 dark:text-white/60 mt-4'>
                Momentos decisivos en la historia que transformaron la forma en que 
                interactuamos con la tecnología y establecieron los fundamentos del UX/UI moderno.
              </p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {milestonesList?.map((milestone:any, index:any) => {
                return (
                  <motion.div {...bottomAnimation(index)} key={index}>
                    <SingleAchievement achievements={milestone} />
                  </motion.div>
                )
              })}
            </div>
            
            <div className='text-center'>
              <p className='text-dark_black/70 dark:text-white/70 max-w-2xl mx-auto'>
                Cada uno de estos momentos no solo cambió la tecnología, sino que redefinió 
                la relación entre humanos y máquinas, sentando las bases para el diseño 
                centrado en el usuario que practicamos hoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UXUIMilestones