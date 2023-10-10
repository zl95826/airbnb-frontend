import "../globals.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section style={{ backgroundColor: "red" }}>{children}</section>;
}
