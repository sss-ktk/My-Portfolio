import React from 'react';
import { Code2, Briefcase, User } from 'lucide-react';

interface AboutProps {
  expertise: string;
  skills: string[];
  background: string;
}

export default function About({ expertise, skills, background }: AboutProps) {
  return (
    <section id="自己紹介" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Code2 className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">専門性</h3>
            </div>
            <p className="text-gray-600">{expertise}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">スキル</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
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
              <User className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">背景</h3>
            </div>
            <p className="text-gray-600">{background}</p>
          </div>
        </div>
      </div>
    </section>
  );
}