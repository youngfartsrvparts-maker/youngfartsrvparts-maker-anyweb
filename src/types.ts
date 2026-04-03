import { LucideIcon } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
}

export interface UseCase {
  before: string;
  after: string;
  impact: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  highlighted?: boolean;
  slug: string;
  features: string[];
  examples: string[];
  painPoints: string[];
  solutions: string[];
  benefits: string[];
  faqs: FAQ[];
  useCases?: UseCase[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
