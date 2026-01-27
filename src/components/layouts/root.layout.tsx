import type { PropsWithChildren } from "react";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mayoblox - Sahabat Robloxmu</title>
        <Meta />
        <Links />
      </head>
      <body className="font-jakarta">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
