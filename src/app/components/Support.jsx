export default function SupportUs() {
    return (
      <section className="relative w-full bg-black text-white py-16" style={{
        backgroundImage: "url('/bg-last.png')", // Adjust to your actual image path
      }}>
  
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">SUPPORT US</h2>
          <p className="max-w-3xl text-sm md:text-base lg:text-lg">
            If you can't contribute financially, no problem! We'd still love to have your support. Hackers will be at it for 48
            hours, and that takes loads of caffeine and snacks. If you're willing to provide snacks for the event (especially late
            night), we'll present them in a way that emphasizes your sponsorship.
            <br />
            <strong>(e.g. "Midnight Pizza presented by [you]!")</strong>
          </p>
        </div>
      </section>
    );
  }
  