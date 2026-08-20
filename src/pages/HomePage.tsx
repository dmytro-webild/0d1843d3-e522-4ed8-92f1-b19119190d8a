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
      title="O Futuro do seu negócio começa com inteligência artificial."
      description="Criamos experiências digitais fundamentadas em desafios reais de negócios. Mostramos como fazemos, não apenas o que já realizamos."
      primaryButton={{
        text: "Lets talk strategy",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore Methodology",
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
      tag="Our Philosophy"
      title="Partnership over performance"
      description="We remove the guesswork from digital growth. Our team works as an extension of your company, focusing on pragmatic outcomes that move your business needle."
      imageSrc="http://img.b2bpic.net/free-photo/coffee-cup-business-plan-paper_23-2147965656.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesTaggedCards
      tag="Capabilities"
      title="Refined Methodology"
      description="We focus on three primary pillars of digital engagement to ensure your business remains competitive."
      items={[
        {
          tag: "Strategy",
          title: "Business Logic",
          description: "Analyzing market vectors to establish clear business pathways.",
          primaryButton: {
            text: "Learn more",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-notebook-cup-black-coffee-white-background-top-view_169016-35355.jpg",
        },
        {
          tag: "Execution",
          title: "Technical Precision",
          description: "Building scalable interfaces that prioritize user clarity.",
          primaryButton: {
            text: "Learn more",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/blue-technology-background_1017-3288.jpg",
        },
        {
          tag: "Growth",
          title: "Systemic Optimization",
          description: "Continuous improvement through data-driven refinement.",
          primaryButton: {
            text: "Learn more",
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
      title="Efficiency Metrics"
      description="We believe in clear accountability for all project deliverables."
      metrics={[
        {
          value: "15+",
          description: "Strategic Frameworks Refined",
        },
        {
          value: "100%",
          description: "Transparent Methodologies",
        },
        {
          value: "42d",
          description: "Avg Initial Deployment",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="Our Experts"
      title="Committed Strategists"
      description="Direct communication with the experts working on your project."
      members={[
        {
          name: "Ana Silva",
          role: "Head of Strategy",
          imageSrc: "http://img.b2bpic.net/free-photo/medical-equipment-desk_23-2148519755.jpg",
        },
        {
          name: "Bruno Costa",
          role: "Chief Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-business-office-with-cubicles-used-organizational-activity-efficiency_482257-125625.jpg",
        },
        {
          name: "Carla Mendes",
          role: "Operations Director",
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
      tag="Process"
      title="Direct Answers"
      description="Understanding how we work before you commit to a partnership."
      items={[
        {
          question: "How do we begin a project?",
          answer: "We start with a discovery phase to align on core business objectives.",
        },
        {
          question: "Are your processes transparent?",
          answer: "Yes, we provide full access to project trackers and status updates.",
        },
        {
          question: "What is the typical engagement timeframe?",
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
