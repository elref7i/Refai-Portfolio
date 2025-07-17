import { ArrowDown } from "lucide-react";
import { scrollToAbout } from "../utils/scroll-to-about";

export default function ButtonScroll() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <button
        onClick={scrollToAbout}
        className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="text-sm mb-2 group-hover:animate-pulse">
          Discover More
        </span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </div>
  );
}
