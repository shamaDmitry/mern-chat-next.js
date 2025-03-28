import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
      <p className="mb-4 text-muted-foreground">{quote}</p>

      <div className="mt-auto">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};
