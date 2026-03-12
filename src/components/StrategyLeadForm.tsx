import { useState } from "react";
import { sendLead } from "@/lib/send-lead";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StrategyLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const objectives = [
  "Conseguir más clientes",
  "Mejorar posicionamiento en Google",
  "Escalar publicidad digital",
  "Automatizar marketing o ventas",
  "Lanzar un nuevo producto o servicio",
];

const industries = [
  "Servicios profesionales",
  "E-commerce",
  "Educación / cursos",
  "Salud / bienestar",
  "Inmobiliaria",
  "Tecnología",
  "Otro",
];

const budgets = [
  "No aún",
  "Sí, menos de $1M COP al mes",
  "Entre $1M y $5M COP",
  "Más de $5M COP",
];

const channelOptions = [
  "Google Ads",
  "Instagram / Facebook Ads",
  "TikTok Ads",
  "SEO",
  "Email marketing",
  "Ninguno",
];

const StrategyLeadForm = ({ open, onOpenChange }: StrategyLeadFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    objective: "",
    website: "",
    industry: "",
    budget: "",
    channels: [] as string[],
    challenge: "",
  });

  const updateField = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const toggleChannel = (ch: string) =>
    setForm((p) => ({
      ...p,
      channels: p.channels.includes(ch) ? p.channels.filter((c) => c !== ch) : [...p.channels, ch],
    }));

  const validateStep1 = () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast({ title: "Campos requeridos", description: "Completa nombre, email y teléfono.", variant: "destructive" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({ title: "Email inválido", description: "Ingresa un correo electrónico válido.", variant: "destructive" });
      return false;
    }
    const phoneRegex = /^[+\d\s()-]{7,20}$/;
    if (!phoneRegex.test(form.phone)) {
      toast({ title: "Teléfono inválido", description: "Ingresa un número de teléfono válido.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const ok = await sendLead("estrategia", form);
    setIsSubmitting(false);
    if (ok) {
      setIsSuccess(true);
      setTimeout(() => {
        onOpenChange(false);
        setTimeout(() => {
          setStep(1);
          setIsSuccess(false);
          setForm({ name: "", email: "", phone: "", company: "", objective: "", website: "", industry: "", budget: "", channels: [], challenge: "" });
        }, 300);
      }, 4000);
    } else {
      toast({ title: "Error", description: "No pudimos enviar tu solicitud. Intenta de nuevo.", variant: "destructive" });
    }
  };

  const progress = isSuccess ? 100 : step === 1 ? 50 : 100;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border">
        {isSuccess ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto" />
            <h3 className="text-2xl font-medium font-display text-foreground">¡Solicitud recibida!</h3>
            <p className="text-muted-foreground font-body">
              Gracias. Nuestro equipo revisará tu información y te contactará pronto para tu diagnóstico estratégico.
            </p>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-display font-bold text-foreground">
                Solicita tu Diagnóstico Estratégico
              </DialogTitle>
              <DialogDescription className="text-muted-foreground font-body">
                Cuéntanos sobre tu negocio y nuestro equipo diseñará una estrategia para acelerar tu crecimiento.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-1 mt-2">
              <div className="flex justify-between text-xs text-muted-foreground font-body">
                <span>Paso {step} de 2</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4 mt-2">
                  <div>
                    <Label className="text-foreground font-body">Nombre completo *</Label>
                    <Input value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Tu nombre" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-foreground font-body">Correo electrónico *</Label>
                    <Input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="correo@empresa.com" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-foreground font-body">WhatsApp / Teléfono *</Label>
                    <Input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+57 300 000 0000" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-foreground font-body">Empresa o marca</Label>
                    <Input value={form.company} onChange={(e) => updateField("company", e.target.value)} placeholder="Nombre de tu empresa" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-foreground font-body">¿Cuál es tu principal objetivo ahora?</Label>
                    <Select value={form.objective} onValueChange={(v) => updateField("objective", v)}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                      <SelectContent>
                        {objectives.map((o) => (<SelectItem key={o} value={o}>{o}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleNext} className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
                    Continuar →
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4 mt-2">
                  <div>
                    <Label className="text-foreground font-body">Sitio web actual</Label>
                    <Input value={form.website} onChange={(e) => updateField("website", e.target.value)} placeholder="https://tuempresa.com" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-foreground font-body">¿En qué industria se encuentra tu negocio?</Label>
                    <Select value={form.industry} onValueChange={(v) => updateField("industry", v)}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                      <SelectContent>
                        {industries.map((i) => (<SelectItem key={i} value={i}>{i}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-foreground font-body">¿Actualmente inviertes en marketing digital?</Label>
                    <Select value={form.budget} onValueChange={(v) => updateField("budget", v)}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                      <SelectContent>
                        {budgets.map((b) => (<SelectItem key={b} value={b}>{b}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-foreground font-body mb-2 block">¿Qué canales utilizas actualmente?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {channelOptions.map((ch) => (
                        <label key={ch} className="flex items-center gap-2 cursor-pointer text-sm text-foreground font-body">
                          <Checkbox checked={form.channels.includes(ch)} onCheckedChange={() => toggleChannel(ch)} />
                          {ch}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground font-body">¿Qué desafío principal quieres resolver?</Label>
                    <Textarea value={form.challenge} onChange={(e) => updateField("challenge", e.target.value)} placeholder="Ej: conseguir más clientes, mejorar conversiones, posicionamiento en Google, automatizar procesos, etc." className="mt-1" rows={3} />
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">← Atrás</Button>
                    <Button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
                      {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Enviando...</> : "Solicitar diagnóstico estratégico"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StrategyLeadForm;
