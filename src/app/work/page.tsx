import Link from 'next/link';

function page() {
  return (
    <div className="prose-teal text-justify">
      <section>
        <div className="flex items-end justify-between border-b">
          <div className="text-start text-sm sm:text-base">
            <h3 className="mb-0">
              <Link
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.kyand.co/"
              >
                KY & Company
              </Link>
            </h3>
            <strong>Full Stack React Engineer</strong> (<i>frontend heavy</i>)
          </div>
          <div className="flex min-w-fit flex-col items-end justify-end text-sm sm:text-base">
            <strong>Hong Kong</strong>
            <em>May 2023 - Current</em>
          </div>
        </div>
        <p>
          KY & Company is a digital agency that provides digital solutions for
          clients in various industries. I worked across a number of projects
          and clients, including a large-scale e-commerce platform, a
          blockchain-based NFT platform, and a crypto exchange platform.
        </p>
        <strong className="underline">Tech Stack:</strong>{' '}
        <i>
          Typescript , React Js , React Router, Mapbox , MongoDB , Redux ,
          ElasticSearch, Material UI, React Native, MYSQL, Express JS, AWS SNS,
          AWS S3
        </i>
        <ul>
          <li>
            Collaborated with product managers, UX/UI designers, and senior
            software engineers to design, test, build, and deploy features;
            engaged in pair programming and code reviews to ensure thorough
            development with clean and testable code
          </li>
          <li>
            Leveraged React and Node (MERN tech stack) to build many performant
            and well-designed end-to-end features
          </li>
          <li>
            Inculcated insights into agile methodologies for efficient
            development and deployment of bug fixes and features
          </li>
        </ul>
      </section>
      <section>
        <div className="flex items-end justify-between border-b">
          <div className="text-start text-sm sm:text-base">
            <h3 className="mb-0">
              <Link
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.waymarkcare.com/"
              >
                Waymark Care
              </Link>
            </h3>
            <strong>Full Stack React Developer (Remote)</strong>
          </div>
          <div className="flex min-w-fit flex-col items-end justify-end text-sm sm:text-base">
            <strong>California, USA</strong>
            <em>Sep 2022 - Apr 2023</em>
          </div>
        </div>
        <p>
          WaymarkCare is A public benefit organization providing community-based
          healthcare services for people receiving Medicaid in the USA.{' '}
          <strong>Lighthouse</strong> is used by Waymark&apos;s Care Teams,
          which are Social Workers, Pharmacists, Care Coordinators, and
          Community Healthcare Workers. It is an <strong>HIPAA</strong>{' '}
          compliant and <strong>SOC2-certified</strong> app.
        </p>
        <p>
          I worked on various end-to-end features on this project and
          single-handedly worked on the <strong>offline mode</strong> feature
          that enables the user to interact with the app like normal in the
          period of no network connection and later synchronize with the app
          when the connection is restored.
        </p>
        <strong className="underline">Tech Stack:</strong>{' '}
        <i>
          Next Js , Typescript , React Js , Next-auth , Prisma , Postgresql ,
          Jotai , Draft js , Jest , Material UI
        </i>
        <ul>
          <li>
            Developed end-to-end features with Next JS and Material UI using
            Typescript from Figma design, performed daily code reviews, and
            solved issues using distributed computing, large-scale design,
            real-time data processing, and data storage
          </li>
          <li>
            {' '}
            Collaborated with the data engineering team and UI/UX design team
            and engaged in relational schema design in PostgreSQL;
            single-handedly implemented offline-mode features with service
            worker and indexed DB and online synchronization{' '}
          </li>
          <li>
            {' '}
            built several reusable and responsive components and conducted
            unit-testing with Jest; wrote secured REST API endpoints in Next JS
          </li>
        </ul>
      </section>
    </div>
  );
}

export default page;
