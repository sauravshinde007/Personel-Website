import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    gdu,
    rewind,
    portfolio,
    stickytanks,
    threejs,
    unity,
    love2d,
    cpp,
    csharp,
    python,
    java,
    blender,
    mysql,
    lua,
    godot,
    photo,
    pr,
    bootstrap,
    swampmaster,
    bugs,
    neon_fables,
    tictactoe
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "3D Artist",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Godot",
      icon: godot,
    },
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "LOVE2D",
      icon: love2d,
    },
    {
      name: "lua",
      icon: lua,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name:"C#",
      icon:csharp,
    },
    {
      name:"Java",
      icon: java
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Photoshop",
      icon: photo,
    },
    {
      name: "Premier Pro",
      icon: pr,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Head",
      company_name: "GameDevUtopia PICT",
      icon: gdu,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Guided team members in the use of various Game Development tools and technologies.",
        "Organized workshops and seminars to enhance members’ skills in game design and programming.",
        "Coordinated and managed project timelines, ensuring milestones were met.",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "REWIND",
      description:
        "Simple Platformer Game Made in Love2D framework using LUA scripting language.",
      tags: [
        {
          name: "LUA",
          color: "blue-text-gradient",
        },
        {
          name: "LOVE2D",
          color: "green-text-gradient",
        }
      ],
      image: rewind,
      source_code_link: "https://github.com/kshitijaucharmal/GDU-Rewind.git",
      live_project_link:"https://sauravshinde007.itch.io/rewind",
    },
    {
      name: "Sticky Tanks",
      description:
        "A thrilling two-player tank game where strategy and quick thinking lead to victory. Game made in Unity 3D",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: stickytanks,
      source_code_link: "https://github.com/kshitijaucharmal/StickyTanks",
      live_project_link:"https://sauravshinde007.itch.io/sticky-tanks",
    },
    {
      name: "Swamp Master",
      description:
        "A 2D platformer multiplayer game, where your only goal is to be the last one standing. Game made in Unity using Photon Library.",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: swampmaster,
      source_code_link: "https://github.com/sauravshinde007/PlayBrutal-GameJam.git",
      live_project_link:"https://sauravshinde007.itch.io/swamp-master",
    },
    {
      name: "BUGS",
      description:
        "A 2D platformer puzzle game, where your want to escape from your Windows 7 computer and delete the virus. Game is made in Defold Engine using LUA.",
      tags: [
        {
          name: "Defold",
          color: "blue-text-gradient",
        },
        {
          name: "LUA",
          color: "green-text-gradient",
        },
      ],
      image: bugs,
      source_code_link: "",
      live_project_link:"https://sauravshinde007.itch.io/bugs",
    },
    {
      name: "Neon Fables",
      description:
        "A sidescroller detective game where you are trying to solve a mystery by talking and gathering clues.",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: neon_fables,
      source_code_link: "https://github.com/sauravshinde007/GameOff24",
      live_project_link:"https://sauravshinde007.itch.io/neon-fables",
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "A full-stack Tic-Tac-Toe game with real-time chat functionality, built using the StreamChat API.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "StreamChat API",
          color: "green-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/sauravshinde007/Tic-Tac-Toe",
      live_project_link:"",
    },
    {
      name: "3D Portfolio Website",
      description:
        "A personal portfolio website developed using React and ThreeJS. It showcases my skills and projects in a visually appealing manner, leveraging 3D visuals, animations, and transitions",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "EmailJS",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/sauravshinde007/3D-Portfolio-Website.git",
      live_project_link:"",
    }
  ];
  
  export { services, technologies, experiences, projects};