import EnrolButton from "./EnrolButton";

export default function FinalCta() {
  return (
    <section className="bg-accent-soft px-6 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-4xl font-bold text-heading sm:text-5xl">
          Begin Your Journey on Te Ara Whakapapa
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-body sm:text-lg">
          Take the first step toward confident, informed governance of your
          ancestral Māori freehold land — free of charge.
        </p>
        <div className="mt-10">
          <EnrolButton />
        </div>
      </div>
    </section>
  );
}
