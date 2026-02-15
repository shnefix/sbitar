import DashboardLayout from "@/components/DashboardLayout";
import { Activity, FolderOpen, FileText, Users, Clock, AlertTriangle, Phone, Settings } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Urgences", href: "/patient", icon: Activity },
  { label: "Historique Médical", href: "/patient/history", icon: FolderOpen },
  { label: "Informations Étendues", href: "/patient/extended", icon: FileText },
  { label: "Gestion des Accès", href: "/patient/access", icon: Users },
  { label: "Journal d'Activité", href: "/patient/audit", icon: Clock },
  { label: "Signalements", href: "/patient/reports", icon: AlertTriangle },
  { label: "Contacts d'Urgence", href: "/patient/contacts", icon: Phone },
  { label: "Paramètres", href: "/patient/settings", icon: Settings },
];

const StatCard = ({ label, value, icon: Icon, color }: { label: string; value: string; icon: React.ElementType; color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card rounded-xl p-5 shadow-card border border-border/50"
  >
    <div className="flex items-center justify-between mb-3">
      <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <p className="text-2xl font-display font-bold text-foreground">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </motion.div>
);

const PatientDashboard = () => {
  return (
    <DashboardLayout
      title="Espace Patient"
      subtitle="Mohamed Ben Ali"
      navItems={navItems}
      roleColor="bg-accent text-accent-foreground"
    >
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Bonjour, Mohamed 👋</h1>
          <p className="text-muted-foreground text-sm mt-1">Voici un aperçu de votre dossier médical.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Consultations ce mois" value="3" icon={Activity} color="bg-emergency text-emergency-foreground" />
          <StatCard label="Médecins autorisés" value="2" icon={Users} color="bg-primary text-primary-foreground" />
          <StatCard label="Documents médicaux" value="14" icon={FileText} color="bg-history text-history-foreground" />
          <StatCard label="Accès récents" value="7" icon={Clock} color="bg-extended text-extended-foreground" />
        </div>

        {/* Emergency Info Preview */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emergency" />
            Informations Critiques d'Urgence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Groupe Sanguin", value: "A+" },
              { label: "Allergies", value: "Pénicilline, Arachides" },
              { label: "Maladies Chroniques", value: "Diabète Type 2" },
              { label: "Médicaments en cours", value: "Metformine 500mg" },
              { label: "Médecin Traitant", value: "Dr. Fatima Zahra" },
              { label: "Contact d'Urgence", value: "Ahmed Ben Ali - Frère" },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                <p className="text-sm font-semibold text-foreground mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Activité Récente
          </h3>
          <div className="space-y-3">
            {[
              { who: "CHU Ibn Sina", action: "Consultation", section: "Urgences", date: "15 Fév 2026, 10:30", motif: "Contrôle de routine" },
              { who: "Dr. Karim Mansouri", action: "Ajout diagnostic", section: "Historique", date: "12 Fév 2026, 14:00", motif: "Suivi diabète" },
              { who: "Hôpital Moulay Youssef", action: "Modification", section: "Médicaments", date: "8 Fév 2026, 09:15", motif: "Mise à jour traitement" },
            ].map((log, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{log.who} — <span className="text-muted-foreground">{log.action}</span></p>
                  <p className="text-xs text-muted-foreground">Section: {log.section} · Motif: {log.motif}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{log.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
