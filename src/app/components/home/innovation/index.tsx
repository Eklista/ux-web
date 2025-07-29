// src/app/components/home/innovation/index.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function UXUIAreas() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [uxuiAreas, setUxuiAreas] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Por ahora usamos los datos existentes, luego los cambiaremos
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        // Adaptamos los datos existentes para áreas UX/UI
        const adaptedData = [
          {
            image: '/images/home/innovation/brand.svg',
            title: 'Investigación\nde Usuarios',
            bg_color: 'bg-purple/20',
            txt_color: 'text-purple',
            description: 'Metodologías para entender usuarios y validar necesidades'
          },
          {
            image: '/images/home/innovation/digitalmarketing.svg', 
            title: 'Wireframes\ny Flujos',
            bg_color: 'bg-blue/20',
            txt_color: 'text-blue',
            description: 'Estructuras y flujos de navegación efectivos'
          },
          {
            image: '/images/home/innovation/uiux.svg',
            title: 'Prototipos\nInteractivos', 
            bg_color: 'bg-orange/20',
            txt_color: 'text-orange',
            description: 'Prototipos clickeables para validar conceptos'
          },
          {
            image: '/images/home/innovation/analitics.svg',
            title: 'Diseño\nVisual',
            bg_color: 'bg-green/20', 
            txt_color: 'text-green',
            description: 'Interfaces visuales atractivas y funcionales'
          },
          {
            image: '/images/home/innovation/webdevp.svg',
            title: 'Pruebas de\nUsabilidad',
            bg_color: 'bg-pink/20',
            txt_color: 'text-pink', 
            description: 'Pruebas para optimizar la experiencia de usuario'
          }
        ];
        setUxuiAreas(adaptedData)
      } catch (error) {
        console.error('Error fetching areas:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = (index: any) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })

  return (
    <section id='herramientas'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-3xl text-center'>
                <h2>
                  Domina las 5 áreas fundamentales del
                  <span className='instrument-font italic font-normal dark:text-white/70'>
                    {' '}diseño UX/UI
                  </span>
                </h2>
                <p className='text-dark_black/60 dark:text-white/60 mt-4'>
                  Cada área incluye casos de estudio, herramientas recomendadas y 
                  recursos prácticos para aplicar en proyectos reales.
                </p>
              </motion.div>
              <motion.div
                {...bottomAnimation(2)}
                className='grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full'>
                {uxuiAreas?.map((area:any, index:any) => {
                  return (
                    <div
                      key={index}
                      className={`${area.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9 hover:scale-105 transition-all duration-300 cursor-pointer group`}>
                      <div>
                        <Image
                          src={area.image}
                          alt={area.title}
                          height={40}
                          width={40}
                        />
                      </div>
                      <div className='flex flex-col gap-3'>
                        <h5 className={`${area.txt_color}`}>
                          {area.title.split('\n')?.map((line:any, i:number) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h5>
                        <p className='text-sm text-dark_black/70 dark:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          {area.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>
            <motion.div
              {...bottomAnimation(3)}
              className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full'>
              <div className='text-center xl:text-left'>
                <h4 className='text-white mb-2'>
                  ¿Listo para profundizar en UX/UI?
                </h4>
                <p className='text-white/70'>
                  Explora nuestros casos de estudio detallados y recursos prácticos
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <Link
                  href='/#casos-estudio'
                  className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                    Ver Casos de Estudio
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='#1B1D1E'
                      className='transition-colors duration-200 ease-in-out group-hover:fill-white'
                    />
                    <path
                      d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                      stroke='white'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='group-hover:stroke-black'
                    />
                  </svg>
                </Link>
                <Link
                  href='/recursos'
                  className='group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                    Explorar Recursos
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out'>
                    <rect width='32' height='32' rx='16' fill='white' />
                    <path
                      d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                      stroke='#1B1D1E'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UXUIAreas