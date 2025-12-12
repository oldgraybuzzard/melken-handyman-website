import Hero from "@/components/Hero";
import FeaturedSpecialties from "@/components/FeaturedSpecialties";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSpecialties />
      <Services />
      <Reviews />
      <FAQ />
      <ContactForm />
    </>
  );
}
