import DashboardLayout from "@/components/DashboardLayout";
import { Search, FileText, Activity, Clock, Users, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { label: "Recherche Patient", href: "/hospital", icon: Search },
  { label: "Dossier Patient", href: "/hospital/record", icon: FileText },
  { label: "Prescriptions", href: "/hospital/prescriptions", icon: Activity },
  { label: "Historique Accès", href: "/hospital/audit", icon: Clock },
];

const HospitalDashboard = () => {
  return (
    <DashboardLayout
      title="Espace Hôpital Public"
      subtitle="CHU Ibn Sina - Rabat"
      navItems={navItems}
      roleColor="bg-primary/10 text-primary"
    >
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Espace Hôpital Public</h1>
          <p className="text-muted-foreground text-sm mt-1">Recherchez un patient pour accéder à son dossier médical.</p>
        </div>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Rechercher un Patient
          </h3>
          <div className="flex gap-3">
            <Input placeholder="NIN du patient (ex: 1234567890)" className="flex-1" />
            <Button variant="pink">Rechercher</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            <AlertTriangle className="w-3 h-3 inline mr-1" />
            Un motif d'accès sera demandé avant toute consultation du dossier.
          </p>
        </motion.div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Dossiers consultés aujourd'hui", value: "12", icon: FileText },
            { label: "Prescriptions ajoutées", value: "5", icon: Activity },
            { label: "Professionnels actifs", value: "23", icon: Users },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-xl p-5 shadow-card border border-border/50"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Access */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Derniers Accès
          </h3>
          <div className="space-y-3">
            {[
              { patient: "Mohamed B.A.", doctor: "Dr. Rachid", action: "Consultation complète", date: "15 Fév, 10:30" },
              { patient: "Fatima Z.", doctor: "Dr. Laila", action: "Ajout prescription", date: "15 Fév, 09:45" },
              { patient: "Youssef M.", doctor: "Dr. Hassan", action: "Modification diagnostic", date: "14 Fév, 16:00" },
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{log.patient} — {log.action}</p>
                  <p className="text-xs text-muted-foreground">Par {log.doctor}</p>
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

export default HospitalDashboard;
