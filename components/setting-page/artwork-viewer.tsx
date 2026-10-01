"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ArtworkViewerProps = {
  image: string;
  alt: string;
  title: string;
};

export function ArtworkViewer({ image, alt, title }: ArtworkViewerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="size-11 text-gray-600" aria-label={`Enlarge artwork: ${title}`}>
          <Maximize2 aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[94dvh] overflow-y-auto p-3 motion-reduce:animate-none sm:max-w-[min(96vw,1600px)] sm:p-5">
        <DialogHeader className="pr-8 text-left">
          <DialogTitle className="text-xl font-normal leading-tight">{title}</DialogTitle>
          <DialogDescription className="sr-only">{alt}</DialogDescription>
        </DialogHeader>
        <Image
          src={image}
          alt={alt}
          width={2400}
          height={1350}
          sizes="96vw"
          className="max-h-[calc(94dvh-6rem)] w-full rounded-sm object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
