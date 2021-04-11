import React from "react";
import { Button } from "antd";
import { MyLayout } from "../components/MyLayout";
import { Logo } from "../components/Logo";
import { BookSearchBlock } from "../components/BookSearchBlock";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return (
    <MyLayout>
      <Logo />
      <BookSearchBlock />
    </MyLayout>
  );
};

export default Index;
