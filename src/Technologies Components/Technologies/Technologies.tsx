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
  const [selectedstacks, setSelectedStacks] = useState<DataType[]>([]);
  const [dataStack, setDataStack] = useState<DataType[]>(data);
  console.log(dataStack);
  

  const handletheSelectedBtn = ()=>{
    setSelectedStacks([])
    toast("All Data Removed Successfully")
  }

  const handleSelectedStack = (value:string)=>{
    let x = selectedstacks.filter((item)=>{
      return item.id !== value
    })
    setSelectedStacks(x)
    setDataStack(data);
  }

  const handleBtn = (value: string, value2: string, value3:DataType) => {
    toast.success(`${value2} is Added Successfully`);
    setSelectedIds([...selectedIds, value]);
    setSelectedStacks([...selectedstacks, value3])
  };  

  return (
    <div className="container m-auto flex gap-5">
      <UnselectedStack
        data={dataStack}
        selectedIds={selectedIds}
        handleBtn={handleBtn}
      />
      <SelectedStack
        selectedstacks={selectedstacks}
        handleSelectedStack={handleSelectedStack}
        handletheSelectedBtn={handletheSelectedBtn}
      />
    </div>
  );
};

export default Technologies;
