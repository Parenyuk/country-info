"use client"
import { useTheme } from "next-themes";

import { themeColor } from "@/shared/helpers";


export default function Home() {
  const { theme } = useTheme();
  return (<div style={themeColor(theme)}>vic</div>);
}
