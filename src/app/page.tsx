import About from "@/components/About";
import Design from "@/components/Design";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { NewsletterSubscriptionSection } from "@/components/NewsLetter";
import Popular from "@/components/Popular";
import Product from "@/components/Product";
import { RecentBlogSection } from "@/components/RecentBlog";
import { ClientTestimonialsSection } from "@/components/Testimonial";

export default function Home() {
  return (
    <div >
       {/* <Navbar /> */}
       <Hero/>
       <Product/>
       <About/>
       <Design/>
       <Popular/>
        <ClientTestimonialsSection/>
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
       <RecentBlogSection/>           
        </div>
      </section>
      <NewsletterSubscriptionSection/>
      <Footer/>
    </div>
  );
}
