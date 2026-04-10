import BookingButton from "./BookingButton";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm border-t border-gold/30 p-3">
    <BookingButton variant="sticky">Reserve</BookingButton>
  </div>
);

export default StickyMobileCTA;
