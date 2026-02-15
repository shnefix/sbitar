import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, User, Building2, Stethoscope, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

type Role = "patient" | "hospital" | "doctor" | null;

const roles = [
  {
    id: "patient" as const,
    icon: User,
    title: "Patient",
    desc: "Consultez et gérez votre dossier médical personnel.",
    color: "border-secondary hover:bg-secondary/5",
  },
  {
    id: "hospital" as const,
    icon: Building2,
    title: "Hôpital Public",
    desc: "Accédez aux dossiers patients avec votre code gouvernemental.",
    color: "border-primary hover:bg-primary/5",
  },
  {
    id: "doctor" as const,
    icon: Stethoscope,
    title: "Médecin Privé",
    desc: "Consultez les sections autorisées par vos patients.",
    color: "border-extended hover:bg-extended/5",
  },
];

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole === "patient") navigate("/patient");
    else if (selectedRole === "hospital") navigate("/hospital");
    else if (selectedRole === "doctor") navigate("/doctor");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              {selectedRole ? "Connexion" : "Choisissez votre espace"}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {selectedRole ? `Espace ${roles.find(r => r.id === selectedRole)?.title}` : "Sélectionnez votre rôle pour continuer"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedRole ? (
              <motion.div
                key="roles"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 bg-card transition-all duration-200 ${role.color}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <role.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="font-display font-semibold text-foreground">{role.title}</p>
                      <p className="text-xs text-muted-foreground">{role.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleLogin}
                className="space-y-5 bg-card p-6 rounded-2xl shadow-card border border-border/50"
              >
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Retour
                </button>

                {selectedRole === "patient" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="nin">Numéro d'Identification National</Label>
                      <Input id="nin" placeholder="Entrez votre NIN" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                  </>
                )}

                {selectedRole === "hospital" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="gov-code">Code Gouvernemental</Label>
                      <Input id="gov-code" placeholder="Entrez le code gouvernemental" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hospital-id">Identifiant Établissement</Label>
                      <Input id="hospital-id" placeholder="ID de l'établissement" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="h-password">Mot de passe</Label>
                      <Input id="h-password" type="password" placeholder="••••••••" />
                    </div>
                  </>
                )}

                {selectedRole === "doctor" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-id">Identifiant Médecin</Label>
                      <Input id="doctor-id" placeholder="Votre identifiant médecin" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-code">Code Patient</Label>
                      <Input id="patient-code" placeholder="Code fourni par le patient" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="d-password">Mot de passe</Label>
                      <Input id="d-password" type="password" placeholder="••••••••" />
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full" variant="pink" size="lg">
                  Se connecter
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
