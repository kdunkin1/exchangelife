import ModulePageClient from "./ModulePageClient";

export default function Page({ params }: { params: { slug: string } }) {
  return <ModulePageClient slug={params.slug} />;
}

