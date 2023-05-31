import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Modelos de quadro branco por líderes da indústria',
  'Trailer de trailer inspirado em Tesla Cybertruck para os fãs de Tesla que mal podem esperar pelo caminhão!',
  'Guarda Chuva ',
  '✨O que está feito está feito✨',
  'Novo principe',
  'Estúdio Seis Meias',
  'Travessia de Vincenzo de Cotiis mostra pesquisa sobre contaminação',
  'Animações simples e bonitas em seu projeto | Vídeo tutorial',
  '40 fontes com serifa gratuitas para designers digitais',
  'Examinando a evolução do típico cliente de web design',
  'Katie Griffin adora fazer aquela arte caseira',
  ' O sonho americano recontado através de gráficos ferroviários de meados do século',
  'Projeto de sistema de ilustração',
  'CarZio-Delivery Driver App Entrar/Inscrever-se',
  'Como criar um aplicativo Jamstack sem servidor cliente usando Netlify, Gatsby e Fauna',
  'Tylko Organize sem esforço -3D e Motion Design',
  'RAIO ?? Uma identidade expandida do festival de artes visuais',
  'Anthony Burrill e Andrew Diprose, da revista Wired, discutem como eles fizeram a capa de Change Everything de janeiro',
  'Dentro da Mente do Dia do Samuel',
  'Revisão do Portfólio: Este Portfólio é Muito Criativo?',
  'Akkers van Margraten',
  'Ícone do ticket de gradiente',
  'Aqui está um conceito de motocicleta Dyson que não suga!',
  ' Como animar um SVG com imagem de borda',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
