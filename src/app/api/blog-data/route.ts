// src/app/api/blog-data/route.ts
import { NextResponse } from 'next/server'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'La Historia del UX Design: De la Ergonomía al Diseño Digital',
    slug: 'historia-del-ux-design',
    excerpt: 'Explora cómo el diseño centrado en el usuario evolucionó desde los estudios de ergonomía industrial hasta convertirse en una disciplina fundamental del diseño digital moderno.',
    author: 'Equipo UX/UI Hub',
    publishDate: '2025-01-15',
    readTime: '8 min',
    category: 'Historia',
    tags: ['UX Design', 'Historia', 'Ergonomía'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Los 10 Principios Heurísticos de Jakob Nielsen',
    slug: 'principios-heuristicos-nielsen',
    excerpt: 'Análisis detallado de los 10 principios fundamentales de usabilidad que todo diseñador UX/UI debe conocer y aplicar en sus proyectos.',
    author: 'Equipo UX/UI Hub',
    publishDate: '2025-01-12',
    readTime: '12 min',
    category: 'Metodología',
    tags: ['Jakob Nielsen', 'Heurísticas', 'Usabilidad'],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80',
    featured: true
  },
  {
    id: '3',
    title: 'Design Thinking en la Práctica: Metodología Paso a Paso',
    slug: 'design-thinking-practica',
    excerpt: 'Aprende a aplicar la metodología de Design Thinking en proyectos reales. Desde la empatía hasta el prototipado, con ejemplos prácticos.',
    author: 'Equipo UX/UI Hub',
    publishDate: '2025-01-10',
    readTime: '15 min',
    category: 'Metodología',
    tags: ['Design Thinking', 'Metodología', 'Innovación'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80',
    featured: false
  },
  {
    id: '4',
    title: 'Herramientas Esenciales para UX/UI Design en 2025',
    slug: 'herramientas-esenciales-ux-ui-2025',
    excerpt: 'Descubre las herramientas más importantes que todo diseñador UX/UI debe dominar, desde investigación hasta prototipado y colaboración.',
    author: 'Equipo UX/UI Hub',
    publishDate: '2025-01-08',
    readTime: '10 min',
    category: 'Herramientas',
    tags: ['Figma', 'Herramientas', 'Productividad'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80',
    featured: false
  }
]

export const GET = async () => {
  return NextResponse.json({
    posts: blogPosts,
    totalPosts: blogPosts.length,
    featuredPosts: blogPosts.filter(post => post.featured),
    categories: ['Historia', 'Metodología', 'Herramientas', 'Casos de Estudio'],
    tags: ['UX Design', 'UI Design', 'Figma', 'Jakob Nielsen', 'Design Thinking']
  })
}