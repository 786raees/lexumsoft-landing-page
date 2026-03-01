import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-warm-dark">
      <Container className="text-center">
        <p className="font-heading text-6xl font-bold text-amber sm:text-7xl lg:text-8xl">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">Page Not Found</h1>
        <p className="mt-2 text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button variant="cta" size="lg" className="mt-8" asChild>
          <a href="/">Go Back Home</a>
        </Button>
      </Container>
    </div>
  );
}
