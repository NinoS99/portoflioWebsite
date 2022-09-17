import React from 'react';
import Project from '../project/Project';
import './projectList.css';
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Project & Course Work Portfolio</h1>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} gitLink={item.gitLink}  webLink={item.webLink} name={item.name} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList