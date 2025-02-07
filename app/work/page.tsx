import { WorkPosts } from "@/app/ui/workPosts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="max-w-screen-xl mx-auto px-5 sm:px-10 xl:px-16 font-semibold text-2xl tracking-tighter">
        My Works
      </h1>
      <WorkPosts />
    </section>
  );
}
