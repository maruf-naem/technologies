import UnselectedStack from "./Unselected Components/UnselectedStack";
import SelectedStack from "./Selected Components/SelectedStack";
import { use } from "react";
import type { DataType } from "../../DataType";

interface DataProps {
  datas: Promise<DataType[]>;
}

const Technologies = ({ datas }: DataProps) => {
  let data = use(datas);

  return (
    <div className="container m-auto">
      <UnselectedStack data={data} />
      <SelectedStack />
    </div>
  );
};

export default Technologies;
