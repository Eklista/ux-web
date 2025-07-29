// src/app/api/footer-data/route.ts
import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "UX/UI Hub",
        tagline: "Tu portal de información sobre diseño de experiencia e interfaz de usuario. Descubre casos, herramientas y pioneros que están transformando el mundo digital.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/in"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com"
            }
        ]
    },
    explore: {
        name: "Explorar",
        links: [
            { name: "Casos de Estudio", url: "/#casos-estudio" },
            { name: "Herramientas UX/UI", url: "/#herramientas" },
            { name: "Pioneros del Diseño", url: "/#referentes" },
            { name: "Hitos Históricos", url: "/#hitos" },
            { name: "Recursos", url: "/recursos" }
        ]
    },
    learn: {
        name: "Aprender",
        links: [
            { name: "¿Qué es UX/UI?", url: "/#aboutus" },
            { name: "Metodologías", url: "/metodologias" },
            { name: "Preguntas Frecuentes", url: "/#faq" },
            { name: "Glosario de Términos", url: "/glosario" },
            { name: "Blog", url: "/blog" }
        ]
    },
    legal: {
        name: "Legal",
        links: [
            { name: "Términos y Condiciones", url: "/terms-and-conditions" },
            { name: "Política de Privacidad", url: "/privacy-policy" },
            { name: "Documentación", url: "/documentation" },
            { name: "Contacto", url: "/contact" }
        ]
    },
    about: {
        name: "Acerca del Proyecto",
        description: "Sitio web informativo creado como proyecto académico para la Universidad Galileo.",
        details: [
            "Facultad de Ciencias de la Comunicación",
            "Licenciatura en Comunicación y Diseño",
            "Asignatura: Diseño de Páginas Web"
        ]
    },
    copyright: "©2025 UX/UI Hub - Proyecto Académico Universidad Galileo. Todos los derechos reservados."
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};