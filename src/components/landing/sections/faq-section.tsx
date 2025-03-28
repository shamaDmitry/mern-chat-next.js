import React from "react";
import { FaqItem } from "@/src/components/landing/faq-item";

export const FaqSection = () => {
  return (
    <section id="faq" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
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
  );
};
