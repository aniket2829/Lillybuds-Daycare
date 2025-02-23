import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AchievementsSection() {
  const scheduleDetails = [
    {
      label: "7:00 AM – 9:00 AM",
      activity: "Drop-Off & Free Play",
      details:
        "Children arrive and engage in free play. This helps them transition smoothly into the day while encouraging social interaction in a relaxed setting.",
    },
    {
      label: "9:00 AM – 9:30 AM",
      activity: "Morning Circle Time",
      details:
        "Children gather for circle time, sing songs, read stories, and discuss the day's activities. This promotes language development, listening skills, and a sense of community.",
    },
    {
      label: "9:30 AM – 10:00 AM",
      activity: "Snack Time",
      details:
        "Children enjoy a healthy, nutritious snack to keep them energized, with fruits, whole grains, and other balanced options to promote healthy eating habits.",
    },
    {
      label: "10:00 AM – 11:30 AM",
      activity: "Learning & Play Activities",
      details:
        "Educators guide children through structured activities focusing on key developmental skills: sensory play for infants, creative arts for toddlers, literacy for preschoolers.",
    },
    {
      label: "11:30 AM – 12:00 PM",
      activity: "Outdoor Play",
      details:
        "Children head outside for physical activity, developing motor skills and enjoying fresh air with safe, supervised play.",
    },
    {
      label: "12:00 PM – 12:30 PM",
      activity: "Lunch Time",
      details:
        "We provide a nutritious lunch, promoting healthy eating habits and giving children the energy for the rest of the day with balanced, kid-friendly meals.",
    },
    {
      label: "12:30 PM – 2:30 PM",
      activity: "Nap Time",
      details:
        "Children rest in a quiet, comfortable space to relax and recharge, essential for their physical and mental development.",
    },
    {
      label: "2:30 PM – 3:00 PM",
      activity: "Quiet Time Activities",
      details:
        "For children who wake up early, we offer quiet activities like reading or puzzles, helping them transition back into the day.",
    },
    {
      label: "3:00 PM – 3:30 PM",
      activity: "Afternoon Snack",
      details:
        "A light snack is provided to keep children fueled for the remainder of the day.",
    },
    {
      label: "3:30 PM – 5:00 PM",
      activity: "Group Activities & Creative Play",
      details:
        "Children engage in group play, arts, crafts, or dramatic play to encourage imagination and teamwork.",
    },
    {
      label: "5:00 PM – 6:00 PM",
      activity: "Pick-Up & Free Play",
      details:
        "As parents arrive for pick-up, children enjoy free play, winding down and sharing their experiences with friends.",
    },
  ];

  return (
    <div className="py-20 w-full bg-blue-950 flex flex-col items-center justify-center space-y-12">
      <h1 className="text-center font-black text-3xl text-yellow-300 pb-4">
        Our Daily Routine
      </h1>
      <Carousel
        opts={{ align: "start" }}
        className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[30%]"
      >
        <CarouselContent>
          {scheduleDetails.map((item, index) => (
            <CarouselItem key={index} className="min-w-full px-4">
              <div className="bg-yellow-400 rounded-lg px-[3rem] shadow-lg h-[29rem] ml-[1rem] flex flex-col justify-center ml-[3.5rem] mr-[2.5rem] mt-0 mb-0">
                <h2 className="text-xl font-bold text-blue-950 text-center">
                  {item.label}
                  <br />
                  {item.activity}
                </h2>
                <p className="pt-[1rem] text-gray-900 text-center">
                  {item.details}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-300 p-2 rounded-full shadow-lg" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-300 p-2 rounded-full shadow-lg" />
      </Carousel>
    </div>
  );
}
