import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const FeatureList = [
  {
    title: 'Einfach zu benutzen!',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Die Knowledge Base ist einfach zu benutzen und zu bedienen. Alle Infos und Anleitungen sind einfach zugänglich.
      </>
    ),
  },
  {
    title: 'Alle Anleitungen an einem Ort!',
    Svg: require('@site/static/img/JH_Logo_Lab_Muenster.svg').default,
    description: (
      <>
        Alle Anleitungen sind an einem Ort. Du musst nicht mehr lange suchen, um die Anleitungen und Infos zu finden, die du brauchst.
      </>
    ),
  },
  {
    title: 'Fehlt was?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Fehlt dir eine Anleitung? Dann sprich doch die MentorInnen an und wir werden sie ergänzen.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}