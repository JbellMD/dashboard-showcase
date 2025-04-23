"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
}

function SidebarItem({ href, icon, title, isOpen }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 ease-in-out",
        isActive 
          ? "bg-primary/10 text-primary" 
          : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
      )}
    >
      {icon}
      <span className={cn(
        "text-sm font-medium transition-all duration-200",
        !isOpen && "opacity-0 w-0 overflow-hidden"
      )}>
        {title}
      </span>
    </Link>
  );
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <aside 
      className={cn(
        "flex h-full flex-col border-r bg-background transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-[70px]"
      )}
    >
      <div className="flex h-14 items-center justify-between border-b px-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">DS</span>
          </div>
          <span className={cn(
            "font-semibold transition-all duration-200",
            !isOpen && "opacity-0 w-0 overflow-hidden"
          )}>
            Dashboard
          </span>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3">
        <div className="space-y-2">
          <SidebarItem 
            href="/" 
            icon={<LayoutDashboard className="h-5 w-5" />} 
            title="Dashboard" 
            isOpen={isOpen} 
          />
          <SidebarItem 
            href="/analytics" 
            icon={<BarChart3 className="h-5 w-5" />} 
            title="Analytics" 
            isOpen={isOpen} 
          />
          <SidebarItem 
            href="/users" 
            icon={<Users className="h-5 w-5" />} 
            title="Users" 
            isOpen={isOpen} 
          />
          <SidebarItem 
            href="/settings" 
            icon={<Settings className="h-5 w-5" />} 
            title="Settings" 
            isOpen={isOpen} 
          />
          <SidebarItem 
            href="/help" 
            icon={<HelpCircle className="h-5 w-5" />} 
            title="Help" 
            isOpen={isOpen} 
          />
        </div>
      </div>
      
      <div className="border-t p-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className="hidden w-full justify-start md:flex"
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-5 w-5 mr-2" /> : <Menu className="h-5 w-5" />}
          <span className={cn(
            "ml-2 transition-all duration-200",
            !isOpen && "opacity-0 w-0 overflow-hidden"
          )}>
            Collapse
          </span>
        </Button>
      </div>
    </aside>
  );
}
