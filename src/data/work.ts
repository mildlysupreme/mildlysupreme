// Work shown on the homepage. Cases come from teqqed.com/work; only the name,
// a one-liner and services are shown, no case details.
import alvesta from '../assets/cases/alvesta-living.jpg'
import atlas from '../assets/cases/atlas-land.jpg'
import hypeling from '../assets/cases/hypeling.jpg'
import numa from '../assets/cases/numa.jpg'
import soren from '../assets/cases/soren.jpg'
import vonder from '../assets/cases/vonder.jpg'

// Shown with an image, in this order.
export const selectedWork = [
  {
    name: 'Vonder',
    headline: 'Scaling a global living brand',
    line: 'A long-term brand and product partnership across Europe, the Middle East and the United States.',
    services: ['Brand Strategy', 'Brand Identity', 'Product Design'],
    image: vonder,
  },
  {
    name: 'Hypeling',
    headline: 'Good brands. Great creators. Better content.',
    line: 'A brand and digital experience bringing brands and creators together.',
    services: ['Brand Identity', 'Web Design', 'Product Design'],
    image: hypeling,
  },
  {
    name: 'Numa',
    headline: 'Clinical data you can trust',
    line: 'An editorial platform for decentralized clinical trials, built on dense biomarker data.',
    services: ['Brand Identity', 'Product Design', 'Development'],
    image: numa,
  },
  {
    name: 'Alvesta Living',
    headline: 'Country estates, presented with care',
    line: 'Digital identity and a bespoke web experience for a luxury country estate brokerage.',
    services: ['Brand Identity', 'Product Design', 'Development'],
    image: alvesta,
  },
  {
    name: 'Atlas.land',
    headline: 'Beyond the listing',
    line: 'An AI-powered real estate platform that helps buyers understand what truly matters.',
    services: ['Brand Identity', 'Product Design', 'AI'],
    image: atlas,
  },
  {
    name: 'Soren',
    headline: 'Mediterranean architecture as an identity',
    line: 'A contemporary real estate identity, from logo to guidelines.',
    services: ['Branding', 'Brand Identity', 'Brand Guidelines'],
    image: soren,
  },
]

// The rest, as a compact list.
export const moreWork = [
  { name: 'Andalucia Real Estate', services: 'Strategy, Brand, Web, Automation' },
  { name: 'Atelier', services: 'Brand Identity, Product Design' },
  { name: 'Bloop', services: 'Brand Identity, Product Design, UI Design' },
  { name: 'HeatTransformers', services: 'Branding, Product Design, Development' },
  { name: 'Kumo', services: 'Strategy, Branding, Development, AI' },
  { name: 'Moca', services: 'UI Design, Brand Identity, Research' },
  { name: 'MOF', services: 'Branding, Brand Guidelines' },
  { name: 'Nestseekers', services: 'Branding, Product Design' },
  { name: 'NEX', services: 'Brand Strategy, Web Design, Development' },
  { name: 'Real Estate Empire Group', services: 'Brand Identity, Web Design, Marketing Design' },
  { name: 'Studio Moss', services: 'Design System, Branding, Product Design' },
  { name: 'VonderX', services: 'Branding, UI Design, Development' },
  { name: 'Werky', services: 'Product Design, Development, Research' },
  { name: 'WeWo', services: 'Branding, Brand Identity' },
]

// Things I'm building myself.
export const ventures = [
  { name: 'Teqqed', domain: 'teqqed.com', url: 'https://www.teqqed.com', line: 'My studio for strategy, design, engineering and AI. Since 2015.' },
  { name: 'Schematic', domain: 'schematic.org', url: 'https://www.schematic.org', line: 'A visual platform for mapping businesses, products and complex systems.' },
  { name: 'Localtalent.now', domain: 'localtalent.now', url: 'https://www.localtalent.now', line: 'Making skilled people easier to find close to home.' },
  { name: 'Fryslân.club', domain: 'fryslan.club', url: 'https://fryslan.club', line: 'Putting Frisian companies, organizations and initiatives on the map.' },
  { name: 'Elitice', domain: 'elitice.com', url: 'https://www.elitice.com', line: 'Find people to spar with and learn from in real estate, luxury and automotive.' },
  { name: 'Killerhabits', domain: 'killerhabits.app', url: 'https://killerhabits.app', line: 'A habit tracker for building routines, quitting bad patterns and sharing progress.' },
  { name: 'Chatsy', domain: 'chatsy.org', url: 'https://www.chatsy.org', line: 'AI chatbots that answer from your own content, around the clock.' },
]

// Clients through Teqqed, from teqqed.com/about.
export const clients = [
  'Air France',
  'KLM',
  'NS',
  'Transdev',
  'LRC Group',
  'NEX',
  'HeatTransformers',
  'Vonder',
  'Netmaker',
  'Workspace 365',
  'Puurspanje',
]

export const email = 'tim@teqqed.com'
