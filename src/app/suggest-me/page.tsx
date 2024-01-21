import Container from "@/components/Container";
import ListContent from "./_components/ListContent";

export default async function Page() {
  return (
    <main>
      <Container className="pt-[150px]">
        <h1 className="text-grey-50 font-semibold text-5xl md:text-[64px]">
          Suggest me
        </h1>
        <p className="text-sm md:text-base text-grey-300 mt-4 mb-6 w-full max-w-[588px]">
          I will really appericiate it if you take time to suggest me something
          good to watch.
        </p>
        <ListContent />
      </Container>
    </main>
  );
}
