import React from 'react';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  role: string;
  description: string;
  company: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.role}</span>
                  </div>
                  <p className="text-gray-600 whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}