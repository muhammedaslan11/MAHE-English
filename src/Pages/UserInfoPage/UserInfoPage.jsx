import {
  FaRegCalendarDays,
  FaPaintbrush,
  FaClipboardQuestion,
  FaFire,
} from "react-icons/fa6";

import {
  PageContainer,
  Container,
  Row,
  Column,
} from "../../Components/GridWiev";

import { PopularQuestion } from "../../Components/PopularQuestion";
import { RecentQuestion } from "../../Components/RecentQuestion";
import { UserComment } from "../../Components/UserComment";
import { useState } from "react";

export const UserInfoPage = () => {
  const [state, setState] = useState(false);

  return (
    <PageContainer>
      <Container direction={"flex-col"}>
        <Column>
          <div style={{ width: "150px", height: "150px", alignSelf: "center" }}>
            <img
              className="w-full h-full rounded-full"
              src="https://minio.asggrup.com/storage/Root/5239-glomil/MuhammedAslan2.png"
              alt="user"
            />
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
            className="bg-white self-center  flex rounded-[10px] flex-col p-5 gap-2 text-center w-2/3"
          >
            <p
              style={{ borderBottom: "1px solid grey", paddingBottom: ".5rem" }}
            >
              Users Stats
            </p>
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col gap-2">
                <span>Joined Date</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaRegCalendarDays size={18} />
                  10/23/2000
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Created Questions</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaPaintbrush size={18} />
                  10
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Answered Questions</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaClipboardQuestion size={18} />
                  10
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Awrage Point</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaFire size={18} />
                  8.7
                </span>
              </div>
              <button onClick={() => setState(!state)}>a</button>
            </div>
          </div>
        </Column>
        <Column>
          <Row>
            <Column height={"530px"} width={"50%"}>
              {(state && (
                <>
                  <PopularQuestion url={"userinfo"} />
                  <PopularQuestion url={"userinfo"} />
                  <PopularQuestion url={"userinfo"} />
                  <PopularQuestion url={"userinfo"} />
                  <PopularQuestion url={"userinfo"} />
                </>
              )) || (
                <Column center={true}>
                  <RecentQuestion width={"80%"} />
                  <RecentQuestion width={"80%"} />
                  <RecentQuestion width={"80%"} />
                  <RecentQuestion width={"80%"} />
                  <RecentQuestion width={"80%"} />
                  <RecentQuestion width={"80%"} />
                  <RecentQuestion width={"80%"} />
                  <RecentQuestion width={"80%"} />
                </Column>
              )}
            </Column>
            <Column height={"530px"} width={"50%"}>
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
                className="bg-white flex rounded-[10px] flex-col p-5 gap-2"
              >
                <p
                  style={{
                    borderBottom: "1px solid grey",
                    paddingBottom: ".6rem",
                  }}
                  className="text-center"
                >
                  Comments About User
                </p>
                <UserComment />
                <UserComment />
                <UserComment />
                <UserComment />
                <UserComment />
              </div>
            </Column>
          </Row>
        </Column>
      </Container>
    </PageContainer>
  );
};
