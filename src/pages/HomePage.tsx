
import React from "react";
import { CinematicHero } from "../components/home/Hero";
import { BrokenGrid } from "../components/home/Philosophy";
import { MenuPreview } from "../components/home/MenuPreview";
import { GalleryTeaser } from "../components/home/GalleryTeaser";
import { Reservations } from "../components/home/Reservations";

export const HomePage = () => {
  return (
    <>
      <CinematicHero />
      <BrokenGrid />
      <MenuPreview />
      <GalleryTeaser />
      <Reservations />
    </>
  );
};
