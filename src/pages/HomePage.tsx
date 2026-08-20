import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="ESQIPI Agency"
      title='"Futuro, Inteligência e Tecnologia"'
      description="Criamos experiências digitais fundamentadas em desafios reais de negócios."
      primaryButton={{
        text: "Vamos falar sobre estratégia.",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explorar a metodologia",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-woman-drinking-coffee-cafe-while-looking-her-laptop_23-2149230368.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/determined-female-boss-developing-new-business-plan-showcasing-her-expertise_482257-118340.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/accountant-talking-colleagues-online-video-call-office-financial-consultant-using-remote-videoconference-chat-with-workmates-about-business-strategy-planning-startup-project_482257-33869.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/architecture-businesspeople-working-computer_482257-8098.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-photography-passion_23-2148424439.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-chair-indoors_23-2151108702.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Nossa filosofia
"
      title="Parceria aliada ao desempenho
"
      description="Eliminamos as incertezas do crescimento digital. Nossa equipe atua como uma extensão da sua empresa, focada em resultados pragmáticos que impulsionam o seu negócio."
      imageSrc="http://img.b2bpic.net/free-photo/coffee-cup-business-plan-paper_23-2147965656.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesTaggedCards
      tag="Capacidades"
      title="Metodologia Refinada
"
      description="Concentramo-nos em três pilares fundamentais do engajamento digital para garantir que sua empresa permaneça competitiva.
"
      items={[
        {
          tag: "Estratégia",
          title: "Lógica de Negócios
",
          description: "Analisar vetores de mercado para estabelecer caminhos de negócios claros.
",
          primaryButton: {
            text: "Saber mais",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-notebook-cup-black-coffee-white-background-top-view_169016-35355.jpg",
        },
        {
          tag: "Execução",
          title: "Precisão técnica
",
          description: "Criar interfaces escaláveis ​​que priorizam a clareza para o usuário.
",
          primaryButton: {
            text: "Saber mais",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/blue-technology-background_1017-3288.jpg",
        },
        {
          tag: "Crescimento",
          title: "Otimização Sistêmica
",
          description: "Melhoria contínua por meio de refinamento orientado por dados.
",
          primaryButton: {
            text: "Saber mais",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-hand-using-digital-tablet-tablet_1262-16042.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Transparency"
      title="Métricas de eficiência
"
      description="Acreditamos em uma definição clara de responsabilidade por todas as entregas do projeto.
"
      metrics={[
        {
          value: "15+",
          description: "Estruturas Estratégicas Refinadas
",
        },
        {
          value: "100%",
          description: "Metodologias Transparentes
",
        },
        {
          value: "42d",
          description: "Média de implantação inicial
",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="Nossos especialistas
"
      title="Estrategistas Comprometidos
"
      description="Comunicação direta com os especialistas que trabalham no seu projeto.
"
      members={[
        {
          name: "Ana Silva",
          role: "Líder de Estratégia
",
          imageSrc: "http://img.b2bpic.net/free-photo/medical-equipment-desk_23-2148519755.jpg",
        },
        {
          name: "Bruno Costa",
          role: "Arquiteto-Chefe
",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-business-office-with-cubicles-used-organizational-activity-efficiency_482257-125625.jpg",
        },
        {
          name: "Carla Mendes",
          role: "Diretor de Operações
",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-technology-connects-internet-space-communication-sphere-generated-by-ai_188544-30796.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Processoo"
      title="Respostas Diretas
"
      description="Entenda como trabalhamos antes de firmar uma parceria.
"
      items={[
        {
          question: "Como começamos um projeto?
",
          answer: "We start with a discovery phase to align on core business objectives.",
        },
        {
          question: "Seus processos são transparentes?
",
          answer: "Yes, we provide full access to project trackers and status updates.",
        },
        {
          question: "Qual é o prazo típico do engajamento?
",
          answer: "Projects usually range from 3-6 months depending on scope.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to move beyond surface solutions?"
      primaryButton={{
        text: "Contact our team",
        href: "mailto:strategy@esqipi.com",
      }}
      secondaryButton={{
        text: "Request deck",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
