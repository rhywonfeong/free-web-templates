import React from "react";
import { PageHero, FinishGallery, BeforeAfter } from "../components/Sections";

export default function Finishes() {
  return (
    <>
      <PageHero
        eyebrow="The Palette"
        title="Limewash Finishes"
        sub="A curated range of hand-mixed mineral tones, from soft whitewash to deep charcoal."
        img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/719e4e06-0b9f-4d66-a9e8-4fd6e1ba9caa_3840w.png"
      />
      <FinishGallery full />
      <BeforeAfter />
    </>
  );
}
