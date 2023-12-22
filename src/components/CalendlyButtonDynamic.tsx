import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("../components/CalendlyButton"), {
  ssr: false
});


export default function CalendlyButtonDynamic(
    { variant = "main" }: { variant?: "main" | "white" }
) {
  return (
    <div>
      <Calendly variant={variant} />
    </div>
  );
}