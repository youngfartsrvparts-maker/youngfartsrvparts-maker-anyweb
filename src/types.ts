import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlighted?: boolean;
  slug: string;
  features: string[];
  examples: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
