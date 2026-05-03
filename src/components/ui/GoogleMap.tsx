type GoogleMapProps = {
  query: string;
};

export function GoogleMap({ query }: GoogleMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-card">
      <iframe
        title="Little Gems School location map"
        src={src}
        className="h-[360px] w-full border-0 sm:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
