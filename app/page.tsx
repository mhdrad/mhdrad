import { ArticleCard } from "@/components/article-card";
import Image from "next/image";

const FAKE_POST = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4">
        <ArticleCard title={FAKE_POST.title} content={FAKE_POST.content} />
        <ArticleCard title={FAKE_POST.title} content={FAKE_POST.content} />
        <ArticleCard title={FAKE_POST.title} content={FAKE_POST.content} />
      </div>
    </main>
  );
}
