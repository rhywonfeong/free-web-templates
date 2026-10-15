import React from "react";
import { PageHero, LeadForm, FAQ } from "../components/Sections";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        sub="Tell us about your space and we'll begin shaping your finish."
        img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f679cf5-c81a-4338-ac70-6cd357a873c8_1600w.jpg"
      />
      <LeadForm />
      <FAQ />
    </>
  );
}
