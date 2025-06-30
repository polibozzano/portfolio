import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import grainImage from '@/assets/images/grain.jpg';
import { Footer } from "@/sections/Footer";
import Card from "@/components/Card";

type Props = {
    params: {
        slug: string;
    }
}

export async function generateStaticParams() {
    return [
        { slug: "vitta" },
        { slug: "promptinho" },
        { slug: "pokemon" },
    ];
}

export default async function ProjectPage({ params }: Props) {
    const filePath = path.join(process.cwd(), "src/content/projects", `${params.slug}.md`);

    let fileContent: string;
    try {
        fileContent = await fs.readFile(filePath, "utf8");
    } catch (e) {
        return notFound();
    }

    const { content, data } = matter(fileContent);

    return (
        <div className="min-h-screen bg-neutral-950 text-white relative z-0 overflow-x-clip">
            <div
                className='absolute inset-0 -z-10 opacity-10'
                style={{
                backgroundImage: `url(${grainImage.src})`,
                }}
            />

            <main className="container py-24 max-w-3xl mx-auto px-4">
                <a href="/" className="text-rose-500 mb-8 inline-block border border-rose-500 hover:bg-white/10 p-3 rounded-xl">← Voltar</a>
                
                <Card className="px-6 py-10 md:px-10 md:py-12">
                    <article className="prose prose-invert prose-headings:font-serif prose-a:text-rose-500">
                        <MDXRemote source={content} />
                    </article>
                </Card>
            </main>

            <Footer />
        </div>
    );
}