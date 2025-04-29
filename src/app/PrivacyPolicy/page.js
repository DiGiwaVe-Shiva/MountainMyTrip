"use client";

export default function PrivacyPolicy() {
  return (
    <>
    <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: "url('/deal26.webp')", // Update image path
        }}
      >
        <div className="bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
          Privacy Policy
          </h1>
          {/* <h3 className="text-lg font-medium text-gray-200 mt-4">
            Explore the Majestic Mountains of Himachal Pradesh
          </h3> */}
        </div>
      </div>

    
    <main className="bg-white mt-24 text-gray-800 px-6 md:px-20 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#393849]">
          Privacy Policy
        </h2>

        <section className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            At <strong>MountainMyTrip</strong>, we respect your privacy and are committed to
            protecting your personal information. This Privacy Policy explains how we collect, use,
            and safeguard your data when you use our travel services and browse our website.
          </p>

          <h2 className="text-xl font-semibold text-[#393849] mt-6">1. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, etc.</li>
            <li><strong>Booking Information:</strong> Travel preferences, dates, destinations.</li>
            <li><strong>Device & Usage Data:</strong> IP address, browser type, pages visited.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#393849] mt-6">2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Process bookings and provide travel services.</li>
            <li>Send updates, promotional emails, and offers.</li>
            <li>Improve user experience and website performance.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#393849] mt-6">3. Sharing of Data</h2>
          <p>
            We do not sell or trade your personal information. Your data may be shared with
            third-party vendors or service partners only for the purpose of delivering our services.
          </p>

          <h2 className="text-xl font-semibold text-[#393849] mt-6">4. Data Protection</h2>
          <p>
            We implement industry-standard security measures to ensure the safety of your personal
            data.
          </p>

          <h2 className="text-xl font-semibold text-[#393849] mt-6">5. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal information at any
            time by contacting us at{" "}
            <a
              href="mailto:info@mountainmytrip.com"
              className="text-blue-600 hover:underline"
            >
              info@mountainmytrip.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-[#393849] mt-6">6. Cookies</h2>
          <p>
            We use cookies to analyze traffic and enhance your experience. By using our website, you
            consent to our cookie policy.
          </p>

          <h2 className="text-xl font-semibold text-[#393849] mt-6">7. Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. All changes will be posted on this
            page with the updated effective date.
          </p>

          <p className="text-sm text-gray-500 mt-10">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </main>
    </>
  );
}
