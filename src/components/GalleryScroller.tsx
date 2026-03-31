import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";

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
import galleryVideo from "@/assets/gallery-video.mp4";
import g11 from "@/assets/gallery-11.jpg";
import g12 from "@/assets/gallery-12.jpg";
import g13 from "@/assets/gallery-13.jpg";
import g14 from "@/assets/gallery-14.jpg";
import g15 from "@/assets/gallery-15.jpg";

type GalleryItem = { type: "image"; src: string } | { type: "video"; src: string };

const items: GalleryItem[] = [
  { type: "image", src: g1 },
  { type: "image", src: g2 },
  { type: "image", src: g3 },
  { type: "image", src: g4 },
  { type: "image", src: g5 },
  { type: "video", src: galleryVideo },
  { type: "image", src: g6 },
  { type: "image", src: g7 },
  { type: "image", src: g11 },
  { type: "image", src: g12 },
  { type: "image", src: g8 },
  { type: "image", src: g13 },
  { type: "image", src: g9 },
  { type: "image", src: g14 },
  { type: "image", src: g10 },
  { type: "image", src: g15 },
];
const doubled = [...items, ...items];

const GalleryScroller = () => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
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
            {doubled.map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-72 h-48 rounded-xl overflow-hidden border border-border/50 glass cursor-pointer"
                onClick={() => setSelected(item)}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Gallery ${(i % items.length) + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101]"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              className="max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden border border-border/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.type === "video" ? (
                <video
                  src={selected.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="max-w-[90vw] max-h-[85vh] object-contain"
                />
              ) : (
                <img
                  src={selected.src}
                  alt="Gallery preview"
                  className="max-w-[90vw] max-h-[85vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryScroller;
