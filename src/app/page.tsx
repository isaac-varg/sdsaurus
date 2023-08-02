import GeneratePDF from "@/components/GeneratePDF";
import StateInitiator from "./StateInitiator";

export default async function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen">

      <GeneratePDF />

      <StateInitiator />
    </main>
  );
}
