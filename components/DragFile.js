import { DragCard } from "../pages/DragCrad";

const Data = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Javascript" },
    { name: "Python" },
  ];

  export function DragFile() {
    return (
      <div className="my-8 mx-8 rounded-xl border w-fit">
        <div className="my-4">
          <div>
            <p className="mx-16 font-bold">Draged Items</p>
          </div>
          {Data.map((e) => (
            <div
              key={e.name}
              className="border w-fit my-2 p-2 mx-16 rounded bg-indigo-400 text-white font-bold cursor-pointer"
            >
              <DragCard draggable name={e.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default DragFile;