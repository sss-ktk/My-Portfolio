import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const portfolioData = {
    header: {
      name: "Sota Kataoka",
      intro: "AI - Software Engineer, IT Consultant",
      links: ["自己紹介", "プロジェクト", "スキル", "連絡先"],
    },
    about: {
      expertise: "生成AI技術の利用、業務自動化，DXに興味を持つ",
      skills: ["Python", "JavaScript", "Java", "AWS", "Azure", "GCP", "英検1級", "TOEIC 920"],
      background: "バイリンガル(英語と日本語), ネイティブレベルの英会力",
    },
    experiences: [
      {
        title: "生成AI技術動向調査と検証",
        role: "AIリサーチアシスタント",
        description: "お客様の課題解決を優先するには最先端の技術が必要なため、アルバイトを通して生成AIの最先端技術を学んでいる。社員の方々が担当している案件で活かすことができる生成AI技術を調査や実装、検証を行っている。\nこの技術で「何を行うことができ」「課題をどう解決できるか」「どのように実装するのか」などを日々の業務として取り組んでいる。",
        company: "フューチャー株式会社",
      },
      {
        title: "因果推論システムの開発",
        role: "ソフトウェアエンジニア",
        description: "研究の検証作業にて利用する因果推論システムの開発",
        company: "同志社大学",
      },
    ],
    projects: [
      {
        name: "会員制宿泊施設の業務自動化システムの開発",
        description: "顧客の業務自動化システムの提案と開発",
      },
      {
        name: "HITLを用いた税務相談AIの開発",
        description: "税理士とAIの協働を実現する税務相談AIの開発",
      },
    ],
    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      backend: ["Python"],
      tools: ["Git", "Docker"],
      other: ["AWS", "Azure", "GCP"],
    },
    contact: {
      email: "s0takt0k@gmail.com",
      github: "https://github.com/sss-ktk",
      linkedin: "https://www.linkedin.com/in/sota-kataoka-132730241/",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header {...portfolioData.header} />
      <main className="pt-16">
        <About {...portfolioData.about} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Skills {...portfolioData.skills} />
        <Contact {...portfolioData.contact} />
      </main>
    </div>
  );
}

export default App;