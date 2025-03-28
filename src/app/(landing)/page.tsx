import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { FeaturesSection } from "@/src/components/landing/sections/features-section";
import { TestimonialsSection } from "@/src/components/landing/sections/testimonials-section";
import { PricingSection } from "@/src/components/landing/sections/pricing-section";
import { FaqSection } from "@/src/components/landing/sections/faq-section";
import { CtaSection } from "@/src/components/landing/sections/cta-section";

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
                src="https://placehold.co/850x550?text=Hello\nWorld"
                width={850}
                height={550}
                alt="Dashboard Preview"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

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
                src="https://placehold.co/850x550?text=Hello\nWorld"
                width={850}
                height={550}
                alt="Dashboard Features"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />

      <CtaSection />
    </main>
  );
}
