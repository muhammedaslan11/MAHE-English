import {
  PageContainer,
  Container,
  Row,
  Column,
} from "../../Components/GridWiev";
import { PopularQuestion } from "../../Components/PopularQuestion";

export const UserPage = () => {
  return (
    <PageContainer>
      <Container>
        <Column>
          <div className="flex items-center flex-col gap-3">
            <div className="w-40 h-40">
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
              className="bg-white flex rounded-[10px] flex-col p-5 gap-2"
            >
              <p>Muhammad Kaplan</p>
              <span>d1 seviyesi</span>
            </div>
          </div>
        </Column>
        <Row>
          <Column width={"60%"}>
            <PopularQuestion />
          </Column>
          <Column width={"40%"}>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
              className="bg-white flex rounded-[10px] flex-col p-5 gap-2"
            >
              sdfsdf
            </div>
          </Column>
        </Row>
      </Container>
    </PageContainer>
  );
};
