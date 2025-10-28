import { BookOpen, User, Compass, Workflow, Brain, Users, LogIn, LogOut, Home } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const courses = [
  { title: "特殊課 - Postly", url: "/postly", icon: BookOpen },
  { title: "特殊課 - 個人助理", url: "/assistant", icon: User },
  { title: "一日課 - 道之求索", url: "/quest", icon: Compass },
  { title: "基礎班 - 工作流程", url: "/basic", icon: Workflow },
  { title: "中階班 - 思維流程", url: "/intermediate", icon: Brain },
  { title: "高階班 - 互動流程", url: "/advanced", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      }
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"}>
      <SidebarContent className="px-3 py-4">
        <Link to="/" className="block mb-6 px-1 hover:opacity-80 transition-opacity">
          <h1 className={`font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all ${collapsed ? "text-center text-sm" : ""}`}>
            {collapsed ? "S4A" : "Smart4A 學習中心"}
          </h1>
        </Link>

        {!collapsed && (
          <div className="mb-3 px-1">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              課程列表
            </h2>
          </div>
        )}
        
        <nav className="space-y-1">
          {courses.map((course) => (
            <NavLink
              key={course.url}
              to={course.url}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`
              }
            >
              <course.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{course.title}</span>}
            </NavLink>
          ))}
        </nav>
      </SidebarContent>

      <SidebarFooter className="px-3 pb-4">
        {user ? (
          <div className="space-y-2">
            {!collapsed && (
              <div className="px-3 py-2 text-xs text-muted-foreground">
                {user.email}
              </div>
            )}
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="w-full justify-start gap-3"
              size={collapsed ? "icon" : "default"}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>登出</span>}
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full justify-start gap-3"
            size={collapsed ? "icon" : "default"}
          >
            <LogIn className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Google 登入</span>}
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
