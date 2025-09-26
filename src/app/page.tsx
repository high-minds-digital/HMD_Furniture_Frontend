import About from "@/components/About/About";
import Design from "@/components/Design";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navabar/Navbar";
import { NewsletterSubscriptionSection } from "@/components/NewsLetter";
import Popular from "@/components/Popular/Popular";
import Product from "@/components/Product/Product";
import { RecentBlogSection } from "@/components/Blog/RecentBlog";
import { ClientTestimonialsSection } from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Product />
      <About />
      <Design />
      <Popular />
      <ClientTestimonialsSection />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <RecentBlogSection />
        </div>
      </section>
      <NewsletterSubscriptionSection />
      <Footer />
    </div>
  );
}
