import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  LineChart,
  PieChart,
  Users,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { FeatureCard } from "@/src/components/landing/FeatureCard";

export default async function LandingPage() {
  return (
    <main className="flex-1">
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Powerful analytics for your business
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Make data-driven decisions with our intuitive dashboard. Track
                metrics, visualize trends, and grow your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] overflow-hidden rounded-lg border bg-background shadow-xl">
              <Image
                src="/placeholder.svg?height=550&width=850"
                width={850}
                height={550}
                alt="Dashboard Preview"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Everything you need to analyze your data
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our dashboard provides comprehensive tools to track, analyze, and
            visualize your business metrics in real-time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-16">
          <FeatureCard
            icon={LineChart}
            title="Real-time Analytics"
            description="Monitor your key metrics in real-time with customizable dashboards and alerts."
          />
          <FeatureCard
            icon={PieChart}
            title="Advanced Reporting"
            description="Generate detailed reports with beautiful visualizations to share with your team."
          />
          <FeatureCard
            icon={Users}
            title="User Behavior"
            description="Track user engagement and behavior to optimize your product experience."
          />
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Make better decisions with data
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform helps you understand your business metrics and make
                informed decisions.
              </p>
            </div>
            <ul className="grid gap-6">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Intuitive dashboards with drag-and-drop interface</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Over 50+ pre-built report templates</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Custom alerts and notifications</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Data export in multiple formats</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] overflow-hidden rounded-lg border bg-background shadow-xl">
              <Image
                src="/placeholder.svg?height=550&width=850"
                width={850}
                height={550}
                alt="Dashboard Features"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="container py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Trusted by companies worldwide
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            See what our customers have to say about our analytics platform.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-16">
          <TestimonialCard
            quote="AnalyticsPro has transformed how we make decisions. The insights we've gained have directly contributed to our 40% growth this year."
            author="Sarah Johnson"
            role="CEO, TechStart Inc."
          />
          <TestimonialCard
            quote="The dashboard is incredibly intuitive. Our entire team was able to start using it effectively within days, not weeks."
            author="Michael Chen"
            role="CTO, GrowthMetrics"
          />
          <TestimonialCard
            quote="The custom reporting features have saved our analytics team countless hours. We can now focus on strategy instead of data compilation."
            author="Emma Rodriguez"
            role="Head of Analytics, ScaleUp"
          />
        </div>
      </section>

      <section id="pricing" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose the plan that`s right for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-16">
          <PricingCard
            title="Starter"
            price="$49"
            description="Perfect for small businesses just getting started with analytics."
            features={[
              "Up to 5 users",
              "10 dashboards",
              "30 days data history",
              "Basic reports",
              "Email support",
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
          />
          <PricingCard
            title="Professional"
            price="$99"
            description="Ideal for growing businesses that need more advanced features."
            features={[
              "Up to 20 users",
              "Unlimited dashboards",
              "1 year data history",
              "Advanced reports",
              "Priority support",
              "API access",
            ]}
            buttonText="Get Started"
            buttonVariant="default"
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For large organizations with specific requirements."
            features={[
              "Unlimited users",
              "Unlimited dashboards",
              "Unlimited data history",
              "Custom reports",
              "Dedicated support",
              "Advanced security",
              "Custom integrations",
            ]}
            buttonText="Contact Sales"
            buttonVariant="outline"
          />
        </div>
      </section>

      <section
        id="faq"
        className="container py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find answers to common questions about our platform.
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl gap-4 md:gap-8 mt-16">
          <FaqItem
            question="How easy is it to get started?"
            answer="Getting started is simple. Sign up for an account, connect your data sources, and you'll have your first dashboard up and running in minutes."
          />
          <FaqItem
            question="Can I connect my existing data sources?"
            answer="Yes, our platform integrates with most popular data sources including Google Analytics, Shopify, Stripe, and many more. We also offer a robust API for custom integrations."
          />
          <FaqItem
            question="Is my data secure?"
            answer="Absolutely. We use industry-standard encryption and security practices. Your data is stored securely and we never share it with third parties."
          />
          <FaqItem
            question="Can I export my reports?"
            answer="Yes, you can export reports in multiple formats including PDF, CSV, and Excel. You can also schedule automated report delivery via email."
          />
          <FaqItem
            question="Do you offer a free trial?"
            answer="Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started."
          />
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Ready to transform your business with data?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join thousands of companies using AnalyticsPro to make better
            decisions.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
      <p className="mb-4 text-muted-foreground">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-lg border ${
        highlighted ? "border-primary shadow-lg" : "shadow-sm"
      } bg-background p-6`}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && (
            <span className="ml-1 text-muted-foreground">/month</span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-6 mt-4 space-y-2 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={buttonVariant} className="mt-auto">
        {buttonText}
      </Button>
    </div>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{question}</h3>
      <p className="mt-2 text-muted-foreground">{answer}</p>
    </div>
  );
}
