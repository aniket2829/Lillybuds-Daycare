export default function AchievementsSection() {
  const achievementsData = [
    { heading: "Hours", para: "7:30 am to 6 pm" },
    { heading: "Location", para: "info@lilybudsdaycare.ca" },
    { heading: "Phone no.", para: "778-838-4848 , 604-808-3231" },
  ];
  return (
    <div className="overflow-hidden pb-8 whitespace-nowrap text-center bg-blue-950 text-white py-6">
      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-8 sm:gap-0">
        {achievementsData.map((items, index) => (
          <>
            <div key={index}>
              <h1 className="text-2xl text-yellow-300 font-medium pb-3">
                {items.heading}
              </h1>
              <p>{items.para}</p>
            </div>
            {index !== achievementsData.length - 1 && <hr className="block bg-white h-1 w-[20rem] sm:w-1 sm:h-[4rem]" />}
          </>
        ))}
      </div>
    </div>
  );
}
