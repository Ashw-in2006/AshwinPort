import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import g1 from "@/assets/gallery-1.webp";
import g2 from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.webp";
import g4 from "@/assets/gallery-4.avif";
import g5 from "@/assets/gallery-5.avif";
import g6 from "@/assets/gallery-6.avif";
import g7 from "@/assets/gallery-7.webp";
import g8 from "@/assets/gallery-8.avif";
import g9 from "@/assets/gallery-9.avif";
import g10 from "@/assets/gallery-10.avif";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];
const doubled = [...images, ...images];

const GalleryScroller = () => (
  <section className="py-12 overflow-hidden">
    <div className="container mx-auto px-4 mb-6">
      <p className="font-mono text-xs text-primary/70 tracking-widest flex items-center gap-2">
        <Camera className="w-3 h-3" /> GALLERY // MOMENTS_CAPTURED
      </p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-72 h-48 rounded-xl overflow-hidden border border-border/50 glass"
          >
            <img
              src={src}
              alt={`Gallery ${(i % images.length) + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default GalleryScroller;
