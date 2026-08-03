import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getPost, BLOG_POSTS } from "@/lib/content";
import { SITE } from "@/lib/site";
import NotFound from "@/pages/NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout
      title={`${post.title} | ${SITE.name}`}
      description={post.excerpt}
      canonical={`${SITE.domain}/blog/${post.slug}`}
    >
      <article className="pt-16 md:pt-24 pb-20">
        <div className="container-tight max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span key={t} className="text-[10px] uppercase tracking-widest text-primary font-medium">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-ink tracking-wide text-balance leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            {" · "}
            {post.readMinutes} min read
          </p>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <div className="mt-10 space-y-6 text-base text-ink/90 leading-relaxed">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-14 p-8 bg-gradient-soft border border-border/60 text-center">
            <h2 className="font-display text-3xl text-ink tracking-wide">Ready to move?</h2>
            <p className="mt-2 text-muted-foreground">Get a free Austin quote in under a minute.</p>
            <Button asChild variant="sun" size="lg" className="mt-6">
              <Link to="/get-a-quote">
                Start my free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="container-tight max-w-3xl mt-20">
            <h2 className="font-display text-3xl text-ink tracking-wide mb-6">Keep reading</h2>
            <ul className="space-y-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="text-ink hover:text-primary font-medium transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;
