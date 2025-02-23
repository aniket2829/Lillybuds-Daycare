import { adlamDisplay } from "@/config/globals";

export default function OurMissionSection() {
  return (
    <div
      id="about-us"
      className="text-justify text-[#DE0070] border-2 border-[#227AAD] py-20 px-16 md:px-32 space-y-12 mt-20 mx-auto xl:max-w-[1280px] 2xl:max-w-[1490px] bg-white rounded-3xl"
    >
      <h1
        className={`text-center text-4xl lg:text-5xl xl:text-6xl ${adlamDisplay.className}`}
      >
        Our Mission
      </h1>
      <p className="text-lg lg:text-2xl">
        At Lily Buds, our mission is to provide a nurturing, safe, and joyful
        environment where children can grow, learn, and thrive. We believe in
        fostering creativity, independence, and social development through
        play-based learning and hands-on activities. Our experienced and caring
        staff are dedicated to supporting each child{"'"}s unique needs,
        encouraging curiosity, and promoting a love for learning that lasts a
        lifetime. By partnering with parents, we create a supportive community
        where children feel valued and empowered. At Lily Buds, we are more than
        just a daycare we are a place where children build friendships, explore
        their world, and reach their full potential.{" "}
        <span className="hidden lg:inline">
          This belief forms the mantra of our mission here at Lily Buds, where
          we believe that early childhood is a defining stage in a child’s
          formative years especially creating open-minded active learners as
          well as almost empathetic citizens. We hope to create a welcoming,
          safe and stimulating environment for children in our care where they
          can also be encouraged to independently explore and develop at their
          own pace. Our approach is focused on nurturing creativity,
          independence and social skills through a play-based curriculum that
          blends engaging experiences with relevant practical learning.
        </span>
      </p>
    </div>
  );
}
