import From from "./components/From";
import HimaliyeMyTrip from "./components/HimaliyeMyTrip";
import Aboutsection from "./components/Aboutsection";
import Destinations from "./components/Destinations";
import Planyour from "./components/Planyour";
import HimTrek from "./components/HimTrek";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
// import PopupForm from "./components/PopupForm";
// import Navbar2 from "./components/Navbar2";

export default function Home() {
  // const loading = true;

  return (
    <>
      <main>
        {/* Ensure this stays on top */}
        <section className="relative z-20">
          {/* <Navbar2 /> */}
          {/* <PopupForm /> */}
          <From />
        </section>

        {/* Carousel with lower z-index to prevent overlapping on iOS */}
        <section className="relative z-10">
          <HimaliyeMyTrip />
        </section>

        <Aboutsection />
        <Destinations />
        <Planyour />
        <Testimonials />
        <HimTrek />
        <Faq />
      </main>
    </>
  );
}
