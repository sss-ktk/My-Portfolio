import React from 'react';
import { Code, Server, Wrench, Laptop } from 'lucide-react';

interface SkillsProps {
  frontend: string[];
  backend: string[];
  tools: string[];
  other: string[];
}

export default function Skills({ frontend, backend, tools, other }: SkillsProps) {
  return (
    <section id="スキル" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Wrench className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Laptop className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Other</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {other.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}