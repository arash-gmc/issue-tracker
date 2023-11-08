import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <Pagination
      pageSize={10}
      currentPage={2}
      itemCount={100}
    />
  );
}
