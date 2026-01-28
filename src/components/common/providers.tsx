import { ImageKitProvider } from "@imagekit/react";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/k7i5qspzd2">
      {children}
    </ImageKitProvider>
  );
}
