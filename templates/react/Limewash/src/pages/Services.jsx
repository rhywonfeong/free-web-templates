import React from "react";
import {
  PageHero,
  ServiceCards,
  WhyLimewash,
  ProcessSection,
} from "../components/Sections";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        sub="Comprehensive limewash application for residential and commercial spaces."
        img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de65eb4-c8cd-4e3a-ba9b-6d4fce61f4dd_3840w.png"
      />
      <ServiceCards />
      <WhyLimewash />
      <ProcessSection />
    </>
  );
}
