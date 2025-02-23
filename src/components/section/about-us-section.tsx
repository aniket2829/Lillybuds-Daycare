import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="flex h-screen py-20 md:py-20 flex-col space-y-6 lg:flex-row md:justify-around items-center bg-white">
      <div>
        <Image
          className="md:w-[30rem] lg:w-[40rem]"
          src="/images/about.png"
          alt="Hero Section"
          width={400}
          height={400}
        />
      </div>
      <div className="lg:w-2/6 w-5/6 ">
        <h1 className="text-center font-black text-3xl pb-4">
          Welcome to Lily Buds
        </h1>
        <p className="pt-3">
          At Lily Buds, our mission is to provide a nurturing, safe, and joyful
          environment where children can grow, learn, and thrive. We believe in
          fostering creativity, independence, and social development through
          play-based learning and hands-on activities. Our experienced and
          caring staff are dedicated to supporting each child{"'"}s unique
          needs, encouraging curiosity, and promoting a love for learning that
          lasts a lifetime. By partnering with parents, we create a supportive
          community where children feel valued and empowered. At Lily Buds, we
          are more than just a daycare we are a place where children build
          friendships, explore their world, and reach their full potential.
        </p>
      </div>
    </div>
  );
}
