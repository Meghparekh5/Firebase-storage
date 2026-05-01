export default function SearchFilter({ setSearch }) {
  return (
    <input
      placeholder="Search files..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}