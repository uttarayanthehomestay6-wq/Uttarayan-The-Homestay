"use client";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="relative bg-surface py-[120px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
          <div className="space-y-6 z-10 reveal pr-0 md:pr-12">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">Get in Touch</span>
            <h1 className="font-display-lg text-display-lg text-tertiary">Book Your Stay</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Plan your retreat to Uttarayan The Homestay. We manually confirm all bookings to ensure the most personalized experience for you and your family.
            </p>

            <div className="pt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">location_on</span>
                <div>
                  <h4 className="font-title-lg text-title-lg text-tertiary mb-1">Location</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Dharanaula, Almora, Uttarakhand 263601</p>
                  <Link href="https://share.google/te6Pw51f69yD3pQRc" target="_blank" className="text-primary font-label-md text-label-md underline underline-offset-4 hover:text-tertiary mt-2 inline-block">
                    Get Directions
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">call</span>
                <div>
                  <h4 className="font-title-lg text-title-lg text-tertiary mb-1">Call / WhatsApp</h4>
                  <div className="flex items-center gap-4">
                    <a href="tel:+917891109555" className="font-body-md text-body-md text-primary hover:text-tertiary underline underline-offset-4">+91 7891109555</a>
                    <a href="https://wa.me/917891109555" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-[#25D366] hover:text-[#128C7E] flex items-center gap-1 font-bold">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">mail</span>
                <div>
                  <h4 className="font-title-lg text-title-lg text-tertiary mb-1">Email</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Uttarayanthehomestay6@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container p-8 md:p-12 soft-elevation reveal" style={{transitionDelay: "200ms"}}>
            <h2 className="font-headline-md text-headline-md text-tertiary mb-6">Booking Inquiry Form</h2>
            
            {status === "success" ? (
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-lg text-center">
                <span className="material-symbols-outlined text-4xl text-[#25D366] mb-2">check_circle</span>
                <h3 className="font-title-lg text-tertiary mb-2">Inquiry Sent Successfully!</h3>
                <p className="font-body-md text-on-surface-variant">Thank you for your interest. We have received your details and will get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 font-label-md text-primary hover:text-tertiary underline underline-offset-4">
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === "error" && (
                  <div className="bg-[#8A2E1E]/10 text-[#8A2E1E] p-4 rounded-sm font-body-md border border-[#8A2E1E]/30">
                    Failed to send your inquiry. Please try again or contact us directly via WhatsApp.
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block font-label-md text-label-md text-on-surface-variant mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="John"/>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-label-md text-label-md text-on-surface-variant mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="Doe"/>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="john@example.com"/>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-label-md text-label-md text-on-surface-variant mb-2">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="+91 98765 43210"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block font-label-md text-label-md text-on-surface-variant mb-2">Check-In Date *</label>
                    <input type="date" id="checkIn" name="checkIn" required className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md"/>
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block font-label-md text-label-md text-on-surface-variant mb-2">Check-Out Date *</label>
                    <input type="date" id="checkOut" name="checkOut" required className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guests" className="block font-label-md text-label-md text-on-surface-variant mb-2">Number of Guests *</label>
                    <select id="guests" name="guests" required className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md">
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="room" className="block font-label-md text-label-md text-on-surface-variant mb-2">Room Preference</label>
                    <select id="room" name="room" className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md">
                      <option value="any">Any Available</option>
                      <option value="first_floor">First Floor Suite</option>
                      <option value="second_floor">Second Floor Suite</option>
                      <option value="entire_home">Entire Homestay</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-label-md text-label-md text-on-surface-variant mb-2">Special Requests or Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full bg-surface-bright border border-outline-variant rounded-sm px-4 py-3 focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="Tell us a bit about your trip..."></textarea>
                </div>

                <button type="submit" disabled={status === "loading"} className="w-full bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-label-md text-label-md uppercase tracking-widest hover:bg-primary-container transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === "loading" ? "Sending..." : "Send Inquiry"}
                </button>
                
                <p className="font-body-md text-sm text-on-surface-variant/70 text-center mt-4">
                  We will get back to you within 24 hours to confirm availability and payment details.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
