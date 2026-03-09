import { useState, useEffect } from "react";
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

interface EcommerceLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedModel?: string;
}

const materialOptions = [
  { id: "fotos", label: "Fotos de productos" },
  { id: "descripciones", label: "Descripciones de productos" },
  { id: "precios", label: "Lista de precios" },
  { id: "inventario", label: "Inventario organizado" },
  { id: "nada", label: "Aún no tengo todo listo" },
];

const pagoOptions = [
  { id: "tarjetas", label: "Tarjetas de crédito/débito" },
  { id: "pse", label: "PSE" },
  { id: "transferencia", label: "Transferencia bancaria" },
  { id: "contra-entrega", label: "Pago contra entrega" },
  { id: "whatsapp-only", label: "Solo WhatsApp por ahora" },
];

const EcommerceLeadForm = ({ open, onOpenChange, preselectedModel }: EcommerceLeadFormProps) => {
  const totalSteps = 3;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [marca, setMarca] = useState("");
  const [ciudad, setCiudad] = useState("");

  // Step 2
  const [tipoTienda, setTipoTienda] = useState("");
  const [productos, setProductos] = useState("");
  const [cantidadProductos, setCantidadProductos] = useState("");
  const [ventaActual, setVentaActual] = useState("");

  // Step 3
  const [materiales, setMateriales] = useState<string[]>([]);
  const [metodosPago, setMetodosPago] = useState<string[]>([]);
  const [lanzamiento, setLanzamiento] = useState("");
  const [publicidad, setPublicidad] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedModel) {
      setTipoTienda(preselectedModel);
    }
  }, [preselectedModel]);

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

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!tipoTienda) newErrors.tipoTienda = "Selecciona una opción";
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
    console.log("Ecommerce lead submitted:", {
      nombre, email, whatsapp, marca, ciudad,
      tipoTienda, productos, cantidadProductos, ventaActual,
      materiales, metodosPago, lanzamiento, publicidad,
    });
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setNombre(""); setEmail(""); setWhatsapp(""); setMarca(""); setCiudad("");
      setTipoTienda(""); setProductos(""); setCantidadProductos(""); setVentaActual("");
      setMateriales([]); setMetodosPago([]); setLanzamiento(""); setPublicidad("");
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
                  <h3 className="text-xl font-display font-medium text-foreground mb-1">Cuéntanos sobre tu negocio</h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">En menos de un minuto sabremos qué tipo de tienda virtual necesitas.</p>

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
                  <h3 className="text-xl font-display font-medium text-foreground mb-1">¿Cómo quieres vender online?</h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">Esto nos permite recomendar el modelo de e-commerce adecuado.</p>

                  <div className="space-y-4">
                    <div>
                      <Label className="font-body">¿Qué tipo de tienda te interesa? <span className="text-destructive">*</span></Label>
                      <Select value={tipoTienda} onValueChange={setTipoTienda}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="whatsapp">Catálogo con ventas por WhatsApp</SelectItem>
                          <SelectItem value="automatica">Tienda automática con pagos online</SelectItem>
                          <SelectItem value="asesoria">No estoy seguro, necesito asesoría</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.tipoTienda && <p className="text-destructive text-xs mt-1">{errors.tipoTienda}</p>}
                    </div>
                    <div>
                      <Label className="font-body">¿Qué tipo de productos vendes?</Label>
                      <Textarea value={productos} onChange={(e) => setProductos(e.target.value)} placeholder="Describe tus productos..." className="mt-1" maxLength={500} />
                    </div>
                    <div>
                      <Label className="font-body">¿Cuántos productos aproximadamente tendrá tu tienda al inicio?</Label>
                      <Select value={cantidadProductos} onValueChange={setCantidadProductos}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="menos-10">Menos de 10</SelectItem>
                          <SelectItem value="10-50">10 – 50</SelectItem>
                          <SelectItem value="50-100">50 – 100</SelectItem>
                          <SelectItem value="mas-100">Más de 100</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="font-body">¿Actualmente vendes en internet?</Label>
                      <Select value={ventaActual} onValueChange={setVentaActual}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="redes">Sí, por redes sociales</SelectItem>
                          <SelectItem value="tienda-online">Sí, tengo una tienda online</SelectItem>
                          <SelectItem value="solo-whatsapp">Solo vendo por WhatsApp</SelectItem>
                          <SelectItem value="no-vendo">Aún no vendo online</SelectItem>
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
                  <h3 className="text-xl font-display font-medium text-foreground mb-1">Contenido para tu tienda</h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">Esto nos ayuda a preparar la estructura inicial de tu e-commerce.</p>

                  <div className="space-y-5">
                    <div>
                      <Label className="font-body mb-2 block">¿Tienes material para tus productos?</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {materialOptions.map((opt) => (
                          <label key={opt.id} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <Checkbox checked={materiales.includes(opt.id)} onCheckedChange={() => toggleCheckbox(materiales, setMateriales, opt.id)} />
                            <span className="text-sm font-body text-foreground">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="font-body mb-2 block">¿Qué métodos de pago te gustaría aceptar?</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {pagoOptions.map((opt) => (
                          <label key={opt.id} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <Checkbox checked={metodosPago.includes(opt.id)} onCheckedChange={() => toggleCheckbox(metodosPago, setMetodosPago, opt.id)} />
                            <span className="text-sm font-body text-foreground">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="font-body">¿Cuándo te gustaría lanzar tu tienda online?</Label>
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
                      <Label className="font-body">¿Planeas hacer publicidad para vender tus productos?</Label>
                      <Select value={publicidad} onValueChange={setPublicidad}>
                        <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram-facebook">Sí, en Instagram/Facebook</SelectItem>
                          <SelectItem value="google">Sí, en Google</SelectItem>
                          <SelectItem value="ambas">Sí, en ambas</SelectItem>
                          <SelectItem value="no-seguro">Aún no estoy seguro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" onClick={handleBack} className="flex-1 py-6">← Atrás</Button>
                    <Button onClick={handleSubmit} className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6">
                      Solicitar mi tienda virtual
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-3 font-body">
                    Nuestro equipo revisará tu información para recomendarte el modelo de e-commerce más adecuado y comenzar la activación de tu tienda.
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
              Gracias por compartir la información de tu negocio. Nuestro equipo revisará tu caso y te contactará pronto para definir el modelo de tienda ideal y los siguientes pasos.
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

export default EcommerceLeadForm;
