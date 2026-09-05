import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <p className="font-display text-sm uppercase tracking-[0.22em] text-coral">404</p>
        <h1 className="mt-4 font-display text-5xl tracking-tight text-ink sm:text-7xl">Signal lost.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink/60">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
