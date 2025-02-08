import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/ui/mdx";
import { getWorkPosts } from "@/app/work/utils";
import { RiTimeLine } from "react-icons/ri";
import Image from "next/image";

export async function generateStaticParams() {
  let posts = getWorkPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let post = getWorkPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    duration: duration,
    summary: description,
    imageUrl,
  } = post.metadata;
  let ogImage = imageUrl
    ? imageUrl
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      duration,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function addBaseUrlToContent(content: string, baseUrl: string): string {
  // Add base URL to image sources
  content = content.replace(/<img\s+src=["'](\/[^"']+)["']/g, (match, src) => {
    return match.replace(src, `${baseUrl}${src}`);
  });

  // Add base URL to PDF links
  content = content.replace(
    /<a\s+href=["'](\/[^"']+\.pdf)["']/g,
    (match, href) => {
      if (!href.startsWith("http") && href.startsWith("/")) {
        return match.replace(href, `${baseUrl}${href}`);
      }
      return match;
    }
  );

  return content;
}

export default function Blog({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let post = getWorkPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            duration: post.metadata.duration,
            description: post.metadata.summary,
            image: post.metadata.imageUrl
              ? `${baseUrl}${post.metadata.imageUrl}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <Image
        src={`${baseUrl}/${post.metadata.imageUrl}`}
        alt=""
        width={800}
        height={400}
      />
      <div className="flex items-center space-x-2 mt-4 mb-3 text-lg text-gray-600 dark:text-gray-300">
        <RiTimeLine /> {"  "}
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {post.metadata.duration}
        </span>{" "}
      </div>
      <article className="prose">
        <CustomMDX source={addBaseUrlToContent(post.content, baseUrl)} />
      </article>
    </section>
  );
}
