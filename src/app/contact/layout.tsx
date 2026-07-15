import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Booking",
  description: "Get in touch to book your stay at Uttarayan The Homestay in Almora. Contact us via phone, WhatsApp, or email to plan your Himalayan retreat.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
