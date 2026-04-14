import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { CONTENT } from '../constants';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-futuristic">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {CONTENT.portfolio.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg"
            >
              {CONTENT.portfolio.subtitle}
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white hover:text-black transition-all"
          >
            Vezi Tot Portofoliul
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.portfolio.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-primary text-sm font-bold mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <button className="flex items-center gap-2 text-white font-medium hover:text-brand-primary transition-colors">
                  Detalii Proiect <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
