import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug?: string[] };
}

export default function Page({ params }: PageProps) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return (
    <DocsPage>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <div className="prose dark:prose-invert max-w-none">
          <p>Documentation content for: {params.slug?.join('/') || 'home'}</p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
