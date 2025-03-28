import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Button } from "@/src/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  highlighted?: boolean;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) => {
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
};
