// app/layout.tsx
export const metadata = {
  title: "Boost Your Immunity Naturally",
  description: "Learn how to improve your health with natural remedies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ SEO/Nytro Script */}
        <script
          src="https://cdn.nytroseo.com/YOUR-SITE-ID.js"
          async
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
