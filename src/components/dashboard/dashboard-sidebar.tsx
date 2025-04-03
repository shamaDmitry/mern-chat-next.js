import {
  Calendar,
  CreditCard,
  Home,
  LineChart,
  LucideIcon,
  PieChart,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import Link from "next/link";
import { Logo } from "@/src/components/base/logo";

import { v4 as uuid } from "uuid";
import { cn } from "@/src/lib/utils";

interface SidebarMenuItem {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
  isVisible: boolean;
}

export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    id: uuid(),
    title: "dashboard",
    href: "/dashboard",
    icon: Home,
    isVisible: true,
  },
  {
    id: uuid(),
    title: "Users",
    href: "/users",
    icon: Users,
    isVisible: true,
  },
  {
    id: uuid(),
    title: "Analytics",
    href: "/analytics",
    icon: LineChart,
    isVisible: false,
  },
  {
    id: uuid(),
    title: "Reports",
    href: "/reports",
    icon: PieChart,
    isVisible: false,
  },
  {
    id: uuid(),
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
    isVisible: false,
  },
  {
    id: uuid(),
    title: "Billing",
    href: "/Billing",
    icon: CreditCard,
    isVisible: false,
  },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo href="/dashboard" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {sidebarMenuItems
            // .filter((item) => item.isVisible)
            .map((item) => {
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className={cn("flex items-center", {
                        "opacity-30 pointer-events-none": !item.isVisible,
                      })}
                    >
                      <item.icon className="mr-2 h-4 w-4" />

                      <span className="capitalize">{item.title}</span>

                      {item.isVisible ? null : (
                        <span className="ml-auto text-xs text-muted-foreground">
                          Coming soon
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
