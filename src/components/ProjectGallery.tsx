import React from 'react';

type Project = {
  image: string;
  name: string;
  location: string;
  description: string;
};

type ProjectGalleryProps = {
  projects: Project[];
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-[#F4F4F5] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-serif text-lg text-gray-900 font-semibold">{project.name}</h4>
            <p className="text-[#6B7280] text-sm mb-2">{project.location}</p>
            <p className="text-gray-900 text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
