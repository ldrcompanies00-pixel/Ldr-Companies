import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Code, Layout, Search, PenTool, Globe, ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';

const iconMap: Record<string, any> = {
  "web-design": Layout,
  "app-dev": Code,
  "seo": Search,
  "content": PenTool,
  "builder": Globe
};

export default function Services() {
  const [activeService, setActiveService] = useState(CONTENT.services.items[0].id);

  const currentService = CONTENT.services.items.find(s => s.id === activeService)!;

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {CONTENT.services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            {CONTENT.services.subtitle}
          </motion.p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CONTENT.services.items.map((service) => {
            const Icon = iconMap[service.id];
            const isActive = activeService === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all ${
                  isActive 
                    ? 'bg-brand-primary text-black glow-primary' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon size={20} />
                {service.title}
              </button>
            );
          })}
        </div>

        {/* Pricing Tiers for Active Service */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentService.packages.map((pkg, index) => (
              <motion.div
                key={`${activeService}-${pkg.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 flex flex-col h-full border-white/10 hover:border-brand-primary/30 transition-all ${
                  index === 1 ? 'lg:scale-105 border-brand-primary/40 bg-white/10' : ''
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-bold rounded-full uppercase tracking-widest">
                    Cel Mai Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-brand-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  index === 1 
                    ? 'bg-brand-primary text-black hover:glow-primary' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}>
                  Alege Planul
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center p-12 glass-card border-brand-secondary/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ai nevoie de o soluție personalizată?</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Dacă niciunul dintre pachetele de mai sus nu se potrivește nevoilor tale, contactează-ne pentru o ofertă customizată.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-brand-secondary font-bold hover:gap-4 transition-all"
          >
            Discută cu un expert <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
