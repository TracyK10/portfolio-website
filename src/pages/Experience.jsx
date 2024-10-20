function Experience() {
  const experiences = [
    {
      title: "Partnerships and Sponsorships Coordinator",
      company: "Hult Prize Multimedia University of Kenya",
      period: "Oct 2024 - Present",
      description: `
        Develop and manage partnerships and sponsorships for the on-campus program. 
        Create compelling value propositions to attract and retain partners and sponsors. 
        Collaborate with university departments to secure resources and support. 
        Engage with the local community to build awareness and foster partnerships. 
        Coordinate event partnerships for successful execution.
      `,
    },
    {
      title: "Software Engineering Fellow",
      company: "Headstarter AI",
      period: "July 2024 - Sep 2024",
      description: `
        Built and deployed 5 AI projects using React, Next.js, Firebase, Clerk, and Vercel. 
        Developed an interactive customer support agent with OpenAI and Pinecone. 
        Collaborated on a SaaS product generating dynamic flashcards and built a web scraper integrated with a RAG pipeline using Vertex AI and GPT-4o.
      `,
    },
    {
      title: "Frontend Developer Intern",
      company: "CodeAlpha",
      period: "July 2024 - August 2024",
      description: `
        Worked independently on front-end tasks, applying CSS and JavaScript to build 
        responsive interfaces. Managed deadlines autonomously and adapted to workflows in a remote environment.
      `,
      link: "https://github.com/TracyK10/CodeAlpha_frontend_internship_tasks",
    },
    {
      title: "Web Development and Design Intern",
      company: "Oasis Infobyte",
      period: "Feb 2024 - Mar 2024",
      description: `
        Enhanced front-end development skills using HTML, CSS, and JavaScript. 
        Worked on projects that emphasized building seamless, responsive user interfaces.
      `,
      link: "https://github.com/TracyK10/OIBSIP",
    },
  ];

  return (
    <div id="experience" className="mb-40 mt-32 px-4 md:px-0">
      <h1 className="text-4xl text-center my-5">Experience 💻</h1>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center md:justify-between mt-10 md:mx-28"
        >
          <h2 className="text-center md:text-left md:w-1/4 mb-6 md:mb-0">
            {exp.title}
          </h2>
          <div className="md:ml-10 md:mr-10">
            <h4>Company: {exp.company}</h4>
            <p>Period: {exp.period}</p>
            <p>{exp.description}</p>
            {exp.link && (
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                <button className="rounded-full mt-4 md:mt-0">
                  View Projects
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
