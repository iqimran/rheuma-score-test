import { Link, useLocation } from "wouter";
import { Calculator, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Calculator className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg hidden sm:inline-block">
              Calorie Calculator
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link href="/">
            <Button
              variant={location === "/" ? "default" : "ghost"}
              size="sm"
              data-testid="nav-calculator"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Calculator
            </Button>
          </Link>
          <Link href="/admin">
            <Button
              variant={location === "/admin" ? "default" : "ghost"}
              size="sm"
              data-testid="nav-admin"
            >
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
