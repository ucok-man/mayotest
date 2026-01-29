import { ImageKitProvider } from "@imagekit/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { queryClient } from "~/lib/query-client";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageKitProvider urlEndpoint="https://ik.imagekit.io/k7i5qspzd2">
        {children}
      </ImageKitProvider>
    </QueryClientProvider>
  );
}
