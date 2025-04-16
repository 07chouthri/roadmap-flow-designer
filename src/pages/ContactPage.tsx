
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const lambdaUrl = "https://jg2hzoqm02.execute-api.ap-south-1.amazonaws.com/default/Hads-Tech-Novation-Solution";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form element with proper typecasting
    const form = e.currentTarget;

    // Access form fields with proper typing
    const formData = new FormData(form);
    const formValues = {
      name: formData.get('Full Name') as string,
      email: formData.get('Email') as string,
      phone: formData.get('Phone Number') as string,
      company: formData.get('Company Name') as string,
      service: formData.get('Interested Service') as string,
      message: formData.get('Message') as string,
    };

    try {
      const response = await fetch(lambdaUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formValues.name || 'Unknown' }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you! Your message has been sent successfully.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          <div className="absolute inset-0 opacity-5 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-7">
                  <span className="mx-1">Get in</span>
                  <span className="text-hads-pink">Touch with Us!</span>
                </h1>
                <div className="mx-2">
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 md:mb-7 font-light leading-relaxed">
                    Have questions about our cloud solutions ? We’re here to help.
                  </p>
                  <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-7">
                    At HADS TechNovations LLP, we know that choosing the right cloud strategy is a big step for your business.
                    Whether you're planning to migrate, scale, or optimize your existing infrastructure,
                    our cloud experts are ready to support you — every step of the way.
                  </p>
                  <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-7">
                    Let’s make your cloud journey simple, smart, and successful.
                  </p>
                </div>
              </div>

              {/* Lottie Animation */}
              <div className="w-full md:w-1/2 h-[250px] md:h-[400px] mt-6 md:mt-0">
                <DotLottieReact
                  src="https://lottie.host/d20a7b1f-671c-4f18-b2f1-3c9fdc7ed9d0/U9Cbx5iMCd.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
                <form onSubmit={handleFormSubmit}>
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input id="name" name="Full Name" required placeholder="Your name"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hads-purple" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input id="email" name="Email" type="email" required placeholder="your.email@example.com"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hads-purple" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input id="phone" name="Phone Number" type="tel" placeholder="Reachable number"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hads-purple" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input id="company" name="Company Name" type="text" placeholder="Company Name"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hads-purple" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">Services You're Interested In *</label>
                    <select id="services" name="Interested Service" required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hads-purple">
                      <option value="" disabled selected>Select a service</option>
                      <option value="cloud-migration">Cloud Migration (AWS, Azure, GCP)</option>
                      <option>Managed Services</option>
                      <option>DevOps & Automation</option>
                      <option>Security & Compliance</option>
                      <option>Cost Optimization</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                    <textarea id="message" name="Message" rows={5} required
                      placeholder="Tell us about your project or question"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hads-purple" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-6 bg-hads-purple hover:bg-hads-purple/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                  </Button>

                  <p className="text-sm text-gray-500 mt-4">
                    ✅ We respect your privacy. Your information will only be used to contact you regarding your inquiry.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6 md:space-y-8">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-hads-purple/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-hads-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700 mb-1">General Inquiries:</p>
                      <a href="mailto:info@hadstechnovations.com" className="text-hads-teal hover:underline">info@hadstechnovations.com</a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-hads-teal/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-hads-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Call</h3>
                      <p className="text-gray-700">Need urgent support? Call us directly at <br /> <span className="font-medium text-hads-teal">+91 72040 26426</span><br /><span className="font-medium text-hads-teal">+91 81220 15654</span></p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-hads-teal/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-hads-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mt-2">Visit Us</h3>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '24px',
                      justifyContent: 'center',
                      maxWidth: '1100px',
                      margin: '2rem auto',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    {/* Head Office Card */}
                    <div
                      style={{
                        flex: '1 1 400px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '24px',
                        minWidth: '300px',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#06b6d4';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(6, 182, 212, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E5E7EB';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <img
                          src="https://flagcdn.com/w40/in.png"
                          alt="India Flag"
                          style={{ width: '24px', height: '16px', objectFit: 'cover', marginRight: '10px' }}
                        />
                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                        Head Office - Chennai
                        </h3>
                      </div>
                      <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.6' }}>
                        HADS Technovations LLP,<br />
                        No. 111, Rajiv Gandhi Road,<br />
                        AWFIS Space Solution,<br />
                        OMR, Chennai, Tamil Nadu – 600041
                      </p>
                    </div>

                    {/* Branch Office Card */}
                    <div
                      style={{
                        flex: '1 1 400px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '24px',
                        minWidth: '300px',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#06b6d4';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(6, 182, 212, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E5E7EB';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <img
                          src="https://flagcdn.com/w40/ae.png"
                          alt="UAE Flag"
                          style={{ width: '24px', height: '16px', objectFit: 'cover', marginRight: '10px' }}
                        />
                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                          Branch Office - UAE
                        </h3>
                      </div>
                      <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.6' }}>
                        HADS Technovations LLP,<br />
                        Al Saef 1 Street, Barsha Heights, Dubai (UAE)
                      </p>
                    </div>
                  </div>
                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday – Friday: 10:00 AM – 6:00 PM (IST)<br />
                        Support: 24/7 for Managed Service Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto h-96 rounded-3xl overflow-hidden border border-gray-300 shadow-2xl group mt-16"
          >
            {/* Location Label */}
            <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md text-hads-dark px-4 py-2 rounded-xl shadow-md text-sm font-medium">
              📍 Hads TechNovation LLP
            </div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-hads-teal/10 to-hads-purple/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

            {/* Transparent Overlay Click Link for Route */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=HADS+TECHNOVATIONS+LLP"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-30"
              title="Click to open directions in Google Maps"
            ></a>

            {/* Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.034346420927!2d80.24722668307162!3d12.967456199123509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d005f4748c9%3A0xacbe85a90d53bc6f!2sHADS%20TECHNOVATIONS%20LLP!5e0!3m2!1sen!2sin!4v1744019290319!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full pointer-events-none"
            ></iframe>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
