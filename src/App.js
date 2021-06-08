import React from 'react';
import Section from './components/Section/Section';
import BoxArticles from './components/Article/Box';
import Article from './components/Article/Article';

import twitter from './images/twitter.webp';
import almacenamiento from './images/almacenamiento.webp';
import appleTv from './images/appleTv.webp';
import auriculares from './images/auriculares.webp';
import firefox from './images/firefox.webp';
import harmonyOS from './images/harmonyOS.webp';
import huawei from './images/huawei.webp';
import play4 from './images/play4.jpg';
import portalVirtual from './images/portalVirtual.jpeg';
import quantum from './images/quantum.webp';
import whatsapp from './images/whatsapp.jpg';
import windows from './images/windows.webp';

import autor1 from './images/autor1.png';
import autor2 from './images/autor2.png';

const articles = [
  {
    urlImage: windows,
    volanta: 'Windows',
    title: '¿Llega Windows 11? Microsoft presentará una nueva versión en 3 semanas',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: whatsapp,
    volanta: 'WhatsApp',
    title: 'WhatsApp: se podrá usar en 4 equipos al mismo tiempo y tendrá versión para iPad',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: portalVirtual,
    volanta: 'Portal',
    title: 'Con un portal virtual: este es el llamativo sistema de videollamadas de Lituania',
    bajada: '',
    marquesina: 'Marquee',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: twitter,
    volanta: 'Twitter',
    title: 'Como Facebook: Twitter prueba reacciones para expresar ánimo y tristeza',
    bajada: '',
    marquesina: 'Marquesina 1',
    author: '',
    imageAuthor: '',
    url: 'https://www.lanacion.com.ar/agencias/twitter-estudia-insertar-reacciones-a-los-tuits-como-animado-triste-o-hmm-nid31052021/'
  },
  {
    urlImage: auriculares,
    volanta: '',
    title: 'Auriculares: los nuevos de Google traducen a 40 idiomas en tiempo real',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: windows,
    volanta: 'Windows',
    title: '¿Llega Windows 11? Microsoft presentará una nueva versión en 3 semanas',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: '',
    volanta: 'Twitter',
    title: 'Como Facebook: Twitter prueba reacciones para expresar ánimo y tristeza',
    bajada: 'La red social trabaja en nuevas funciones que permiten ampliar las opciones de expresión más allá del actual botón Me gusta',
    marquesina: '',
    author: '',
    imageAuthor: autor2,
    url: '#'
  },
  {
    urlImage: firefox,
    volanta: 'Firefox',
    title: 'Firefox 89: un nuevo navegador con pestañas flotantes y menos notificaciones',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: harmonyOS,
    volanta: 'HarmonyOS',
    title: 'HarmonyOS: Huawei presenta su sistema operativo alternativo a Android',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: huawei,
    volanta: 'Huawei',
    title: 'Enormes: así lucen las cuatro cámaras del teléfono P50 de Huawei',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: play4,
    volanta: 'PlayStation',
    title: 'PlayStation 4: ¿sigue siendo una alternativa de compra en 2021?',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: quantum,
    volanta: 'Quantum',
    title: 'Quantum: el primer NFT de la historia será subastado esta semana',
    bajada: '',
    marquesina: '',
    author: '',
    imageAuthor: '',
    url: '#'
  },
  {
    urlImage: appleTv,
    volanta: 'Apple',
    title: 'Las aplicaciones de Apple TV y TV+ ya están disponibles para Android',
    bajada: '',
    marquesina: 'Marquesina 1',
    author: '',
    imageAuthor: '',
    url: 'https://www.lanacion.com.ar/agencias/las-aplicaciones-de-apple-tv-y-tv-llegan-a-los-televisores-android-tv-nid02062021/'
  },
  {
    urlImage: '',
    volanta: 'Almacenamiento',
    title: 'Online: opciones ahora que Google Fotos deja de ofrecer guardado ilimitado',
    bajada: 'A partir del 1 de junio Google solo ofrecerá 15 GB de almacenamiento online sin cargo tanto para los servicios Fotos, Gmail y Drive.',
    marquesina: 'Marquesina 2',
    author: '',
    imageAuthor: '',
    url: 'https://www.lanacion.com.ar/tecnologia/almacenamiento-online-opciones-ante-el-limite-de-capacidad-de-google-fotos-nid31052021/'
  },
  {
    urlImage: '',
    volanta: 'Democracia',
    title: 'Title cuando se dieron cuenta, los dos hermanos estaban preparándose para alunizar. ',
    bajada: '',
    marquesina: '',
    author: 'Andrés Oppenheimer',
    imageAuthor: autor1,
    url: 'https://www.lanacion.com.ar/opinion/la-democracia-mexicana-en-juego-nid02062021/'
  },
];

function App() {
  return (
    <div className='App'>
      <Section title='Notas x 3, 6, 9, 12'>
        <BoxArticles boxes={3}>
          {articles.map((article, idx) => (
            <Article
              key={idx}
              article={idx}
              contentArticle={article}
            />
          ))}
        </BoxArticles>
      </Section>
      <Section title='' url={articles.url}>
        <div className='box-section'>
          <BoxArticles boxes={1}>
          {articles.map((article, idx) => (
            <Article
              key={idx}
              article={idx}
              contentArticle={article}
            />
          ))}
        </BoxArticles>
          <BoxArticles boxes={2}>
          {articles.map((article, idx) => (
            <Article
              key={idx}
              article={idx}
              contentArticle={article}
            />
          ))}
        </BoxArticles>
        </div>
      </Section>
    </div>
  );
}

export default App;
