// src/components/ProjectCard.js

import React from 'react';
import styles from '../styles/components/ProjectCard.module.css';

const ProjectCard = ({ project, onOpen }) => {
  return (
    <div className={styles.projectCard}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => onOpen(project.filePath)}>Open Project</button>
    </div>
  );
};

export default ProjectCard;