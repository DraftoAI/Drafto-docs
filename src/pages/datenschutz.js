import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './datenschutz.module.css';

// React Icons Imports
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaBullseye, 
  FaLock, 
  FaUser, 
  FaDatabase,
  FaClipboardList,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTrophy,
  FaCertificate,
  FaGlobe,
  FaCloud
} from 'react-icons/fa';

import {
  MdSecurity,
  MdPrivacyTip,
  MdVerifiedUser,
  MdMonitor,
  MdStorage,
  MdVpnLock
} from 'react-icons/md';

import {
  HiShieldCheck,
  HiDocumentSearch,
  HiCog
} from 'react-icons/hi';

// DSGVO Articles Data with detailed structure for precise citations
const dsgvoArticles = {
  'Art. 5': {
    title: 'Grundsätze für die Verarbeitung personenbezogener Daten',
    sections: {
      '(1)': {
        intro: 'Personenbezogene Daten müssen',
        points: {
          'a': 'auf rechtmäßige Weise, nach Treu und Glauben und in einer für die betroffene Person nachvollziehbaren Weise verarbeitet werden („Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz");',
          'b': 'für festgelegte, eindeutige und legitime Zwecke erhoben werden und dürfen nicht in einer mit diesen Zwecken nicht zu vereinbarenden Weise weiterverarbeitet werden; eine Weiterverarbeitung für im öffentlichen Interesse liegende Archivzwecke, für wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gilt gemäß Artikel 89 Absatz 1 nicht als unvereinbar mit den ursprünglichen Zwecken („Zweckbindung");',
          'c': 'dem Zweck angemessen und erheblich sowie auf das für die Zwecke der Verarbeitung notwendige Maß beschränkt sein („Datenminimierung");',
          'd': 'sachlich richtig und erforderlichenfalls auf dem neuesten Stand sein; es sind alle angemessenen Maßnahmen zu treffen, damit personenbezogene Daten, die im Hinblick auf die Zwecke ihrer Verarbeitung unrichtig sind, unverzüglich gelöscht oder berichtigt werden („Richtigkeit");',
          'e': 'in einer Form gespeichert werden, die die Identifizierung der betroffenen Personen nur so lange ermöglicht, wie es für die Zwecke, für die sie verarbeitet werden, erforderlich ist; personenbezogene Daten dürfen länger gespeichert werden, soweit die personenbezogenen Daten vorbehaltlich der Durchführung geeigneter technischer und organisatorischer Maßnahmen, die von dieser Verordnung zum Schutz der Rechte und Freiheiten der betroffenen Person gefordert werden, ausschließlich für im öffentlichen Interesse liegende Archivzwecke oder für wissenschaftliche und historische Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Absatz 1 verarbeitet werden („Speicherbegrenzung");',
          'f': 'in einer Weise verarbeitet werden, die eine angemessene Sicherheit der personenbezogenen Daten gewährleistet, einschließlich Schutz vor unbefugter oder unrechtmäßiger Verarbeitung und vor unbeabsichtigtem Verlust, unbeabsichtigter Zerstörung oder unbeabsichtigter Schädigung durch geeignete technische und organisatorische Maßnahmen („Integrität und Vertraulichkeit");'
        }
      },
      '(2)': {
        content: 'Der Verantwortliche ist für die Einhaltung des Absatzes 1 verantwortlich und muss dessen Einhaltung nachweisen können („Rechenschaftspflicht").'
      }
    }
  },
  'Art. 6': {
    title: 'Rechtmäßigkeit der Verarbeitung',
    sections: {
      '(1)': {
        intro: 'Die Verarbeitung ist nur rechtmäßig, wenn mindestens eine der nachstehenden Bedingungen erfüllt ist:',
        points: {
          'a': 'Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben;',
          'b': 'die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen;',
          'c': 'die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt;',
          'd': 'die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen;',
          'e': 'die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;',
          'f': 'die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt.'
        },
        additional: 'Unterabsatz 1 Buchstabe f gilt nicht für die von Behörden in Erfüllung ihrer Aufgaben vorgenommene Verarbeitung.'
      },
      '(2)': {
        content: 'Die Mitgliedstaaten können spezifischere Bestimmungen zur Anpassung der Anwendung der Vorschriften dieser Verordnung in Bezug auf die Verarbeitung zur Erfüllung von Absatz 1 Buchstaben c und e beibehalten oder einführen, indem sie spezifische Anforderungen für die Verarbeitung sowie sonstige Maßnahmen präziser bestimmen, um eine rechtmäßig und nach Treu und Glauben erfolgende Verarbeitung zu gewährleisten, einschließlich für andere besondere Verarbeitungssituationen gemäß Kapitel IX.'
      },
      '(3)': {
        sentences: {
          '1': 'Die Rechtsgrundlage für die Verarbeitungen gemäß Absatz 1 Buchstaben c und e wird festgelegt durch a) Unionsrecht oder b) das Recht der Mitgliedstaaten, dem der Verantwortliche unterliegt.',
          '2': 'Der Zweck der Verarbeitung muss in dieser Rechtsgrundlage festgelegt oder hinsichtlich der Verarbeitung gemäß Absatz 1 Buchstabe e für die Erfüllung einer Aufgabe erforderlich sein, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.',
          '3': 'Diese Rechtsgrundlage kann spezifische Bestimmungen zur Anpassung der Anwendung der Vorschriften dieser Verordnung enthalten, unter anderem Bestimmungen darüber, welche allgemeinen Bedingungen für die Regelung der Rechtmäßigkeit der Verarbeitung durch den Verantwortlichen gelten, welche Arten von Daten verarbeitet werden, welche Personen betroffen sind, an welche Einrichtungen und für welche Zwecke die personenbezogenen Daten offengelegt werden dürfen, welcher Zweckbindung sie unterliegen, wie lange sie gespeichert werden dürfen und welche Verarbeitungsvorgänge und -verfahren angewandt werden dürfen, einschließlich Maßnahmen zur Gewährleistung einer rechtmäßig und nach Treu und Glauben erfolgenden Verarbeitung, wie solche für sonstige besondere Verarbeitungssituationen gemäß Kapitel IX.',
          '4': 'Das Unionsrecht oder das Recht der Mitgliedstaaten müssen ein im öffentlichen Interesse liegendes Ziel verfolgen und in einem angemessenen Verhältnis zu dem verfolgten legitimen Zweck stehen.'
        }
      },
      '(4)': {
        intro: 'Beruht die Verarbeitung zu einem anderen Zweck als zu demjenigen, zu dem die personenbezogenen Daten erhoben wurden, nicht auf der Einwilligung der betroffenen Person oder auf einer Rechtsvorschrift der Union oder der Mitgliedstaaten, die in einer demokratischen Gesellschaft eine notwendige und verhältnismäßige Maßnahme zum Schutz der in Artikel 23 Absatz 1 genannten Ziele darstellt, so berücksichtigt der Verantwortliche – um festzustellen, ob die Verarbeitung zu einem anderen Zweck mit demjenigen, zu dem die personenbezogenen Daten ursprünglich erhoben wurden, vereinbar ist – unter anderem',
        points: {
          'a': 'jede Verbindung zwischen den Zwecken, für die die personenbezogenen Daten erhoben wurden, und den Zwecken der beabsichtigten Weiterverarbeitung,',
          'b': 'den Zusammenhang, in dem die personenbezogenen Daten erhoben wurden, insbesondere hinsichtlich des Verhältnisses zwischen den betroffenen Personen und dem Verantwortlichen,',
          'c': 'die Art der personenbezogenen Daten, insbesondere ob besondere Kategorien personenbezogener Daten gemäß Artikel 9 verarbeitet werden oder ob personenbezogene Daten über strafrechtliche Verurteilungen und Straftaten gemäß Artikel 10 verarbeitet werden,',
          'd': 'die möglichen Folgen der beabsichtigten Weiterverarbeitung für die betroffenen Personen,',
          'e': 'das Vorhandensein geeigneter Garantien, wozu Verschlüsselung oder Pseudonymisierung gehören kann.'
        }
      }
    }
  },
  'Art. 15': {
    title: 'Auskunftsrecht der betroffenen Person',
    sections: {
      '(1)': {
        intro: 'Die betroffene Person hat das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden; ist dies der Fall, so hat sie ein Recht auf Auskunft über diese personenbezogenen Daten und auf folgende Informationen:',
        points: {
          'a': 'die Verarbeitungszwecke;',
          'b': 'die Kategorien personenbezogener Daten, die verarbeitet werden;',
          'c': 'die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen;',
          'd': 'falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;',
          'e': 'das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;',
          'f': 'das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;',
          'g': 'wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle verfügbaren Informationen über die Herkunft der Daten;',
          'h': 'das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Absätze 1 und 4 und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.'
        }
      },
      '(2)': {
        content: 'Werden personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt, so hat die betroffene Person das Recht, über die geeigneten Garantien gemäß Artikel 46 im Zusammenhang mit der Übermittlung unterrichtet zu werden.'
      },
      '(3)': {
        sentences: {
          '1': 'Der Verantwortliche stellt eine Kopie der personenbezogenen Daten, die Gegenstand der Verarbeitung sind, zur Verfügung.',
          '2': 'Für alle weiteren Kopien, die die betroffene Person beantragt, kann der Verantwortliche ein angemessenes Entgelt auf der Grundlage der Verwaltungskosten verlangen.',
          '3': 'Stellt die betroffene Person den Antrag elektronisch, so sind die Informationen in einem gängigen elektronischen Format zur Verfügung zu stellen, sofern sie nichts anderes angibt.'
        }
      },
      '(4)': {
        content: 'Das Recht auf Erhalt einer Kopie gemäß Absatz 3 darf die Rechte und Freiheiten anderer Personen nicht beeinträchtigen.'
      }
    }
  },
  'Art. 16': {
    title: 'Recht auf Berichtigung',
    sections: {
      '(1)': {
        sentences: {
          '1': 'Die betroffene Person hat das Recht, von dem Verantwortlichen unverzüglich die Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen.',
          '2': 'Unter Berücksichtigung der Zwecke der Verarbeitung hat die betroffene Person das Recht, die Vervollständigung unvollständiger personenbezogener Daten – auch mittels einer ergänzenden Erklärung – zu verlangen.'
        }
      }
    }
  },
  'Art. 17': {
    title: 'Recht auf Löschung ("Recht auf Vergessenwerden")',
    sections: {
      '(1)': {
        intro: 'Die betroffene Person hat das Recht, von dem Verantwortlichen zu verlangen, dass sie betreffende personenbezogene Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, personenbezogene Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:',
        points: {
          'a': 'Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.',
          'b': 'Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.',
          'c': 'Die betroffene Person legt gemäß Artikel 21 Absatz 1 Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Artikel 21 Absatz 2 Widerspruch gegen die Verarbeitung ein.',
          'd': 'Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.',
          'e': 'Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.',
          'f': 'Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Artikel 8 Absatz 1 erhoben.'
        }
      },
      '(2)': {
        content: 'Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er gemäß Absatz 1 zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass eine betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat.'
      },
      '(3)': {
        intro: 'Die Absätze 1 und 2 gelten nicht, soweit die Verarbeitung erforderlich ist',
        points: {
          'a': 'zur Ausübung des Rechts auf freie Meinungsäußerung und Information;',
          'b': 'zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;',
          'c': 'aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Artikel 9 Absatz 2 Buchstaben h und i sowie Artikel 9 Absatz 3;',
          'd': 'für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Absatz 1, soweit das in Absatz 1 genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder',
          'e': 'zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.'
        }
      }
    }
  },
  'Art. 20': {
    title: 'Recht auf Datenübertragbarkeit',
    sections: {
      '(1)': {
        intro: 'Die betroffene Person hat das Recht, die sie betreffenden personenbezogenen Daten, die sie einem Verantwortlichen bereitgestellt hat, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und sie hat das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern',
        points: {
          'a': 'die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b beruht und',
          'b': 'die Verarbeitung mithilfe automatisierter Verfahren erfolgt.'
        }
      },
      '(2)': {
        content: 'Bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Absatz 1 hat die betroffene Person das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist.'
      },
      '(3)': {
        sentences: {
          '1': 'Die Ausübung des Rechts nach Absatz 1 des vorliegenden Artikels lässt Artikel 17 unberührt.',
          '2': 'Dieses Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.'
        }
      },
      '(4)': {
        content: 'Das Recht gemäß Absatz 1 darf die Rechte und Freiheiten anderer Personen nicht beeinträchtigen.'
      }
    }
  },
  'Art. 25': {
    title: 'Datenschutz durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen',
    sections: {
      '(1)': {
        content: 'Unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere der mit der Verarbeitung verbundenen Risiken für die Rechte und Freiheiten natürlicher Personen trifft der Verantwortliche sowohl zum Zeitpunkt der Festlegung der Mittel für die Verarbeitung als auch zum Zeitpunkt der eigentlichen Verarbeitung geeignete technische und organisatorische Maßnahmen – wie z. B. Pseudonymisierung –, die dafür ausgelegt sind, die Datenschutzgrundsätze wie etwa Datenminimierung wirksam umzusetzen und die notwendigen Garantien in die Verarbeitung aufzunehmen, um den Anforderungen dieser Verordnung zu genügen und die Rechte der betroffenen Personen zu schützen.'
      },
      '(2)': {
        sentences: {
          '1': 'Der Verantwortliche trifft geeignete technische und organisatorische Maßnahmen, die sicherstellen, dass durch Voreinstellung nur personenbezogene Daten, deren Verarbeitung für den jeweiligen bestimmten Verarbeitungszweck erforderlich ist, verarbeitet werden.',
          '2': 'Diese Verpflichtung gilt für die Menge der erhobenen personenbezogenen Daten, den Umfang ihrer Verarbeitung, ihre Speicherfrist und ihre Zugänglichkeit.',
          '3': 'Solche Maßnahmen müssen insbesondere sicherstellen, dass personenbezogene Daten durch Voreinstellungen nicht ohne Eingreifen der Person einer unbestimmten Zahl von natürlichen Personen zugänglich gemacht werden.'
        }
      },
      '(3)': {
        content: 'Ein genehmigtes Zertifizierungsverfahren gemäß Artikel 42 kann als Faktor herangezogen werden, um die Erfüllung der in den Absätzen 1 und 2 des vorliegenden Artikels genannten Anforderungen nachzuweisen.'
      }
    }
  },
  'Art. 28': {
    title: 'Auftragsverarbeiter',
    sections: {
      '(1)': {
        content: 'Erfolgt eine Verarbeitung im Auftrag eines Verantwortlichen, so arbeitet dieser nur mit Auftragsverarbeitern, die hinreichend Garantien dafür bieten, dass geeignete technische und organisatorische Maßnahmen so durchgeführt werden, dass die Verarbeitung im Einklang mit den Anforderungen dieser Verordnung erfolgt und den Schutz der Rechte der betroffenen Person gewährleistet.'
      },
      '(2)': {
        sentences: {
          '1': 'Der Auftragsverarbeiter nimmt keinen weiteren Auftragsverarbeiter ohne vorherige gesonderte oder allgemeine schriftliche Genehmigung des Verantwortlichen in Anspruch.',
          '2': 'Im Fall einer allgemeinen schriftlichen Genehmigung informiert der Auftragsverarbeiter den Verantwortlichen immer über jede beabsichtigte Änderung in Bezug auf die Hinzuziehung oder die Ersetzung anderer Auftragsverarbeiter, wodurch der Verantwortliche die Möglichkeit erhält, gegen derartige Änderungen Einspruch zu erheben.'
        }
      },
      '(3)': {
        sentences: {
          '1': 'Die Verarbeitung durch einen Auftragsverarbeiter erfolgt auf der Grundlage eines Vertrags oder eines anderen Rechtsinstruments nach dem Unionsrecht oder dem Recht der Mitgliedstaaten, der bzw. das den Auftragsverarbeiter in Bezug auf den Verantwortlichen bindet und in dem Gegenstand und Dauer der Verarbeitung, Art und Zweck der Verarbeitung, die Art der personenbezogenen Daten, die Kategorien betroffener Personen und die Pflichten und Rechte des Verantwortlichen festgelegt sind.',
          '2': 'Dieser Vertrag bzw. dieses andere Rechtsinstrument sieht insbesondere vor, dass der Auftragsverarbeiter a) die personenbezogenen Daten nur auf dokumentierte Weisung des Verantwortlichen – auch in Bezug auf die Übermittlung personenbezogener Daten an ein Drittland oder eine internationale Organisation – verarbeitet, sofern er nicht durch das Recht der Union oder der Mitgliedstaaten, dem der Auftragsverarbeiter unterliegt, hierzu verpflichtet ist; in einem solchen Fall teilt der Auftragsverarbeiter dem Verantwortlichen diese rechtlichen Anforderungen vor der Verarbeitung mit, sofern das betreffende Recht eine solche Mitteilung nicht wegen eines wichtigen öffentlichen Interesses verbietet; b) gewährleistet, dass sich die zur Verarbeitung der personenbezogenen Daten befugten Personen zur Vertraulichkeit verpflichtet haben oder einer angemessenen gesetzlichen Verschwiegenheitspflicht unterliegen; c) alle gemäß Artikel 32 erforderlichen Maßnahmen ergreift; d) die in den Absätzen 2 und 4 genannten Bedingungen für die Inanspruchnahme der Dienste eines weiteren Auftragsverarbeiters einhält; e) angesichts der Art der Verarbeitung den Verantwortlichen nach Möglichkeit mit geeigneten technischen und organisatorischen Maßnahmen dabei unterstützt, seiner Pflicht zur Beantwortung von Anträgen auf Wahrnehmung der in Kapitel III genannten Rechte der betroffenen Person nachzukommen; f) unter Berücksichtigung der Art der Verarbeitung und der ihm zur Verfügung stehenden Informationen den Verantwortlichen bei der Einhaltung der in den Artikeln 32 bis 36 genannten Pflichten unterstützt; g) nach Abschluss der Erbringung der Verarbeitungsleistungen alle personenbezogenen Daten nach Wahl des Verantwortlichen entweder löscht oder zurückgibt und die vorhandenen Kopien löscht, sofern nicht nach dem Unionsrecht oder dem Recht der Mitgliedstaaten eine Verpflichtung zur Speicherung der personenbezogenen Daten besteht; h) dem Verantwortlichen alle erforderlichen Informationen zum Nachweis der Einhaltung der in diesem Artikel niedergelegten Pflichten zur Verfügung stellt und Überprüfungen – einschließlich Inspektionen –, die vom Verantwortlichen oder einem anderen von diesem beauftragten Prüfer durchgeführt werden, ermöglicht und dazu beiträgt.'
        },
        additional: 'Mit Blick auf Unterabsatz 1 Buchstabe h informiert der Auftragsverarbeiter den Verantwortlichen unverzüglich, falls er der Auffassung ist, dass eine Weisung gegen diese Verordnung oder gegen andere Datenschutzbestimmungen der Union oder der Mitgliedstaaten verstößt.'
      }
    }
  },
  'Art. 30': {
    title: 'Verzeichnis von Verarbeitungstätigkeiten',
    sections: {
      '(1)': {
        sentences: {
          '1': 'Jeder Verantwortliche und gegebenenfalls sein Vertreter führen ein Verzeichnis aller Verarbeitungstätigkeiten, die ihrer Zuständigkeit unterliegen.',
          '2': 'Dieses Verzeichnis enthält sämtliche folgenden Angaben: a) den Namen und die Kontaktdaten des Verantwortlichen und gegebenenfalls des gemeinsam mit ihm Verantwortlichen, des Vertreters des Verantwortlichen sowie eines etwaigen Datenschutzbeauftragten; b) die Zwecke der Verarbeitung; c) eine Beschreibung der Kategorien betroffener Personen und der Kategorien personenbezogener Daten; d) die Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, einschließlich Empfänger in Drittländern oder internationalen Organisationen; e) gegebenenfalls Übermittlungen von personenbezogenen Daten an ein Drittland oder an eine internationale Organisation, einschließlich der Angabe des betreffenden Drittlands oder der betreffenden internationalen Organisation, sowie bei den in Artikel 49 Absatz 1 Unterabsatz 2 genannten Datenübermittlungen die Dokumentierung geeigneter Garantien; f) wenn möglich, die vorgesehenen Fristen für die Löschung der verschiedenen Datenkategorien; g) wenn möglich, eine allgemeine Beschreibung der technischen und organisatorischen Maßnahmen gemäß Artikel 32 Absatz 1.'
        }
      },
      '(2)': {
        intro: 'Jeder Auftragsverarbeiter und gegebenenfalls sein Vertreter führen ein Verzeichnis zu allen Kategorien von im Auftrag eines Verantwortlichen durchgeführten Tätigkeiten der Verarbeitung, das Folgendes enthält:',
        points: {
          'a': 'den Namen und die Kontaktdaten des Auftragsverarbeiters oder der Auftragsverarbeiter und jedes Verantwortlichen, in dessen Auftrag der Auftragsverarbeiter tätig ist, sowie gegebenenfalls des Vertreters des Verantwortlichen oder des Auftragsverarbeiters und eines etwaigen Datenschutzbeauftragten;',
          'b': 'die Kategorien von Verarbeitungen, die im Auftrag jedes Verantwortlichen durchgeführt werden;',
          'c': 'gegebenenfalls Übermittlungen von personenbezogenen Daten an ein Drittland oder an eine internationale Organisation, einschließlich der Angabe des betreffenden Drittlands oder der betreffenden internationalen Organisation, sowie bei den in Artikel 49 Absatz 1 Unterabsatz 2 genannten Datenübermittlungen die Dokumentierung geeigneter Garantien;',
          'd': 'wenn möglich, eine allgemeine Beschreibung der technischen und organisatorischen Maßnahmen gemäß Artikel 32 Absatz 1.'
        }
      },
      '(3)': {
        content: 'Das in den Absätzen 1 und 2 genannte Verzeichnis ist schriftlich zu führen, was auch in einem elektronischen Format erfolgen kann.'
      },
      '(4)': {
        content: 'Der Verantwortliche oder der Auftragsverarbeiter sowie gegebenenfalls der Vertreter des Verantwortlichen oder des Auftragsverarbeiters stellen der Aufsichtsbehörde das Verzeichnis auf Anfrage zur Verfügung.'
      },
      '(5)': {
        content: 'Die in den Absätzen 1 und 2 genannten Pflichten gelten nicht für Unternehmen oder Einrichtungen, die weniger als 250 Mitarbeiter beschäftigen, es sei denn die von ihnen vorgenommene Verarbeitung birgt ein Risiko für die Rechte und Freiheiten der betroffenen Personen, die Verarbeitung erfolgt nicht nur gelegentlich oder es erfolgt eine Verarbeitung besonderer Datenkategorien gemäß Artikel 9 Absatz 1 bzw. die Verarbeitung von personenbezogenen Daten über strafrechtliche Verurteilungen und Straftaten im Sinne des Artikels 10.'
      }
    }
  },
  'Art. 32': {
    title: 'Sicherheit der Verarbeitung',
    sections: {
      '(1)': {
        intro: 'Unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen treffen der Verantwortliche und der Auftragsverarbeiter geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten; diese Maßnahmen schließen gegebenenfalls unter anderem Folgendes ein:',
        points: {
          'a': 'die Pseudonymisierung und Verschlüsselung personenbezogener Daten;',
          'b': 'die Fähigkeit, die Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme und Dienste im Zusammenhang mit der Verarbeitung auf Dauer sicherzustellen;',
          'c': 'die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und den Zugang zu ihnen bei einem physischen oder technischen Zwischenfall rasch wiederherzustellen;',
          'd': 'ein Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen zur Gewährleistung der Sicherheit der Verarbeitung.'
        }
      },
      '(2)': {
        content: 'Bei der Beurteilung des angemessenen Schutzniveaus sind insbesondere die Risiken zu berücksichtigen, die mit der Verarbeitung verbunden sind, insbesondere durch – ob unbeabsichtigt oder unrechtmäßig – Vernichtung, Verlust, Veränderung oder unbefugte Offenlegung von beziehungsweise unbefugten Zugang zu personenbezogenen Daten, die übermittelt, gespeichert oder auf andere Weise verarbeitet wurden.'
      },
      '(3)': {
        content: 'Die Einhaltung genehmigter Verhaltensregeln gemäß Artikel 40 oder eines genehmigten Zertifizierungsverfahrens gemäß Artikel 42 kann als Faktor herangezogen werden, um die Erfüllung der in Absatz 1 des vorliegenden Artikels genannten Anforderungen nachzuweisen.'
      },
      '(4)': {
        content: 'Der Verantwortliche und der Auftragsverarbeiter unternehmen Schritte, um sicherzustellen, dass ihnen unterstellte natürliche Personen, die Zugang zu personenbezogenen Daten haben, diese nur auf Anweisung des Verantwortlichen verarbeiten, es sei denn, sie sind nach dem Recht der Union oder der Mitgliedstaaten zur Verarbeitung verpflichtet.'
      }
    }
  },
  'Art. 33': {
    title: 'Meldung von Verletzungen des Schutzes personenbezogener Daten an die Aufsichtsbehörde',
    sections: {
      '(1)': {
        sentences: {
          '1': 'Im Falle einer Verletzung des Schutzes personenbezogener Daten meldet der Verantwortliche unverzüglich und möglichst binnen 72 Stunden, nachdem ihm die Verletzung bekannt wurde, diese der gemäß Artikel 55 zuständigen Aufsichtsbehörde, es sei denn, dass die Verletzung des Schutzes personenbezogener Daten voraussichtlich nicht zu einem Risiko für die Rechte und Freiheiten natürlicher Personen führt.',
          '2': 'Erfolgt die Meldung an die Aufsichtsbehörde nicht binnen 72 Stunden, so ist ihr eine Begründung für die Verzögerung beizufügen.'
        }
      },
      '(2)': {
        content: 'Wenn dem Auftragsverarbeiter eine Verletzung des Schutzes personenbezogener Daten bekannt wird, meldet er diese dem Verantwortlichen unverzüglich.'
      },
      '(3)': {
        intro: 'Die Meldung gemäß Absatz 1 enthält zumindest folgende Informationen:',
        points: {
          'a': 'eine Beschreibung der Art der Verletzung des Schutzes personenbezogener Daten, soweit möglich mit Angabe der Kategorien und der ungefähren Zahl der betroffenen Personen, der betroffenen Kategorien und der ungefähren Zahl der betroffenen personenbezogenen Datensätze;',
          'b': 'den Namen und die Kontaktdaten des Datenschutzbeauftragten oder einer sonstigen Anlaufstelle für weitere Informationen;',
          'c': 'eine Beschreibung der wahrscheinlichen Folgen der Verletzung des Schutzes personenbezogener Daten;',
          'd': 'eine Beschreibung der von dem Verantwortlichen ergriffenen oder vorgeschlagenen Maßnahmen zur Behebung der Verletzung des Schutzes personenbezogener Daten und gegebenenfalls Maßnahmen zur Abmilderung ihrer möglichen nachteiligen Auswirkungen.'
        }
      },
      '(4)': {
        content: 'Wenn und soweit die Informationen nicht zur gleichen Zeit bereitgestellt werden können, kann der Verantwortliche diese Informationen ohne unangemessene weitere Verzögerung schrittweise zur Verfügung stellen.'
      },
      '(5)': {
        sentences: {
          '1': 'Der Verantwortliche dokumentiert Verletzungen des Schutzes personenbezogener Daten einschließlich aller im Zusammenhang mit der Verletzung des Schutzes personenbezogener Daten stehenden Fakten, ihrer Auswirkungen und der ergriffenen Abhilfemaßnahmen.',
          '2': 'Diese Dokumentation muss der Aufsichtsbehörde die Überprüfung der Einhaltung der Bestimmungen dieses Artikels ermöglichen.'
        }
      }
    }
  },
  'Art. 35': {
    title: 'Datenschutz-Folgenabschätzung',
    content: 'Hat eine Form der Verarbeitung, insbesondere bei Verwendung neuer Technologien, aufgrund der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge, so führt der Verantwortliche vorab eine Abschätzung der Folgen der vorgesehenen Verarbeitungsvorgänge für den Schutz personenbezogener Daten durch.'
  }
};

function DSGVOTooltip({ article, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Parse complex citations like "Art. 5 (1) a" or "Art. 6 (3) 2"
  const parseCitation = (citation) => {
    const match = citation.match(/^(Art\.\s*\d+)(?:\s*\((\d+)\))?(?:\s*([a-z]|\d+))?$/i);
    if (!match) return null;
    
    const [, articleNum, section, point] = match;
    const articleData = dsgvoArticles[articleNum];
    
    if (!articleData) return null;

    // For simple article references without subsections
    if (!section) {
      return {
        title: articleData.title,
        content: articleData.content || getFirstSectionContent(articleData)
      };
    }

    const sectionData = articleData.sections?.[`(${section})`];
    if (!sectionData) return null;

    // For section references like "Art. 5 (1)"
    if (!point) {
      return {
        title: `${articleData.title} - Absatz ${section}`,
        content: getSectionContent(sectionData)
      };
    }

    // For specific point references like "Art. 5 (1) a"
    if (sectionData.points?.[point]) {
      let content = '';
      if (sectionData.intro) {
        content += `1. ${sectionData.intro}\n\n`;
      }
      content += `${point}) ${sectionData.points[point]}`;
      
      return {
        title: `${articleData.title} - Absatz ${section} Buchstabe ${point}`,
        content: content
      };
    }

    // For numbered sentences like "Art. 6 (3) 2"
    if (sectionData.sentences?.[point]) {
      return {
        title: `${articleData.title} - Absatz ${section} Satz ${point}`,
        content: sectionData.sentences[point]
      };
    }

    return {
      title: `${articleData.title} - Absatz ${section}`,
      content: getSectionContent(sectionData)
    };
  };

  const getFirstSectionContent = (articleData) => {
    if (articleData.content) return articleData.content;
    
    const firstSection = Object.values(articleData.sections || {})[0];
    return getSectionContent(firstSection) || 'Inhalt nicht verfügbar';
  };

  const getSectionContent = (sectionData) => {
    if (sectionData.content) return sectionData.content;
    
    let content = '';
    if (sectionData.intro) {
      // If there are points, add a number before the intro
      if (sectionData.points) {
        content += `1. ${sectionData.intro}`;
      } else {
        content += sectionData.intro;
      }
    }
    
    if (sectionData.points) {
      content += '\n\n';
      Object.entries(sectionData.points).forEach(([key, value]) => {
        content += `${key}) ${value}\n`;
      });
    }
    
    if (sectionData.sentences) {
      content += '\n\n';
      Object.entries(sectionData.sentences).forEach(([key, value]) => {
        content += `${key}. ${value}\n`;
      });
    }
    
    if (sectionData.additional) {
      content += `\n\n${sectionData.additional}`;
    }
    
    return content || 'Inhalt nicht verfügbar';
  };

  const citationData = parseCitation(article);

  return (
    <span 
      className={styles.dsgvoReference}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && citationData && (
        <div className={styles.tooltip}>
          <h4>{citationData.title}</h4>
          <div className={styles.tooltipContent}>
            {citationData.content.split('\n').map((line, index) => (
              line.trim() && <p key={index}>{line.trim()}</p>
            ))}
          </div>
        </div>
      )}
    </span>
  );
}

function PrivacyCard({ title, description, azureFeatures, dsgvoReferences, IconComponent }) {
  return (
    <div className={styles.privacyCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>
          <IconComponent />
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
      </div>
      <p className={styles.cardDescription}>{description}</p>
      
      <div className={styles.azureFeatures}>
        <h4>Azure-Implementierung:</h4>
        <ul>
          {azureFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className={styles.dsgvoReferences}>
        <div className={styles.articleTags}>
          {dsgvoReferences.map((article, index) => (
            <DSGVOTooltip key={index} article={article}>
              <span className={styles.articleTag}>{article}</span>
            </DSGVOTooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Datenschutz() {
  const privacySections = [
    {
      title: "Rechtmäßigkeit und Auftragsverarbeitung",
      cards: [
        {
          title: "Auftragsverarbeitungsvertrag (AVV)",
          description: "Klare vertragliche Regelungen zwischen Kanzlei und Anbieter sowie Microsoft als Unterauftragsverarbeiter.",
          azureFeatures: [
            "Microsoft Data Protection Addendum (DPA) mit EU-Standardvertragsklauseln",
            "ISO 27001/27701 Zertifizierungen für unabhängige Sicherheitsprüfungen",
            "Transparente Auditberichte und Compliance-Nachweise"
          ],
          dsgvoReferences: ["Art. 28", "Art. 6 (1) a", "Art. 6 (1) b"],
          IconComponent: FaClipboardList
        },
        {
          title: "Rechtmäßige Verarbeitung",
          description: "Jede Datenverarbeitung basiert auf gültigen Rechtsgrundlagen mit transparenten Einwilligungsmechanismen.",
          azureFeatures: [
            "Microsoft Entra ID (ehem. Azure AD) für Authentifizierung und Zustimmung",
            "Granulare Berechtigungssysteme für verschiedene Datenkategorien",
            "Protokollierung aller Einwilligungen und Rechtsgrundlagen"
          ],
          dsgvoReferences: ["Art. 6 (1) a", "Art. 5 (1) a", "Art. 5 (1) f"],
          IconComponent: FaUser
        }
      ]
    },
    {
      title: "Datenschutz durch Technik und Voreinstellung",
      cards: [
        {
          title: "Privacy by Design & EU Data Boundary",
          description: "Datenschutz ist von Anfang an in die Systemarchitektur integriert mit vollständiger EU-Datenresidenz.",
          azureFeatures: [
            "EU Data Boundary 2025: Kundendaten verbleiben vollständig in EU/EFTA",
            "Azure Policy zur Erzwingung EU-Regionsbindung (West Europe, Germany West Central)",
            "Azure OpenAI DataZone Standard für garantierte EU-Verarbeitung ohne Training"
          ],
          dsgvoReferences: ["Art. 25 (1)", "Art. 25 (2)", "Art. 5 (1) c"],
          IconComponent: FaShieldAlt
        },
        {
          title: "Datenminimierung & Lifecycle Management",
          description: "Nur notwendige Daten werden verarbeitet mit automatischer Bereinigung nach Aufbewahrungsfristen.",
          azureFeatures: [
            "Azure Storage Lifecycle Policies für automatische Datenlöschung",
            "Application Insights mit IP-Maskierung und minimaler Telemetrie",
            "Clientseitige Vorsortierung um nur relevante Auszüge zu übertragen"
          ],
          dsgvoReferences: ["Art. 5 (1) c", "Art. 5 (1) e", "Art. 6 (1) c"],
          IconComponent: FaChartLine
        },
        {
          title: "Zweckbindung & Zugriffskontrolle",
          description: "Daten werden nur für den ursprünglich angegebenen Zweck verwendet mit strikter Zugriffskontrolle.",
          azureFeatures: [
            "Role-Based Access Control (RBAC) mit granularen Berechtigungen",
            "Azure AD Privileged Identity Management für Admin-Zugriffe",
            "Just-in-Time (JIT) Zugriff und Conditional Access Policies"
          ],
          dsgvoReferences: ["Art. 5 (1) b", "Art. 6 (1) f", "Art. 32 (1)"],
          IconComponent: FaBullseye
        }
      ]
    },
    {
      title: "Datensicherheit (Integrität und Vertraulichkeit)",
      cards: [
        {
          title: "Ende-zu-Ende-Verschlüsselung",
          description: "Umfassende Verschlüsselung at-rest und in-transit mit optionalen Customer-Managed Keys.",
          azureFeatures: [
            "Azure Key Vault für sichere Schlüsselverwaltung",
            "AES-256 Verschlüsselung für Storage (standardmäßig aktiviert, nicht deaktivierbar)",
            "TLS 1.3 für alle HTTPS/Web-Verbindungen in Azure App Services"
          ],
          dsgvoReferences: ["Art. 32 (1) a", "Art. 32 (1) b", "Art. 25 (1)"],
          IconComponent: MdVpnLock
        },
        {
          title: "Zero-Trust Netzwerksicherheit",
          description: "Strenge Netzwerkisolation und Zugriffskontrolle mit privaten Endpunkten.",
          azureFeatures: [
            "Private Endpoints für Storage Accounts und interne VNet-Kommunikation",
            "Azure Firewall und Network Security Groups für Netzwerksegmentierung",
            "VPN-Gateway für sichere Kanzlei-Anbindung"
          ],
          dsgvoReferences: ["Art. 32 (1) b", "Art. 32 (1) c", "Art. 25 (1)"],
          IconComponent: HiShieldCheck
        },
        {
          title: "Backup & Disaster Recovery",
          description: "Sichere Datensicherung mit geografischer Redundanz und schneller Wiederherstellung.",
          azureFeatures: [
            "Azure Backup mit Geo-Redundant Storage in EU-Rechenzentren",
            "Point-in-Time Recovery für Datenbanken und Storage",
            "Automated Disaster Recovery mit RPO/RTO-Garantien"
          ],
          dsgvoReferences: ["Art. 32"],
          IconComponent: MdStorage
        }
      ]
    },
    {
      title: "Protokollierung, Monitoring und Vorfallmanagement",
      cards: [
        {
          title: "Datenschutzgerechtes Logging",
          description: "Lückenlose Protokollierung mit automatischer IP-Maskierung und kurzen Aufbewahrungsfristen.",
          azureFeatures: [
            "Azure Monitor/Log Analytics mit 30-60 Tage Aufbewahrung",
            "Application Insights mit standardmäßiger IP-Maskierung (0.0.0.0)",
            "Keine Speicherung von sensiblen Dokumentinhalten in Logs"
          ],
          dsgvoReferences: ["Art. 32", "Art. 5"],
          IconComponent: HiDocumentSearch
        },
        {
          title: "Incident Response & Datenpanne-Meldung",
          description: "Strukturiertes Vorgehen bei Sicherheitsvorfällen mit 72h-Meldepflicht nach Art. 33 DSGVO.",
          azureFeatures: [
            "Microsoft Defender for Cloud mit automatischen Security Alerts",
            "Azure Sentinel für SIEM mit Echtzeit-Bedrohungserkennung",
            "Automatisierte Logic Apps für Incident Response Workflows"
          ],
          dsgvoReferences: ["Art. 33", "Art. 32"],
          IconComponent: FaExclamationTriangle
        },
        {
          title: "DSGVO-Compliance Monitoring",
          description: "Kontinuierliche Überwachung der Datenschutz-Konformität mit automatischen Reports.",
          azureFeatures: [
            "Azure Compliance Manager mit GDPR-Blueprints",
            "Microsoft Purview für Data Loss Prevention und Classification",
            "Audit-Trails für alle Datenverarbeitungen und Zugriffe"
          ],
          dsgvoReferences: ["Art. 5", "Art. 30"],
          IconComponent: FaCheckCircle
        }
      ]
    },
    {
      title: "Betroffenenrechte und Datenlöschung",
      cards: [
        {
          title: "Auskunft und Datenportabilität",
          description: "Effiziente Erfüllung von Auskunfts- und Portabilitätsersuchen mit Azure-Tools.",
          azureFeatures: [
            "Azure Data Subject Requests (DSR) Portal für systematische Datensuche",
            "Export-Funktionen für strukturierte Datenübertragung (ZIP, JSON)",
            "Durchsuchbare Audit-Logs für Nachweis der Datenverarbeitung"
          ],
          dsgvoReferences: ["Art. 15 (1)", "Art. 15 (3)", "Art. 20 (1)"],
          IconComponent: FaDatabase
        },
        {
          title: "Recht auf Löschung & Vergessen",
          description: "Umfassendes Löschkonzept mit automatischen Lifecycle-Policies und manuellen Löschoptionen.",
          azureFeatures: [
            "Azure Storage Lifecycle Management für automatische Datenlöschung",
            "Soft-Delete und Point-in-Time Recovery für versehentliche Löschungen",
            "Purge-Funktionen für endgültige Datenvernichtung ohne Wiederherstellbarkeit"
          ],
          dsgvoReferences: ["Art. 17 (1)", "Art. 17 (2)", "Art. 5 (1) e"],
          IconComponent: FaLock
        },
        {
          title: "Berichtigung und Einschränkung",
          description: "Werkzeuge zur Datenkorrektur und temporären Verarbeitungseinschränkung.",
          azureFeatures: [
            "Versionierung von Dokumenten und Metadaten für Berichtigungen",
            "Temporäre Sperrung von Datenverarbeitungen via RBAC",
            "Protokollierung aller Änderungen und Einschränkungen"
          ],
          dsgvoReferences: ["Art. 16 (1)", "Art. 17 (1) a", "Art. 32 (1) d"],
          IconComponent: HiCog
        }
      ]
    },
    {
      title: "Dokumentation und Datenschutz-Folgenabschätzung",
      cards: [
        {
          title: "DSFA/DPIA Unterstützung",
          description: "Umfassende Dokumentation für Datenschutz-Folgenabschätzungen bei KI-Verarbeitung.",
          azureFeatures: [
            "GDPR-Blueprint Referenzarchitektur mit Mapping zu DSGVO-Artikeln",
            "Detaillierte Systembeschreibungen und Datenfluss-Diagramme",
            "Risikoanalysen für Azure OpenAI und sensible Datenverarbeitung"
          ],
          dsgvoReferences: ["Art. 35", "Art. 25"],
          IconComponent: MdPrivacyTip
        },
        {
          title: "Verzeichnis der Verarbeitungstätigkeiten",
          description: "Vollständige Dokumentation aller Datenverarbeitungen gemäß Art. 30 DSGVO.",
          azureFeatures: [
            "Azure Compliance Manager für strukturierte Dokumentation",
            "Automatische Erfassung von Datenkategorien und Verarbeitungszwecken",
            "Verantwortlichkeits-Matrizen zwischen Kanzlei, Anbieter und Microsoft"
          ],
          dsgvoReferences: ["Art. 30", "Art. 5"],
          IconComponent: FaClipboardList
        },
        {
          title: "Fortlaufende Compliance",
          description: "Regelmäßige Überprüfung und Aktualisierung der Datenschutz-Maßnahmen.",
          azureFeatures: [
            "Automatische Compliance-Assessments und Berichte",
            "Integration mit Microsoft Security Center für kontinuierliches Monitoring",
            "Schulungs- und Sensibilisierungsprogramme für Entwickler und Nutzer"
          ],
          dsgvoReferences: ["Art. 5", "Art. 32"],
          IconComponent: MdMonitor
        }
      ]
    }
  ];

  return (
    <Layout
      title="Datenschutz - DSGVO-konforme KI-Dokumentenerstellung"
      description="Erfahren Sie, wie Drafto höchste Datenschutzstandards durch Azure-Technologien und DSGVO-Compliance gewährleistet.">
      
      <div className={styles.hero}>x        
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            DSGVO-konforme KI-Dokumentenerstellung
          </Heading>
          <p className={styles.heroSubtitle}>
            Drafto nutzt Microsoft Azure als Fundament für Datenschutz und Compliance von Anfang an: 
            Mit EU Data Boundary, Privacy-by-Design, Azure OpenAI DataZone und umfassenden Betroffenenrechten 
            wird DSGVO-Komfort im Kanzlei-Tagesbetrieb greifbar.
          </p>
          <div className={styles.heroFeatures}>
            <div className={styles.heroFeature}>
              <FaShieldAlt />
              <span>EU Data Boundary 2025</span>
            </div>
            <div className={styles.heroFeature}>
              <MdVpnLock />
              <span>Ende-zu-Ende-Verschlüsselung</span>
            </div>
            <div className={styles.heroFeature}>
              <FaCheckCircle />
              <span>Azure OpenAI ohne Training</span>
            </div>
            <div className={styles.heroFeature}>
              <MdPrivacyTip />
              <span>Privacy by Design</span>
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className="container">
          {privacySections.map((section, sectionIndex) => (
            <section key={sectionIndex} className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>
                {section.title}
              </Heading>
              <div className={styles.cardsGrid}>
                {section.cards.map((card, cardIndex) => (
                  <PrivacyCard key={cardIndex} {...card} />
                ))}
              </div>
            </section>
          ))}

          
        </div>
      </main>
    </Layout>
  );
}
