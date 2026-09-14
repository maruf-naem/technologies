import { RxCross1 } from "react-icons/rx";
import type { DataType } from "../../../DataType";

interface Selectedstacks {
  selectedstacks: DataType[];
  handletheSelectedBtn: () => void;
  handleSelectedStack: (value:string)=> void;
}

const SelectedStack = ({
  selectedstacks,
  handletheSelectedBtn,
  handleSelectedStack
}: Selectedstacks) => {
  return (
    <div className="w-full max-w-[260px] rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h4 className="text-[24px] font-semibold text-slate-900">Your Stack</h4>

        <p className="mt-1 text-[16px] font-medium text-slate-400">
          <span className="text-[20px] font-bold text-slate-900">
            {selectedstacks.length}
          </span>{" "}
          Technologies Selected
        </p>
      </div>

      {selectedstacks.length > 0 ? (
        <div className="w-[235px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          {selectedstacks.map((item) => {
            return (
              <div
                key={item.name}
                className="flex h-[54px] items-center rounded-lg border border-gray-200 bg-white px-2"
              >
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="ml-2 flex-1">
                  <h5 className="text-[11px] font-medium text-gray-800">
                    {item.name}
                  </h5>

                  <p className="mt-0.5 text-[10px] text-gray-400">
                    {item.category}
                  </p>
                </div>

                <button
                  type="button"
                  className="flex h-6 w-6 items-center justify-center text-gray-400 transition hover:text-gray-600"
                  onClick={() => {handleSelectedStack(item.id)}}
                >
                  <RxCross1 size={13} strokeWidth={1.5} />
                </button>
              </div>
            );
          })}

          <button
            type="button"
            className="mt-3 h-9 w-full rounded-lg border border-red-300
               bg-white text-[11px] font-medium text-red-500
               transition hover:bg-red-50"
            onClick={() => {
              handletheSelectedBtn();
            }}
          >
            Remove All
          </button>
        </div>
      ) : (
        <div className="rounded-md border border-dashed border-slate-200 bg-slate-50/50 px-4 py-6 text-center">
          <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </div>

          <h6 className="text-[11px] font-semibold text-slate-700">
            Your stack is empty.
          </h6>

          <p className="mt-1 text-[9px] leading-4 text-slate-400">
            Add technologies to build your stack.
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedStack;
