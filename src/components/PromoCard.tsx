import BookingButton from "./BookingButton";

interface PromoCardProps {
  tag: string;
  title: string;
  description: string;
  dateRange?: string;
  showPlaceholder?: boolean;
  image?: string;
}

const PromoCard = ({ tag, title, description, dateRange, showPlaceholder = false, image }: PromoCardProps) => (
  <div className="bg-card border border-gold/20 rounded-lg p-6 md:p-8 flex flex-col">
    {image ? (
      <div className="w-full aspect-video rounded-lg overflow-hidden border border-gold/20 mb-5">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    ) : showPlaceholder ? (
      <div className="w-full aspect-video rounded-lg bg-muted border border-gold/20 flex items-center justify-center mb-5">
        <span className="text-gold/40 text-sm font-body">Photo coming soon</span>
      </div>
    ) : null}
    <span className="inline-block self-start bg-gold/15 text-gold border border-gold/30 text-xs font-body tracking-elegant uppercase px-3 py-1 rounded-full mb-4">
      {tag}
    </span>
    <h3 className="font-heading text-2xl font-medium text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4 flex-1">{description}</p>
    {dateRange && (
      <p className="text-xs text-muted-foreground font-body mb-4">{dateRange}</p>
    )}
    <BookingButton variant="secondary">Reserve</BookingButton>
  </div>
);

export default PromoCard;
