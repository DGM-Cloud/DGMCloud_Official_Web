export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';

export const dictionaries = {
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      cta: 'Get in Touch',
      menu: 'Menu',
      langEn: 'EN',
      langEs: 'ES',
      logoAria: 'Go to top — DGM CLOUD',
    },
    hero: {
      eyebrow: 'Elite Software Engineering Firm',
      subtitle:
        'Precision engineering meets architectural elegance. We build systems that don\'t just work—they perform.',
      ctaPrimary: 'Start Project',
      ctaSecondary: 'View Work',
    },
    techSpecs: {
      s1: 'High-Performance .NET Cores',
      s2: 'Scalable Next.js Architectures',
      s3: 'ISO-Standard Quality Assurance',
    },
    expertise: {
      web: {
        label: '01 / Web Solutions',
        title: 'Next-Gen Web Applications',
        body:
          'We architect scalable front-ends with React and TypeScript, paired with back-ends that handle millions of concurrent requests without flinching.',
      },
      mobile: {
        label: '02 / Mobile Apps',
        title: 'Native & Cross-Platform',
        body:
          'From Swift and Kotlin to React Native and Flutter, we ship performant mobile experiences that feel at home on every device.',
      },
      arch: {
        label: '03 / Cloud Infrastructure',
        title: 'System Architecture at Scale',
        body:
          'Distributed systems, event-driven microservices, and resilient cloud infrastructure designed to evolve with your business—not become tomorrow\'s technical debt.',
      },
    },
    features: {
      kicker: 'Why Choose DGM Cloud',
      title: 'Engineering Philosophy',
      cta: 'Start Your Project',
      ctaHint: 'Ready to experience the difference?',
      f1: {
        title: 'Precision Engineering',
        subtitle: 'Apple-level attention to detail',
        description:
          'Every line of code, every pixel, every interaction is crafted for perfection. We treat software as a craft, not a commodity.',
      },
      f2: {
        title: 'Enterprise Grade',
        subtitle: '.NET-level robustness',
        description:
          'Scalable architectures built to handle millions of users without breaking a sweat. Battle-tested patterns, zero shortcuts.',
      },
      f3: {
        title: 'Future Proof',
        subtitle: 'Technology-agnostic approach',
        description:
          'Systems designed to evolve with your business, not become legacy code. We architect for the next decade, not the next sprint.',
      },
    },
    tech: {
      title: 'Modern Tech Stack',
      subtitle: 'Built with industry-leading technologies and best practices',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Mobile: 'Mobile',
        DevOps: 'DevOps',
      },
    },
    portfolio: {
      kicker: 'Selected work',
      title: 'Portfolio',
      subtitle: 'Production websites we have shipped — live references you can explore.',
      badgeWeb: 'Web',
      badgeMobile: 'Mobile',
      badgeCloud: 'Cloud',
      visitSite: 'Visit website',
      previewUnavailable:
        'Live snapshot unavailable in this preview — click the card to open the site.',
      footnote: 'Want something comparable for your roadmap?',
      footnoteCta: 'Start a conversation',
      projects: {
        moreCorporation: {
          title: 'More Corporation',
          description:
            'Corporate presence for consulting and construction lines — modern positioning, clear service routes, and a polished brand narrative aimed at institutional clients.',
          stack: 'Corporate website · responsive · performance-focused UX',
        },
        boomTea: {
          title: 'Boom Tea',
          description:
            'Bubble tea brand experience with ordering CTAs, flavor highlights, and storytelling around Peruvian ingredients — built for discovery and conversion.',
          stack: 'WordPress · consumer QSR UX · multilingual-ready structure',
        },
      },
    },
    contact: {
      title: 'Ready to Build?',
      subtitle: "Let's discuss your project and bring your vision to life",
      labelName: 'name',
      labelEmail: 'email',
      labelProject: 'project_type',
      labelMessage: 'message',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderMessage: 'Tell us about your project...',
      selectPlaceholder: 'Select project type...',
      optWeb: 'Web Application',
      optMobile: 'Mobile App',
      optCloud: 'Cloud Infrastructure',
      optBackend: 'Backend Infrastructure',
      optOther: 'Other',
      success: "Message sent successfully! We'll be in touch soon.",
      error: 'Error sending message. Please try again.',
      sending: 'Sending...',
      submit: 'send_request',
    },
    footer: {
      tagline: 'Elite software engineering for the most demanding projects.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      servicesTitle: 'Services',
      svcWeb: 'Web Development',
      svcMobile: 'Mobile Apps',
      svcCloud: 'Cloud Infrastructure',
      svcConsulting: 'Consulting',
      follow: 'Follow Us',
      socialInstagram: 'Instagram',
      socialTiktok: 'TikTok',
      socialGithub: 'GitHub',
      rights: '© 2026 DGM CLOUD. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      portfolio: 'Portafolio',
      about: 'Nosotros',
      cta: 'Contactar',
      menu: 'Menú',
      langEn: 'EN',
      langEs: 'ES',
      logoAria: 'Ir al inicio — DGM CLOUD',
    },
    hero: {
      eyebrow: 'Firma de ingeniería de software de élite',
      subtitle:
        'Ingeniería de precisión con elegancia arquitectónica. Construimos sistemas que no solo funcionan: rinden.',
      ctaPrimary: 'Iniciar proyecto',
      ctaSecondary: 'Ver trabajo',
    },
    techSpecs: {
      s1: 'Núcleos .NET de alto rendimiento',
      s2: 'Arquitecturas Next.js escalables',
      s3: 'Aseguramiento de calidad tipo ISO',
    },
    expertise: {
      web: {
        label: '01 / Soluciones web',
        title: 'Aplicaciones web de nueva generación',
        body:
          'Diseñamos front-ends escalables con React y TypeScript, junto a backends que soportan millones de peticiones concurrentes sin titubeos.',
      },
      mobile: {
        label: '02 / Apps móviles',
        title: 'Nativas y multiplataforma',
        body:
          'De Swift y Kotlin a React Native y Flutter: experiencias móviles fluidas que se sienten nativas en cada dispositivo.',
      },
      arch: {
        label: '03 / Infraestructura cloud',
        title: 'Arquitectura de sistemas a escala',
        body:
          'Sistemas distribuidos, microservicios orientados a eventos e infraestructura resiliente pensada para evolucionar con tu negocio, no como deuda técnica.',
      },
    },
    features: {
      kicker: 'Por qué DGM Cloud',
      title: 'Filosofía de ingeniería',
      cta: 'Empezar tu proyecto',
      ctaHint: '¿Listo para notar la diferencia?',
      f1: {
        title: 'Ingeniería de precisión',
        subtitle: 'Nivel de detalle tipo Apple',
        description:
          'Cada línea de código, cada píxel y cada interacción están pensados para la excelencia. El software como oficio, no como commodity.',
      },
      f2: {
        title: 'Grado empresarial',
        subtitle: 'Robustez a la altura de .NET',
        description:
          'Arquitecturas escalables para millones de usuarios sin sudores fríos. Patrones probados en batalla y cero atajos.',
      },
      f3: {
        title: 'A prueba de futuro',
        subtitle: 'Enfoque agnóstico al stack',
        description:
          'Sistemas que evolucionan con tu negocio y no acaban como legacy. Arquitectura para la próxima década, no solo para el próximo sprint.',
      },
    },
    tech: {
      title: 'Stack tecnológico moderno',
      subtitle: 'Construido con tecnologías líderes y buenas prácticas',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Mobile: 'Móvil',
        DevOps: 'DevOps',
      },
    },
    portfolio: {
      kicker: 'Trabajo destacado',
      title: 'Portafolio',
      subtitle: 'Sitios en producción que puedes visitar — referencias reales.',
      badgeWeb: 'Web',
      badgeMobile: 'Móvil',
      badgeCloud: 'Cloud',
      visitSite: 'Visitar sitio',
      previewUnavailable:
        'La captura en vivo no está disponible aquí — haz clic en la tarjeta para abrir el sitio.',
      footnote: '¿Te gustaría algo parecido en tu roadmap?',
      footnoteCta: 'Hablemos',
      projects: {
        moreCorporation: {
          title: 'More Corporation',
          description:
            'Presencia corporativa para líneas de consulting y construcción — posicionamiento actual, rutas de servicio claras y narrativa de marca orientada a clientes institucionales.',
          stack: 'Web corporativo · responsive · UX enfocado en rendimiento',
        },
        boomTea: {
          title: 'Boom Tea',
          description:
            'Experiencia de marca bubble tea con llamadas a la acción para pedidos, destacados de sabores e historia en torno a ingredientes peruanos — pensada para descubrimiento y conversión.',
          stack: 'WordPress · UX retail/QSR · estructura lista para multi-idioma',
        },
      },
    },
    contact: {
      title: '¿Construimos algo juntos?',
      subtitle: 'Hablemos de tu proyecto y pongamos en marcha tu visión',
      labelName: 'nombre',
      labelEmail: 'email',
      labelProject: 'tipo_proyecto',
      labelMessage: 'mensaje',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'tu@email.com',
      placeholderMessage: 'Cuéntanos sobre tu proyecto...',
      selectPlaceholder: 'Tipo de proyecto...',
      optWeb: 'Aplicación web',
      optMobile: 'App móvil',
      optCloud: 'Infraestructura cloud',
      optBackend: 'Infra backend',
      optOther: 'Otro',
      success: '¡Mensaje enviado! Te contactaremos pronto.',
      error: 'Error al enviar. Inténtalo de nuevo.',
      sending: 'Enviando...',
      submit: 'enviar_solicitud',
    },
    footer: {
      tagline: 'Ingeniería de software de élite para los proyectos más exigentes.',
      quickLinks: 'Enlaces rápidos',
      contact: 'Contacto',
      servicesTitle: 'Servicios',
      svcWeb: 'Desarrollo web',
      svcMobile: 'Apps móviles',
      svcCloud: 'Infraestructura cloud',
      svcConsulting: 'Consultoría',
      follow: 'Síguenos',
      socialInstagram: 'Instagram',
      socialTiktok: 'TikTok',
      socialGithub: 'GitHub',
      rights: '© 2026 DGM CLOUD. Todos los derechos reservados.',
      privacy: 'Política de privacidad',
      terms: 'Términos del servicio',
    },
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type Messages = (typeof dictionaries)[Locale];
