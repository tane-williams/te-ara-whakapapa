const VIDEO_URL =
  "https://j9ahi9vxbuzebgff.public.blob.vercel-storage.com/Sign%20up%20tutorial-1.mp4";

export default function VideoTutorial() {
  return (
    <section id="tutorial" className="scroll-mt-24 bg-container px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-heading sm:text-5xl">
            See How It Works
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-body sm:text-lg">
            Watch a walkthrough of the Te Ara Whakapapa sign-up process.
          </p>
        </div>

        <div className="mx-auto mt-14 w-full overflow-hidden rounded-2xl border border-border-soft shadow-sm">
          <video
            controls
            preload="metadata"
            className="block h-auto w-full"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
