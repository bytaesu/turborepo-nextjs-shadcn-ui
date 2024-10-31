import { Badge } from "@repo/ui/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="space-x-2">
        <Badge>Turborepo</Badge>
        <Badge>Next.js</Badge>
        <Badge>shadcn/ui</Badge>
      </div>
      <h1 className="text-6xl font-medium">Boilerplate</h1>
    </div>
  );
}
