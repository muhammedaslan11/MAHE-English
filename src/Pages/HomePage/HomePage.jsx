import { useState } from "react";
import { Container, Column, Row } from "../../Components/GridWiev";
import { PopularQuestion } from "../../Components/PopularQuestion";
import { RecentQuestion } from "../../Components/RecentQuestion";

export const HomePage = () => {
  const [level, setLevel] = useState("a1");
  const levels = ["a1", "a2", "b1", "b2", "c1", "c2"];
  console.log(level);
  return (
    <div
      style={{ backgroundColor: "#E0F4FF" }}
      className="w-screen h-screen flex justify-center"
    >
      <Container>
        <Column
          backgroundColor={"white"}
          // border={"1px solid #6a6c6e"}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          width={"32%"}
        >
          {levels.map((level, key) => (
            <button
              onClick={() => setLevel(level)}
              key={key}
              style={{
                backgroundColor: "lightGrey",
              }}
              className="p-3 rounded-[10px]"
            >
              {level} Seviyesi
            </button>
          ))}
        </Column>
        <Column>
          <div
            className="p-3 rounded-[10px]"
            style={{ backgroundColor: "lightGrey" }}
          >
            <Row direction={"flex-row-reverse"}>
              <p>Home Page</p>
              <p>All Questions</p>
              <p>User</p>
              <p>Settings</p>
            </Row>
          </div>

          <Row>
            <Column height={"820px"} overflow={"scroll"} className={"media"}>
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
            </Column>
            <Column height={"820px"} overflow={"scroll"}>
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
            </Column>
          </Row>
        </Column>
      </Container>
    </div>
  );
};
