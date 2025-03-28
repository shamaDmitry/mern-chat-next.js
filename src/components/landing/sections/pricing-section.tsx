import React from "react";
import { PricingCard } from "@/src/components/landing/pricing-card";
import { pricingCardData } from "../dummyData";

export const PricingSection = () => {
  return (
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
        {pricingCardData.map((item) => {
          return (
            <PricingCard
              key={item.title}
              title={item.title}
              price={item.price}
              description={item.description}
              features={item.features}
              buttonText={item.buttonText}
              buttonVariant={
                item.buttonVariant as
                  | "default"
                  | "destructive"
                  | "outline"
                  | "secondary"
                  | "ghost"
                  | "link"
              }
              highlighted={item.highlighted}
            />
          );
        })}{" "}
      </div>
    </section>
  );
};
