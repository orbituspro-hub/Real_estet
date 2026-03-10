export const metadata = {
  title: "Real Estate CRM",
  description: "Подбор недвижимости",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
