import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTENT } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {CONTENT.contact.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg mb-12"
            >
              {CONTENT.contact.subtitle}
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Email</p>
                  <p className="text-xl font-bold">contact@webbly.ro</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Telefon</p>
                  <p className="text-xl font-bold">+40 722 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Locație</p>
                  <p className="text-xl font-bold">{CONTENT.footer.location}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">{CONTENT.contact.form.name}</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                  placeholder="Popescu Ion"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">{CONTENT.contact.form.email}</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                  placeholder="ion@exemplu.ro"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">{CONTENT.contact.form.message}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none"
                  placeholder="Cum te putem ajuta?"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:glow-primary hover-glow-primary transition-all"
              >
                {CONTENT.contact.form.submit}
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
