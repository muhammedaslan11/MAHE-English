import { Card, DonutChart, Title } from "@tremor/react";
import Sidebar from "../../Components/Sidebar/Sidebar";

const cities = [
  {
    name: " Yanlış Sayısı",
    sales: 25,
  },
  {
    name: "Doğru Sayısı",
    sales: 60,
  },
];

const UserSettings = () => {
  const valueFormatter = (number) =>
    ` ${new Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <div className="flex gap-5 ">
      <div className="flex flex-row h-screen  w-full ">
        <Sidebar />

        <div className="user-setting-information w-full ">
          <div className=" h-full  flex flex-col  w-full  justify-center align-center gap-2 ">
            <div className="m-6">
              <Card className="mx-auto">
                <Title className="text-white">Doğru Yanlış Sayıları</Title>
                <DonutChart
                  className="mt-6"
                  data={cities}
                  category="sales"
                  index="name"
                  valueFormatter={valueFormatter}
                  colors={["rose", "green"]}
                />
              </Card>
            </div>

            <div className="border border-white p-4 rounded-xl m-4 w-52  ">
              Kaç Soruda etkileşimde bulunmuş yorum yapmış vs.
            </div>

            <div className="border border-white p-4 rounded-xl m-4 w-52 ">
              Kullanıcı Seviyesi
            </div>

            <div className="border border-white p-4 rounded-xl m-4 w-52">
              Kaç Soru Yapmış
            </div>

            <div className="border border-white p-4 rounded-xl m-4  w-52 ">
              Başarı Oranı
            </div>

            <div className="border border-white p-4 rounded-xl m-4 w-52 ">
              Puanı
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
