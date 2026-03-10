import { useState } from "react";
import { Menu, X, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Academics", href: "#academics" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Certifications", href: "#certifications" },
  { label: "Community", href: "#community" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg text-primary">
          <Cloud className="w-5 h-5" />
          <span>ASHWIN</span>
          <span className="text-muted-foreground text-xs font-mono hidden sm:inline">// command-center</span>
        </a>

        <div className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              {item.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
