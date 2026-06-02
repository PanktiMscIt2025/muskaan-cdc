import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Muskaan Child Development Center",
  description:
    "Get in touch with Muskaan Child Development Center. Book a free consultation, ask questions, or learn how we can support your child's unique journey.",
  openGraph: {
    title: "Contact Us | Muskaan Child Development Center",
    description: "Book a free consultation — let's start your child's journey together.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
