import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Solution and Enterprise Architect',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Having provided consultacy services to many companies over the last 10 years,
        I&apos;ve been involved in both architecting software solutions, and embedding architecture processes
        that help turn stakeholder goals into reality while meeting business objectives and values.
      </>
    ),
  },
  {
    title: 'Technical Leadership',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Combining 20 yaers of development, architecture, infrastructure experience with strong interpersonal skills has
        allowed me to gain the respect of multiple engineering teams and lead them to delivery and quality goals.
      </>
    ),
  },
  {
    title: 'Senior Developer',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Software development is where I started and at heart I'll always be one.
        My extensive experience in this area allows me to be hands on with any project and
        mentor more junior developers.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              About
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
