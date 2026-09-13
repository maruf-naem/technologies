import type { DataType } from "../../../DataType";
import UnselectedCard from "./UnselectedCard";

interface DataProps {
  data: DataType[]
}
const UnselectedStack = ({ data }: DataProps) => {
  // console.log(data);
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {
          data.map((stack)=>{
            return <UnselectedCard key={stack.id} stack = {stack}/>
          })
        }
      </div>
    </>
  );
};

export default UnselectedStack;
