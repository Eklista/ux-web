// src/app/components/home/online-presence/index.tsx
'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function CaseStudiesShowcase() {
  const [caseStudiesList, setCaseStudiesList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Por ahora adaptamos los datos existentes, luego los cambiaremos
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        
        // Adaptamos los datos existentes para casos de estudio UX/UI
        const adaptedCases = [
          {
            image: '/images/home/onlinePresence/online_img_1.jpg',
            title: 'Rediseño de App Bancaria',
            description: 'Mejora de la experiencia de usuario en aplicación móvil bancaria, aumentando la satisfacción del usuario en un 40%.',
            category: 'App Móvil',
            methodology: ['Investigación de Usuarios', 'Prototipado', 'Testing A/B'],
            duration: '3 meses',
            challenge: 'Baja adopción y quejas de usabilidad',
            tools: ['Figma', 'Maze', 'UserTesting'],
            link: '/casos-estudio/app-bancaria'
          },
          {
            image: '/images/home/onlinePresence/online_img_2.jpg', 
            title: 'Plataforma E-learning',
            description: 'Diseño completo de interfaz para plataforma educativa, priorizando la accesibilidad y navegación intuitiva.',
            category: 'Web App',
            methodology: ['Arquitectura de Información', 'Diseño de Interfaz', 'Prototipado'],
            duration: '4 meses',
            challenge: 'Crear experiencia intuitiva para diferentes edades',
            tools: ['Sketch', 'InVision', 'Hotjar'],
            link: '/casos-estudio/e-learning'
          },
          {
            image: '/images/home/onlinePresence/online_img_3.jpg',
            title: 'Dashboard Analítico',
            description: 'Interfaz para visualización de datos complejos, simplificando la toma de decisiones empresariales.',
            category: 'Dashboard',
            methodology: ['Investigación de Usuarios', 'Visualización de Datos', 'Iteración'],
            duration: '2 meses', 
            challenge: 'Presentar datos complejos de forma simple',
            tools: ['Figma', 'Principle', 'Tableau'],
            link: '/casos-estudio/dashboard'
          },
          {
            image: '/images/home/onlinePresence/online_img_4.jpg',
            title: 'App de Delivery',
            description: 'Optimización del flujo de pedidos y mejora de la experiencia de entrega para usuarios y repartidores.',
            category: 'App Móvil',
            methodology: ['Mapeo de Experiencia', 'Prototipado Rápido', 'Testing de Usabilidad'],
            duration: '6 semanas',
            challenge: 'Coordinar múltiples tipos de usuarios',
            tools: ['Adobe XD', 'Marvel', 'Lookback'],
            link: '/casos-estudio/delivery'
          }
        ];
        
        setCaseStudiesList(adaptedCases)
      } catch (error) {
        console.error('Error fetching case studies:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='casos-estudio'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-3xl text-center'>
              <h2>
                Casos de estudio que demuestran la aplicación práctica del
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}diseño UX/UI
                </span>
              </h2>
              <p className='text-dark_black/60 dark:text-white/60 mt-4'>
                Explora proyectos reales donde se aplicaron metodologías de diseño centrado 
                en el usuario para resolver problemas complejos y generar resultados medibles.
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
              {caseStudiesList?.map((caso:any, index:any) => {
                return (
                  <div
                    key={index}
                    className='group flex flex-col gap-6 cursor-pointer'>
                    <div className='relative'>
                      <Image
                        src={caso.image}
                        alt={caso.title}
                        width={625}
                        height={410}
                        className='rounded-2xl'
                        unoptimized={true}
                      />

                      <Link
                        href={caso.link}
                        className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex'>
                        <span className='flex justify-end p-5 w-full'>
                          <Icon
                            icon='icon-park-solid:circle-right-up'
                            width='50'
                            height='50'
                            style={{ color: '#fbfbfb' }}
                          />
                        </span>
                      </Link>
                    </div>

                    <div className='flex flex-col items-start gap-4'>
                      <h5 className='group-hover:text-purple_blue'>
                        {caso.title}
                      </h5>
                      <div className='flex gap-3'>
                        {caso.methodology?.slice(0, 2).map((method:any, index:number) => (
                          <p
                            key={index}
                            className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white'>
                            {method}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link
              href='/casos-estudio'
              className='group bg-transparent border border-purple_blue text-purple_blue font-medium flex items-center gap-3 py-3 px-6 rounded-full hover:bg-purple_blue hover:text-white transition-all duration-200'>
              <span className='group-hover:translate-x-2 transform transition-transform duration-200 ease-in-out'>
                Ver todos los casos de estudio
              </span>
              <Icon icon='material-symbols:arrow-forward' width='20' height='20' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesShowcase