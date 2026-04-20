"use client";
import { useState } from "react";
import { sendLead } from "@/lib/send-lead";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import TurnstileCaptcha from "@/components/TurnstileCaptcha";
import { useCaptcha } from "@/hooks/use-captcha";
import { ClientOnly } from "@/components/ClientOnly";

interface WebmasterLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const problemasOptions = [
  { id: "velocidad", label: "Sitio lento" },
  { id: "seguridad", label: "Problemas de seguridad" },
  { id: "actualizaciones", label: "Plugins o CMS desactualizados" },
  { id: "backups", label: "Sin respaldos automáticos" },
  { id: "errores", label: "Errores técnicos frecuentes" },
  { id: "seo-tecnico", label: "Problemas de SEO técnico" },
];

const WebmasterLeadForm = ({ open, onOpenChange }: WebmasterLeadFormProps) => {
  const totalSteps = 2;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { isVerified, onVerify, onError, onExpire, resetCaptcha, resetRef } = useCaptcha();

  // Step 1
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [sitioWeb, setSitioWeb] = useState("");

  // Step 2
  const [plataforma, setPlataforma] = useState("");
  const [problemasActuales, setProblemasActuales] = useState<string[]>([]);
  const [servicioActual, setServicioActual] = useState("");
  const [urgencia, setUrgencia] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!nombre.trim()) newErrors.nombre = "Campo requerido";
    if (!email.trim()) newErrors.email = "Campo requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email inválido";
    if (!whatsapp.trim()) newErrors.whatsapp = "Campo requerido";
    else if (!/^[\d\s\-+()]{7,20}$/.test(whatsapp)) newErrors.whatsapp = "Número inválido";
    if (!empresa.trim()) newErrors.empresa = "Campo requerido";
    if (!sitioWeb.trim()) newErrors.sitioWeb = "Campo requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
  };

  const handleBack = () => {
    setErrors({});
    setStep(step - 1);
  };

  const toggleCheckbox = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const ok = await sendLead("webmaster", {
      nombre, email, whatsapp, empresa, sitioWeb,
      plataforma, problemasActuales, servicioActual, urgencia,
    });
    setIsSubmitting(false);
    if (ok) {
      setSubmitted(true);
    } else {
      toast({ title: "Error", description: "No pudimos enviar tu solicitud. Intenta de nuevo.", variant: "destructive" });
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setNombre(""); setEmail(""); setWhatsapp(""); setEmpresa(""); setSitioWeb("");
      setPlataforma(""); setProblemasActuales([]); setServicioActual(""); setUrgencia("");
      setErrors({});
      resetCaptcha();
    }, 300);
  };

  const progress = (step / totalSteps) * 100;

  const slideVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <ClientOnly minHeight="420px">
          {!submitted ? (
            <>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <DialogTitle className="text-lg font-display font-bold text-foreground">
                    Paso {step} de {totalSteps}
                  </DialogTitle>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-display font-medium text-foreground mb-1">Cuéntanos sobre tu sitio web</h3>
                    <p className="text-sm text-muted-foreground font-body mb-6">En minutos evaluamos el estado de tu plataforma digital.</p>

                    <div className="space-y-4">
                      <div>
                        <Label className="font-body">Nombre completo <span className="text-destructive">*</span></Label>
                        <Input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" className="mt-1" maxLength={100} />
                        {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
                      </div>
                      <div>
                        <Label className="font-body">Email <span className="text-destructive">*</span></Label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" className="mt-1" maxLength={255} />
                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <Label className="font-body">WhatsApp <span className="text-destructive">*</span></Label>
                        <Input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+57 300 000 0000" className="mt-1" maxLength={20} />
                        {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>}
                      </div>
                      <div>
                        <Label className="font-body">Empresa o marca <span className="text-destructive">*</span></Label>
                        <Input value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Nombre de tu empresa" className="mt-1" maxLength={100} />
                        {errors.empresa && <p className="text-destructive text-xs mt-1">{errors.empresa}</p>}
                      </div>
                      <div>
                        <Label className="font-body">URL de tu sitio web <span className="text-destructive">*</span></Label>
                        <Input value={sitioWeb} onChange={(e) => setSitioWeb(e.target.value)} placeholder="www.tuempresa.com" className="mt-1" maxLength={255} />
                        {errors.sitioWeb && <p className="text-destructive text-xs mt-1">{errors.sitioWeb}</p>}
                      </div>
                    </div>

                    <Button onClick={handleNext} className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6">
                      Continuar →
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-display font-medium text-foreground mb-1">Estado actual de tu plataforma</h3>
                    <p className="text-sm text-muted-foreground font-body mb-6">Esto nos permite preparar una auditoría precisa antes de contactarte.</p>

                    <div className="space-y-5">
                      <div>
                        <Label className="font-body">¿En qué plataforma está tu sitio?</Label>
                        <Select value={plataforma} onValueChange={setPlataforma}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wordpress">WordPress</SelectItem>
                            <SelectItem value="shopify">Shopify</SelectItem>
                            <SelectItem value="wix">Wix / Squarespace</SelectItem>
                            <SelectItem value="custom">Desarrollo a medida</SelectItem>
                            <SelectItem value="no-se">No sé exactamente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="font-body mb-2 block">¿Cuáles problemas presenta tu sitio actualmente?</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {problemasOptions.map((opt) => (
                            <label key={opt.id} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                              <Checkbox checked={problemasActuales.includes(opt.id)} onCheckedChange={() => toggleCheckbox(problemasActuales, setProblemasActuales, opt.id)} />
                              <span className="text-sm font-body text-foreground">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="font-body">¿Tienes alguien gestionando tu web ahora?</Label>
                        <Select value={servicioActual} onValueChange={setServicioActual}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No, nadie la gestiona</SelectItem>
                            <SelectItem value="lo-hago-yo">La gestiono yo mismo</SelectItem>
                            <SelectItem value="tengo-alguien">Tengo alguien pero quiero cambiar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="font-body">¿Con qué urgencia necesitas este servicio?</Label>
                        <Select value={urgencia} onValueChange={setUrgencia}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergencia">Tengo una emergencia activa</SelectItem>
                            <SelectItem value="asap">Lo antes posible</SelectItem>
                            <SelectItem value="mes">En el próximo mes</SelectItem>
                            <SelectItem value="explorando">Solo estoy explorando opciones</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <TurnstileCaptcha onVerify={onVerify} onError={onError} onExpire={onExpire} resetRef={resetRef} />

                    <div className="flex gap-3 mt-6">
                      <Button variant="outline" onClick={handleBack} className="flex-1 py-6">← Atrás</Button>
                      <Button onClick={handleSubmit} disabled={isSubmitting || !isVerified} className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6">
                        {isSubmitting ? "Enviando..." : "Agendar auditoría"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-3 font-body">
                      Nuestro equipo revisará el estado de tu sitio y te contactará para coordinar la auditoría de 15 minutos.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <DialogTitle className="sr-only">Solicitud recibida</DialogTitle>
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-medium text-foreground mb-3">¡Solicitud recibida!</h3>
              <p className="text-muted-foreground font-body leading-relaxed max-w-md mx-auto">
                Gracias por compartir la información de tu sitio. Nuestro equipo revisará tu caso y te contactará pronto para coordinar la auditoría y definir el plan de mantenimiento ideal.
              </p>
              <Button onClick={handleClose} className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-6">
                Cerrar
              </Button>
            </motion.div>
          )}
        </ClientOnly>
      </DialogContent>
    </Dialog>
  );
};

export default WebmasterLeadForm;
