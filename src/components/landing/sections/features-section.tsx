import React from "react";
import { FeatureCard } from "@/src/components/landing/feature-card";
import { featuresData } from "@/src/components/landing/dummyData";

export const FeaturesSection = () => {
  return (
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
        {featuresData.map((item) => {
          return (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title="Real-time Analytics"
              description="Monitor your key metrics in real-time with customizable dashboards and alerts."
            />
          );
        })}
      </div>
    </section>
  );
};
