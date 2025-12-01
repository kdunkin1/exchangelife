// app/modules/[slug]/page.tsx

import ModulePageClient from "./ModulePageClient";

export default function Page({ params }: { params: { slug: string } }) {
  return <ModulePageClient slug={params.slug} />;
}


