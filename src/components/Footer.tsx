import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground">DMP National</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
          <Link to="/login" className="hover:text-foreground transition-colors">Connexion</Link>
          <span>Confidentialité</span>
          <span>Mentions légales</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 DMP National. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
