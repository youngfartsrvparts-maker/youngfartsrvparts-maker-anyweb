import { 
  Layout, 
  ShoppingBag, 
  Zap, 
  Cpu, 
  Link as LinkIcon, 
  MessageSquare, 
  Database,
  Search,
  Lightbulb,
  Settings
} from 'lucide-react';
import { Service, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    slug: 'website-design',
    title: 'Website Design',
    description: 'Modern, conversion-focused design with responsive builds and high-end UI.',
    icon: Layout,
    features: [
      'Conversion-focused design',
      'Responsive mobile-first builds',
      'High-end UI/UX',
      'Performance optimized'
    ],
    examples: [
      'SaaS Landing Pages',
      'Corporate Websites',
      'Portfolio Sites',
      'Marketing Funnels'
    ]
  },
  {
    id: 'shopify',
    slug: 'shopify-development',
    title: 'Shopify Development',
    description: 'Custom Shopify stores with app integrations and conversion optimization.',
    icon: ShoppingBag,
    features: [
      'Store setup & configuration',
      'Custom theme design',
      'App integrations',
      'Conversion optimization'
    ],
    examples: [
      'D2C Brands',
      'Subscription Stores',
      'High-Volume Retail',
      'B2B E-commerce'
    ]
  },
  {
    id: 'automation',
    slug: 'business-automation',
    title: 'Business Automation',
    description: 'Identify repetitive tasks and replace them with automated AI systems.',
    icon: Zap,
    highlighted: true,
    features: [
      'Workflow analysis',
      'Repetitive task elimination',
      'System connectivity',
      'Efficiency reporting'
    ],
    examples: [
      'Lead follow-up automation',
      'Quote generation systems',
      'Order & inventory automation',
      'CRM syncing'
    ]
  },
  {
    id: 'ai-integration',
    slug: 'ai-integration',
    title: 'AI Integration',
    description: 'Layer AI into your workflows to improve speed, consistency, and profitability.',
    icon: Cpu,
    highlighted: true,
    features: [
      'AI-powered workflows',
      'Internal AI tools',
      'Lead qualification AI',
      'Content generation systems'
    ],
    examples: [
      'AI Staff Assistants',
      'Automated Data Analysis',
      'AI Response Generation',
      'Predictive Modeling'
    ]
  },
  {
    id: 'api-integrations',
    slug: 'api-integrations',
    title: 'API Integrations',
    description: 'Connect your tools together to sync platforms and build custom integrations.',
    icon: LinkIcon,
    features: [
      'Custom API development',
      'Platform synchronization',
      'Third-party app connections',
      'Data mapping'
    ],
    examples: [
      'CRM to ERP Sync',
      'Payment Gateway Integration',
      'Custom SaaS Connectors',
      'Legacy System Bridges'
    ]
  },
  {
    id: 'chatbots',
    slug: 'chatbots',
    title: 'Chatbots & AI Assistants',
    description: 'Website bots for customer service, lead qualification, and staff productivity.',
    icon: MessageSquare,
    features: [
      'Customer service bots',
      'Lead qualification bots',
      'Internal staff assistants',
      'Multi-platform deployment'
    ],
    examples: [
      '24/7 Customer Support',
      'Sales Qualification Bot',
      'HR Assistant Bot',
      'Knowledge Base Search'
    ]
  },
  {
    id: 'databases',
    slug: 'databases-systems',
    title: 'Databases & Systems',
    description: 'Custom dashboards, internal tools, and data systems for your business.',
    icon: Database,
    features: [
      'Custom dashboard design',
      'Internal admin portals',
      'Data architecture',
      'Reporting systems'
    ],
    examples: [
      'Operations Dashboards',
      'Inventory Management',
      'Customer Portals',
      'Data Warehousing'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Understand Your Business',
    description: 'We analyze your operations to find what slows you down.',
    icon: Search
  },
  {
    number: 2,
    title: 'Identify Pain Points',
    description: 'We pinpoint bottlenecks and opportunities for automation.',
    icon: Lightbulb
  },
  {
    number: 3,
    title: 'Build & Implement',
    description: 'We design and deploy systems that scale your growth.',
    icon: Settings
  }
];
