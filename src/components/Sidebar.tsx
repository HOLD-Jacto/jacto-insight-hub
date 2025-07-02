
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    {
      id: "dashboard",
      icon: BarChart3,
      label: "Dashboard",
      path: "/dashboard"
    },
    {
      id: "chat",
      icon: MessageSquare,
      label: "Chat",
      path: "/chat"
    }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-[#FF3B3B] shadow-lg z-10">
      <div className="flex flex-col items-center py-6 space-y-8">
        {/* Logo placeholder */}
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <span className="text-[#FF3B3B] font-bold text-lg">J</span>
        </div>
        
        {/* Navigation items */}
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-white text-[#FF3B3B] shadow-md"
                      : "text-white hover:bg-white/20"
                  )
                }
              >
                <item.icon size={24} />
              </NavLink>
              
              {/* Tooltip */}
              {hoveredItem === item.id && (
                <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20">
                  {item.label}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
