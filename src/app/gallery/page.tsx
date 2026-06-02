import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | Muskaan Child Development Center",
  description:
    "Browse photos from Muskaan CDC — see our children in action, our learning spaces, community outings, events, and everyday moments of growth and joy.",
  openGraph: {
    title: "Gallery | Muskaan Child Development Center",
    description: "Every photo tells a story of growth, joy, and a child discovering what they're truly capable of.",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
