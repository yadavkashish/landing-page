import React from 'react';
import TeamSection from './TeamSection';

const LandingPage = () => {
  // Hardcoded testimonials data
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      company: {
        name: "Tech Innovators",
        catchPhrase: "Innovating the Future"
      },
      review: "This is the best service I have ever used! My website went from zero to hero in no time. Highly recommend!",
      imageUrl: "https://via.placeholder.com/100" // Add image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      company: {
        name: "Creative Solutions",
        catchPhrase: "Designing the Future"
      },
      review: "Creative, reliable, and truly professional. Working with this freelancer took our branding to the next level!",
      imageUrl: "https://via.placeholder.com/100" // Add image URL
    },
    {
      id: 3,
      name: "Tom Brown",
      company: {
        name: "Growth Partners",
        catchPhrase: "Growing Businesses Together"
      },
      review: "Exceptional skills and a fantastic work ethic. Helped us grow our online presence significantly. Highly recommend.",
      imageUrl: "https://via.placeholder.com/100" // Add image URL
    },
  ];

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
  {/* Video Background */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  >
    <source
      src="https://videos.pexels.com/video-files/7308103/7308103-hd_1920_1080_24fps.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  
  {/* Overlay for Better Text Contrast */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight shadow-lg text-white">
      Your Next Trusted Freelancers
    </h1>
    <p className="text-xl md:text-2xl font-semibold tracking-wide text-white opacity-90">
      Bringing Ideas to Life
    </p>
    <a
      href="#services"
      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
    >
      Hire Us
    </a>
  </div>
</section>

      <section><TeamSection /></section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100" id="services">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p>Building responsive websites and web applications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Graphic Design</h3>
            <p>Creative and unique graphic design for branding.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p>Improving your website's search engine ranking.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4" id="pricing">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p>$100/month</p>
            <ul>
              <li>1 Website</li>
              <li>Basic SEO</li>
              <li>Email Support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
            <p>$250/month</p>
            <ul>
              <li>5 Websites</li>
              <li>Advanced SEO</li>
              <li>Priority Support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <p>$500/month</p>
            <ul>
              <li>Unlimited Websites</li>
              <li>Expert SEO</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-200" id="testimonials">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.length > 0 ? (
            testimonialsData.map(user => (
              <div key={user.id} className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className="flex items-center mb-4">
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-xl font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.company.name}</p>
                    <p className="text-sm text-gray-500">{user.company.catchPhrase}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{user.review}"</p>
              </div>
            ))
          ) : (
            <p className="text-center">No testimonials available.</p>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section 
  className="py-16 px-4 bg-cover bg-center" 
  id="contact" 
  style={{ 
    backgroundImage: "url('https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Contact Heading */}
  <h2 className="text-5xl font-extrabold text-center text-white mb-8">
    Contact Us
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-opacity-80 p-6 rounded-lg shadow-md">
    {/* Company Details */}
    <div className="p-6 rounded-lg text-white">
  <h3 
    className="text-4xl font-extrabold mb-6" 
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
  >
    Company Details
  </h3>
  
  <p 
    className="text-2xl font-bold mb-4" 
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
  >
    <strong>📞 Phone:</strong> (123) 456-7890
  </p>

  <p 
    className="text-2xl font-bold mb-4" 
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
  >
    <strong>📧 Email:</strong> contact@company.com
  </p>

  <p 
    className="text-2xl font-bold mb-4" 
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
  >
    <strong>📍 Address:</strong> 123 Business St, Cityville, ST 12345
  </p>

  <p 
    className="text-2xl font-bold mb-4" 
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
  >
    <strong>🕒 Working Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
  </p>
</div>


    {/* Contact Form */}
    <div className="p-6 rounded-lg bg-white bg-opacity-90">
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-bold">Your Name</label>
          <input type="text" id="name" className="w-full p-3 mt-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold">Your Email</label>
          <input type="email" id="email" className="w-full p-3 mt-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold">Your Message</label>
          <textarea id="message" className="w-full p-3 mt-2 border border-gray-300 rounded" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>



    </div>
  );
};

export default LandingPage;


