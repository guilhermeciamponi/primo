interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  showPhoto?: boolean;
  image?: string;
}

const MenuItem = ({ name, description, price, showPhoto = false, image }: MenuItemProps) => (
  <div className="flex gap-4 py-5 border-b border-gold/20 last:border-b-0">
    {showPhoto && (
      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-gold/20">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-gold/30 text-[10px] font-body">Photo</span>
          </div>
        )}
      </div>
    )}
    <div className="flex-1 flex justify-between items-start gap-4">
      <div className="flex-1">
        <h4 className="font-heading text-lg md:text-xl font-medium text-foreground">{name}</h4>
        <p className="text-muted-foreground text-sm font-body mt-1 leading-relaxed">{description}</p>
      </div>
      <span className="font-heading text-lg text-gold whitespace-nowrap mt-0.5">{price}</span>
    </div>
  </div>
);

export default MenuItem;
