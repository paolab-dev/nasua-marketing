import { useState } from "react";
import { sendLead } from "@/lib/send-lead";
import { useToast } from "@/hooks/use-toast";
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

interface LeadCaptureFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const materialOptions = [
  { id: "logo", label: "Logo" },
  { id: "fotos", label: "Fotos del producto/servicio" },
  { id: "textos", label: "Textos de venta" },
  { id: "nada", label: "Aún no tengo material" },
];

const LeadCaptureForm = ({ open, onOpenChange }: LeadCaptureFormProps) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Step 1
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [negocio, setNegocio] = useState("");
  const [sitioWeb, setSitioWeb] = useState("");

  // Step 2
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [materiales, setMateriales] = useState<string[]>([]);
  const [lanzamiento, setLanzamiento] = useState("");

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Requerido";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email válido requerido";
    if (!whatsapp.trim()) e.whatsapp = "Requerido";
    if (!negocio.trim()) e.negocio = "Requerido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!producto.trim()) e.producto = "Requerido";
    if (!precio) e.precio = "Selecciona una opción";
    if (!objetivo) e.objetivo = "Selecciona una opción";
    if (!lanzamiento) e.lanzamiento = "Selecciona una opción";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      setErrors({});
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;
    setIsSubmitting(true);
    const ok = await sendLead("landing", {
      nombre, email, whatsapp, negocio, sitioWeb,
      producto, precio, objetivo, materiales, lanzamiento,
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
    // Reset after close animation
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setNombre(""); setEmail(""); setWhatsapp(""); setNegocio(""); setSitioWeb("");
      setProducto(""); setPrecio(""); setObjetivo(""); setMateriales([]); setLanzamiento("");
      setErrors({});
    }, 300);
  };

  const toggleMaterial = (id: string) => {
    setMateriales((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 text-center space-y-4"
            >
              <DialogTitle className="sr-only">Solicitud recibida</DialogTitle>
              <CheckCircle className="w-16 h-16 text-secondary mx-auto" />
              <h3 className="text-2xl font-medium font-display text-foreground">
                ¡Solicitud recibida!
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Nuestro equipo revisará tu información y te contactará en las
                próximas horas para validar tu proyecto y los siguientes pasos.
              </p>
              <Button onClick={handleClose} variant="secondary" className="mt-4">
                Cerrar
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 space-y-6"
            >
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-body text-muted-foreground">
                  <span>Paso {step} de 2</span>
                  <span>{step === 1 ? "50%" : "100%"}</span>
                </div>
                <Progress value={step * 50} className="h-2" />
              </div>

              {step === 1 ? (
                <>
                  <div>
                    <DialogTitle className="text-xl md:text-2xl font-bold font-display text-foreground">
                      Cuéntanos sobre tu proyecto
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      En menos de 1 minuto sabremos si tu landing puede activarse
                      en nuestro sprint de 48 horas.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nombre" className="font-body">
                        Nombre completo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Tu nombre"
                        maxLength={100}
                      />
                      {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-body">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        maxLength={255}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="whatsapp" className="font-body">
                        WhatsApp <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+57 300 123 4567"
                        maxLength={20}
                      />
                      {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>}
                    </div>

                    <div>
                      <Label htmlFor="negocio" className="font-body">
                        Nombre del negocio o marca <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="negocio"
                        value={negocio}
                        onChange={(e) => setNegocio(e.target.value)}
                        placeholder="Tu marca"
                        maxLength={100}
                      />
                      {errors.negocio && <p className="text-destructive text-xs mt-1">{errors.negocio}</p>}
                    </div>

                    <div>
                      <Label htmlFor="sitioWeb" className="font-body">
                        Sitio web o Instagram <span className="text-muted-foreground text-xs">(opcional)</span>
                      </Label>
                      <Input
                        id="sitioWeb"
                        value={sitioWeb}
                        onChange={(e) => setSitioWeb(e.target.value)}
                        placeholder="https://... o @tuinstagram"
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <Button onClick={handleNext} className="w-full" variant="secondary" size="lg">
                    Continuar →
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <DialogTitle className="text-xl md:text-2xl font-bold font-display text-foreground">
                      Tu oferta y objetivo de la landing
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      Esto nos ayuda a estructurar tu página para que convierta.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="producto" className="font-body">
                        ¿Qué producto o servicio quieres vender? <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="producto"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                        placeholder="Describe brevemente tu oferta..."
                        maxLength={500}
                        className="resize-none"
                        rows={3}
                      />
                      {errors.producto && <p className="text-destructive text-xs mt-1">{errors.producto}</p>}
                    </div>

                    <div>
                      <Label className="font-body">
                        Precio aproximado de tu oferta <span className="text-destructive">*</span>
                      </Label>
                      <Select value={precio} onValueChange={setPrecio}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un rango" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="menos-50">Menos de $50 USD</SelectItem>
                          <SelectItem value="50-200">$50 – $200 USD</SelectItem>
                          <SelectItem value="200-1000">$200 – $1.000 USD</SelectItem>
                          <SelectItem value="mas-1000">Más de $1.000 USD</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.precio && <p className="text-destructive text-xs mt-1">{errors.precio}</p>}
                    </div>

                    <div>
                      <Label className="font-body">
                        Objetivo principal de tu landing <span className="text-destructive">*</span>
                      </Label>
                      <Select value={objetivo} onValueChange={setObjetivo}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un objetivo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="leads">Generar leads</SelectItem>
                          <SelectItem value="vender">Vender un producto</SelectItem>
                          <SelectItem value="llamadas">Agendar llamadas</SelectItem>
                          <SelectItem value="whatsapp">Contacto por WhatsApp</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.objetivo && <p className="text-destructive text-xs mt-1">{errors.objetivo}</p>}
                    </div>

                    <div>
                      <Label className="font-body mb-2 block">
                        ¿Tienes material para la landing?
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        {materialOptions.map((opt) => (
                          <label
                            key={opt.id}
                            className="flex items-center gap-2 cursor-pointer text-sm font-body text-foreground"
                          >
                            <Checkbox
                              checked={materiales.includes(opt.id)}
                              onCheckedChange={() => toggleMaterial(opt.id)}
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="font-body">
                        ¿Cuándo te gustaría lanzar? <span className="text-destructive">*</span>
                      </Label>
                      <Select value={lanzamiento} onValueChange={setLanzamiento}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">Lo antes posible</SelectItem>
                          <SelectItem value="semanas">En las próximas semanas</SelectItem>
                          <SelectItem value="explorando">Solo estoy explorando</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.lanzamiento && <p className="text-destructive text-xs mt-1">{errors.lanzamiento}</p>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full" variant="secondary" size="lg">
                      {isSubmitting ? "Enviando..." : "Solicitar diagnóstico de mi Landing"}
                    </Button>
                    <p className="text-xs text-muted-foreground font-body text-center leading-relaxed">
                      Revisaremos tu información y te contactaremos para confirmar si tu
                      proyecto puede entrar en nuestro sprint de 48 horas.
                    </p>
                    <button
                      onClick={() => { setStep(1); setErrors({}); }}
                      className="text-sm text-muted-foreground hover:text-foreground font-body underline w-full text-center transition-colors"
                    >
                      ← Volver al paso 1
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureForm;
