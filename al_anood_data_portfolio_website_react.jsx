// DEPLOYMENT GUIDE
// 1. Create a GitHub repository named: al-anood-data-portfolio
// 2. Upload this file as: app/page.tsx (Next.js) OR PortfolioWebsite.jsx (React)
// 3. Push repository to GitHub
// 4. Deploy for free using Vercel.com
// 5. Add your Power BI screenshots and GitHub links

export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Oil Production Cost Dashboard",
      description:
        "Built an interactive Power BI dashboard to track financial performance across multiple oil production blocks, helping leadership monitor cost and output targets in real time.",
      skills: ["Power BI", "DAX", "Data Visualization", "Financial Analysis"],
    },
    {
      title: "SQL Financial Data Transformation",
      description:
        "Developed optimized SQL queries to extract, clean, and transform complex financial datasets for reporting and analysis.",
      skills: ["SQL", "Data Cleaning", "Reporting", "Analytics"],
    },
    {
      title: "Marketing Campaign Analytics",
      description:
        "Designed a sample marketing analytics dashboard to analyse CTR, conversion rates, customer engagement, and campaign performance.",
      skills: ["Excel", "Power BI", "Marketing Analytics", "KPIs"],
    },
    {
      title: "Executive KPI Dashboard",
      description:
        "Created executive-ready KPI dashboards and automated reports that reduced manual reporting workload and improved decision-making speed.",
      skills: ["Excel", "Power BI", "Automation", "Business Intelligence"],
    },
  ];

  const skills = [
    "Power BI",
    "SQL",
    "Excel",
    "Python",
    "RStudio",
    "HTML/CSS",
    "JavaScript",
    "Data Analysis",
    "Dashboard Development",
    "Business Intelligence",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Al Anood Al Zadjali
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Data & Information Systems Analyst
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Information Systems graduate with experience building Power BI
              dashboards, SQL-based reporting solutions, and executive-ready
              analytics for a Fortune 500 energy company. Passionate about
              transforming complex data into actionable business insights.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="mailto:anoodbader55@gmail.com"
                className="border border-black px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Quick Overview</h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <span className="font-semibold">Location:</span> Dublin,
                Ireland
              </div>

              <div>
                <span className="font-semibold">Education:</span> BSc in
                Information Systems
              </div>

              <div>
                <span className="font-semibold">Experience:</span> Power BI,
                SQL, Financial Analytics, Reporting Automation
              </div>

              <div>
                <span className="font-semibold">Industries:</span> Energy,
                Operations, Data Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Technical Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 px-5 py-3 rounded-2xl shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black text-white text-sm px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">
                Cost Analyst Associate
              </h3>
              <p className="text-gray-600 mb-4">
                Occidental Petroleum | 2024 – 2025
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Built Power BI dashboards tracking financial performance and
                  operational KPIs.
                </li>
                <li>
                  Developed financial forecasting models using historical data.
                </li>
                <li>
                  Collaborated with cross-functional teams to improve reporting
                  accuracy.
                </li>
                <li>
                  Automated reporting workflows and reduced manual processing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-black text-white rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

          <p className="text-lg text-gray-300 mb-8">
            I’m currently seeking opportunities in data analytics, business
            intelligence, and marketing analytics.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:anoodbader55@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com"
              className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
