import Image from "next/image";

interface HeroProps {
  name: string;
  title: string;
  imageUrl: string;
}

export function Hero({ name, title, imageUrl }: HeroProps) {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-8">
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-full object-cover border-2 border-primary/20"
          priority
        />
      </div>
      <div className="text-center sm:text-left space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {name}
        </h1>
        <p className="text-xl text-muted-foreground">{title}</p>
      </div>
    </section>
  );
}
