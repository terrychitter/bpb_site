import GalleryBlobDisplay from "@/src/components/Gallery/GalleryBlobDisplay";
import GalleryHeader from "@/src/components/Gallery/GalleryHeader";
import MainFooter from "@/src/components/MainFooter/MainFooter";
import text from "@/src/config/text";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: text.metaData.galleryTitle,
  description: text.metaData.homeDescription,
};

const Gallery = () => {
  return (
    <>
      <GalleryHeader />
      <GalleryBlobDisplay />
      <MainFooter />
    </>
  );
};

export default Gallery;
