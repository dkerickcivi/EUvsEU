'use client'

import { useEffect, useRef, useState } from 'react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MrYzoeluJc4H8xhIwf0yBB8SJVxywr.png',
  feedbackOne: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VC4FFHQmiGZ5bBSYn4XNKQYOdSfSDN.png',
  feedbackTwo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-efzCO2GlRBMKsNmMkwm0xL3lJTIlYx.png',
  feedbackThree: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ok3ASXzm0B5D0UTK6hcSb5NwYPXHDC.png',
  feedbackFour: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kDU6rUYFPrzAEvE2xylTQHRpRo6Exy.png',
  final: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GtbBOJrjAI5sRvHNIRED1GvyHbU8ya.png',
}

const faqs = [
  ['Preciso ser dependente para participar?', 'A Comunidade Eu vs Eu reúne pessoas que sofrem com a dependência, estão em recuperação ou convivem de perto com ela.'],
  ['Familiares podem participar?', 'Sim. A comunidade também é para quem ama e convive com alguém que enfrenta a dependência.'],
  ['Como funcionam os encontros?', 'A comunidade tem encontros semanais, histórias reais, estudos de caso, dinâmicas, reflexão e ferramentas práticas.'],
  ['Os encontros ficam gravados?', 'O acesso inclui gravações durante o período escolhido.'],
  ['É terapia?', 'Não. A Comunidade Eu vs Eu não é terapia. Mas é uma experiência terapêutica, proporcionando acolhimento, escuta, reflexão e troca com pessoas que vivem situações semelhantes.É um espaço para investigar, refletir e enxergar sua própria história por uma nova perspectiva.'],
  ['O Thiago atende individualmente?', 'A comunidade Eu vs Eu é uma experiência em grupo, com encontros, histórias, dinâmicas e momentos de investigação compartilhada.O trabalho dentro da comunidade não é individualizado. Porém, o Thiago também oferece atendimentos individuais para quem busca um acompanhamento mais personalizado.'],
  ['Qual a diferença entre 6 e 12 meses?', 'Você pode escolher 6 ou 12 meses de acesso à comunidade.'],
]

function SectionTitle({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{children}</h2></div>
}

function CTA({ children, href = '#oferta' }: { children: React.ReactNode; href?: string }) {
  return <a className="button" href={href}>{children}</a>
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showMobileCta, setShowMobileCta] = useState(false)
  const investigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = investigationRef.current
    if (!section) return
    const updateCtaVisibility = () => {
      setShowMobileCta(section.getBoundingClientRect().top <= window.innerHeight * 0.85)
    }
    updateCtaVisibility()
    window.addEventListener('scroll', updateCtaVisibility, { passive: true })
    window.addEventListener('resize', updateCtaVisibility)
    return () => {
      window.removeEventListener('scroll', updateCtaVisibility)
      window.removeEventListener('resize', updateCtaVisibility)
    }
  }, [])

  return (
    <main>
      <header className="site-header"><a href="#inicio" className="brand">EU VS EU</a></header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy"><span className="eyebrow">COMUNIDADE EU VS EU</span><div className="hero-portrait"><img src={images.hero} alt="Thiago em uma trilha ao pôr do sol" /></div><h1>Você tá tentando <mark>largar o vício.</mark> Mas já descobriu o que existe por trás dele?</h1><p className="lead">O Eu vs Eu nasceu de uma pergunta: por que você faz aquilo que sabe que está te destruindo?</p><p>Uma comunidade para investigar a <mark>raiz do problema</mark>, compreender seus padrões e começar a enxergar sua própria história de outra forma.</p><CTA href="#feedbacks">Ver feedbacks</CTA><span className="microcopy">6 ou 12 meses • encontros semanais • histórias reais • estudos de caso</span></div>
        <div className="hero-image"><img src={images.hero} alt="Thiago em uma trilha ao pôr do sol" /></div>
      </section>

      <section className="dark-section"><div className="section-shell narrow"><SectionTitle>O problema pode não ser só o que você está fazendo.</SectionTitle><p className="lead">A dependência é o que aparece por fora. Mas o que existe <mark>por trás dela?</mark></p><div className="question-grid"><strong>Por que você usa?</strong><strong>O que está tentando evitar?</strong><strong>O que está tentando anestesiar?</strong><strong>Por que determinados padrões continuam se repetindo?</strong></div><p className="closing-line">É isso que o Eu vs Eu investiga.</p></div></section>

      <section className="section-shell bio"><div><SectionTitle>Foi tentando entender ‘por que eu voltava a usar?’ que Thiago criou o Eu vs Eu.</SectionTitle><p>Thiago Soares é mentor, palestrante e criador do Eu vs Eu.</p><p>Sua história é marcada por 26 anos de dependência química.</p><p>Começou a usar drogas por volta dos 15 anos e, aos 18, teve sua primeira internação relacionada ao uso de cocaína e crack.</p><p>Depois de uma segunda internação, uma pergunta passou a orientar sua trajetória:</p><p className="quote">“Por que eu voltava a usar?”</p><p>Durante anos, Thiago aprofundou essa investigação através da própria experiência, estudos, formações e acompanhamento de outras pessoas.</p><p className="closing-line">Dessa investigação nasceu o Eu vs Eu.</p></div></section>

      <section className="accent-section" ref={investigationRef}><div className="section-shell"><SectionTitle>Agora, essa investigação ganha um lugar para acontecer.</SectionTitle><p className="lead">A Comunidade Eu vs Eu reúne pessoas que vivem a dependência, estão em recuperação ou convivem de perto com ela.</p><div className="tag-grid">{['ENCONTROS SEMANAIS','HISTÓRIAS REAIS','ESTUDOS DE CASO','DINÂMICAS','REFLEXÃO','FERRAMENTAS PRÁTICAS'].map(item => <span key={item}>{item}</span>)}</div></div></section>

      <section className="section-shell method"><SectionTitle eyebrow="MÉTODO EU VS EU">Em vez de fugir do problema, investigar.</SectionTitle><div className="flow">{['COMPORTAMENTO','O QUE EXISTE POR TRÁS?','MEU MOTIVO PESSOAL','PADRÕES','RAIZ DO PROBLEMA'].map((item, index) => <div className="flow-item" key={item}><strong>{item}</strong>{index < 4 && <span>↓</span>}</div>)}</div><div className="method-bottom"><div className="question-list"><span>Por que eu faço isso?</span><span>O que estou tentando evitar?</span><span>O que estou tentando anestesiar?</span><span>O que existe em mim que ainda não consegui compreender?</span></div><p className="closing-line">O Eu vs Eu começa quando você para de fugir da pergunta e começa a investigar.</p></div></section>

      <section className="dark-section"><div className="section-shell two-sides"><SectionTitle>Método dos Dois Lados</SectionTitle><h3>Você nunca vai enxergar uma história inteira olhando de apenas um lado.</h3><div className="sides"><strong>QUEM VIVE A DEPENDÊNCIA</strong><span>↕</span><strong>QUEM AMA E CONVIVE</strong></div><p>Dentro da comunidade, diferentes perspectivas podem se encontrar.</p><p>Não para descobrir quem está certo.</p><p className="closing-line">Mas para entender aquilo que cada lado sozinho não consegue enxergar.</p></div></section>

      <section className="section-shell"><SectionTitle>Você não vai encontrar apenas aulas.</SectionTitle><div className="compact-grid">{[['DO OUTRO LADO','Conversas entre diferentes perspectivas.'],['HISTÓRIAS DE RECOMEÇO','Experiências reais.'],['CASO DA SEMANA','Casos analisados para compreender padrões e comportamentos.'],['AULA DE DIREÇÃO','Conteúdos sobre temas importantes.'],['SE EU PUDESSE TE DIZER UMA COISA','Um espaço para cada lado dizer aquilo que gostaria que o outro entendesse.']].map(([title,text]) => <article className="mini-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section-shell feedbacks" id="feedbacks"><SectionTitle>Alguns dos vários feedbacks</SectionTitle><p className="lead">Veja o que acontece quando você começa a enxergar de outra forma.</p><div className="feedback-grid">{[images.feedbackOne, images.feedbackTwo, images.feedbackThree, images.feedbackFour].map((src,index) => <button className={`feedback feedback-${index + 1}`} key={src} type="button" aria-label="Ampliar feedback"><img src={src} alt="Feedback" loading="lazy" /></button>)}</div></section>

      <section className="dark-section"><div className="section-shell"><SectionTitle>A Comunidade Eu vs Eu é para quem vive essa história.</SectionTitle><div className="audience-grid"><div><h3>QUEM VIVE A DEPENDÊNCIA</h3><p>ou está em recuperação.</p></div><div><h3>QUEM AMA E CONVIVE</h3><p>com alguém que enfrenta a dependência.</p></div></div><p className="closing-line">Você não precisa estar no mesmo momento que ninguém.</p></div></section>

      <section className="section-shell"><SectionTitle>Tudo isso durante seu período de acesso.</SectionTitle><div className="checklist">{['Comunidade privada','Encontros semanais','Histórias reais','Estudos de caso','Dinâmicas','Método Eu vs Eu','Método dos Dois Lados','Ferramentas práticas','Gravações','Ambiente moderado'].map(item => <span key={item}>✓ {item}</span>)}</div></section>

      <section className="offer-section" id="oferta"><div className="section-shell"><div className="offer-grid"><article className="offer-card"><span className="eyebrow">6 MESES</span><strong>6x de R$ 216,17</strong><p>ou R$ 1.297 à vista</p><a className="button button-outline" href="#oferta">QUERO 6 MESES</a></article><article className="offer-card featured"><span className="badge">MAIS VANTAJOSO</span><span className="eyebrow">12 MESES</span><strong>12x de R$ 166,42</strong><p>ou R$ 1.997 à vista</p><a className="button" href="#oferta">QUERO 12 MESES</a></article></div></div></section>

      <section className="section-shell limits"><SectionTitle>Uma experiência séria também precisa deixar claro o que ela não promete.</SectionTitle><div className="not-list">{['Terapia','Consulta médica','Diagnóstico','Atendimento de emergência','Prescrição de medicamentos','Promessa de cura'].map(item => <span key={item}>{item}</span>)}</div><p className="closing-line">A Comunidade Eu vs Eu não substitui tratamento ou acompanhamento profissional quando necessário.</p></section>

      <section className="dark-section"><div className="section-shell faq">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><span>{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <div className="faq-answer">{answer}</div>}</div>)}</div></section>

      <section className="final-cta section-shell"><div><SectionTitle>Você pode continuar tentando fugir da pergunta.</SectionTitle><h2 className="highlight">Ou começar a investigar.</h2><CTA>QUERO FAZER PARTE DA COMUNIDADE EU VS EU</CTA><p>Escolha 6 ou 12 meses de acesso.</p></div><img src={images.final} alt="Thiago correndo em uma mata" loading="lazy" /></section>
      {showMobileCta && <a className="mobile-cta" href="#oferta">QUERO FAZER PARTE →</a>}
    </main>
  )
}
