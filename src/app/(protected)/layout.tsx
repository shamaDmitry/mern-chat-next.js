import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import { Toaster } from "react-hot-toast";
import { DashboardSidebar } from "@/src/components/dashboard/dashboard-sidebar";
import { DashboardControls } from "@/src/components/dashboard/dashboard-controls";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />

        <main className="flex-1">
          <div className="flex items-center md:hidden h-16 px-4 border-b gap-3">
            <SidebarTrigger />

            <div className="ml-auto">
              <div className="flex items-center gap-4">
                <DashboardControls />
              </div>
            </div>
          </div>

          <div className="hidden md:flex p-4 border-b items-center justify-between">
            <div className="ml-auto flex items-center gap-4">
              <DashboardControls />
            </div>
          </div>

          <div className="p-4">{children}</div>
        </main>
      </div>

      <Toaster />
    </SidebarProvider>
  );
}
