import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
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
  );
};
