import React from "react";
import {
  Hero,
  Intro,
  ServiceCards,
  WhyLimewash,
  FinishGallery,
  ProcessSection,
  BeforeAfter,
  DesignerSection,
  LeadForm,
  FAQ,
} from "../components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServiceCards />
      <WhyLimewash />
      <FinishGallery />
      <ProcessSection />
      <BeforeAfter />
      <DesignerSection />
      <LeadForm />
      <FAQ />
    </>
  );
}
