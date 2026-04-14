import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { CONTENT } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {CONTENT.testimonials.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            {CONTENT.testimonials.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CONTENT.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative"
            >
              <Quote className="absolute top-8 right-8 text-brand-primary/20" size={48} />
              <p className="text-xl italic text-white/80 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full border-2 border-brand-primary"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-brand-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
