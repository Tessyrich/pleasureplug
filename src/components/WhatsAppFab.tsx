import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Pleasure Plug 👋 I have a question…")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-ink shadow-[0_10px_40px_-10px_#25D366] transition hover:scale-105 sm:bottom-7 sm:right-7"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-40 group-hover:pr-1 sm:inline">
        Slide into our DMs
      </span>
    </a>
  );
}
