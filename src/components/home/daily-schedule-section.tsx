"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { adlamDisplay } from "@/config/globals";

const cardContents = [
  {
    title: "Drop-Off & Free Play",
    details:
      "Children arrive and engage in free play. This helps them transition smoothly into the day while encouraging social interaction in a relaxed setting.",
  },
  {
    title: "Morning Circle Time",
    details:
      "Children gather for circle time, sing songs, read stories, and discuss the day's activities. This promotes language development, listening skills, and a sense of community.",
  },
  {
    title: "Snack Time",
    details:
      "Children enjoy a healthy, nutritious snack to keep them energized, with fruits, whole grains, and other balanced options to promote healthy eating habits.",
  },
  {
    title: "Learning & Play Activities",
    details:
      "Educators guide children through structured activities focusing on key developmental skills: sensory play for infants, creative arts for toddlers, literacy for preschoolers.",
  },
  {
    title: "Outdoor Play",
    details:
      "Children head outside for physical activity, developing motor skills and enjoying fresh air with safe, supervised play.",
  },
  {
    title: "Lunch Time",
    details:
      "We provide a nutritious lunch, promoting healthy eating habits and giving children the energy for the rest of the day with balanced, kid-friendly meals.",
  },
  {
    title: "Nap Time",
    details:
      "Children rest in a quiet, comfortable space to relax and recharge, essential for their physical and mental development.",
  },
  {
    title: "Quiet Time Activities",
    details:
      "For children who wake up early, we offer quiet activities like reading or puzzles, helping them transition back into the day.",
  },
  {
    title: "Afternoon Snack",
    details:
      "A light snack is provided to keep children fueled for the remainder of the day.",
  },
  {
    title: "Group Activities & Creative Play",
    details:
      "Children engage in group play, arts, crafts, or dramatic play to encourage imagination and teamwork.",
  },
  {
    title: "Pick-Up & Free Play",
    details:
      "As parents arrive for pick-up, children enjoy free play, winding down and sharing their experiences with friends.",
  },
];

export default function DailScheduleSection() {
  return (
    <div id="daily-schedule" className="my-40">
      <h1
        className={`text-center ${adlamDisplay.className} text-4xl text-[#227AAD] mb-16`}
      >
        Daily Schedule
      </h1>

      <Carousel
        opts={{ skipSnaps: true }}
        className="w-8/12 max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto"
      >
        <CarouselContent>
          {cardContents.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-6/12 xl:basis-4/12"
            >
              <div className=" md:p-2">
                <div className="border-2 border-[#227AAD] h-[22rem] rounded-3xl w-full p-10 bg-white">
                  <h1
                    className={`text-2xl ${adlamDisplay.className} text-[#DE0070]`}
                  >
                    {item.title}
                  </h1>
                  <h2 className="text-[#227AAD] font-bold pt-2">
                    {item.details}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
