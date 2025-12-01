import ModulePageClient from "./ModulePageClient";
import { getAllModules } from "@/app/lib/exchangeLife";

type PageProps = {
  params: { slug: string };
};

export default function Page({ params }: PageProps) {
  // Keep the server component very small; the client component handles
  // all interactive behavior.
  return <ModulePageClient slug={params.slug} />;
}

// This lets Next/typedRoutes know which slugs are valid
export function generateStaticParams() {
  const modules = getAllModules();
  return modules.map((m) => ({ slug: m.slug }));
}
