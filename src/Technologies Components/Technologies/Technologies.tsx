import UnselectedStack from "./Unselected Components/UnselectedStack";
import SelectedStack from "./Selected Components/SelectedStack";
import { use, useState } from "react";
import type { DataType } from "../../DataType";
import { toast } from "react-toastify";

interface DataProps {
  datas: Promise<DataType[]>;
}

const Technologies = ({ datas }: DataProps) => {
  let data = use(datas);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleBtn = (value: string, value2: string) => {
   
    toast.success(`${value2} is Added Successfully`);
    setSelectedIds([...selectedIds, value]);
  };

  return (
    <div className="container m-auto flex gap-5">
      <UnselectedStack
        data={data}
        selectedIds={selectedIds}
        handleBtn={handleBtn}
      />
      <SelectedStack />
    </div>
  );
};

export default Technologies;
