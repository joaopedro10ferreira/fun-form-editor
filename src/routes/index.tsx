import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segredo da Insulina — Questionário" },
      { name: "description", content: "Questionário Segredo da Insulina." },
      { property: "og:title", content: "Segredo da Insulina — Questionário" },
      { property: "og:description", content: "Questionário Segredo da Insulina." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/segredo-da-insulina.html"
      title="Funil Segredo da Insulina"
      className="block h-dvh w-full border-0"
    />
  );
}
