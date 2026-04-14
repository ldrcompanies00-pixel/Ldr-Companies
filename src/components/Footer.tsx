import { Rocket, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { CONTENT } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-2xl font-display font-bold tracking-tighter">
            <Rocket className="text-brand-primary" />
            <span className="text-gradient">Webbly</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white/40 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-white/40 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>{CONTENT.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termeni și Condiții</a>
            <a href="#" className="hover:text-white transition-colors">Politică de Confidențialitate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
