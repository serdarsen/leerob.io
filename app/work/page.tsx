import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Full Stack Developer adept at resolving complex issues, enhancing products, and mentoring. Specializes in React, Next.js, JavaScript, TypeScript, Java, Spring, and PostgreSQL. Proficient in React (3+ yrs) and Java (3+ yrs), with 3+ years of remote work expertise. Open to learning AWS, Cloud, Security, Next.js, Vue.js, Angular, Node.js, Python.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Self</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer, 01/2023 - Present
        </p>
        <p>
          Self-Development
        </p>
        <ul>
          <li>
            Attained certifications in web development and English proficiency.
          </li>
          <li>
            Contributed to open-source projects.
          </li>
          <li>
            Exploring a diverse range of technologies.      
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter"><a href="https://www.linkedin.com/company/hubticde/">Hubtic</a></h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Front End Developer, 10/2022 - 01/2023
        </p>
        <p>
          Logistics Management Web Application
        </p>
        <ul>
          <li>
            Enhanced codebase stability by upgrading dependencies and implementations.
          </li>
          <li>
            Collaborated on the frontend development using Vite, React, TypeScript, Redux Toolkit, Eslint, Tailwind CSS, Yarn, and Ant Design for logistics operations managers.
          </li>
          <li>
            Implemented features within the planned timeline, ensuring efficient teamwork.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter"><a href="https://www.linkedin.com/company/kront/">Kron</a></h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer, 09/2019 - 04/2022
        </p>
        <p>
          Servers Management Web Application
        </p>
        <ul>
          <li>
            Improved user-friendliness by implementing intuitive navigation, simplifying complex processes, and enhancing the overall user interface.
          </li>
          <li>
            Engaged in full-stack development with React, JavaScript, TypeScript, Bootstrap, SCSS, Java, Hibernate, Spring Boot, PostgreSQL for IT system servers administrators.
          </li>
          <li>
            Executed feature implementations both independently and collaboratively within the team, actively participating in regular Scrum meetings for efficient progress and coordination.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Parknet</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer, 10/2018 - 09/2019
        </p>
        <p>
          Product Management Web Application
        </p>
        <ul>
          <li>
            Created .Net core Rest APIs, wrote unit tests.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter"><a href="https://gelecegiyazanlar.turkcell.com.tr/">Turkcell Academy</a></h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Mobile Application Development Instructor, 06/2017 - 08/2017
        </p>
        <p>
          Turkcell Geleceği Yazanlar Events
        </p>
        <ul>
          <li>
            Volunteered as a mobile development instructor.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Freelance</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Mobile Application Developer, 06/2017 - 10/2017
        </p>
        <p>
          Mobile Applications
        </p>
        <ul>
          <li>
            Executed mobile application developments using Java and Android SDK.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Community</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer
        </p>
        <p>
          Open Source
        </p>
        <ul>
          <li>
            Exploring TypeScript, Next.js, shadcn/ui, and Spring Cloud.
          </li>
          <li>
            Contributed to <a href="https://ubuntubudgie.org/">Ubuntu Budgie</a> project.
          </li>
        </ul>
      </div>
    </section>
  );
}