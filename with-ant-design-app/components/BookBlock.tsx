import { StarOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface BookBlockProps {
  book: Book;
}

interface Book {
  title: string;
  description: string;
  price: number | string;
  rating: number | string;
  author: string;
  coverImageKey: string;
}

export const BookBlock: React.FC<BookBlockProps> = ({ book }) => {
  const [rotation, setRotation] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <motion.div
      onClick={() => {
        setShowInfo(!showInfo);
        setRotation(rotation + 180);
      }}
      initial={{ scale: 0 }}
      animate={{
        rotateY: rotation,
        transition: { duration: 0.5 },
        overflow: "hidden",
        scale: 1,
      }}
      style={{ cursor: "pointer", width: "177px", height: "270px" }}
    >
      <AnimatePresence>
        {showInfo ? (
          <motion.div
            key="info"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              rotateY: 180,
              width: "100%",
              height: "100%",
              fontFamily: "'Ropa Sans', sans-serif",
              padding: "13px 17px",
            }}
            exit={{ opacity: 0 }}
          >
            <h3 style={{ fontSize: "25px", lineHeight: "26px" }}>
              {book.title}
            </h3>
            <span
              style={{
                fontSize: "16px",
                marginLeft: "auto",
                marginTop: "-14px",
                marginRight: "2px",
              }}
            >
              {book.author}
            </span>
            <p
              style={{
                lineHeight: "13px",
                fontSize: "11.8px",
                marginTop: "15px",
              }}
            >
              {book.description.split(" ").slice(0, 30).join(" ") + "..."}
            </p>
            <motion.span
              whileHover={{
                scale: 1.3,
              }}
              style={{
                fontSize: "12px",
                marginLeft: "auto",
                marginTop: "-12px",
                color: "#2D0059",
                cursor: "pointer",
              }}
            >
              Read More
            </motion.span>
            <div
              style={{
                display: "flex",
                marginTop: "auto",
                fontSize: "18px",
                lineHeight: "18px",
              }}
            >
              <span>
                $<span style={{ marginLeft: "2px" }}>{book.price}</span>
              </span>
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StarOutlined style={{ color: "#E04646" }} />
                <span>{`${book.rating}/5`}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cover"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
            exit={{ opacity: 0 }}
          >
            <Image
              priority
              src={`/img/${book.coverImageKey}`}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
