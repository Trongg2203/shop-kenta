export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="container flex-grow mx-auto px-4">{children}</body>
      </html>
    );
  }