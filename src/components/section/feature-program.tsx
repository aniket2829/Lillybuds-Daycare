import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function FeatureProgram() {
  const programDetails = [
    {
      image: "/images/infant.png",
      label: "Infant",
      period: "(6 weeks - 12 months)",
      details:
        "Tummy time, visual and auditory stimulation (soft music, colorful toys), sensory play, and bonding activities (storytime, cuddle time).",
    },
    {
      image: "/images/toddlers.jpg",
      label: "Toddlers",
      period: "(1 - 2 years)",
      details:
        "Our toddler program is designed to encourage curiosity and independence. With hands-on activities and interactive play, we help toddlers develop language, motor skills, and socialization, all while having fun.",
    },
    {
      image: "/images/pre-schoolers.jpg",
      label: "Preschoolers",
      period: "(3 - 4 years)",
      details:
        "For preschoolers, we offer a structured learning environment that balances play with academics. Our curriculum focuses on early literacy, math skills, and creative exploration, preparing children for a smooth transition to kindergarten.",
    },
    {
      image: "/images/pre-k.jpg",
      label: "Pre-K",
      period: "(4 - 5 years)",
      details:
        "Our Pre-K program is all about preparing children for their next big step into school. We build confidence through structured group activities, problem-solving, and cognitive development, ensuring they’re ready to excel in kindergarten.",
    },
    {
      image: "/images/after-school.jpg",
      label: "After-School Care",
      period: "(5 - 10 years)",
      details:
        "We provide a safe, fun space for school-aged children to unwind, work on homework, and engage in enriching activities. From arts and crafts to outdoor play, our after-school care program supports continued growth and learning.",
    },
  ];

  return (
    <div className="py-20 w-full h-screen">
      <h1 className="text-center font-black text-3xl pb-4 mb-8">
        Our Featured Programs
      </h1>
      <div className="flex md:flex-row flex-col justify-center gap-6 items-center">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative px-4 md:px-0 overflow-x-hidden items-stretch w-10/12 sm:w-8/12"
        >
          <CarouselContent className="items-stretch flex">
            {programDetails.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                {/* <div className="p-1"> */}
                {/* <Card> */}
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                {/* <div className="w-full p-4"> */}
                <div className="border-2 border-blue-950 rounded-lg h-[34rem] m-[2.5rem]">
                  <div className="bg-blue-950 px-6 py-2">
                    <p className="text-center font-black text-yellow-400">
                      {item.label}
                      <br />
                      {item.period}
                    </p>
                  </div>
                  <div className="">
                    <Image
                      className="w-full h-auto"
                      src={item.image}
                      alt={`${item.label} Program Image`}
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-center text-gray-700">{item.details}</p>
                  </div>
                </div>
                {/* </div> */}
                {/* </CardContent> */}
                {/* </Card> */}
                {/* </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-black" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-black" />
        </Carousel>
      </div>
    </div>
  );
}
