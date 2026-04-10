import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const bookingButtonVariants = cva(
  "inline-flex items-center justify-center font-body text-sm tracking-elegant uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-navy-light border border-primary px-8 py-3.5 rounded-lg",
        secondary: "bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-cream px-8 py-3.5 rounded-xl",
        hero: "bg-primary text-primary-foreground hover:bg-navy-light border border-primary px-10 py-4 rounded-lg text-base",
        sticky: "bg-gold text-cream hover:bg-gold-light px-6 py-3 rounded-lg w-full font-medium",
        minimal: "text-gold hover:text-foreground underline underline-offset-4 decoration-gold/50 px-0 py-1",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface BookingButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof bookingButtonVariants> {
  children: React.ReactNode;
}

const BookingButton = ({ variant, className, children, ...props }: BookingButtonProps) => (
  <a
    href="https://booking-link-placeholder.com"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(bookingButtonVariants({ variant, className }))}
    {...props}
  >
    {children}
  </a>
);

export default BookingButton;
