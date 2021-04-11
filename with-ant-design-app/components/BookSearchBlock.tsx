import React, { useState } from "react";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { BookBlock } from "./BookBlock";
import { Row, Col } from "antd";
import data from "../data.json";
import { motion } from "framer-motion";

const { Search } = Input;

interface BookSearchBlockProps {}
const booksData = data;

export const BookSearchBlock: React.FC<BookSearchBlockProps> = ({}) => {
  const [searchInput, setSerchInput] = useState(null);
  const [amountOfShownBooks, setAmountOfShownBooks] = useState(10);

  let data = [];
  for (let i = 0; i < booksData.data.length; i++) {
    if (
      searchInput === null ||
      booksData.data[i].title.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      data.push(
        <Col key={i} style={{ paddingBottom: "44px" }}>
          <BookBlock book={booksData.data[i]} />
        </Col>
      );
    }
  }
  if (data.length > amountOfShownBooks) {
    data = data.slice(0, amountOfShownBooks);
  }

  return (
    <div
      style={{
        marginBottom: "46px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Search
        style={{ marginTop: "25px", marginBottom: "60px", width: "100%" }}
        placeholder="Search"
        enterButton={<SearchOutlined style={{ fontSize: 34 }} />}
        onSearch={(value) => {
          setSerchInput(value);
          setAmountOfShownBooks(10);
        }}
      />
      <Row gutter={85}>
        {data.length > 0 ? (
          data
        ) : (
          <div
            style={{
              fontFamily: "Roboto",
              fontSize: "50px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {`No Books Found :(`}
          </div>
        )}
      </Row>
      {amountOfShownBooks > data.length ? null : (
        <motion.div
          whileHover={{ y: "-10%" }}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Button
            onClick={() => setAmountOfShownBooks(amountOfShownBooks + 10)}
            style={{
              fontSize: "20px",
              fontFamily: "Roboto",
              marginTop: "-5px",
              lineHeight: "20px",
              padding: "4px 25px",
              borderRadius: "8px",
              borderColor: "#CE3333",
              color: "#CE3333",
              backgroundColor: "unset",
              width: "max-content",
            }}
          >
            Show More
          </Button>
        </motion.div>
      )}
    </div>
  );
};
