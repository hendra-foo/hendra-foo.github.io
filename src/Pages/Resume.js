import React from 'react'
import styles from './resume.module.scss';

const Resume = () => {
  return (
    <div className={styles.resumeBackdrop}>
      <div className={styles.resumeRoot}>
        <div className={styles.head}>
          <h1 className={styles.name}>Hendra</h1>
          <div className={styles.contact}>
            <a target="_blank" href="https://hendra-foo.github.io/" className={styles.site}>hendra-foo.github.io</a>
            <a target="_blank" href="mailto:fu.ceyong18@gmail.com" className={styles.email}>fu.ceyong18@gmail.com</a>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <Group title="Experience">
              <Experience
                company="Surya Fajar Group - IT"
                position="Web Front-End Lead"
                date="Jul 2019 - Present"
                location="Jakarta, ID"
                desc="Prototyping & Building reusable component, Research best coding practices, Frontend Applicant Tester & Verifier"
                // desc="Worked with Backend & Design Team to Develope SF Group Application. e.g: Dipay, Pigijo Microsite, SF Capital, SF Sekuritas & etc."
              />
              <Experience
                company="Dipay"
                position="Software Engineer - Web Developer"
                date="Sep 2017 - Present"
                location="Jakarta, ID"
                desc="Developing a QRIS E-Wallet Application that can be a Payment Gateway between User & Merchant"
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
                desc="Worked in a Software House to develope an online peer-to-peer learning platform and translating Mockup to HTML & CSS"
              />
            </Group>
          </div>
          <div className={styles.side}>
            <Group title="Education">
              <Education
                name="SMK Permata Harapan"
                date="Jun 2014 - Jun 2017"
                location="Batam, ID"
                desc="Builded a simple Hospital CRUD Application as Final Assignment"
              />
            </Group>
            <Group title="Skills">
              <Skill
                name="Programming"
                desc={<>
                  JavaScript, HTML, CSS, PHP, Git.
                  <br/>
                  <small>Stacks: React.js, Next.js, Bootstrap + Sass, Laravel, Bitbucket</small>
                </>}
              />
              <Skill
                name="UI/UX Design"
                desc="Adobe XD, Photoshop"
              />
            </Group>
          </div>
        </div>
      </div>
    </div>
  )
}

const Group = ({ title, children }) => {
  return (
    <div className={styles.group}>
      <div className={styles.groupHead}>
        <h6 className={styles.title}>{title}</h6>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

const Experience = ({ company, position, date, location, desc }) => {
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
  )
}

const Education = ({ name, date, location, desc }) => {
  return (
    <div className={styles.educationRoot}>
      <h5 className={styles.name}>{name}</h5>
      <div className={styles.date}>{date}</div>
      <div className={styles.location}>{location}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  )
}

const Skill = ({ name, desc }) => {
  return (
    <div className={styles.skillRoot}>
      <h5 className={styles.name}>{name}</h5>
      <div className={styles.desc}>{desc}</div>
    </div>
  )
}

export default Resume
