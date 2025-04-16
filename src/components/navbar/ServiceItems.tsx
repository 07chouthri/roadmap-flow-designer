
import { Cloud, Server, DollarSign, GitBranch, Shield } from 'lucide-react';

export const serviceItems = [
  {
    icon: Cloud,
    title: "Cloud Migration & Consulting",
    description: "Seamless migration strategies tailored to your business goals",
    path: "/cloud-migration"
  },
  {
    icon: Server,
    title: "Cloud Managed Services",
    description: "End-to-end management of your cloud infrastructure",
    path: "/services/managed-services"
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization FinOps",
    description: "Reduce cloud spend and improve financial accountability",
    path: "/services/finops"
  },
  {
    icon: GitBranch,
    title: "DevOps Automation",
    description: "Automate your CI/CD pipelines and infrastructure provisioning",
    path: "/services/devops-automation"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Ensure robust protection with enterprise-grade security",
    path: "/services/security"
  }
];

export default serviceItems;
