import { ReactNode, useEffect, useState } from "react";

type BlinkooModule = typeof import("@blinkoo/components");

export interface BaseProps {
  children?: ReactNode;
}

const BlinkooComponentWrapper = ({ children }: BaseProps) => {
  const [blinkooModule, setBlinkooModule] = useState<BlinkooModule>();

  useEffect(() => {
    // React > 18 in development mode runs this useEffect twice
    // To avoid double blinkoo module initialization, we check if the module
    // already exists
    if (blinkooModule) return;

    import("@blinkoo/components").then((blinkooModule) => {
      setBlinkooModule(blinkooModule);
    });
  }, []);

  if (!blinkooModule) return null;
  return <span>{children}</span>;
};

export default BlinkooComponentWrapper;
