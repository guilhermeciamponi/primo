import OrnamentalDivider from "./OrnamentalDivider";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

const SectionTitle = ({ label, title, subtitle, className = "", align = "center" }: SectionTitleProps) => (
  <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
    {label && (
      <span className="font-body text-xs tracking-wide-elegant uppercase text-muted-foreground mb-3 block">
        {label}
      </span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
      {title}
    </h2>
    <OrnamentalDivider className={`mt-4 mb-3 ${align === "left" ? "justify-start" : ""}`} />
    {subtitle && (
      <p className="text-muted-foreground font-body text-sm md:text-base max-w-xl mx-auto mt-2">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
