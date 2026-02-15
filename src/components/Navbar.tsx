import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? "bg-transparent" : "glass"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className={`font-display font-bold text-lg ${isHome ? "text-primary-foreground" : "text-foreground"}`}>
            DMP National
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium transition-colors ${isHome ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            Accueil
          </Link>
          <Link to="/login" className={`text-sm font-medium transition-colors ${isHome ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            Fonctionnalités
          </Link>
          <Link to="/login">
            <Button variant={isHome ? "hero-outline" : "default"} size="sm">
              Se connecter
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${isHome ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-3 p-4">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Accueil</Link>
              <Link to="/login" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Fonctionnalités</Link>
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">Se connecter</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
