const MOODLE_SIGNUP_URL = "https://teara.moodlecloud.com/login/signup.php";

export default function EnrolButton({
  className = "",
  label = "Enrol Now",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={MOODLE_SIGNUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-sans text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`}
    >
      {label}
    </a>
  );
}
