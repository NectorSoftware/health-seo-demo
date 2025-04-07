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
       <script src="https://plugin.nytsys.com/api/site/162195d5-6196-45ad-849e-e9ea6e2b8331/nytsys.min.js" >
async
</script>
      </head>
      <body>{children}</body>
    </html>
  );
}
