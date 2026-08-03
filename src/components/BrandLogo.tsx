import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import logoStacked from "@/assets/logo-stacked.png";
import logoMark from "@/assets/logo-mark.png";

type BrandLogoProps = {
  /** horizontal = navbar/footer · stacked = everywhere else */
  variant?: "horizontal" | "stacked";
  className?: string;
  imgClassName?: string;
};

/** Horizontal: hero mark + MOVING DAY HEROES on one line */
const HorizontalLogo = ({ className, imgClassName }: Omit<BrandLogoProps, "variant">) => (
  <span className={cn("inline-flex items-center gap-2.5 md:gap-3", className)}>
    <img
      src={logoMark}
      alt=""
      aria-hidden="true"
      className={cn("h-10 md:h-12 w-auto object-contain", imgClassName)}
    />
    <span className="flex items-baseline gap-1.5 md:gap-2 leading-none">
      <span className="font-heroes text-[1.45rem] md:text-[1.85rem] tracking-[0.02em] text-primary uppercase">
        Moving Day
      </span>
      <span className="font-heroes text-[1.45rem] md:text-[1.85rem] tracking-[0.02em] text-ink uppercase">
        Heroes
      </span>
    </span>
  </span>
);

/** Stacked: full long logo with MOVING DAY over HEROES */
const StackedLogo = ({ className, imgClassName }: Omit<BrandLogoProps, "variant">) => (
  <img
    src={logoStacked}
    alt={SITE.name}
    className={cn("h-auto w-auto max-w-full object-contain", imgClassName, className)}
  />
);

const BrandLogo = ({ variant = "stacked", className, imgClassName }: BrandLogoProps) => {
  if (variant === "horizontal") {
    return <HorizontalLogo className={className} imgClassName={imgClassName} />;
  }
  return <StackedLogo className={className} imgClassName={imgClassName} />;
};

export default BrandLogo;
