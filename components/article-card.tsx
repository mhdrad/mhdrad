import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type PostCardProps = {
  title: string;
  content: string;
};

export function ArticleCard({ title, content }: PostCardProps) {
  return (
    <Link
      href="/"
      className="
        rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        hover:bg-accent hover:text-accent-foreground"
    >
      <Card className="hover:bg-inherit hover:text-inherit">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
