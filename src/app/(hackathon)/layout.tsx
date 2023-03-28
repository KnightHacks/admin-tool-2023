import { InfoHeader } from "./InfoHeader";

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <InfoHeader />
      {children}
    </>
  );
}
