import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

interface CorporateLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const seccionesOptions = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-nosotros", label: "Sobre nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio o proyectos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "blog", label: "Blog" },
  { id: "contacto", label: "Contacto" },
];

const materialOptions = [
  { id: "logo", label: "Logo" },
  { id: "fotos", label: "Fotos del equipo o servicios" },
  { id: "textos", label: "Textos de presentación" },
  { id: "testimonios", label: "Testimonios de clientes" },
  { id: "nada", label: "Aún no tengo material" },
];

const CorporateLeadForm = ({ open, onOpenChange }: CorporateLeadFormProps) => {
  const totalSteps = 3;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [ciudad, setCiudad] = useState("");

  // Step 2
  const [dedicacion, setDedicacion] = useState("");
  const [servicios, setServicios] = useState("");
  const [clienteIdeal, setClienteIdeal] = useState("");
  const [presenciaDigital, setPresenciaDigital] = useState("");

  // Step 3
  const [secciones, setSecciones] = useState<string[]>([]);
  const [materiales, setMateriales] = useState<string[]>([]);
  const [lanzamiento, setLanzamiento] = useState("");
  const [seo, setSeo] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!nombre.trim()) newErrors.nombre = "Campo requerido";
    if (!email.trim()) newErrors.email = "Campo requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email inválido";
    if (!whatsapp.trim()) newErrors.whatsapp = "Campo requerido";
    else if (!/^[\d\s\-+()]{7,20}$/.test(whatsapp)) newErrors.whatsapp = "Número inválido";
    if (!empresa.trim()) newErrors.empresa = "Campo requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!dedicacion.trim()) newErrors.dedicacion = "Campo requerido";
    if (!servicios.trim()) newErrors.servicios = "Campo requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => {
    setErrors({});
    setStep(step - 1);
  };

  const toggleCheckbox = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleSubmit = () => {
    console.log("Corporate lead submitted:", {
      nombre, email, whatsapp, empresa, ciudad,
      dedicacion, servicios, clienteIdeal, presenciaDigital,
      secciones, materiales, lanzamiento, seo,
    });
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setNombre(""); setEmail(""); setWhatsapp(""); setEmpresa(""); setCiudad("");
      setDedicacion(""); setServicios(""); setClienteIdeal(""); setPresenciaDigital("");
      setSecciones([]); setMateriales([]); setLanzamiento(""); setSeo("");
      setErrors({});
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
                  <h3 className="text-xl font-body font-normal text-foreground mb-1">Cuéntanos sobre tu empresa</h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">Esto nos permitirá preparar tu proyecto de sitio web empresarial.</p>

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
                      <Label className="font-body">Nombre de la empresa <span className="text-destructive">*</span></Label>
                      <Input value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Tu empresa" className="mt-1" maxLength={100} />
                      {errors.empresa && <p className="text-destructive text-xs mt-1">{errors.empresa}</p>}
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
                  <h3 className="text-xl font-body font-normal text-foreground mb-1">Sobre tu empresa</h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">Necesitamos entender qué hace tu negocio para estructurar correctamente el sitio.</p>

                  <div className="space-y-4">
                    <div>
                      <Label className="font-body">¿A qué se dedica tu empresa? <span className="text-destructive">*</span></Label>
                      <Textarea value={dedicacion} onChange={(e) => setDedicacion(e.target.value)} placeholder="Describe brevemente tu empresa..." className="mt-1" maxLength={500} />
                      {errors.dedicacion && <p className="text-destructive text-xs mt-1">{errors.dedicacion}</p>}
                    </div>
                    <div>
                      <Label className="font-body">¿Qué servicios o productos principales ofrece? <span className="text-destructive">*</span></Label>
                      <Textarea value={servicios} onChange={(e) => setServicios(e.target.value)} placeholder="Lista tus servicios o productos principales..." className="mt-1" maxLength={500} />
                      {errors.servicios && <p className="text-destructive text-xs mt-1">{errors.servicios}</p>}
                    </div>
                    <div>
                      <Label className="font-body">¿Quién es tu cliente ideal?</Label>
                      <Textarea value={clienteIdeal} onChange={(e) => setClienteIdeal(e.target.value)} placeholder="Describe a tu cliente ideal..." className="mt-1" maxLength={500} />
                    </div>
                    <div>
                      <Label className="font-body">¿Tu empresa ya tiene presencia digital?</Label>
                      <Select value={presenciaDigital} onValueChange={setPresenciaDigital}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sin-web">No tengo sitio web aún</SelectItem>
                          <SelectItem value="mejorar-web">Tengo un sitio web pero quiero mejorarlo</SelectItem>
                          <SelectItem value="solo-redes">Solo tengo redes sociales</SelectItem>
                          <SelectItem value="web-y-redes">Tengo web y redes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" onClick={handleBack} className="flex-1 py-6">← Atrás</Button>
                    <Button onClick={handleNext} className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6">Continuar →</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-body font-normal text-foreground mb-1">Contenido para tu sitio web</h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">Esto nos ayuda a organizar tu web empresarial.</p>

                  <div className="space-y-5">
                    <div>
                      <Label className="font-body mb-2 block">¿Qué secciones te gustaría incluir en tu sitio?</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {seccionesOptions.map((opt) => (
                          <label key={opt.id} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <Checkbox
                              checked={secciones.includes(opt.id)}
                              onCheckedChange={() => toggleCheckbox(secciones, setSecciones, opt.id)}
                            />
                            <span className="text-sm font-body text-foreground">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="font-body mb-2 block">¿Tienes material disponible para la web?</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {materialOptions.map((opt) => (
                          <label key={opt.id} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <Checkbox
                              checked={materiales.includes(opt.id)}
                              onCheckedChange={() => toggleCheckbox(materiales, setMateriales, opt.id)}
                            />
                            <span className="text-sm font-body text-foreground">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="font-body">¿Cuándo te gustaría lanzar tu sitio web?</Label>
                      <Select value={lanzamiento} onValueChange={setLanzamiento}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">Lo antes posible</SelectItem>
                          <SelectItem value="semanas">En las próximas semanas</SelectItem>
                          <SelectItem value="explorando">Solo estoy explorando</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="font-body">¿Quieres que tu web esté preparada para posicionamiento en Google (SEO)?</Label>
                      <Select value={seo} onValueChange={setSeo}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="no-seguro">No estoy seguro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" onClick={handleBack} className="flex-1 py-6">← Atrás</Button>
                    <Button onClick={handleSubmit} className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6">
                      Solicitar mi sitio web empresarial
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-3 font-body">
                    Nuestro equipo revisará tu información y te contactará para iniciar la activación de tu proyecto.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <DialogTitle className="sr-only">Solicitud recibida</DialogTitle>
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-body font-normal text-foreground mb-3">¡Solicitud recibida!</h3>
            <p className="text-muted-foreground font-body leading-relaxed max-w-md mx-auto">
              Tu información ha sido enviada correctamente. Nuestro equipo revisará tu proyecto y te contactará pronto para iniciar el proceso de creación de tu sitio web empresarial.
            </p>
            <Button onClick={handleClose} className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-6">
              Cerrar
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CorporateLeadForm;
