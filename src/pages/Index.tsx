import { BookOpen, Sparkles, GraduationCap, LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const { t } = useLanguage();

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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="absolute top-0 right-0 p-6 flex items-center gap-3">
        <ThemeSwitcher />
        <LanguageSwitcher />
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Button
              onClick={handleSignOut}
              variant="outline"
              size="sm"
            >
              <LogOut className="mr-2 h-4 w-4" />
              {t("logout")}
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            size="sm"
          >
            <LogIn className="mr-2 h-4 w-4" />
            {t("googleLogin")}
          </Button>
        )}
      </header>
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("welcome")}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("title")}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("subtitle")}
          </p>

          <Button 
            onClick={() => navigate('/postly')}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            {t("startJourney")}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{t("specialCourses")}</h3>
            <p className="text-muted-foreground">{t("specialCoursesDesc")}</p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{t("workshops")}</h3>
            <p className="text-muted-foreground">{t("workshopsDesc")}</p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{t("systematic")}</h3>
            <p className="text-muted-foreground">{t("systematicDesc")}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-semibold mb-4 text-foreground text-center">{t("whyChoose")}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex gap-3">
              <span className="text-primary text-xl">✓</span>
              <div>
                <h4 className="font-medium mb-1 text-foreground">{t("professional")}</h4>
                <p className="text-sm text-muted-foreground">{t("professionalDesc")}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-xl">✓</span>
              <div>
                <h4 className="font-medium mb-1 text-foreground">{t("practical")}</h4>
                <p className="text-sm text-muted-foreground">{t("practicalDesc")}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h4 className="font-medium mb-1 text-foreground">{t("flexible")}</h4>
                <p className="text-sm text-muted-foreground">{t("flexibleDesc")}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h4 className="font-medium mb-1 text-foreground">{t("support")}</h4>
                <p className="text-sm text-muted-foreground">{t("supportDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">相關連結</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://make.fan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    MAKE.fan
                  </a>
                </li>
                <li>
                  <a href="https://apisdk.io" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    APISDK.io
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">資源</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.facebook.com/smart.4a.lab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Smart 4A 科技研究所
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/groups/smart.4a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Smart 4A 科技研究社
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">社交媒體</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.facebook.com/make.fan.tw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    輕鬆學 MAKE 自動化
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/groups/make.fan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    MAKE 自動化學習交流群
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025 by Smart 4A. All rights reserved 禹動科技整合股份有限公司
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
