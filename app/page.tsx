import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>Hello NEXT JS</div>
      {process.env.API_KEY}
    </main>
  );
}
