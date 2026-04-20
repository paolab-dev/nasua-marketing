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

interface EstrategiaLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const redesOptions = [
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "youtube", label: "YouTube" },
];

const EstrategiaLeadForm = ({ open, onOpenChange }: EstrategiaLeadFormProps) => {
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
  const [marca, setMarca] = useState("");
  const [ciudad, setCiudad] = useState("");

  // Step 2
  const [redes, setRedes] = useState<string[]>([]);
  const [seguidoresActuales, setSeguidoresActuales] = useState("");
  const [contenidoActual, setContenidoActual] = useState("");
  const [objetivoEstrategia, setObjetivoEstrategia] = useState("");
  const [produccionContenido, setProduccionContenido] = useState("");
  const [lanzamiento, setLanzamiento] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!nombre.trim()) newErrors.nombre = "Campo requerido";
    if (!email.trim()) newErrors.email = "Campo requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email inválido";
    if (!whatsapp.trim()) newErrors.whatsapp = "Campo requerido";
    else if (!/^[\d\s\-+()]{7,20}$/.test(whatsapp)) newErrors.whatsapp = "Número inválido";
    if (!marca.trim()) newErrors.marca = "Campo requerido";
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
    const ok = await sendLead("social-media", {
      nombre, email, whatsapp, marca, ciudad,
      redes, seguidoresActuales, contenidoActual, objetivoEstrategia, produccionContenido, lanzamiento,
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
      setNombre(""); setEmail(""); setWhatsapp(""); setMarca(""); setCiudad("");
      setRedes([]); setSeguidoresActuales(""); setContenidoActual(""); setObjetivoEstrategia(""); setProduccionContenido(""); setLanzamiento("");
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
                    <h3 className="text-xl font-display font-medium text-foreground mb-1">Cuéntanos sobre tu marca</h3>
                    <p className="text-sm text-muted-foreground font-body mb-6">Diseñamos la estrategia de contenido que convierte tu audiencia en clientes.</p>

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
                        <Label className="font-body">Nombre de la marca o negocio <span className="text-destructive">*</span></Label>
                        <Input value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Tu marca" className="mt-1" maxLength={100} />
                        {errors.marca && <p className="text-destructive text-xs mt-1">{errors.marca}</p>}
                      </div>
                      <div>
                        <Label className="font-body">Ciudad / país</Label>
                        <Input value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Bogotá, Colombia" className="mt-1" maxLength={100} />
                      </div>
                    </div>

                    <Button onClick={handleNext} className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6">
                      Continuar →
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-display font-medium text-foreground mb-1">Tu presencia en redes sociales</h3>
                    <p className="text-sm text-muted-foreground font-body mb-6">Esto nos permite diseñar la estrategia ideal para tu etapa y objetivos.</p>

                    <div className="space-y-5">
                      <div>
                        <Label className="font-body mb-2 block">¿En qué redes sociales tienes o quieres presencia?</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {redesOptions.map((opt) => (
                            <label key={opt.id} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                              <Checkbox checked={redes.includes(opt.id)} onCheckedChange={() => toggleCheckbox(redes, setRedes, opt.id)} />
                              <span className="text-sm font-body text-foreground">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="font-body">¿Cuántos seguidores tienes actualmente en tu red principal?</Label>
                        <Select value={seguidoresActuales} onValueChange={setSeguidoresActuales}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="menos-1k">Menos de 1.000</SelectItem>
                            <SelectItem value="1k-10k">1.000 – 10.000</SelectItem>
                            <SelectItem value="10k-50k">10.000 – 50.000</SelectItem>
                            <SelectItem value="mas-50k">Más de 50.000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="font-body">¿Cuál es tu situación actual con el contenido?</Label>
                        <Select value={contenidoActual} onValueChange={setContenidoActual}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sin-estrategia">Publico sin estrategia definida</SelectItem>
                            <SelectItem value="esporadico">Publico esporádicamente</SelectItem>
                            <SelectItem value="constante-sin-resultados">Soy constante pero sin resultados</SelectItem>
                            <SelectItem value="bien">Va bien, quiero escalar</SelectItem>
                            <SelectItem value="sin-presencia">No tengo presencia todavía</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="font-body">¿Cuál es tu objetivo principal con las redes sociales?</Label>
                        <Select value={objetivoEstrategia} onValueChange={setObjetivoEstrategia}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="autoridad">Posicionarme como experto en mi nicho</SelectItem>
                            <SelectItem value="ventas">Generar ventas directas</SelectItem>
                            <SelectItem value="comunidad">Construir comunidad y engagement</SelectItem>
                            <SelectItem value="leads">Capturar leads para mi embudo</SelectItem>
                            <SelectItem value="todo">Todo lo anterior</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="font-body">¿Tienes equipo o recursos para producir contenido?</Label>
                        <Select value={produccionContenido} onValueChange={setProduccionContenido}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yo-mismo">Lo hago todo yo mismo</SelectItem>
                            <SelectItem value="equipo-interno">Tengo equipo interno</SelectItem>
                            <SelectItem value="necesito-produccion">Necesito que Nasua produzca el contenido</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="font-body">¿Cuándo quieres arrancar?</Label>
                        <Select value={lanzamiento} onValueChange={setLanzamiento}>
                          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">Lo antes posible</SelectItem>
                            <SelectItem value="semanas">En las próximas semanas</SelectItem>
                            <SelectItem value="explorando">Solo estoy explorando opciones</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <TurnstileCaptcha onVerify={onVerify} onError={onError} onExpire={onExpire} resetRef={resetRef} />

                    <div className="flex gap-3 mt-6">
                      <Button variant="outline" onClick={handleBack} className="flex-1 py-6">← Atrás</Button>
                      <Button onClick={handleSubmit} disabled={isSubmitting || !isVerified} className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6">
                        {isSubmitting ? "Enviando..." : "Iniciar mi estrategia"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-3 font-body">
                      Nuestro equipo revisará tu presencia actual y te contactará con una propuesta de estrategia y contenido personalizada.
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
                Gracias por compartir la información de tu marca. Nuestro equipo revisará tu presencia digital y te contactará pronto para diseñar la estrategia de contenido que convierte tu audiencia en clientes.
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

export default EstrategiaLeadForm;
