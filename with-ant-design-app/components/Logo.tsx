import React from "react";
import Image from "next/image";
import { Typography } from "antd";

const { Title, Text } = Typography;

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          marginTop: "46px",
        }}
      >
        <div style={{ width: "100px", height: "100px", marginTop: "44px" }}>
          <Image
            className="logo"
            src="/img/logo.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <Title
          style={{
            fontSize: "144px",
            margin: 0,
            paddingRight: "88px",
            lineHeight: "169px",
          }}
        >
          React
        </Title>
      </div>
      <Text
        style={{
          fontSize: "48px",
          color: "#CE3333",
          margin: "-25px -30px 0 auto",
          letterSpacing: "0.075em",
        }}
      >
        Book Shelf
      </Text>
    </div>
  );
};
