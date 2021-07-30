import './App.css';
import Background from './component/Background/Background';
import Interface from './component/Interface/Interface'
import Project from './component/Project/Project';
import View from './component/View/View';

function App() {

  const tab = [
    {
      icon: "https://pbs.twimg.com/media/E6Xg2uLX0AcQxoc?format=png&name=small", 
      title: "Application web pour étudiants", 
      date: "juillet 2021",
      description: "Il s'agit d'une plateforme d'entraide entre étudiants. Celle-ci permet le partage de documents entre les utilisateurs et comprend un forum permettant aux élèves de poser des questions dans des catégories dédiées.",
      screen: [
        
        {image: "https://pbs.twimg.com/media/E7gc5fbXEAcbO6b?format=jpg&name=4096x4096" , title: "Accueil"},
        {image: "https://pbs.twimg.com/media/E7gc5gHWQAMmetX?format=jpg&name=4096x4096" , title: "Explorateur de documents"},
        {image: "https://pbs.twimg.com/media/E7gc5gpXsAI-FzM?format=jpg&name=4096x4096" , title: "Editeur de texte"}
      ],
      current: 0
    },

    {
      icon: "https://img.icons8.com/emoji/480/ffffff/grinning-cat-emoji.png", 
      title: "Chat Mobile", 
      date: "juin 2021",
      description: "Il s'agit d'une application mobile conçue avec des langages du web. Elle permet aux utilisateurs de communiqué entre eux via des salons publics et privés.",
      screen: [
        {image: "https://pbs.twimg.com/media/E7gpx0aXMAEBbaD?format=jpg&name=large" , title: "Salons de discussions"},
        {image: "https://pbs.twimg.com/media/E7govi-XIAYLxjP?format=jpg&name=large" , title: "Messages"},
        {image: "https://pbs.twimg.com/media/E7go43MXMAIOW4J?format=jpg&name=large" , title: "Inscription"}
      ],
      current: 0
    },

    {
      icon: "https://pbs.twimg.com/media/E5FksAYXwAcAfCj?format=png&name=240x240", 
      title: "Site web Emergence", 
      date: "mars 2021",
      description: "Il s'agit d'un site web réalisé pour l'entreprise Émergence Entreprise. Ce site comprend une page d'accueil, 4 pages présentant l'activité de l'entreprise, une page de contact et un espace client.\n L'espace client permet aux utilisateurs qui s'y connecte de consulter et télécharger des documents. L'administrateur du site peut quant à lui gérer les utilisateurs, leurs documents et envoyer des mails automatiques depuis l'application.",
      screen: [
        {image: "https://pbs.twimg.com/media/E7gfJC8WYAY5cWs?format=jpg&name=4096x4096" , title: "Accueil"},
        {image: "https://pbs.twimg.com/media/E7gfGfmWEAw66NX?format=jpg&name=4096x4096" , title: "Nous Contacter"},
        {image: "https://pbs.twimg.com/media/E7gfKsEWYAA9ss8?format=jpg&name=4096x4096" , title: "Panel administrateur"}
      ],
      current: 0
    },

    {
      icon: "https://sam-0411.github.io/siteweb/image/icon/logo.png", 
      title: "Site marchand", 
      date: "janvier 2021",
      description: "Il s'agit d'un exercice qui m'a été donné à faire dans mon université. Je devais réaliser l'interface d'un site web marchand selon plusieurs contraintes liées aux langages de programmation utilisés.",
      screen: [
        {image: "https://pbs.twimg.com/media/E7ggDbEWEAMjzML?format=jpg&name=4096x4096" , title: "Liste d'articles"},
        {image: "https://pbs.twimg.com/media/E7ggFuRX0AMKSva?format=jpg&name=4096x4096" , title: "Détail d'un article"},
        
      ],
      current: 0
    },
  ]

  return (
    <div className="App">

      {window.innerWidth > 600 ? <>
      <Background />
      <Interface />
      <Project tab={tab} />

      <View tab={tab} />

      <footer>
        Portfolio du développeur Sami Hanine, tous droits réservés
      </footer>
      </> : <h1>Le site sera disponible prochainement sur téléphone !</h1>}

    </div>
  );
}

export default App;
