import { motion } from "framer-motion";
import { BookOpen, User } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Pastikan path ini sesuai dengan project kamu

export default function AboutSection() {
  const stats = [
    { icon: BookOpen, value: "5 Juz+", label: "Hafalan" },
    { icon: User, value: "Student", label: "Status Saat Ini" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Kiri: Box Emoji (Pengganti Gambar) */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {/* Emoji orang melihat komputer dengan sizing yang pas */}
                  <span className="text-8xl md:text-9xl select-none filter drop-shadow-md">
                    🧑‍💻
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient text-primary">
                  Student
                </p>
                <p className="text-sm text-muted-foreground">MAN</p>
              </div>
            </div>
          </motion.div>

          {/* Kanan: Deskripsi & Stats (Tanpa Accordion untuk Stats) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-slate-50 font-display text-2xl md:text-3xl font-bold">
              Nirmala
            </h3>

            {/* Accordion hanya untuk "Siapa Saya?" */}
            <Accordion type="single" collapsible defaultValue="description" className="w-full">
              <AccordionItem value="description" className="border-none">
                <AccordionTrigger className="hover:no-underline p-4 glass rounded-xl">
                  <span className="text-wh font-serif">Siapa Saya?</span>
                </AccordionTrigger>
                <AccordionContent className="p-4 text-slate-50 leading-relaxed">
                  Halo, saya Nirmala. Saya adalah seorang pelajar yang aktif mengerjakan tugas sekolah.
                  <br />
                  <br />
                  Saya memiliki kegemaran di bidang IPS dan agama, dan saya sengat
                  bersemangat untuk menggapai cita cita saya.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Stats Langsung Ditampilkan di Luar Accordion */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-all"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}