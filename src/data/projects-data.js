import webstudio from 'assets/images/webstudio.png';
import foodsta from 'assets/images/foodsta.png';
import ecosolution from 'assets/images/ecosolution.png';
import weatherapp from 'assets/images/weatherapp.png';
import phonebook from 'assets/images/phonebook.png';
import project from 'assets/images/future-project.jpg';

import {
  HtmlImg,
  CssImg,
  SaasImg,
  FigmaImg,
  WebPackImg,
  JsImg,
  TsImg,
  ReactImg,
  ReduxImg,
  MuiImg,
  NodeImg,
  MongoDBImg,
  DockerImg,
} from '../assets/icons/IconsComponent';

const projectsData = [
  {
    id: 1,
    projectName: 'WebStudio',
    projectImg: webstudio,
    projectUrl: 'https://mythosone.github.io/goit-markup-hw-08/index.html',
    projectGit: 'https://github.com/MythosOne/goit-markup-hw-08',
    description:
      'The "WebStudio" website is designed to showcase the services and projects of a web studio. The main page features a modern and attractive design with bright visual elements and a clear structure. The site provides information about the services offered, the team of specialists, client testimonials, and contact details. In the "Portfolio" section, visitors can view completed projects by the studio. The website is fully responsive, ensuring a convenient experience on all devices.',
    techStack: [
      <HtmlImg width={'32'} />,
      <CssImg width={'32'} />,
      <SaasImg width={'32'} />,
      <FigmaImg width={'32'} />,
      <WebPackImg width={'32'} />,
    ],
  },
  {
    id: 2,
    projectName: 'FoodSta',
    projectImg: foodsta,
    projectUrl:
      'https://antonrybak25.github.io/team-project/index.html#customers',
    projectGit: 'https://github.com/AntonRybak25/team-project',
    description:
      'The FoodStar website offers online food ordering services with an emphasis on fast delivery and a varied menu. Main sections include information about services, special offers, customer reviews and a subscription form to receive promotions. The website features images of various dishes and emphasizes the ease of ordering. The site is fully responsive, ensuring convenient use on any device.',
    techStack: [
      <HtmlImg width={'32'} />,
      <CssImg width={'32'} />,
      <SaasImg width={'32'} />,
      <FigmaImg width={'32'} />,
      <WebPackImg width={'32'} />,
    ],
  },
  {
    id: 3,
    projectName: 'Ecocolution',
    projectImg: ecosolution,
    projectUrl: 'https://mythosone.github.io/ecosolution-app/#main',
    projectGit: 'https://github.com/MythosOne/ecosolution-app',
    description:
      'The "EcoSolution" website is designed to showcase eco-friendly solutions and initiatives. The main page features a modern and appealing design, emphasizing visual elements and easy navigation. The site provides information about various environmental projects, products, and services aimed at improving the environment. Sections like "About Us," "Our Projects," and "Contact" allow visitors to learn more about the team and its activities. The website is fully responsive, ensuring a convenient experience on all devices.',
    techStack: [<FigmaImg width={'32'} />, <ReactImg width={'32'}/>],
  },
  {
    id: 4,
    projectName: 'WeatherApp',
    projectImg: weatherapp,
    projectUrl: 'https://mythosone.github.io/weather-app/',
    projectGit: 'https://github.com/MythosOne/weather-app',
    description:
      'The "Weather App" website offers a user-friendly platform for checking current weather conditions and forecasts. The main page features a clean and intuitive design, allowing users to quickly access weather information for different locations. Key features include real-time updates, detailed forecasts, and an easy-to-use search function. The website is fully responsive, ensuring a seamless experience on all devices.',
    techStack: [<ReactImg width={'32'}/>],
  },
  {
    id: 5,
    projectName: 'PhoneBook',
    projectImg: phonebook,
    projectUrl: 'https://mythosone.github.io/react-phonebook-mui/',
    projectGit: 'https://github.com/MythosOne/react-phonebook-mui',
    description:
      'The "React Phonebook" website is a convenient digital address book developed using React and Material-UI. The main page features a modern and functional design, providing easy access to key features. Users can add, edit, and delete contacts, as well as quickly find the necessary entries using the built-in search.',
    techStack: [<ReactImg width={'32'}/>, <MuiImg width={'32'}/>, <NodeImg width={'32'}/>, <MongoDBImg width={'32'}/>, <DockerImg width={'32'}/>, <ReduxImg width={'32'}/>, ],
  },
  {
    id: 6,
    projectName: 'Future Project',
    projectImg: project,
    projectUrl: 'http://',
    projectGit: 'http://',
    description:
      'New project coming soon.',
    techStack: [<ReactImg width={'32'}/>],
  },
];

export default projectsData;
