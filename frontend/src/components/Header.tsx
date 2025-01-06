import Link from "next/link";

export default function Header() {
  return (
    <header className="Home-header">
      <h1 className="Home-header-title">Checkpoint: frontend</h1>
      <Link href="/" className="Home-header-label">
        countries
      </Link>
    </header>
  );
}
