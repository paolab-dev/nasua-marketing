import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Zap, CreditCard, Shield } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Mínimo 2 caracteres").max(100, "Máximo 100 caracteres"),
  phone: z.string().trim().min(7, "Ingresa un número válido").max(15, "Máximo 15 dígitos"),
  email: z.string().trim().email("Correo electrónico inválido").max(255),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mín. 10 caracteres)").max(1000, "Máximo 1000 caracteres"),
  financing: z.boolean().default(false),
});

type ContactForm = z.infer<typeof contactSchema>;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const differentiators = [
  { icon: Zap, title: "Entrega en 7 días", desc: "Vibe Coding con IA para resultados rápidos y de calidad." },
  { icon: CreditCard, title: "Financiación Wompi", desc: "Empieza sin descapitalizarte. Paga a tu ritmo." },
  { icon: Shield, title: "100% tuyo", desc: "Código fuente y dominio bajo tu propiedad total." },
];

const Contacto = () => {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
      financing: false,
    },
  });

  const onSubmit = (data: ContactForm) => {
    toast({
      title: "¡Solicitud enviada!",
      description: "Un estratega de Nasua te contactará en menos de 24 horas.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background" id="contacto">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 section-padding bg-primary text-primary-foreground text-center">
        <motion.h1 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-4">
          Hablemos de tu proyecto digital
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
          Cuéntanos qué necesitas y en menos de 24 horas un estratega de Nasua te contactará con una propuesta personalizada. Sin compromisos.
        </motion.p>
      </section>

      {/* Form + Sidebar */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div {...fadeUp} className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                              +57
                            </span>
                            <Input className="rounded-l-none" placeholder="300 123 4567" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>¿Qué servicio te interesa?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="landing">Landing Page</SelectItem>
                            <SelectItem value="corporativo">Sitio Corporativo</SelectItem>
                            <SelectItem value="ecommerce">Tienda Virtual</SelectItem>
                            <SelectItem value="no-seguro">No estoy seguro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cuéntanos brevemente tu proyecto</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe lo que necesitas..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="financing"
                  render={({ field }) => (
                    <FormItem className="flex items-start gap-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="text-sm font-normal leading-snug cursor-pointer">
                        Sí, quiero conocer mis opciones de financiación con Wompi
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Enviar mi solicitud
                </Button>

                <p className="text-xs text-muted-foreground">
                  Nasua protege tus datos. No compartimos tu información con terceros.
                </p>
              </form>
            </Form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground">Contacto directo</h3>

            <a
              href="mailto:alex@nasua.marketing"
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-secondary transition-colors group"
            >
              <Mail className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm font-semibold text-foreground">Alex Escobar</p>
                <p className="text-xs text-muted-foreground">alex@nasua.marketing</p>
              </div>
            </a>

            <a
              href="mailto:pao@nasua.marketing"
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-secondary transition-colors group"
            >
              <Mail className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm font-semibold text-foreground">Paola Bohórquez</p>
                <p className="text-xs text-muted-foreground">pao@nasua.marketing</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border">
              <MapPin className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Ubicación</p>
                <p className="text-xs text-muted-foreground">Colombia 🇨🇴</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border">
              <Clock className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Horario</p>
                <p className="text-xs text-muted-foreground">Lun – Vie, 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center mb-12">
          <motion.h2 {...fadeUp} className="font-display text-2xl md:text-3xl font-bold text-foreground">
            ¿Por qué elegirnos?
          </motion.h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center border border-border"
            >
              <d.icon className="h-10 w-10 mx-auto mb-4 text-secondary" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
