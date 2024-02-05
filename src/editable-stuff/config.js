// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Damla",
  middleName: "",
  lastName: "Metin Orak",
  message: " Unity Developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/damlaMtn",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/damlametinorak/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/damla.png"),
  imageSize: 375,
  message:
    "Hello! With over four years of experience as a Unity developer, I am passionate about creating engaging and immersive games and applications that leverage the power of Unity and C#. I enjoy working with a team of talented and diverse developers, designers, and artists who share the same vision and mission of delivering high-quality products and experiences. I am always eager to learn new technologies and tools that can enhance my performance and creativity as a Unity developer.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "damlaMtn", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  // show: false,
  // heading: "Leadership",
  // message:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  // images: [
  //   { 
  //     img: require("../editable-stuff/hashirshoaeb.png"), 
  //     label: "First slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
  //   },
  //   { 
  //     img: require("../editable-stuff/hashirshoaeb.png"), 
  //     label: "Second slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
  //   },
  // ],
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently open for Unity Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "damla91@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Unity Developer - Magic Media',// Here Add Company Name
      companylogo: require('../assets/img/magicmedia.jpeg'),
      date: 'July 2022 – December 2023',
    },
    {
      role: 'Unity Developer - Sarente Information Technologies',
      companylogo: require('../assets/img/sarente.jpeg'),
      date: 'August 2021 - June 2022',
    },
    {
      role: 'Unity Developer - DVM Technology Incorporated',
      companylogo: require('../assets/img/dvm.jpeg'),
      date: 'May 2021 - August 2021',
    },
    {
      role: 'Computer Engineer - Gempa Elektro Mekanik Mühendislik',
      companylogo: require('../assets/img/gempa.jpeg'),
      date: 'September 2019 - April 2021',
    },
    {
      role: 'Computer Engineer - Arinlabs',
      companylogo: require('../assets/img/arinlabs.jpeg'),
      date: 'October 2018 - May 2019',
    },
    {
      role: 'Unity Developer - Kuasar Information Technologies',
      companylogo: require('../assets/img/kuasar.jpg'),
      date: 'August 2016 - April 2018',
    },
    {
      role: 'System Support Engineer & Software Specialist - Infopark Information Technologies',
      companylogo: require('../assets/img/infopark.jpeg'),
      date: 'March 2015 - August 2016',
    },
    {
      role: 'Software Support Specialist - Verisis',
      companylogo: require('../assets/img/verisis.jpeg'),
      date: 'May 2014 - October 2014',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
