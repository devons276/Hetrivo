
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      investment: "£50,000",
      discount: "8%",
      review: "I couldn't believe the discount I received on my Bitcoin purchase. Saved thousands compared to traditional exchanges. The process was seamless and professional.",
      rating: 4,
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      investment: "£125,000",
      discount: "16%",
      review: "As a tech entrepreneur, I'm always looking for smart investment opportunities. Hetrivo delivered exactly what they promised - substantial savings on my BTC investment.",
      rating: 5,
      location: "London, UK"
    },
    {
      name: "Emma Rodriguez",
      investment: "£75,000",
      discount: "12%",
      review: "The team at Hetrivo made the entire process incredibly smooth. I saved £9,000 on my Bitcoin purchase. Highly recommend to anyone serious about crypto investing.",
      rating: 5,
      location: "London, UK"
    },
    {
      name: "David Thompson",
      investment: "£200,000",
      discount: "18%",
      review: "Outstanding service and real savings. I've been investing in crypto for years, but nothing compares to the discounts Hetrivo offers. Will definitely invest more.",
      rating: 5,
      location: "New York, NY"
    },
    {
      name: "Lisa Park",
      investment: "£35,000",
      discount: "10%",
      review: "I was skeptical at first, but Hetrivo delivered on their promise. Saved £3,500 on my first Bitcoin purchase. The customer service was excellent throughout.",
      rating: 5,
      location: "Surrey, UK"
    },
    {
      name: "Robert Wilson",
      investment: "£300,000",
      discount: "20%",
      review: "Incredible value proposition. As a hedge fund manager, I appreciate genuine opportunities to maximize returns. Hetrivo's institutional connections are game-changing.",
      rating: 5,
      location: "Liverpool, UK"
    },
    {
      name: "Jennifer Kim",
      investment: "£85,000",
      discount: "14%",
      review: "The discount I received was exactly as advertised. Professional team, transparent process, and significant savings. I'll be recommending Hetrivo to my network.",
      rating: 5,
      location: "Los Angeles, CA"
    },
    {
      name: "Thomas Anderson",
      investment: "£150,000",
      discount: "17%",
      review: "Exceptional experience from start to finish. The team guided me through every step and delivered a 17% discount on my Bitcoin investment. Truly impressed.",
      rating: 5,
      location: "Los Angeles, CA"
    },
    {
      name: "Maria Garcia",
      investment: "£60,000",
      discount: "15%",
      review: "I saved £9,000 on my Bitcoin purchase through Hetrivo. The process was straightforward and the team was incredibly helpful. Best investment decision I've made.",
      rating: 5,
      location: "London, UK"
    },
    {
      name: "James Lee",
      investment: "£400,000",
      discount: "20%",
      review: "As a crypto whale, finding legitimate ways to acquire Bitcoin below market price is rare. Hetrivo's institutional network delivers real results. Saved £80,000!",
      rating: 5,
      location: "Boston, MA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied investors who have saved millions through our exclusive Bitcoin discount program
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-black">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-blue-600">
                            Invested: {testimonial.investment}
                          </div>
                          <div className="text-sm font-bold text-green-600">
                            Saved: {testimonial.discount}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Ready to join our satisfied customers? 
            <button 
              onClick={() => {
                const element = document.getElementById('start-now');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold ml-2 underline"
            >
              Start your investment today
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
