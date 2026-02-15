import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Users, FileText, Clock, Eye, Heart, Activity, FolderOpen } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative container mx-auto px-4 text-center z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground/90">Plateforme Nationale Sécurisée</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6">
              Votre Dossier Médical,{" "}
              <span className="text-secondary">Toujours Accessible</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Centralisez vos informations médicales en toute sécurité. 
              Continuité des soins entre établissements publics et privés, 
              traçabilité complète et protection de vos droits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button variant="pink" size="lg" className="text-base px-8 py-6">
                  Accéder à mon dossier
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                  Espace Professionnel
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "100%", label: "Sécurisé" },
              { value: "24/7", label: "Accessible" },
              { value: "RGPD", label: "Conforme" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Fonctionnalités</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Une plateforme complète pour votre santé
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conçue pour les patients, les hôpitaux publics et les médecins privés.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Lock} title="Sécurité Maximale" description="Chiffrement de bout en bout et authentification renforcée pour protéger vos données médicales sensibles." delay={0} />
            <FeatureCard icon={Users} title="Multi-Utilisateurs" description="Trois espaces dédiés : Patient, Hôpital Public et Médecin Privé, chacun avec ses permissions spécifiques." delay={0.1} />
            <FeatureCard icon={FileText} title="Dossier Complet" description="Informations d'urgence, historique médical et résultats détaillés, organisés en sections claires." delay={0.2} />
            <FeatureCard icon={Clock} title="Historique & Versioning" description="Chaque modification est horodatée et associée au professionnel responsable. Rien n'est perdu." delay={0.3} />
            <FeatureCard icon={Eye} title="Traçabilité Totale" description="Journal d'activité complet : qui a consulté quoi, quand et pourquoi. Valeur de preuve légale." delay={0.4} />
            <FeatureCard icon={Heart} title="Contrôle Patient" description="Gérez finement les accès : activez, désactivez ou révoquez les droits de chaque médecin privé." delay={0.5} />
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Structure</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Trois niveaux d'information
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Activity,
                title: "Urgences",
                desc: "Groupe sanguin, allergies, maladies chroniques, médicaments en cours, contacts d'urgence.",
                color: "bg-emergency text-emergency-foreground",
              },
              {
                icon: FolderOpen,
                title: "Historique Général",
                desc: "Maladies passées, chirurgies, hospitalisations, vaccinations, antécédents familiaux.",
                color: "bg-history text-history-foreground",
              },
              {
                icon: FileText,
                title: "Informations Étendues",
                desc: "Analyses détaillées, imagerie médicale, comptes rendus spécialisés, suivi à long terme.",
                color: "bg-extended text-extended-foreground",
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center mx-auto mb-4`}>
                  <section.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Prêt à sécuriser votre parcours de soins ?
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Rejoignez la plateforme nationale et prenez le contrôle de vos données médicales.
            </p>
            <Link to="/login">
              <Button variant="pink" size="lg" className="text-base px-10 py-6">
                Commencer maintenant
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
