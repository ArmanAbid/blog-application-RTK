import Filters from "../components/filters/Filters";
import BlogGrid from "../components/grid/BlogGrid";

export default function Home() {
  return (
    <section className="wrapper">
      <Filters />
      <BlogGrid />
    </section>
  );
}
