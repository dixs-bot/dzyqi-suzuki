"use client";

import dynamic from "next/dynamic";
import { LoadingProgress } from "./LoadingProgress";

export const CarViewerDynamic = dynamic(
  () => import("./CarViewer").then((m) => m.CarViewer),
  {
    ssr: false,
    loading: () => <LoadingProgress progress={8} />,
  }
);
