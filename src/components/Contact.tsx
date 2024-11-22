import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  email: string;
  github?: string;
  linkedin?: string;
  zenn?: string;
}

export default function Contact({ email, github, linkedin, zenn }: ContactProps) {
  return (
    <section id="連絡先" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-6 w-6 text-gray-600 mr-3" />
                <span className="text-gray-800">{email}</span>
              </a>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Github className="h-6 w-6 text-gray-600 mr-3" />
                  <span className="text-gray-800">GitHub</span>
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-gray-600 mr-3" />
                  <span className="text-gray-800">LinkedIn</span>
                </a>
              )}

              {zenn && (
                <a
                  href={zenn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="h-6 w-6 text-gray-600 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
                  </svg>
                  <span className="text-gray-800">Zenn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}