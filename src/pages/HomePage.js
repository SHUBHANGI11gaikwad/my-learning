// src/pages/HomePage.js

import React from 'react';
import styles from '../styles/pages/HomePage.module.css';
import ProjectCard from '../components/ProjectCard';

// Define your learning projects as an array of objects
const learningProjects = [
  {
    id: 1,
    title: 'News',
    description: 'A Project that fetches AI-generated news using aN API.',
    filePath: '/NewsApp', // Path to your HTML file in the public directory
  },
  {
    id: 2,
    title: 'Array Operations JS',
    description: 'Demonstrates various array manipulation techniques in JavaScript.',
    filePath: '/array.js', // Path to your JS file in the public directory
  },
  {
    id: 3,
    title: 'Callback Functions JS',
    description: 'Examples illustrating the use of callback functions in JavaScript.',
    filePath: '/callback.js', // Path to your JS file in the public directory
  },
  {
    id: 4,
    title: 'To-Do List HTML',
    description: 'A simple to-do list built with HTML, CSS, and JavaScript.',
    filePath: '/To-Do-List.html', // Path to your HTML file in the public directory
  },
  {
    id: 5,
    title: 'To-Do List HTML',
    description: 'A simple to-do list built with HTML, CSS, and JavaScript.',
    filePath: '/To-Do-List.html', // Path to your HTML file in the public directory
  },
  // Add more of your learning projects here
];

const HomePage = () => {
  const openProject = (filePath) => {
    // Open the file in a new tab
    window.open(filePath, '_blank');
  };

  return (
    <div className={styles.homePage}>
      <h1>My Learning Projects</h1>
      <div className={styles.projectList}>
        {learningProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={openProject}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;