import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { BLOG_POSTS } from "@/lib/content";
import { SITE } from "@/lib/site";

const Blog = () => {
  return (
    <Layout
      title={`Moving Tips & Blog | ${SITE.name} Austin`}
      description="Austin moving tips, packing guides, and checklists from Moving Day Heroes."
      canonical={`${SITE.domain}/blog`}
    >
      <section className="bg-gradient-soft pt-16 pb-12 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Blog</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink tracking-wide text-balance">
            The knowledge <span className="text-primary">hub</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tips, guides, and stories to make your Austin move smoother — from packing dishes to long-distance checklists.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="flex flex-col border border-border/60 bg-card p-6 hover:border-primary/40 transition-colors">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-2xl text-ink tracking-wide leading-tight">
                <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  {" · "}
                  {post.readMinutes} min read
                </span>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-ink hover:text-primary font-medium">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
