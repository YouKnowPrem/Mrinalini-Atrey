export const metadata = {
  title: "Studio | Dr. Mrinalini Atrey Portfolio Admin",
  description: "Sanity Studio content editor",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
