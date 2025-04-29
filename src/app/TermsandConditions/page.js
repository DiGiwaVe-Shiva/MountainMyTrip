"use client";

export default function TermsAndConditions() {
  return (
    <>
      {/* Banner Section */}
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/deal27.webp')" }}
      >
        <div className="bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl text-gray-100 font-extrabold drop-shadow-lg">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white mt-12 text-gray-800 px-6 md:px-20 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#393849]">
            Terms and Conditions
          </h2>

          <section className="space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              Please read these Terms and Conditions carefully before booking a tour with <strong>MountainMyTrip</strong>. These terms outline the rules and responsibilities for both the tour operator and the traveler. By booking a tour with us, you agree to these terms.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">Refund Policy</h3>
            <p>
              Refunds are issued only in accordance with the cancellation terms outlined below. By booking a tour with MountainMyTrip, you acknowledge and agree to the following refund conditions.
            </p>

            <h4 className="font-semibold text-[#393849]">Cancellation by You</h4>
            <ul className="list-disc ml-6">
              <li>Up to 30 days before departure: 30% of the package cost will be charged.</li>
              <li>30 to 15 days before departure: 50% of the package cost will be charged.</li>
              <li>15 to 7 days before departure: 75% of the package cost will be charged.</li>
              <li>Within 5 days of departure: 100% of the package cost will be charged (no refund).</li>
            </ul>
            <p>
              A non-refundable cancellation processing fee of INR 1,500 will be applicable for all cancellations, regardless of the time of cancellation.
            </p>

            <h4 className="font-semibold text-[#393849]">Option to Postpone</h4>
            <p>
              As an alternative to cancellation, you may choose to postpone your trek to the following year. Your full advance payment will be converted into a voucher redeemable against future bookings with MountainMyTrip.
            </p>

            <h4 className="font-semibold text-[#393849]">Refund Processing</h4>
            <p>
              Eligible refunds will be processed within 7–10 business days and returned via the original payment method. Non-refundable charges (e.g., taxes or service fees) will be excluded from the refund.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">Changes Made by Us</h3>
            <p>
              We reserve the right to make necessary changes to your tour program due to unforeseen circumstances. If changes are required:
            </p>
            <ul className="list-disc ml-6">
              <li>You may accept the new arrangement or choose another tour, adjusting costs accordingly.</li>
              <li>Alternatively, cancel and receive a full refund of deposits (excluding the INR 1,500 amendment fee).</li>
            </ul>
            <p>Compensation based on timing:</p>
            <ul className="list-disc ml-6">
              <li>12 days before departure: Deposits only.</li>
              <li>7 days: 100% of tour cost.</li>
              <li>4 days: 100% + 1.25% of tour cost.</li>
              <li>2 days: 100% + 3.5% of tour cost.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">Circumstances Beyond Our Control</h3>
            <p>
              We cannot provide compensation for changes due to events like war, airport closures, epidemics, natural disasters, terrorist activities, civil unrest, industrial disputes, or adverse weather.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">Your Responsibility</h3>
            <ul className="list-disc ml-6">
              <li>You are responsible for your actions and safety during the trek.</li>
              <li>Disruptive or unsafe behavior may lead to removal from the tour without refund.</li>
              <li>We are not liable for accidents due to irresponsible conduct or property damage.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">No Smoking & Alcohol Policy</h3>
            <p>
              Alcohol consumption during treks is strictly prohibited. The decision of the trek leader or operations manager is final. Violation may lead to trek termination with no refund.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">Damage and Liability</h3>
            <p>
              You and your group are responsible for any damage to property or accommodations. All breakages must be reported immediately. Costs arising from such damages or any diversions due to behavior will be your responsibility.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">Complaints</h3>
            <p>
              Please report any issues during your tour to the guide or representative. We’ll make all efforts to resolve them. If unresolved, contact us via our official email or phone number. Complaints made after the tour ends may not be considered.
            </p>

            <p className="mt-6">
              We want you to have a safe and enjoyable experience with <strong>MountainMyTrip</strong>. If you have questions about these terms, please contact us before booking. Thank you for choosing us for your next adventure.
            </p>
{/* 
            <p className="text-sm text-gray-500 mt-10">
              Effective Date: {new Date().toLocaleDateString()}
            </p> */}
          </section>
        </div>
      </main>
    </>
  );
}
