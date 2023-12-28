const itemData = [
  {
    img: '/showcase/calmi.png',
    title: 'A therapeutic chatbot, built with GPT',
    description:
      'The Cahtbot is programmed to help you with your mental health issues and it has custom system messages at every step of the way.',
    rows: 2,
    cols: 2,
    href: 'https://cbtchat.vercel.app/',
    featured: true
  },
  {
    comp: ExclusionTabs,
    title: 'Eclusion Tabs',
    description: 'animated tabs built with framer motion'
  },
  {
    comp: MacDock,
    title: 'mimicing Mac OS Dock',
    description: 'animated dock items built with framer motion'
  }
];

import ExclusionTabs from './ExclusionTabs';
import MacDock from './Macdock';
import ShowCaseGrid from './ShowcaseGrid';

export default function page() {
  return (
    <div className="not-prose -mx-10 overflow-hidden md:mx-0">
      <ShowCaseGrid data={itemData} />
    </div>
  );
}
