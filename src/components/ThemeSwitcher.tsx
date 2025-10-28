import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-sm border-border">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`cursor-pointer ${
            theme === "light" ? "bg-primary/20 text-primary font-medium" : "hover:bg-accent"
          }`}
        >
          <Sun className="mr-2 h-4 w-4" />
          淺色模式
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`cursor-pointer ${
            theme === "dark" ? "bg-primary/20 text-primary font-medium" : "hover:bg-accent"
          }`}
        >
          <Moon className="mr-2 h-4 w-4" />
          深色模式
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`cursor-pointer ${
            theme === "system" ? "bg-primary/20 text-primary font-medium" : "hover:bg-accent"
          }`}
        >
          <span className="mr-2">💻</span>
          系統預設
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
