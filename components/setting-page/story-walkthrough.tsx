"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ArtworkViewer } from "@/components/setting-page/artwork-viewer";
import { settingStory } from "@/lib/setting-story";
import { cn } from "@/lib/utils";

export function StoryWalkthrough() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const thumbnails = useRef<HTMLDivElement>(null);
  const scene = settingStory[current];
  const isLast = current === settingStory.length - 1;

  useEffect(() => {
    if (!api) return;

    const select = () => {
      const index = api.selectedScrollSnap();
      setCurrent(index);

      // Keep the selected thumbnail visible without scrolling the page vertically.
      const rail = thumbnails.current;
      const thumbnail = rail?.children[index] as HTMLElement | undefined;
      if (rail && thumbnail) {
        rail.scrollTo({
          left: thumbnail.offsetLeft - rail.offsetLeft - (rail.clientWidth - thumbnail.clientWidth) / 2,
          behavior: "instant",
        });
      }
    };

    api.on("select", select);
    api.on("reInit", select);
    return () => {
      api.off("select", select);
      api.off("reInit", select);
    };
  }, [api]);

  function continueStory() {
    if (!isLast) {
      api?.scrollNext();
      return;
    }

    const debate = document.getElementById("setting-debate-title");
    debate?.focus({ preventScroll: true });
    debate?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: false,
        duration: 25,
        breakpoints: { "(prefers-reduced-motion: reduce)": { duration: 0 } },
        // Drag the artwork; leave the narrative available for selecting/copying.
        watchDrag: (_api, event) => !(event.target as HTMLElement).closest("[data-story-copy]"),
      }}
      aria-label="The story of Coolabah Creek"
      onKeyDownCapture={(event) => {
        if ((event.target as HTMLElement).closest('[role="dialog"]')) return;
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          api?.scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          api?.scrollNext();
        }
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <CarouselContent id="setting-story-scenes" className="ml-0 items-stretch">
          {settingStory.map((chapter, index) => (
            <CarouselItem
              key={chapter.id}
              aria-label={`${index + 1} of ${settingStory.length}: ${chapter.title}`}
              aria-hidden={current !== index}
              inert={current !== index}
              className="grid pl-0 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)]"
            >
              <div className="relative flex items-center bg-stone-50">
                {Math.abs(index - current) <= 1 ? (
                  <Image
                    src={chapter.image}
                    alt={chapter.alt}
                    width={2400}
                    height={1350}
                    sizes="(min-width: 1280px) 796px, (min-width: 1024px) 713px, calc(100vw - 48px)"
                    preload={index === 0}
                    draggable={false}
                    className="aspect-video h-auto w-full select-none"
                  />
                ) : <div className="aspect-video w-full" />}
                <div className="absolute top-3 right-3 rounded-md bg-white/95 shadow-sm">
                  <ArtworkViewer image={chapter.image} alt={chapter.alt} title={chapter.title} />
                </div>
              </div>
              <div data-story-copy className="flex flex-col justify-center px-6 py-7 sm:p-8 lg:px-7 xl:p-8">
                <h2 className="text-3xl leading-tight tracking-tight text-gray-900 xl:text-4xl">
                  {chapter.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 lg:text-base lg:leading-7">
                  {chapter.text}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-between gap-3 border-t border-gray-200 px-4 py-4 sm:px-6">
          <Button
            variant="ghost"
            className="min-h-11"
            disabled={current === 0}
            onClick={() => api?.scrollPrev()}
            aria-label="Previous chapter"
            aria-controls="setting-story-scenes"
          >
            <ArrowLeft aria-hidden="true" />
            Back
          </Button>
          <Button
            onClick={continueStory}
            aria-controls={isLast ? "setting-debate" : "setting-story-scenes"}
            className="min-h-11 bg-[#FFC600] px-5 text-gray-950 hover:bg-[#FFD43B]"
          >
            {isLast ? "Meet the two sides" : "Next chapter"}
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div
        ref={thumbnails}
        role="group"
        aria-label="Choose a chapter"
        className="relative mt-5 flex gap-3 overflow-x-auto px-1 pt-1 pb-3 sm:grid sm:grid-cols-6"
      >
        {settingStory.map((chapter, index) => (
          <Button
            key={chapter.id}
            variant="ghost"
            aria-label={`Chapter ${index + 1}: ${chapter.title}`}
            aria-current={current === index ? "step" : undefined}
            aria-disabled={current === index}
            aria-controls="setting-story-scenes"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-auto w-28 min-w-0 shrink-0 flex-col justify-start gap-2 rounded-lg p-1 whitespace-normal sm:w-auto",
              current === index ? "bg-stone-100 text-gray-950" : "text-gray-500 hover:bg-stone-50 hover:text-gray-900",
            )}
          >
            <span className={cn("block w-full overflow-hidden rounded-md border-2", current === index ? "border-[#B08700]" : "border-transparent")}>
              <Image src={chapter.thumbnail} alt="" width={320} height={180} sizes="180px" className="aspect-video h-auto w-full" />
            </span>
            <span className="flex w-full gap-1.5 px-1 pb-1 text-left text-xs leading-4 sm:text-sm sm:leading-5">
              <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <span>{chapter.shortTitle}</span>
            </span>
          </Button>
        ))}
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        Chapter {current + 1} of {settingStory.length}: {scene.title}
      </p>
    </Carousel>
  );
}
