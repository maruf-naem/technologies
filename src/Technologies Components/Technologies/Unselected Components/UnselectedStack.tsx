import type { DataType } from "../../../DataType";
import UnselectedCard from "./UnselectedCard";

interface DataProps {
  data: DataType[];
  selectedIds: string[];
  handleBtn: (value: string, value2: string , value3:DataType) => void;
}
const UnselectedStack = ({
  data,
  selectedIds,
  handleBtn,
}: DataProps) => {
  // console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((stack) => {
          return (
            <UnselectedCard
              key={stack.id}
              stack={stack}
              selectedIds={selectedIds}
              handleBtn={handleBtn}
            />
          );
        })}
      </div>
    </>
  );
};

export default UnselectedStack;
