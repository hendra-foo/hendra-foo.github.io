import styles from "./resume.module.scss";

const Resume = (): JSX.Element => {
  return (
    <div className={styles.resumeBackdrop}>
      <div className={styles.resumeRoot}>
        <div className={styles.head}>
          <h1 className={styles.name}>Hendra</h1>
          <div className={styles.contact}>
            <div className={styles.socialGroup}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/hendra-foo"
                className={styles.social}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/hendra-foo-a86226144"
                className={styles.social}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:fu.ceyong18@gmail.com"
              className={styles.email}
            >
              fu.ceyong18@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <Group title="Experience">
              <Experience
                company="Cloud Ace Indonesia"
                position="Cloud Front-End Developer"
                date="Oct 2020 - Present"
                location="Jakarta, ID"
                desc="Building a Microservices Architecture Project Management System application running in Google Cloud Platform Environment"
              />
              <Experience
                company="Surya Fajar Group - IT"
                position="Web Front-End Lead"
                date="Jul 2019 - Sep 2020"
                location="Jakarta, ID"
                desc="Entrusted to manage all projects in SF Group related to Web FE, Research best coding practices, Frontend Applicant Tester & Verifier"
                // desc="Prototyping & Building reusable component, Research best coding practices, Frontend Applicant Tester & Verifier"
                // desc="Worked with Backend & Design Team to Develope SF Group Application. e.g: Dipay, Pigijo Microsite, SF Capital, SF Sekuritas & etc."
              />
              <Experience
                company="Dipay"
                position="Software Engineer - FE Web Engineer"
                date="Sep 2017 - Sep 2020"
                location="Batam - Jakarta, ID"
                desc="Developed a QRIS E-Wallet Payment Gateway Application from scratch with a team of 8 people"
              />
              <Experience
                company="Mareco"
                position="UI/UX Design"
                date="Sep 2017 - Nov 2017"
                location="Batam, ID"
                desc="Designed a Market Ecommerce UI/UX for mobile and web application"
              />
              <Experience
                company="Dreamsmart Solutions"
                position="Junior Web Developer"
                date="May 2017 - Aug 2017"
                location="Batam, ID"
                desc="Worked in a Software House to develope an online peer-to-peer learning platform and translating Mockup to HTML, JS & CSS"
              />
            </Group>
          </div>
          <div className={styles.side}>
            <Group title="Certification">
              <Certification
                name="Associate Cloud Engineer"
                date="Issued Nov 2020 - Nov 2022"
                issuer="Google Cloud"
                url="https://www.credential.net/88a2f334-d82f-442f-9571-6aea5151edee"
              />
            </Group>
            <Group title="Skills">
              <Skill
                name="Programming"
                desc={
                  <>
                    JavaScript, HTML, CSS, Sass, PHP, Git.
                    <br />
                    <small className="text-secondary">
                      Tech: React.js, Next.js, Vue.js, Bootstrap + Sass, Laravel, Bitbucket, Github
                    </small>
                  </>
                }
              />
              <Skill
                name="Cloud Architecting"
                desc={
                  <>
                    Google Cloud Platform
                    <br />
                    <small className="text-secondary">
                      Products: Kubernetes Engine, Compute Engine, App Engine, Cloud Run, Cloud
                      Storage, Cloud Build, Container Registry
                    </small>
                  </>
                }
              />
              <Skill name="UI/UX Design" desc="Adobe XD, Figma, Photoshop" />
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
};

type GroupProps = {
  title: string;
  children: React.ReactElement | React.ReactElement[];
};

const Group = ({ title, children }: GroupProps) => {
  return (
    <div className={styles.group}>
      <div className={styles.groupHead}>
        <h6 className={styles.title}>{title}</h6>
      </div>
      <div>{children}</div>
    </div>
  );
};

type ExperienceProps = {
  company: string;
  position: string;
  date: string;
  location: string;
  desc: string;
};

const Experience = ({ company, position, date, location, desc }: ExperienceProps) => {
  return (
    <div className={styles.experienceRoot}>
      <div className={styles.info}>
        <h4 className={styles.company}>{company}</h4>
        <div className={styles.position}>{position}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.location}>{location}</div>
      </div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

type CertificationProps = {
  name: string;
  date: string;
  issuer: string;
  url: string;
};

const Certification = ({ name, date, issuer, url }: CertificationProps) => {
  return (
    <div className={styles.certificationRoot}>
      <h5 className={styles.name}>{name}</h5>
      <div className={styles.issuer}>{issuer}</div>
      <div className={styles.date}>{date}</div>
      <a target="_blank" rel="noopener noreferrer" href={url} className={styles.credential}>
        See credential
      </a>
    </div>
  );
};

type SkillProps = {
  name: string;
  desc: string | JSX.Element;
};

const Skill = ({ name, desc }: SkillProps) => {
  return (
    <div className={styles.skillRoot}>
      <h5 className={styles.name}>{name}</h5>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default Resume;
