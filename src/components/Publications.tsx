import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

interface PublicationItem {
  title: string;
  authors: string;
  externalLink: string;
  datePublished: string;
  book: string;
  publisher: string;
  
}

interface PublicationProps {
  publication: PublicationItem[];
}

export function Publication({ publication }: PublicationProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Publications</h2>
      <div className="space-y-6">
        {publication.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.book}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{item.datePublished}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.publisher}
                  </p>
                </div>
              </div>
              <Link
                  href={item.externalLink}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                </Link>
            </CardHeader>
            <CardContent>
            {/* <p className="text-sm text-muted-foreground">
                {item.description}
              </p> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
