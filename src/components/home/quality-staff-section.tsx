import { adlamDisplay } from "@/config/globals";

export default function QualityStaffSection() {
  return (
    <div className="pr-10 pl-6 mb-56">
      <div className="border-2 border-[#227AAD] mx-auto max-w-md md:max-w-2xl bg-[#FFE1F0] rounded-2xl">
        <div className="border-4 border-[#227AAD] relative top-4 left-4 bg-white p-14 rounded-2xl">
          <h3
            className={`text-[#DE0070] text-2xl md:text-4xl mb-8 ${adlamDisplay.className}`}
          >
            Why Choose Us?
          </h3>
          <div className="text-[#227AAD] text-lg md:text-2xl">
            <ul className="list-disc">
              <li>
                <strong>Qualified Staff</strong>: Our passionate caregivers are
                trained in early childhood education and prioritize your child’s
                well-being.
              </li>
              <li>
                <strong>Safe Environment</strong>: We maintain a secure and
                hygienic facility, ensuring peace of mind for parents.
              </li>
              <li>
                <strong>Interactive Learning</strong>: From arts and crafts to
                outdoor adventures, we offer a variety of activities that
                promote physical, social, and emotional development.
              </li>
              <li>
                <strong>Parent Involvement</strong>: We value the partnership
                with parents and encourage open communication through regular
                updates and events.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
