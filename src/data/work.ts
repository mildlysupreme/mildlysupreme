// Work shown on the homepage. Cases come from teqqed.com/work; only the name,
// a one-liner and services are shown, no case details.
import alvesta from '../assets/cases/alvesta-living.jpg'
import atlas from '../assets/cases/atlas-land.jpg'
import bloop from '../assets/cases/bloop.jpg'
import heattransformers from '../assets/cases/heattransformers.jpg'
import hypeling from '../assets/cases/hypeling.jpg'
import numa from '../assets/cases/numa.jpg'
import reeg from '../assets/cases/real-estate-empire-group.jpg'
import soren from '../assets/cases/soren.jpg'
import vonder from '../assets/cases/vonder.jpg'
import werky from '../assets/cases/werky.jpg'

// Big rows with an image, in this order.
export const selectedWork = [
  {
    name: 'Vonder',
    line: 'A long-term brand and product partnership helping a global living company scale across Europe, the Middle East and the United States.',
    services: ['Brand Strategy', 'Brand Identity', 'Product Design'],
    image: vonder,
  },
  {
    name: 'Hypeling',
    line: 'A brand and digital experience bringing brands and creators together, from the first brief to content made for the feed.',
    services: ['Brand Identity', 'Web Design', 'Product Design'],
    image: hypeling,
  },
  {
    name: 'Numa',
    line: 'Turning dense scientific biomarker data into an editorial, high-trust platform for decentralized clinical trials.',
    services: ['Brand Identity', 'Product Design', 'Development'],
    image: numa,
  },
  {
    name: 'Alvesta Living',
    line: 'Digital identity and a bespoke web experience for a luxury country estate brokerage.',
    services: ['Brand Identity', 'Product Design', 'Development'],
    image: alvesta,
  },
  {
    name: 'Atlas.land',
    line: 'An AI-powered real estate platform that helps buyers understand what truly matters, beyond the listing.',
    services: ['Brand Identity', 'Product Design', 'AI'],
    image: atlas,
  },
  {
    name: 'Soren',
    line: 'A contemporary real estate identity inspired by Mediterranean architecture.',
    services: ['Branding', 'Brand Identity', 'Brand Guidelines'],
    image: soren,
  },
  {
    name: 'HeatTransformers',
    line: 'A premium digital experience for the future of sustainable home heating.',
    services: ['Branding', 'Product Design', 'Development'],
    image: heattransformers,
  },
  {
    name: 'Real Estate Empire Group',
    line: 'One recognizable brand system, from property discovery to campaigns, events and lead follow-up.',
    services: ['Brand Identity', 'Web Design', 'Marketing Design'],
    image: reeg,
  },
  {
    name: 'Werky',
    line: 'A community platform for volunteer discovery, availability, vacancies and scheduling.',
    services: ['Product Design', 'Development', 'Research'],
    image: werky,
  },
  {
    name: 'Bloop',
    line: 'A modern workspace built for the next generation of teams.',
    services: ['Brand Identity', 'Product Design', 'UI Design'],
    image: bloop,
  },
]

// The rest, as a compact list.
export const moreWork = [
  { name: 'Andalucia Real Estate', services: 'Strategy, Brand, Web, Automation' },
  { name: 'Atelier', services: 'Brand Identity, Product Design' },
  { name: 'Chatsy', services: 'Branding, Product Design, Development' },
  { name: 'Kumo', services: 'Strategy, Branding, Development, AI' },
  { name: 'Killerhabits', services: 'Product Design, UI Design, Research' },
  { name: 'Moca', services: 'UI Design, Brand Identity, Research' },
  { name: 'MOF', services: 'Branding, Brand Guidelines' },
  { name: 'Nestseekers', services: 'Branding, Product Design' },
  { name: 'NEX', services: 'Brand Strategy, Web Design, Development' },
  { name: 'Studio Moss', services: 'Design System, Branding, Product Design' },
  { name: 'VonderX', services: 'Branding, UI Design, Development' },
  { name: 'WeWo', services: 'Branding, Brand Identity' },
]

// Things I'm building myself.
export const ventures = [
  { name: 'Teqqed', url: 'https://www.teqqed.com', line: 'My studio for strategy, design, engineering and AI. Since 2015.' },
  { name: 'Schematic', url: 'https://www.schematic.org', line: 'A visual platform for mapping businesses, products and complex systems.' },
  { name: 'Localtalent.now', url: 'https://www.localtalent.now', line: 'Making skilled people easier to find close to home.' },
  { name: 'Fryslân.club', url: 'https://fryslan.club', line: 'Putting Frisian companies, organizations and initiatives on the map.' },
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

export const email = 'hello@teqqed.com'
