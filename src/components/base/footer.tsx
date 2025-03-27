import React from "react";
import { ThemeToggle } from "../theme-toggle";
import { BarChart3 } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container flex flex-col gap-8 py-12 md:py-16 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <div className="flex items-center gap-2 font-bold">
            <BarChart3 className="h-6 w-6" />
            <span>AnalyticsPro</span>
          </div>

          <p className="text-sm text-muted-foreground">
            Powerful analytics for data-driven businesses. Make better decisions
            with real-time insights.
          </p>

          <ThemeToggle />
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:h-16 md:flex-row md:py-0">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} AnalyticsPro. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};
