import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-brand-pink via-brand-purple to-brand-blue rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="text-5xl mb-5">🌟</div>
            <h2
              className="text-3xl sm:text-4xl font-black mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Want to Know More?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-lg mx-auto">
              We'd love to meet you and your child. Book a free consultation and
              let's talk about how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-brand-pink font-black text-lg hover:bg-yellow-50 hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Book a Free Consultation ✨
              </Link>
              <Link
                href="/programs"
                className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-200"
              >
                View Our Programs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
