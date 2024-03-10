import "./globals.css";

import Navigation from "../components/organisms/Navigation/Navigation";
import WriteMe from "../components/templates/WriteMe/WriteMe";

import content from "../public/assets/content/content.json";

export const metadata = {
  title: "Marco Mazzai | Personal Portfolio",
  description: "Remote Frontend Developer Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationData = content.navigation;

  return (
    <html lang="en">
      <body>
        <Navigation navigationData={navigationData} />
        {children}
        <WriteMe />
      </body>
    </html>
  );
}
