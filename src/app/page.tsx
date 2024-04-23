import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-12 p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button>Click me</Button>
      <Image src="/next.svg" alt="logo" width={200} height={200} />
    </main>
  );
}
