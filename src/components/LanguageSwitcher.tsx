import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: "en" as const, label: "English", flag: "GB" },
  { code: "zh-TW" as const, label: "繁體中文", flag: "TW" },
  { code: "zh-CN" as const, label: "简体中文", flag: "CN" },
  { code: "ja" as const, label: "日本語", flag: "JP" },
  { code: "ko" as const, label: "한국어", flag: "KR" },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const currentLang = languages.find(lang => lang.code === language) || languages[1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-xs font-medium">{currentLang.flag}</span>
          <span className="hidden sm:inline">{currentLang.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-card/95 backdrop-blur-sm border-border">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${
              language === lang.code
                ? "bg-primary/20 text-primary font-medium"
                : "hover:bg-accent"
            }`}
          >
            <span className="mr-3 font-medium text-muted-foreground">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
