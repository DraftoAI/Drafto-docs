import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'KI-gestützte Templates',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Intelligente Vorlagen, die sich automatisch an Ihre Kanzlei-spezifischen 
        Anforderungen anpassen. Von Verträgen bis hin zu Schriftsätzen - 
        <strong> präzise und effizient</strong>.
      </>
    ),
  },
  {
    title: 'Automatisierte Generierung',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Reduzieren Sie den Zeitaufwand für Routinedokumente um bis zu <strong>80%</strong>. 
        Fokussieren Sie sich auf das Wesentliche - die juristische Beratung, 
        während Drafto die <code>Dokumenterstellung</code> übernimmt.
      </>
    ),
  },
  {
    title: 'Compliance & Sicherheit',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        DSGVO-konform und höchste Sicherheitsstandards. Alle Daten bleiben in Deutschland 
        und erfüllen die strengen Anforderungen für Kanzleien. 
        <strong>Vertrauen Sie auf German Engineering</strong>.
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
        <Heading as="h3">{title}</Heading>
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
