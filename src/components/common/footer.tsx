export default function Footer() {
  const footerData = [
    { heading: "Location", details: "45879 Berkeley Ave , Chilliwack BC V2P 3N1" },
    { heading: "Email", details: "info@lilybudsdaycare.ca" },
    { heading: "Phone", details: "778-838-4848 , 604-808-3231" },
  ];
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          {footerData.map((item, index) => (
            <p key={index}>
              {item.heading}: {item.details}
            </p>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lilly Buds DayCare. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
