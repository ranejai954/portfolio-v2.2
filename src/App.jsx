import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowUpRight, ArrowRight, Shield, Menu, X, Github, Linkedin, Mail, MapPin, Download, ExternalLink, Search, SlidersHorizontal, Command, Terminal, Cpu, Network, LockKeyhole, Sparkles, ChevronRight, Sun, Moon } from 'lucide-react';
import { site } from './config/site';
import { projects } from './data/projects';
import { experience, education, skills, certifications } from './data/experience';

const ease = [0.22, 1, 0.36, 1];
const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: .7, ease } } };

function App() {
  const reduce = useReducedMotion();
  const [motionOn, setMotionOn] = useState(() => {
    try { return localStorage.getItem(site.storageKey) !== 'off'; } catch { return true; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [progress, setProgress] = useState(0);
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = useMemo(() => projects.filter(p => (filter === 'All' || p.category === filter) && `${p.title} ${p.summary} ${p.tools.join(' ')}`.toLowerCase().includes(search.toLowerCase())), [filter, search]);
  const animate = motionOn && !reduce;

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      const ids = ['home', 'work', 'about', 'experience', 'contact'];
      const current = ids.map(id => document.getElementById(id)).filter(Boolean).filter(el => el.getBoundingClientRect().top <= 150).at(-1);
      if (current) setActive(current.id);
    };
    const onKey = e => { if (e.key === 'Escape') { setMenuOpen(false); setSelected(null); } };
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('keydown', onKey);
    onScroll(); return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);
  useEffect(() => { try { localStorage.setItem(site.storageKey, motionOn ? 'on' : 'off'); } catch {} }, [motionOn]);
  useEffect(() => { document.body.style.overflow = selected ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selected]);

  const nav = [{ id: 'work', label: 'Work' }, { id: 'about', label: 'About' }, { id: 'experience', label: 'Journey' }, { id: 'contact', label: 'Contact' }];
  const MotionDiv = motion.div;
  const sendMail = e => { e.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`); const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`); window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`; setSent(true); };

  return <div className={`site-shell ${animate ? 'motion-enabled' : 'motion-disabled'}`}>
    <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
    <header className="header">
      <a href="#home" className="wordmark" aria-label={`${site.identity.fullName} home`}><span className="mark"><Shield size={19} strokeWidth={1.8}/></span><span>{site.identity.displayName.split(" ")[0]}<span className="accent">.</span>{site.identity.displayName.split(" ").slice(1).join(" ")}</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(n => <a key={n.id} className={active === n.id ? 'active' : ''} href={`#${n.id}`}>{n.label}</a>)}</nav>
      <div className="header-actions"><button className="motion-toggle" onClick={() => setMotionOn(v => !v)} aria-pressed={motionOn} title="Toggle motion"><span className="toggle-dot"/>{motionOn ? 'Motion on' : 'Motion off'}</button><a className="header-cta" href={site.identity.resume} download="Jai-Rane-Resume.pdf">Resume <Download size={15}/></a><a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a><button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>
    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><div className="mobile-menu-inner">{nav.map(n => <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)}>{n.label}<ArrowUpRight size={18}/></a>)}</div></motion.div>}</AnimatePresence>

    <main>
      <section className="hero reference-hero" id="home">
        <div className="hero-meta hero-meta-left"><span>CYBERSECURITY</span><span>BLUE TEAM · AI SECURITY</span></div>
        <div className="hero-meta hero-meta-right"><i className="status-pulse"/> COMPUTER SCIENCE · MUMBAI, INDIA</div>
        <div className="hero-giant-name" aria-hidden="true">JAI RANE</div>
        <div className="hero-stage">
          <div className="hero-left-copy">
            <MotionDiv initial={animate ? {opacity:0,y:24} : false} animate={animate ? {opacity:1,y:0} : undefined} transition={{duration:.8,ease}}>
              <p className="hero-script">Hello, I’m</p>
              <h1>JAI RANE<span>.</span></h1>
              <p className="hero-role">CYBERSECURITY<br/>STUDENT & BUILDER</p>
              <p className="hero-intro">A Computer Science student exploring cybersecurity, threat detection, and AI-driven security applications. I turn curiosity into practical experiments, tools, and projects.</p>
              <div className="hero-cta-row"><a className="hero-see-work" href="#work">See my work <ArrowDown size={16}/></a><a className="hero-resume-link" href={site.identity.resume} download="Jai-Rane-Resume.pdf">Download resume <Download size={15}/></a></div>
              <p className="hero-location"><MapPin size={13}/> MUMBAI, INDIA</p>
            </MotionDiv>
          </div>
          <div className="hero-portrait-wrap" aria-label="Portrait">
            <div className="hero-portrait-glow"/>
            <img className="hero-portrait" src={site.identity.portrait} alt={`Portrait of ${site.identity.fullName}`} fetchPriority="high"/>
            <div className="portrait-crosshair" aria-hidden="true">✳</div>
          </div>
          <aside className="hero-right-copy">
            <div className="purpose-mark">✳</div>
            <p className="purpose-copy">Curiosity<br/><strong>meets security.</strong></p>
            <div className="focus-list">
              {site.identity.focusAreas.slice(0,3).map((area,i)=><div className="focus-row" key={area}><b>0{i+1}</b><span>{area}</span><ArrowUpRight size={14}/></div>)}
            </div>
          </aside>
        </div>
        <div className="hero-bottom reference-hero-bottom"><span><i className="play-ring">▶</i> SELECTED PROJECTS <b>CYBERSECURITY / AI</b></span><a href="#work">SCROLL TO DISCOVER <ArrowDown size={14}/></a><span>PORTFOLIO / {new Date().getFullYear()}</span></div>
      </section>
      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{[...site.identity.focusAreas, ...site.identity.focusAreas].map((t,i)=><span key={`${t}-${i}`}>{t}<b>✳</b></span>)}</div></section>

      <section className="work-section section-wrap section-pad" id="work">
        <div className="section-heading"><div><p className="eyebrow"><span className="section-number">01</span> SELECTED WORK</p><h2>BUILT WITH<br/><em>INTENTION.</em></h2></div><p className="section-aside">A selection of projects across cybersecurity, network analysis, and applied AI. Each one is a step in learning how to build and think more securely.</p></div>
        <div className="work-controls"><div className="filters" role="group" aria-label="Filter projects">{categories.map(c=><button key={c} className={filter===c?'filter-active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div><label className="search-box"><Search size={15}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search projects" aria-label="Search projects"/></label></div>
        <div className="project-grid">{filtered.map((p,i)=><MotionDiv key={p.id} className={`project-card project-card-${i+1}`} initial={animate?'hidden':false} whileInView={animate?'visible':undefined} viewport={{ once:true, amount:.15 }} variants={reveal}>
          <button className="project-image-button" onClick={()=>setSelected(p)} aria-label={`View ${p.title} details`}><div className="project-image"><img src={p.coverImage} alt={`${p.title} project interface`} loading="lazy"/><span className="image-open"><ArrowUpRight size={22}/></span><span className="image-count">0{i+1} / 04</span></div></button>
          <div className="project-meta"><span>{p.category}</span>{p.year && <span>{p.year}</span>}</div><button className="project-title-button" onClick={()=>setSelected(p)}><h3>{p.title}</h3><ArrowUpRight size={20}/></button><p className="project-summary">{p.summary}</p>
        </MotionDiv>)}</div>
        {filtered.length===0 && <div className="empty-state">No projects match that search. Try another keyword.</div>}
        <div className="project-footnote"><span>SHOWING {filtered.length.toString().padStart(2,'0')} PROJECTS</span><span>SELECT A PROJECT TO EXPLORE <ArrowUpRight size={13}/></span></div>
      </section>

      <section className="about-section section-wrap section-pad" id="about">
        <div className="section-heading"><div><p className="eyebrow"><span className="section-number">02</span> A LITTLE ABOUT ME</p><h2>CURIOUS BY<br/><em>DEFAULT.</em></h2></div><div className="about-mark"><Shield size={48} strokeWidth={1}/><span>LEARN / TEST / IMPROVE</span></div></div>
        <div className="about-content"><div className="about-lead"><p>{site.identity.about}</p><div className="about-signature">Always learning<span>.</span></div></div><div className="skills-panel"><div className="skills-panel-head"><span>TOOLKIT & KNOWLEDGE</span><span>01 — 04</span></div>{skills.map((s,i)=><div className="skill-row" key={s.group}><div className="skill-group"><span>0{i+1}</span><h3>{s.group}</h3></div><div className="skill-tags">{s.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></div>
        <div className="cert-strip"><div className="cert-label"><span className="eyebrow">CERTIFICATIONS</span><p>Learning, one layer at a time.</p></div><div className="cert-list">{certifications.map(c=><span key={c}><Shield size={14}/>{c}</span>)}</div></div>
      </section>

      <section className="experience-section section-wrap section-pad" id="experience">
        <div className="section-heading"><div><p className="eyebrow"><span className="section-number">03</span> EXPERIENCE & EDUCATION</p><h2>LEARNING<br/><em>IN MOTION.</em></h2></div><p className="section-aside">Hands-on learning and guided experience that continue to shape my approach to security and technology.</p></div>
        <div className="timeline">{experience.map((item,i)=><MotionDiv className="timeline-item" key={item.company} initial={animate?'hidden':false} whileInView={animate?'visible':undefined} viewport={{once:true,amount:.2}} variants={reveal}><div className="timeline-marker"><span>0{i+1}</span><i/></div><div className="timeline-main"><div className="timeline-top"><div><h3>{item.role}</h3><p>{item.company} <span>·</span> {item.location}</p></div><time>{item.period}</time></div><ul>{item.details.map(d=><li key={d}>{d}</li>)}</ul></div></MotionDiv>)}</div>
        <div className="education-card"><div className="edu-icon"><Terminal size={22}/></div><div className="edu-main"><span className="eyebrow">EDUCATION</span><h3>{education.qualification}</h3><p>{education.institution} · {education.location}</p><div className="edu-tags">{education.coursework.map(c=><span key={c}>{c}</span>)}</div></div><div className="edu-date">{education.period}</div></div>
      </section>

      <section className="contact-section section-wrap section-pad" id="contact">
        <div className="contact-kicker"><span className="eyebrow"><span className="section-number">04</span> HAVE SOMETHING IN MIND?</span><span className="contact-orbit"><Sparkles size={17}/></span></div>
        <h2>LET’S MAKE<br/><em>IT SECURE.</em></h2>
        <div className="contact-bottom"><div className="contact-copy"><p>Open to conversations, learning opportunities, and meaningful collaborations in cybersecurity and technology.</p><a className="email-link" href={`mailto:${site.contact.email}`}>{site.contact.email}<ArrowUpRight size={18}/></a><div className="contact-location"><MapPin size={14}/>{site.identity.location}</div></div>
          <form className="contact-form" onSubmit={sendMail}><div className="form-heading">SEND A MESSAGE <ArrowDownRight size={16}/></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="How should I address you?"/></label><label>Your email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Message<textarea required rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me a little about it..."/></label><button className="btn btn-primary form-submit" type="submit">{sent?'Open email draft again':'Prepare email'} <ArrowUpRight size={16}/></button><p className="form-note">This opens your email app with the message pre-filled. Nothing is sent from this website.</p></form>
        </div>
      </section>
    </main>
    <footer className="footer section-wrap"><a href="#home" className="wordmark"><span className="mark"><Shield size={18}/></span><span>{site.identity.displayName.split(" ")[0]}<span className="accent">.</span>{site.identity.displayName.split(" ").slice(1).join(" ")}</span></a><span className="footer-note">BUILT WITH CURIOSITY & CARE.</span><div className="footer-right"><span>© {new Date().getFullYear()} {site.identity.fullName.toUpperCase()}</span><a href="#home">BACK TO TOP <ArrowUpRight size={13}/></a></div></footer>

    <AnimatePresence>{selected && <motion.div className="dialog-backdrop" role="presentation" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><motion.div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" initial={{opacity:0,y:24,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:16,scale:.98}} transition={{duration:.3,ease}}><button className="dialog-close" onClick={()=>setSelected(null)} aria-label="Close project details"><X/></button><div className="dialog-image"><img src={selected.coverImage} alt={`${selected.title} interface`}/></div><div className="dialog-content"><div className="project-meta"><span>{selected.category}</span>{selected.year&&<span>{selected.year}</span>}</div><h2 id="dialog-title">{selected.title}</h2><p>{selected.description}</p><div className="dialog-role"><span>ROLE</span><strong>{selected.role}</strong></div><div className="dialog-tools"><span>TOOLS & TECHNOLOGIES</span><div>{selected.tools.map(t=><i key={t}>{t}</i>)}</div></div><div className="dialog-actions">{selected.liveUrl&&<a className="btn btn-primary" href={selected.liveUrl} target="_blank" rel="noreferrer">Live project <ExternalLink size={15}/></a>}{selected.sourceUrl&&<a className="btn btn-quiet" href={selected.sourceUrl} target="_blank" rel="noreferrer">Source code <Github size={15}/></a>}<button className="btn btn-quiet" onClick={()=>setSelected(null)}>Close <X size={15}/></button></div></div></motion.div></motion.div>}</AnimatePresence>
  </div>;
}

export default App;
