import { Button } from "./button";
import { useLocale, toggleLocale } from "@/lib/i18n-store";

export default function LanguageToggle() {
  const locale = useLocale();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLocale}
      className="rounded-full cursor-pointer text-xs font-semibold"
      aria-label="Toggle language"
    >
      {locale === "es" ? "EN" : "ES"}
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
