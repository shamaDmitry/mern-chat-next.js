import React from "react";
import { TestimonialCard } from "@/src/components/landing/testimonial-card";
import { testimonialsData } from "@/src/components/landing/dummyData";

export const TestimonialsSection = () => {
  return (
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
        {testimonialsData.map((item) => {
          return (
            <TestimonialCard
              key={item.id}
              quote={item.quote}
              author={item.author}
              role={item.role}
            />
          );
        })}
      </div>
    </section>
  );
};
