import React from 'react';
import { motion } from 'framer-motion';
import { 
  BotMessageSquare, Music, Server, Terminal, Heart, 
  ShieldCheck, Zap, Headset, Globe, Code, ShieldAlert, Rocket
} from 'lucide-react';
import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Background from './components/Background';

// Animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeIn = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// Reusable Components
const BotCard = ({ name, description, icon: Icon, tag, link }) => (
  <motion.div 
    variants={fadeIn}
    className="bg-white/[0.03] p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl hover:border-purple-500/50 hover:bg-white/[0.05] transition-all duration-300 relative group flex flex-col h-full"
    whileHover={{ y: -5 }}
  >
    {tag && (
        <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-lg">
          {tag}
        </span>
    )}
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-purple-400" />
      </div>
      <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
    </div>
    <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 font-semibold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2">
      <FaTelegramPlane size={18} /> Launch Bot
    </a>
  </motion.div>
);

const WebCard = ({ name, type, link }) => (
  <motion.a 
    href={link} target="_blank" rel="noopener noreferrer"
    variants={fadeIn}
    whileHover={{ scale: 1.02 }}
    className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all"
  >
    <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400"><Globe size={24} /></div>
    <div>
      <h4 className="text-white font-bold text-lg">{name}</h4>
      <p className="text-gray-500 text-sm">{type}</p>
    </div>
  </motion.a>
);

const TeamMember = ({ name, role, link, letter }) => (
  <motion.a 
    href={link} target="_blank" rel="noopener noreferrer"
    variants={fadeIn} 
    whileHover={{ scale: 1.02 }}
    className="bg-white/[0.03] p-6 rounded-3xl border border-white/10 flex items-center gap-6 shadow-xl backdrop-blur-md hover:border-pink-500/50 transition-all cursor-pointer"
  >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
        {letter}
      </div>
      <div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <span className="text-pink-400 font-medium text-sm uppercase tracking-wider">{role}</span>
      </div>
  </motion.a>
);

export default function App() {
  return (
    <div className="text-gray-200 min-h-screen font-sans relative selection:bg-purple-500/30">
      <Background />

      <div className="relative z-10">
        {/* 🚀 HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 pt-20">
          <motion.div
            className="mb-6 flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 text-purple-300 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          >
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
             </span>
             HellfireDevs Ecosystem Live
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight"
            initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            NEX <br className="md:hidden" /> NETWORK
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          >
            The ultimate infrastructure for next-gen Telegram bots, premium music streaming, and advanced web solutions.
          </motion.p>
          
          <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <a href="#bots" className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Zap size={20}/> Explore Bots
            </a>
            <a href="#community" className="bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 transition-all">
              <ShieldCheck size={20}/> Join Support
            </a>
          </motion.div>
        </section>

        {/* 🤖 BOTS ECOSYSTEM */}
        <motion.section id="bots" className="py-20 p-6 md:p-12 lg:p-24 max-w-7xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <motion.div variants={fadeIn} className="mb-16">
              <span className="text-purple-400 font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-2"><Code size={16}/> Our Arsenal</span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-4">Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Bots</span></h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BotCard name="HOIiSTING BOT" description="Host any repository 100% free. The ultimate deployment utility for devs." icon={Server} tag="Free Hosting" link="http://t.me/HOIiSTING_BOT" />
            <BotCard name="Yuki Music" description="Premium, lag-free music streaming for your supergroups." icon={Music} tag="Popular" link="http://t.me/YUKIMUSiICBOT" />
            <BotCard name="Aniya Music" description="High-quality audio vibes and VC player for active communities." icon={Music} tag="Music" link="http://t.me/ANIYA_MUSIC_BOT" />
            <BotCard name="Session Genii" description="Generate Pyrogram and Telethon sessions instantly and securely." icon={Terminal} tag="Utility" link="http://t.me/SESSIONGENIIBOT" />
            <BotCard name="Wafuuu Bot" description="Your ultimate Waifu and entertainment companion for Telegram." icon={Heart} tag="Anime" link="http://t.me/Wafuuuubot" />
            <BotCard name="NEX Management" description="Advanced group automation and antiflood protocols." icon={BotMessageSquare} tag="Security" link="https://t.me/NEX_FUCKR" />
          </div>
        </motion.section>

        {/* 🌐 WEBSITES & API */}
        <motion.section className="py-20 p-6 md:p-12 lg:p-24 max-w-7xl mx-auto bg-black/20" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Web & <span className="text-blue-400">API Network</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <WebCard name="YukiTones" type="Music Web Platform" link="https://yukitones.vercel.app/" />
            <WebCard name="Nex Music Web" type="Audio Interface" link="https://muisc-website.vercel.app/" />
            <WebCard name="YukiAPI" type="Central Hub & Updates" link="https://Yukiapi.site" />
          </div>
        </motion.section>

        {/* 💻 TEAM & UPCOMING */}
        <motion.section className="py-20 p-6 md:p-12 lg:p-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {/* Team */}
          <div>
            <motion.div variants={fadeIn} className="mb-10">
                  <span className="text-pink-400 font-bold text-sm uppercase tracking-[0.2em]">The Architects</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">HellfireDevs</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
              <TeamMember name="BeDestroyer" role="Core Developer" letter="B" link="http://t.me/BeDestroyer" />
              <TeamMember name="Zcziiy" role="Core Developer" letter="Z" link="http://t.me/Zcziiy" />
            </div>
          </div>

          {/* Upcoming */}
          <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-900/40 to-black p-10 rounded-[3rem] border border-purple-500/20 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Rocket size={120} /></div>
            <span className="bg-purple-500/20 text-purple-300 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase mb-6">Coming Soon</span>
            <h3 className="text-4xl font-extrabold text-white mb-4">Project Anime</h3>
            <p className="text-gray-400 text-lg mb-6">A massive new Anime Website, exclusive APIs, and dedicated bots are currently compiling in our labs. Stay tuned.</p>
          </motion.div>
        </motion.section>

        {/* 📞 FOOTER & COMMUNITY */}
        <footer id="community" className="border-t border-white/5 bg-[#02000a] pt-20 pb-10 px-6 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tighter mb-6">NEX.</h2>
              <p className="text-gray-500 mb-6 max-w-sm">Building technology that empowers Telegram communities worldwide.</p>
              <div className="flex gap-4">
                <a href="https://github.com/HellfireDevs/HellfireDevs" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-gray-400"><FaGithub size={20}/></a>
                <a href="https://www.instagram.com/kaito.0_3" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-gray-400"><FaInstagram size={20}/></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2"><Headset size={18}/> Support & Community</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://t.me/+5VJwwq6BKC5iNTll" target="_blank" className="hover:text-purple-400 transition-colors">Main Support Group</a></li>
                <li><a href="https://t.me/NEX_FUCKR" target="_blank" className="hover:text-purple-400 transition-colors">NEX Management HQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2"><ShieldAlert size={18}/> Security Network</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://t.me/+fwvdW3Bce-w0MzM8" target="_blank" className="hover:text-red-400 transition-colors">Global Ban Channel 1</a></li>
                <li><a href="https://t.me/+wGWamRCfVGU2MGRk" target="_blank" className="hover:text-red-400 transition-colors">Global Ban Channel 2</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
            <p>© 2026 Nex Networks. Engineered by HellfireDevs.</p>
            <p className="italic text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy? Haan bhai, baad mai bana lenge 😉</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
