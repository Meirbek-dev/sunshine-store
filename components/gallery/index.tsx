"use client";

import NextImage from "next/image";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import type { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <NextImage
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
