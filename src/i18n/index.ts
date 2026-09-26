export type Locale = 'es' | 'en';

export const copy = {
  es: {
    nav: { products: 'Productos', security: 'Seguridad', faq: 'FAQ', access: 'Solicitar acceso' },
    hero: {
      eyebrow: 'ANCLORA SECUREFLOW',
      title: 'Del archivo original al dato listo para usar.',
      body: 'Prepara archivos, protege información sensible, extrae datos y automatiza tus flujos de trabajo.',
      primary: 'Solicitar acceso',
      secondary: 'Descubrir SecureFlow',
    },
    products: { eyebrow: 'NUESTRAS SOLUCIONES', title: 'Cuatro capacidades, un flujo completo.', link: 'Conocer producto' },
    security: {
      eyebrow: 'SEGURIDAD POR DISEÑO', title: 'Tus datos, siempre bajo control.',
      items: [
        ['Confidencialidad', 'Procesamiento orientado a proteger información sensible.'],
        ['Integridad', 'Resultados trazables, verificables y reproducibles.'],
        ['Cumplimiento', 'Herramientas diseñadas para flujos documentales y de datos controlados.'],
      ],
      cta: 'Solicitar acceso de evaluación',
    },
    faq: {
      eyebrow: 'PREGUNTAS FRECUENTES', title: 'Resolvemos tus dudas.',
      questions: [
        ['¿Puedo utilizar una sola aplicación?', 'Sí. Cada producto puede utilizarse individualmente según el flujo que necesites resolver.'],
        ['¿Puedo contratar un pack de dos, tres o cuatro aplicaciones?', 'Sí. Los packs conceden permisos sobre varios productos desde una misma cuenta.'],
        ['¿Cómo funciona el acceso mediante whitelist?', 'La whitelist se gestiona por usuario y producto. El acceso se habilita solo para las aplicaciones autorizadas.'],
        ['¿Se almacenan mis documentos?', 'Cada aplicación define su propio flujo de procesamiento. SecureFlow no promete almacenamiento común donde no existe.'],
        ['¿Puedo ampliar mi acceso más adelante?', 'Sí. Puedes solicitar que se añadan productos o cambiar a un pack más amplio.'],
        ['¿Se añadirán nuevas aplicaciones a SecureFlow?', 'Sí. El catálogo está preparado para incorporar nuevas aplicaciones sin cambiar tu cuenta.'],
      ],
    },
    form: {
      eyebrow: 'ÚNETE A LA LISTA DE ACCESO ANTICIPADO', title: 'Prepara tu flujo de datos con más seguridad.',
      body: 'Solicita acceso a una aplicación concreta o a un pack de SecureFlow.', name: 'Nombre', email: 'Email', company: 'Empresa', product: 'Producto o pack de interés', message: 'Mensaje opcional', submit: 'Solicitar acceso', note: 'El formulario queda preparado para conectar con la whitelist. Todavía no se ha enviado ningún dato.',
    },
    footer: 'Datos seguros. Organizaciones más inteligentes.',
  },
  en: {
    nav: { products: 'Products', security: 'Security', faq: 'FAQ', access: 'Request access' },
    hero: { eyebrow: 'ANCLORA SECUREFLOW', title: 'From the original file to data ready to use.', body: 'Prepare files, protect sensitive information, extract data and automate your workflows.', primary: 'Request access', secondary: 'Discover SecureFlow' },
    products: { eyebrow: 'OUR SOLUTIONS', title: 'Four capabilities, one complete flow.', link: 'Learn about the product' },
    security: { eyebrow: 'SECURITY BY DESIGN', title: 'Your data, always under control.', items: [['Confidentiality', 'Processing designed to protect sensitive information.'], ['Integrity', 'Traceable, verifiable and reproducible results.'], ['Compliance', 'Tools designed for controlled document and data workflows.']], cta: 'Request evaluation access' },
    faq: { eyebrow: 'FREQUENTLY ASKED QUESTIONS', title: 'Answers, without the noise.', questions: [['Can I use a single application?', 'Yes. Each product can be used independently for the workflow you need to solve.'], ['Can I purchase a pack of two, three or four applications?', 'Yes. Packs grant access to several products from one account.'], ['How does whitelist access work?', 'Whitelist access is managed per user and product.'], ['Are my documents stored?', 'Each application defines its own processing flow. SecureFlow does not promise shared storage where none exists.'], ['Can I expand my access later?', 'Yes. Request additional products or move to a wider pack.'], ['Will new applications be added to SecureFlow?', 'Yes. The catalogue is prepared for future applications without changing your account.']] },
    form: { eyebrow: 'JOIN THE EARLY ACCESS LIST', title: 'Prepare your data flow with more security.', body: 'Request access to one SecureFlow application or a pack.', name: 'Name', email: 'Email', company: 'Company', product: 'Product or pack of interest', message: 'Optional message', submit: 'Request access', note: 'The form is ready to connect to the whitelist. No data has been sent yet.' },
    footer: 'Safer data. Smarter organisations.',
  },
} as const;
