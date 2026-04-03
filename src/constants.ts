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
    description: 'Custom websites built for any business — from simple sites to advanced, fully integrated platforms.',
    longDescription: 'AnyWeb creates modern, high-performing websites built around credibility, clarity, and conversion. We design and build websites of any type and any scale — from simple business sites to advanced, fully integrated platforms powered by automation and AI.',
    icon: Layout,
    features: [
      'Conversion-focused design',
      'Responsive mobile-first builds',
      'High-end UI/UX',
      'Performance optimized',
      'Lead-focused layouts',
      'SEO-friendly structure'
    ],
    examples: [
      'SaaS Landing Pages',
      'Corporate Websites',
      'Portfolio Sites',
      'Marketing Funnels'
    ],
    painPoints: [
      'Outdated design that hurts trust',
      'Confusing structure that loses leads',
      'Poor mobile experience',
      'Slow loading speeds',
      'Websites that look okay but don’t perform'
    ],
    solutions: [
      'Strategy-first design process',
      'Customer journey mapping',
      'Modern UI/UX implementation',
      'Responsive layouts for all devices',
      'Speed and performance optimization'
    ],
    benefits: [
      'Increase visitor trust and credibility',
      'Improve lead conversion rates',
      'Better mobile engagement',
      'Faster site performance',
      'Clearer brand positioning'
    ],
    useCases: [
      {
        before: 'A local service business had an outdated site that didn’t work on mobile and was hard to navigate.',
        after: 'A modern, mobile-first design with clear service pages and a high-converting booking form.',
        impact: '3x increase in online inquiries within the first month.'
      },
      {
        before: 'A SaaS company had a complex product but a landing page that didn’t explain the value clearly.',
        after: 'A clean, high-end landing page with custom illustrations and a clear "How it Works" section.',
        impact: '25% reduction in bounce rate and 15% increase in trial signups.'
      }
    ],
    faqs: [
      { question: 'Do you use templates?', answer: 'No, every website we build is custom-designed and built from scratch to fit your specific business goals.' },
      { question: 'Is the site mobile-friendly?', answer: 'Absolutely. We follow a mobile-first approach to ensure your site looks and works perfectly on all devices.' },
      { question: 'Will I be able to update the content?', answer: 'Yes, we typically build on modern CMS platforms that allow you to easily manage your content without technical knowledge.' }
    ]
  },
  {
    id: 'shopify',
    slug: 'shopify-development',
    title: 'Shopify Development',
    description: 'Custom Shopify stores with app integrations and conversion optimization.',
    longDescription: 'AnyWeb helps launch, redesign, optimize, and automate Shopify stores. We are your Shopify growth partner, focusing on sales, scaling, and smarter operations.',
    icon: ShoppingBag,
    features: [
      'Store setup & configuration',
      'Custom theme design',
      'App integrations',
      'Conversion optimization',
      'Product page UX',
      'Checkout flow optimization'
    ],
    examples: [
      'D2C Brands',
      'Subscription Stores',
      'High-Volume Retail',
      'B2B E-commerce'
    ],
    painPoints: [
      'Weak theme design that looks generic',
      'Cluttered collections and navigation',
      'Poor conversion on product pages',
      'App overload slowing down the store',
      'Manual store operations'
    ],
    solutions: [
      'Custom theme development',
      'Collection organization strategy',
      'Product page optimization',
      'App integration and cleanup',
      'Shopify workflow automation'
    ],
    benefits: [
      'Higher average order value (AOV)',
      'Improved conversion rates (CVR)',
      'Faster store performance',
      'Reduced manual admin work',
      'Scalable store architecture'
    ],
    useCases: [
      {
        before: 'An e-commerce brand was using a generic Shopify theme that felt "cheap" and converted poorly.',
        after: 'A custom-designed Shopify theme with high-end product page UX and optimized checkout.',
        impact: '45% increase in conversion rate and 20% increase in AOV.'
      },
      {
        before: 'A high-volume retailer was manually syncing inventory between their warehouse and Shopify.',
        after: 'Automated inventory sync and custom app integration for warehouse management.',
        impact: 'Saved 15 hours of manual work per week and eliminated overselling.'
      }
    ],
    faqs: [
      { question: 'Can you migrate my store to Shopify?', answer: 'Yes, we specialize in migrating stores from other platforms like WooCommerce or Magento to Shopify while preserving your data.' },
      { question: 'Do you build custom Shopify apps?', answer: 'We focus on theme development and integration, but we can build custom private apps for specific business logic if needed.' }
    ]
  },
  {
    id: 'automation',
    slug: 'business-automation',
    title: 'Business Automation',
    description: 'Identify repetitive tasks and replace them with automated AI systems.',
    longDescription: 'AnyWeb analyzes how your business runs, finds repetitive and inefficient work, then builds systems, automations, and workflows that save time and improve consistency.',
    icon: Zap,
    highlighted: true,
    features: [
      'End-to-end workflow analysis',
      'Repetitive task elimination',
      'Cross-platform system connectivity',
      'Real-time efficiency reporting',
      'Automated lead follow-up systems',
      'Dynamic quote generation',
      'Customer onboarding automation',
      'Inventory & order sync'
    ],
    examples: [
      'Lead follow-up automation',
      'Quote generation systems',
      'Order & inventory automation',
      'CRM syncing',
      'Automated billing & invoicing'
    ],
    painPoints: [
      'Leads handled manually and slowly',
      'Repeated data entry across multiple tools',
      'Staff repeating the same admin work daily',
      'Disconnected tools that don’t talk to each other',
      'Missed opportunities due to slow follow-up',
      'Human error in manual data transfers',
      'Inconsistent customer onboarding experience'
    ],
    solutions: [
      'Lead capture and intelligent routing automation',
      'Seamless CRM and tool synchronization',
      'Automated quote and document generation',
      'Custom task and notification workflows',
      'Automated customer onboarding sequences',
      'Real-time inventory and order management',
      'Automated reporting and data visualization'
    ],
    benefits: [
      'Save hundreds of hours of manual work',
      'Reduce human error and data mismatches',
      'Instant response times for leads',
      'Increase consistency in operations',
      'Scale without adding admin overhead'
    ],
    useCases: [
      {
        before: 'Sales team manually entered leads from 5 different sources into a spreadsheet, then manually emailed each one.',
        after: 'Leads are automatically captured, synced to CRM, and an AI-personalized email is sent within 2 minutes.',
        impact: '40% increase in lead-to-meeting conversion rate.'
      },
      {
        before: 'Inventory was tracked in a manual log, leading to frequent stock-outs and over-ordering.',
        after: 'Real-time inventory dashboard synced with Shopify and warehouse systems with automatic re-order alerts.',
        impact: 'Reduced stock-outs by 90% and improved cash flow.'
      }
    ],
    faqs: [
      { question: 'Will this replace our existing tools?', answer: 'Usually no. We connect your existing tools (like CRM, Email, Forms) to make them work together better.' },
      { question: 'What if our workflow is unique?', answer: 'That’s exactly why we build custom automations. We map your specific process and build around it.' }
    ]
  },
  {
    id: 'ai-integration',
    slug: 'ai-integration',
    title: 'AI Integration',
    description: 'Layer AI into your workflows to improve speed, consistency, and profitability.',
    longDescription: 'AnyWeb helps businesses implement AI in practical ways that save time, improve communication, support teams, and enhance workflows. We build AI that actually works inside your business.',
    icon: Cpu,
    highlighted: true,
    features: [
      'AI-powered workflow optimization',
      'Custom internal AI knowledge bases',
      'Intelligent lead qualification AI',
      'Automated content generation systems',
      'AI-driven customer response generation',
      'Advanced data analysis & insights',
      'AI-enhanced customer support bots',
      'Predictive business modeling'
    ],
    examples: [
      'AI Staff Assistants',
      'Automated Data Analysis',
      'AI Response Generation',
      'Predictive Modeling',
      'AI-Powered Lead Scoring'
    ],
    painPoints: [
      'Hearing about AI but not knowing where to start',
      'Gimmicky AI tools that don’t add real value',
      'Slow manual lead qualification processes',
      'Repetitive customer communication bottlenecks',
      'Internal teams overwhelmed by massive data',
      'Inconsistent quality in content generation',
      'High costs of manual support operations'
    ],
    solutions: [
      'Practical, business-first AI strategy',
      'AI-powered lead qualification and scoring',
      'Internal AI knowledge assistants for staff',
      'Automated, high-quality response generation',
      'AI embedded in existing business automations',
      'Custom AI tools for specific operational needs',
      'AI-driven data analysis and trend spotting'
    ],
    benefits: [
      'Faster response times with AI support',
      'Improved lead quality through AI filtering',
      'Internal productivity gains for staff',
      'Scalable customer support operations',
      'Data-driven insights from AI analysis'
    ],
    useCases: [
      {
        before: 'Support team spent 60% of their time answering the same 10 basic questions about shipping and returns.',
        after: 'AI Chatbot handles 85% of initial inquiries, only escalating complex issues to human agents.',
        impact: 'Saved 25 hours per week of support staff time.'
      },
      {
        before: 'Marketing team manually analyzed customer feedback from hundreds of reviews to find trends.',
        after: 'AI-powered sentiment analysis tool categorizes and summarizes feedback in real-time.',
        impact: 'Identified 3 key product improvements that led to a 15% increase in NPS.'
      }
    ],
    faqs: [
      { question: 'Can AI give wrong answers?', answer: 'We implement guardrails and use "grounding" to ensure AI only uses your specific business data for its answers.' },
      { question: 'Is AI replacing our team?', answer: 'No, we build AI to assist your team, removing the repetitive parts of their job so they can focus on high-value work.' }
    ]
  },
  {
    id: 'api-integrations',
    slug: 'api-integrations',
    title: 'API Integrations',
    description: 'Connect your tools together to sync platforms and build custom integrations.',
    longDescription: 'AnyWeb builds integrations and API-powered connections so websites, forms, CRMs, apps, databases, and internal tools work together smoothly. We make disconnected systems work as one.',
    icon: LinkIcon,
    features: [
      'Custom API development',
      'Platform synchronization',
      'Third-party app connections',
      'Data mapping',
      'Real-time data syncing',
      'Legacy system bridges'
    ],
    examples: [
      'CRM to ERP Sync',
      'Payment Gateway Integration',
      'Custom SaaS Connectors',
      'Legacy System Bridges'
    ],
    painPoints: [
      'Double data entry across systems',
      'Mismatched data in different tools',
      'Lost information during manual transfers',
      'Slow processes due to tool switching',
      'Lack of real-time visibility'
    ],
    solutions: [
      'Custom API bridge development',
      'Real-time data synchronization',
      'Automated data mapping and cleanup',
      'Third-party app connectivity',
      'Legacy system modernization'
    ],
    benefits: [
      'Cleaner, more reliable business data',
      'Eliminate manual data entry errors',
      'Faster operational workflows',
      'Better cross-platform visibility',
      'Reduced admin overhead'
    ],
    useCases: [
      {
        before: 'A company was manually copying customer data from their CRM to their billing software.',
        after: 'Real-time API integration that syncs customer and invoice data automatically.',
        impact: 'Eliminated billing errors and saved 10 hours of accounting work per month.'
      },
      {
        before: 'A marketing agency had lead data stuck in 3 different platforms with no central view.',
        after: 'A custom API bridge that pulls all lead data into a single master dashboard.',
        impact: 'Improved lead follow-up speed by 50%.'
      }
    ],
    faqs: [
      { question: 'Can you connect any two tools?', answer: 'If the tools have an API (most modern ones do), we can connect them. We can also build custom bridges for tools that don’t have standard connectors.' }
    ]
  },
  {
    id: 'chatbots',
    slug: 'chatbots',
    title: 'Chatbots & AI Assistants',
    description: 'Website bots for customer service, lead qualification, and staff productivity.',
    longDescription: 'AnyWeb builds smart chat experiences that answer questions, capture leads, support customers, and reduce repetitive communication. We make your business available 24/7.',
    icon: MessageSquare,
    features: [
      'Customer service bots',
      'Lead qualification bots',
      'Internal staff assistants',
      'Multi-platform deployment',
      'Knowledge base training',
      'Human-handoff workflows'
    ],
    examples: [
      '24/7 Customer Support',
      'Sales Qualification Bot',
      'HR Assistant Bot',
      'Knowledge Base Search'
    ],
    painPoints: [
      'Slow replies to customer inquiries',
      'Missed leads after business hours',
      'Staff repeating the same answers daily',
      'Inconsistent support quality',
      'High support volume pressure'
    ],
    solutions: [
      'AI-powered website chatbots',
      'Lead qualification and routing bots',
      'Internal AI knowledge assistants',
      'Automated FAQ response systems',
      'Multi-channel chat deployment'
    ],
    benefits: [
      'Instant 24/7 customer response',
      'Higher lead capture rates',
      'Reduced support ticket volume',
      'More productive internal teams',
      'Consistent, high-quality information'
    ],
    useCases: [
      {
        before: 'A real estate agency was missing leads that came in after 6 PM and on weekends.',
        after: 'An AI-powered lead qualification bot that captures info and schedules viewings 24/7.',
        impact: '20% increase in qualified leads and faster response times.'
      },
      {
        before: 'A software company support team was overwhelmed by "How to" questions.',
        after: 'An AI assistant trained on their documentation that answers 70% of support queries.',
        impact: 'Reduced support ticket volume by 40%.'
      }
    ],
    faqs: [
      { question: 'Can the bot be trained on our data?', answer: 'Yes, we train your bot on your specific website content, documents, and knowledge base so it gives accurate, business-specific answers.' }
    ]
  },
  {
    id: 'databases',
    slug: 'databases-systems',
    title: 'Databases & Systems',
    description: 'Custom dashboards, internal tools, and data systems for your business.',
    longDescription: 'AnyWeb builds organized internal systems, dashboards, portals, and databases that help businesses run more clearly and efficiently. We build the tools you need to manage your growth.',
    icon: Database,
    features: [
      'Custom dashboard design',
      'Internal admin portals',
      'Data architecture',
      'Reporting systems',
      'Customer portals',
      'Lead tracking systems'
    ],
    examples: [
      'Operations Dashboards',
      'Inventory Management',
      'Customer Portals',
      'Data Warehousing'
    ],
    painPoints: [
      'Information scattered across tools',
      'Messy spreadsheets that are hard to manage',
      'Poor visibility into business metrics',
      'Inconsistent tracking of leads or projects',
      'Hard-to-manage internal workflows'
    ],
    solutions: [
      'Custom internal dashboard development',
      'Centralized lead and project systems',
      'Customer and client portals',
      'Automated reporting and analytics',
      'Custom database architecture'
    ],
    benefits: [
      'Clearer visibility into business performance',
      'Better data organization and security',
      'Easier management of complex workflows',
      'Stronger data-driven decision making',
      'Scalable internal infrastructure'
    ],
    useCases: [
      {
        before: 'A logistics company managed their fleet using a complex, shared Excel sheet that often crashed.',
        after: 'A custom internal dashboard with real-time tracking, reporting, and driver management.',
        impact: 'Improved operational efficiency by 30% and reduced data errors.'
      },
      {
        before: 'A professional services firm had no central way to track project progress and billing.',
        after: 'A custom client portal and internal project management system.',
        impact: 'Reduced project delays by 20% and improved client satisfaction.'
      }
    ],
    faqs: [
      { question: 'Can this replace our spreadsheets?', answer: 'Yes, we often replace messy, error-prone spreadsheets with structured, secure databases and custom interfaces.' }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'We analyze your operations to find what slows you down and map out your needs.',
    icon: Search
  },
  {
    number: 2,
    title: 'Strategy + Demo Preview',
    description: 'We create a demo or concept of your website or system so you can see the direction before committing.',
    icon: Lightbulb
  },
  {
    number: 3,
    title: 'Build & Launch',
    description: 'We design and deploy systems that scale your growth and improve how you operate.',
    icon: Settings
  }
];
