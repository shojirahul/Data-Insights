import article1 from '../assets/article-1.png';
import article2 from '../assets/article-2.png';
import article3 from '../assets/article-3.png';
import article4 from '../assets/article-4.png';
import article5 from '../assets/article-5.png';
import article6 from '../assets/article-6.png';
import article7 from '../assets/article-7.png';
import article8 from '../assets/article-8.png';

export const articlesData = [
  {
    id: 1,
    type: 'article',
    tag: 'PATIENT PORTALS',
    date: 'MAY 12, 2024',
    category: 'TECHNOLOGY',
    title: 'Reimagining Patient Access in Rural Communities',
    description: 'How tele-health infrastructure is bridging the gap for 12 million under-served Americans this year.',
    image: article1,
  },
  {
    id: 2,
    type: 'article',
    tag: 'REVENUE CYCLE',
    date: 'MAY 08, 2024',
    category: 'OPERATIONS',
    title: 'The Invisible Cost of Claim Denials',
    description: 'Analysis of claim processing delays and their direct impact on provider liquidity and operational health.',
    image: article2,
  },
  {
    id: 3,
    type: 'article',
    tag: 'CLINICAL RESEARCH',
    date: 'MAY 03, 2024',
    category: 'AI & ML',
    title: 'AI in the Exam Room: Enhancing the Human Connection',
    description: 'New findings on how ambient listening technology reduces physician screen time by 40%.',
    image: article3,
  },
  {
    id: 4,
    type: 'insight',
    tag: 'QUICK INSIGHT',
    title: 'Practice Growth Trends',
    metrics: [
      { label: 'Specialty Adoption', value: '12.4%' },
      { label: 'Patient Retention', value: '89.1%' }
    ],
    linkText: 'View Full Report'
  },
  {
    id: 5,
    type: 'article',
    tag: 'HEALTH EQUITY',
    date: 'APRIL 28, 2024',
    category: 'DIVERSITY',
    title: 'Addressing Bias in Clinical Algorithms',
    description: 'A longitudinal study on algorithm refinement for equitable healthcare outcomes across demographics.',
    image: article4,
  },
  {
    id: 6,
    type: 'article',
    tag: 'INNOVATION',
    date: 'APRIL 22, 2024',
    category: 'VENTURE',
    title: 'The Future of Value-Based Care: 2025 Outlook',
    description: 'Predictive modeling on how reimbursement structures will evolve in the next fiscal cycle.',
    image: article5,
  },
  {
    id: 7,
    type: 'article',
    tag: 'ECONOMICS',
    date: 'APRIL 18, 2024',
    category: 'EFFICIENCY',
    title: 'The Quantifiable Shift: How AI is reducing overhead in rural clinics.',
    description: 'Recent data suggests a 15% reduction in administrative burden across integrated networks.',
    linkText: 'Read Analysis',
    image: article6,
  },
  {
    id: 8,
    type: 'article',
    tag: 'INNOVATION',
    date: 'APRIL 10, 2024',
    category: 'DATA SHARING',
    title: 'Interoperability and the Patient Journey.',
    description: 'Examining the friction points in data sharing and the future of longitudinal records.',
    linkText: 'Read Analysis',
    image: article7,
  },
  {
    id: 9,
    type: 'article',
    tag: 'POLICY',
    date: 'MARCH 28, 2024',
    category: 'REGULATION',
    title: 'Legislative Impacts on Provider Reimbursement.',
    description: 'Mapping the 2024 policy landscape and its effect on independent practices.',
    linkText: 'Read Analysis',
    image: article8,
  }
];
