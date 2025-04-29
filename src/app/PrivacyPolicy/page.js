"use client";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Banner Section */}
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/deal26.webp')" }}
      >
        <div className=" bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl text-gray-100 font-extrabold drop-shadow-lg">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white mt-12 text-gray-800 px-6 md:px-20 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#393849]">
            Privacy Policy
          </h2>

          <section className="space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              At <strong>MountainMyTrip</strong>, we are committed to
              safeguarding consumer privacy. We value your trust and want to
              assure you that we handle your personal information with the
              utmost care. This privacy policy outlines the information we
              collect, how we use it, and the measures we take to protect it.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">
              IP Addresses & Cookies
            </h3>
            <p>
              To enhance our website’s functionality and user experience, we may
              collect and use visitors’ IP addresses. This information is used
              for optimizing search engine performance and diagnosing server
              issues. We also use Google Analytics to understand how visitors
              navigate our site. Cookies are employed to collect aggregated data
              like traffic sources, browser types, and visit duration. This data
              is anonymous and not personally identifiable. You may choose to
              disable cookies in your browser settings if preferred.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">
              Bookings & Payments
            </h3>
            <p>
              When you book a tour on our website, we collect essential contact
              details like your name, email address, and occasionally phone
              number or postal address. This information is used strictly for
              communication regarding your tour. In rare cases, we may share
              your contact details with your assigned tour guide. We never sell
              or share this data with third parties.
            </p>
            <p>
              During booking, we also collect payment details, such as credit
              card numbers or bank information. Online security is a top
              priority to ensure your data remains protected.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">
              Online Security
            </h3>
            <p>
              Our website uses advanced online security protocols to protect
              your information. All transactions are securely processed by
              Razorpay services over HTTPS using TLS, with industry-standard
              AES-128-bit encryption and secure cipher configurations.
            </p>

            <h3 className="text-xl font-semibold text-[#393849] mt-6">
              All Rights Reserved
            </h3>
            <p>
              All content on the MountainMyTrip website is protected and cannot
              be copied, reproduced, or used for commercial purposes without
              prior written consent from MountainMyTrip. We reserve the right to
              amend this policy as necessary, and any updates will be reflected
              on this page.
            </p>

            <p className="mt-6">
              Your privacy is important to us. We are committed to maintaining
              the confidentiality and security of your personal information. If
              you have any questions or concerns, please don’t hesitate to
              contact us.
            </p>

            {/* <p className="text-sm text-gray-500 mt-10">
              Effective Date: {new Date().toLocaleDateString()}
            </p> */}
          </section>
        </div>
      </main>
    </>
  );
}
