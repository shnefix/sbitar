import DashboardLayout from "@/components/DashboardLayout";
import { FileText, Activity, Clock, Stethoscope, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Mes Patients", href: "/doctor", icon: Users },
  { label: "Dossier Patient", href: "/doctor/record", icon: FileText },
  { label: "Prescriptions", href: "/doctor/prescriptions", icon: Activity },
  { label: "Historique Accès", href: "/doctor/audit", icon: Clock },
];

const DoctorDashboard = () => {
  return (
    <DashboardLayout
      title="Espace Médecin Privé"
      subtitle="Dr. Karim Mansouri"
      navItems={navItems}
      roleColor="bg-extended/10 text-extended"
    >
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Bienvenue, Dr. Mansouri</h1>
          <p className="text-muted-foreground text-sm mt-1">Vos patients et dossiers accessibles.</p>
        </div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-accent border border-secondary/20"
        >
          <Lock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Accès limité</p>
            <p className="text-xs text-muted-foreground">Vous ne pouvez accéder qu'aux sections autorisées par chaque patient. Un motif d'accès est obligatoire.</p>
          </div>
        </motion.div>

        {/* Patient list */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-extended" />
            Mes Patients
          </h3>
          <div className="space-y-3">
            {[
              { name: "Mohamed Ben Ali", nin: "***4567", sections: ["Urgences", "Historique"], status: "Actif" },
              { name: "Amina Tazi", nin: "***8901", sections: ["Urgences"], status: "Actif" },
              { name: "Hassan El Ouafi", nin: "***2345", sections: ["Urgences", "Historique", "Étendu"], status: "Suspendu" },
            ].map((patient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{patient.name}</p>
                  <p className="text-xs text-muted-foreground">NIN: {patient.nin}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {patient.sections.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                  ))}
                </div>
                <Badge
                  variant={patient.status === "Actif" ? "default" : "destructive"}
                  className="text-xs w-fit"
                >
                  {patient.status}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-extended" />
            Mes Dernières Actions
          </h3>
          <div className="space-y-3">
            {[
              { patient: "Mohamed B.A.", action: "Consultation - Urgences", date: "15 Fév, 14:00", motif: "Suivi diabète" },
              { patient: "Amina T.", action: "Ajout prescription", date: "13 Fév, 11:30", motif: "Traitement grippe" },
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-extended shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{log.patient} — {log.action}</p>
                  <p className="text-xs text-muted-foreground">Motif: {log.motif}</p>
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

export default DoctorDashboard;
