import React from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, ShieldAlert, Swords, Skull, Crosshair, 
  Flame, Zap, Users, Shield, Link2, Target
} from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import Background from './components/Background'; 

// --- ANIMATIONS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.5 } },
};

// --- COMPONENTS ---

// 1. Top Hierarchy Card (Founder/Owner)
const BossCard = ({ title, name, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6, type: "spring" }}
    whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
    className="relative group cursor-pointer w-full max-w-sm mx-auto"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500`}></div>
    <div className="relative bg-[#0a0000]/80 border border-red-900/50 group-hover:border-red-500/80 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center text-center transition-all z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0000] px-4 py-1 border border-red-900/50 rounded-full flex items-center gap-2">
        <Icon className="w-4 h-4 text-red-500" />
        <span className="text-red-500 text-xs font-black uppercase tracking-[0.3em]">{title}</span>
      </div>
      <h3 className="text-3xl font-black text-white mt-4 tracking-wider group-hover:text-red-500 transition-colors">{name}</h3>
      <div className="w-12 h-1 bg-red-600/50 mt-4 rounded-full group-hover:w-full transition-all duration-500"></div>
    </div>
  </motion.div>
);

// 2. Premium Moderator Button (Upgraded)
const ModBadge = ({ name }) => {
  const cleanName = name.replace('@', ''); // Removes the @ for a cleaner look
  return (
    <motion.a 
      href={`https://t.me/${cleanName}`} target="_blank" rel="noopener noreferrer"
      variants={fadeUp} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#0a0000] to-[#1a0000] border border-red-900/40 hover:border-red-500 p-4 rounded-2xl flex items-center gap-4 group transition-all shadow-lg"
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon Box */}
      <div className="bg-red-950/50 p-3 rounded-xl border border-red-900/50 group-hover:bg-red-500 group-hover:text-black transition-all text-red-500 z-10">
        <Crosshair className="w-5 h-5" />
      </div>

      {/* Details */}
      <div className="flex-1 z-10 overflow-hidden">
        <h4 className="text-gray-200 font-bold tracking-widest text-xs sm:text-sm truncate group-hover:text-white transition-colors">{cleanName}</h4>
        <span className="text-red-600/60 text-[9px] uppercase tracking-[0.2em] font-black group-hover:text-red-400 transition-colors">Connect / Execute</span>
      </div>

      {/* Action Button */}
      <div className="z-10 bg-black/40 p-2.5 rounded-lg border border-red-900/30 group-hover:border-red-500 transition-all">
        <FaTelegramPlane className="text-red-700 group-hover:text-red-500 text-lg" />
      </div>
    </motion.a>
  );
};

// 3. Channel Button
const ChannelLink = ({ name, link }) => (
  <motion.a
    href={link} target="_blank" rel="noopener noreferrer"
    variants={fadeUp} whileHover={{ scale: 1.02, x: 10 }} whileTap={{ scale: 0.98 }}
    className="bg-gradient-to-r from-[#1a0000] to-transparent border-l-4 border-red-600 p-6 rounded-r-3xl flex items-center justify-between group hover:from-red-900/40 transition-all"
  >
    <div className="flex items-center gap-4">
      <div className="bg-red-950/50 p-3 rounded-full group-hover:bg-red-500 group-hover:text-black transition-all text-red-500">
        <Target className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-black text-white uppercase tracking-widest">{name}</h3>
    </div>
    <Link2 className="text-red-900 group-hover:text-red-500 transition-colors w-6 h-6" />
  </motion.a>
);

// --- MAIN APP ---
export default function App() {
  return (
    <div className="text-gray-200 min-h-screen font-sans relative selection:bg-red-500/30 bg-[#030000]">
      {/* Dark Red Ambient Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply bg-red-950/20"></div>
      <Background />
      
      {/* Massive Red Glow in Center */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* 🔥 HERO SECTION */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center pt-10 mb-24 relative">
          <motion.div
            className="mb-6 flex items-center gap-2 bg-red-950/40 border border-red-600/30 text-red-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          >
             <Flame className="w-4 h-4 animate-pulse text-red-500" /> The Syndicate
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-red-900 mb-4 tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }}
          >
            BHAICHARA
          </motion.h1>
          <motion.h2
             className="text-4xl md:text-6xl font-black text-red-600 tracking-[0.2em] uppercase mb-12"
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Net ⚚
          </motion.h2>

          <motion.div className="flex flex-wrap justify-center gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <motion.a href="https://t.me/ll_BHAICHARA_ON_TOP_ll" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest px-10 py-5 rounded-2xl flex items-center gap-3 transition-all shadow-[0_0_40px_rgba(220,38,38,0.4)]">
              <Swords size={24}/> Enter Turf
            </motion.a>
            <motion.a href="https://t.me/+5VJwwq6BKC5iNTll" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-black/50 backdrop-blur-md border border-red-900 hover:border-red-500 text-white font-black uppercase tracking-widest px-10 py-5 rounded-2xl flex items-center gap-3 transition-all">
              <Shield size={24}/> Support HQ
            </motion.a>
          </motion.div>
        </section>

        {/* 👑 HIGH COMMAND (Founders & Owners) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-2 flex items-center justify-center gap-4">
               <span className="w-12 h-1 bg-red-600"></span>
               High Command
               <span className="w-12 h-1 bg-red-600"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <BossCard title="Founder" name="𝐒 ᴀ ʀ፝֟ ҡ ᴀ ʀ ‹ 🚩" icon={Crown} color="from-red-600 to-orange-600" delay={0.1} />
            <BossCard title="Co-Founder" name="𝒔𝒂𝒓𝒆𝒆𝒇 ᴥꪻ𝒐𝒉𝒊𝒅 ⛩️" icon={ShieldAlert} color="from-red-700 to-red-900" delay={0.2} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <BossCard title="Owner" name="𝐒 ʜ ɪ ᴠ ᴀ ɴ ꜱ ʜ ⛩️" icon={Zap} color="from-gray-700 to-red-800" delay={0.3} />
            <BossCard title="Co-Owner" name="𝐒 ᴀ ᴄ ʜ ɪ ɴ / > 3 ⛩️" icon={Swords} color="from-gray-700 to-red-800" delay={0.4} />
          </div>
        </section>

        {/* 💀 MODERATORS SQUAD */}
        <motion.section className="mb-32" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3">
               <Skull className="text-red-500 w-8 h-8" /> 
               Moderators Squad
            </h2>
            <p className="text-red-900 font-bold tracking-[0.3em] uppercase mt-2 text-sm">The Executioners</p>
          </div>

          {/* Upgraded Grid for Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ModBadge name="@llll_YOUR_ENEMY_llll" />
            <ModBadge name="@ll_YOUR_RAVAN_ll" />
            <ModBadge name="@ll_YOUR_AZAAD_ll" />
            <ModBadge name="@Proxyaitro" />
            <ModBadge name="@ll_AYMAN_SAFFI_ll" />
            <ModBadge name="@XP_BREAKER" />
            <ModBadge name="@Il_S4NJ1T_lI" />
            <ModBadge name="@ExxUchiha" />
            <ModBadge name="@ll_YOUR_BROTHER_ll" />
            <ModBadge name="@ll_EROXXXX_ll" />
            <ModBadge name="@Zcziiy" />
            <ModBadge name="@II_LORD_ITACHI_X_DRY" />
          </div>
        </motion.section>

        {/* 🏴 OFFICIAL TERRITORY (Channels) */}
        <motion.section className="mb-32" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="mb-12 border-l-4 border-red-600 pl-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-widest">Official Territory</h2>
            <p className="text-gray-500 font-bold mt-2 tracking-widest">JOIN THE NETWORK</p>
          </div>

          <div className="flex flex-col gap-4">
            <ChannelLink name="BhaiChara 🥷" link="https://t.me/ll_BHAICHARA_ON_TOP_ll" />
            <ChannelLink name="Fighter 🥷" link="#" />
            <ChannelLink name="Nex x Fucker 🥷" link="https://t.me/NEX_FUCKR" />
            <ChannelLink name="Music x System ♪˼ 🥷" link="#" />
          </div>
        </motion.section>

        {/* 🩸 FINAL CALL TO ACTION */}
        <motion.section className="mb-20 relative" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative bg-gradient-to-br from-[#1a0000] to-[#050000] border border-red-900/50 p-12 md:p-16 rounded-[3rem] text-center overflow-hidden group">
            {/* Background Icon */}
            <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110 pointer-events-none">
              <Swords size={200} />
            </div>
            
            <Flame className="w-12 h-12 text-red-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-4">
              Join Our Community <br/> <span className="text-red-600">Of Fighters</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Step into the arena. Connect with the most elite and ruthless Telegram syndicate. Are you ready to prove your loyalty?
            </p>
            <motion.a 
              href="https://t.me/ll_BHAICHARA_ON_TOP_ll" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest px-10 py-5 rounded-2xl transition-all shadow-[0_0_40px_rgba(220,38,38,0.4)] relative z-10 w-full sm:w-auto"
            >
              <Users size={24} /> Become a Member
            </motion.a>
          </div>
        </motion.section>

        {/* 🚬 FOOTER SIGNATURE */}
        <footer className="border-t border-red-900/30 pt-16 pb-12 flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-500 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Signed By</p>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 tracking-wider flex items-center justify-center gap-4">
              👑 𝐒 ᴀ ʀ፝֟ ҡ ᴀ ʀ ‹𐩃𓂃ֶꪳ 🚬
            </h2>
          </motion.div>
          
          <div className="mt-16 text-red-900 font-bold text-xs tracking-widest uppercase">
            © 2026 BHAICHARA NET. ALL RIGHTS RESERVED.
          </div>
        </footer>

      </div>
    </div>
  );
          }
        
