import React from "react";
import { Layout } from "antd";

interface LayoutProps {}

export const MyLayout: React.FC<LayoutProps> = ({ children }) => {
  return <Layout className="myLayout">{children}</Layout>;
};
