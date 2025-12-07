// app/sitemap.js

export default function sitemap() {
  // 1. Dominio Base: Debe coincidir con la URL de tu sitio
  const baseUrl = 'https://bufetejuridicopty.com'; 

  // 2. Fecha de la última modificación (Puedes cambiarla a la fecha actual)
  const lastUpdated = new Date();

  return [
    {
      // HOME PAGE: La página más importante
      url: baseUrl, 
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 1, // Máxima prioridad para el inicio
    },
    {
      // PÁGINA: Áreas de Práctica
      url: `${baseUrl}/areas-de-practica`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      // PÁGINA: Sobre Nosotros
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // PÁGINA: Contacto (Importante para la conversión)
      url: `${baseUrl}/contacto`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      // PÁGINA: Términos de Servicio (Ubicada en /terminos)
      url: `${baseUrl}/terminos`, 
      lastModified: lastUpdated,
      changeFrequency: 'yearly', // Los términos cambian raramente
      priority: 0.5, 
    },
    {
      // PÁGINA: Política de Privacidad
      url: `${baseUrl}/privacidad`, 
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Nota: La ruta /api/contact NO se incluye, ya que es una ruta de backend (API) y no una página visible para el usuario.
  ];
}