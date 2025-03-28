import { LineChart, PieChart, Users } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const featuresData = [
  {
    id: uuidv4(),
    title: "Real-time Analytics",
    icon: LineChart,
    description:
      "Monitor your key metrics in real-time with customizable dashboards and alerts.",
  },
  {
    id: uuidv4(),
    title: "Advanced Reporting",
    icon: PieChart,
    description:
      "Generate detailed reports with beautiful visualizations to share with your team.",
  },
  {
    id: uuidv4(),
    title: "User Behavior",
    icon: Users,
    description:
      "Track user engagement and behavior to optimize your product experience.",
  },
];

export const testimonialsData = [
  {
    id: uuidv4(),
    quote:
      "AnalyticsPro has transformed how we make decisions. The insights we've gained have directly contributed to our 40% growth this year.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    id: uuidv4(),
    quote:
      "The dashboard is incredibly intuitive. Our entire team was able to start using it effectively within days, not weeks.",
    author: "Michael Chen",
    role: "CTO, GrowthMetrics",
  },
  {
    id: uuidv4(),
    quote:
      "The custom reporting features have saved our analytics team countless hours. We can now focus on strategy instead of data compilation.",
    author: "Emma Rodriguez",
    role: "Head of Analytics, ScaleUp",
  },
];

export const pricingCardData = [
  {
    id: uuidv4(),
    title: "Starter",
    price: "$49",
    description:
      "Perfect for small businesses just getting started with analytics.",
    features: [
      "Up to 5 users",
      "10 dashboards",
      "30 days data history",
      "Basic reports",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    highlighted: false,
  },
  {
    id: uuidv4(),
    title: "Professional",
    price: "$99",
    description:
      "Ideal for growing businesses that need more advanced features.",
    features: [
      "Up to 20 users",
      "Unlimited dashboards",
      "1 year data history",
      "Advanced reports",
      "Priority support",
      "API access",
    ],
    buttonText: "Get Started",
    buttonVariant: "default",
    highlighted: true,
  },
  {
    id: uuidv4(),
    title: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific requirements.",
    features: [
      "Unlimited users",
      "Unlimited dashboards",
      "Unlimited data history",
      "Custom reports",
      "Dedicated support",
      "Advanced security",
      "Custom integrations",
    ],
    buttonText: "Get Started",
    buttonVariant: "default",
    highlighted: false,
  },
];
