import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

type Tag = {
  slug: string;
  name: string;
};

export default function TagPage({ tag }: { tag: Tag }) {
  return (
    <main>
      <h1>{tag.name}</h1>
    </main>
  );
}

function loadTags(): Tag[] {
  const filePath = path.join(process.cwd(), "data", "tags.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = loadTags();

  const paths = tags.map((t) => ({
    params: { slug: t.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const tags = loadTags();
  const tag = tags.find((t) => t.slug === slug);

  return {
    props: { tag },
  };
};
