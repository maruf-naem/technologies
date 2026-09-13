
const SelectedStack = () => {
  return (
    <div className="w-[260px] rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="text-2xl font-semibold text-slate-900">Your Stack</h4>

      <p className="mt-1 text-[16px] text-slate-400">3 Technologies Selected</p>

      <div className="mt-4">
        <h6 className="text-xs font-semibold text-slate-700">
          Your stack is empty.
        </h6>

        <p className="mt-1 text-[10px] leading-4 text-slate-400">
          Add technologies to build your stack.
        </p>
      </div>
    </div>
  );
};

export default SelectedStack;


// const SelectedStack = ({ selectedTechnologies = [] }) => {
//   return (
//     <div className="w-full max-w-[260px] rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
//       {/* Header */}
//       <div className="mb-4">
//         <h4 className="text-sm font-semibold text-slate-900">Your Stack</h4>

//         <p className="mt-1 text-[10px] font-medium text-slate-400">
//           {selectedTechnologies.length} Technologies Selected
//         </p>
//       </div>

//       {/* Selected technologies */}
//       {selectedTechnologies.length > 0 ? (
//         <div className="space-y-2">
//           {selectedTechnologies.map((tech) => (
//             <div
//               key={tech.name}
//               className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2.5 transition hover:border-slate-300 hover:shadow-sm"
//             >
//               <div className="flex items-center gap-2.5">
//                 {/* Technology icon */}
//                 <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-50">
//                   {tech.icon ? (
//                     <img
//                       src={tech.icon}
//                       alt={tech.name}
//                       className="h-4 w-4 object-contain"
//                     />
//                   ) : (
//                     <span className="text-xs font-bold text-pink-500">
//                       {tech.name?.charAt(0)}
//                     </span>
//                   )}
//                 </div>

//                 <div>
//                   <p className="text-[11px] font-semibold text-slate-800">
//                     {tech.name}
//                   </p>

//                   {tech.category && (
//                     <p className="text-[8px] text-slate-400">{tech.category}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Remove */}
//               <button
//                 type="button"
//                 className="text-slate-400 transition hover:text-slate-700"
//                 aria-label={`Remove ${tech.name}`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="h-4 w-4"
//                 >
//                   <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 0 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
//                 </svg>
//               </button>
//             </div>
//           ))}

//           {/* Remove all */}
//           <button
//             type="button"
//             className="mt-2 w-full rounded-md border border-red-200 bg-white py-2 text-[10px] font-medium text-red-500 transition hover:bg-red-50"
//           >
//             Remove All
//           </button>
//         </div>
//       ) : (
//         /* Empty state */
//         <div className="rounded-md border border-dashed border-slate-200 bg-slate-50/50 px-4 py-6 text-center">
//           <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               className="h-4 w-4 text-slate-400"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 6v12m6-6H6"
//               />
//             </svg>
//           </div>

//           <h6 className="text-[11px] font-semibold text-slate-700">
//             Your stack is empty.
//           </h6>

//           <p className="mt-1 text-[9px] leading-4 text-slate-400">
//             Add technologies to build your stack.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectedStack;
