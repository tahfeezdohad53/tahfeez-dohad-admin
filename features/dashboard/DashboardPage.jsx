'use client';

import { HiMiniUsers } from "react-icons/hi2"
import useBatches from "./hooks/useBatches";
import { randomColors } from "../accounts/AccountRow";

function DashboardPage() {
    const {data} = useBatches();
    console.log(data);
    return (
      <div className="grid grid-cols-4 gap-5">
        {data?.map((el,i) => {
            return (
              <div key={i} className={`rounded-md shadow-(--shadow-sm)  ${randomColors[i]} px-5 py-2 `}>
                <div className=" text-lg p-3 space-y-5">
                  <h1 className="text-2xl">{el.batch.toUpperCase()}</h1>
                  <div className="flex items-center gap-8">
                    <HiMiniUsers className="text-3xl" />
                    <h1 className="text-4xl">{el.count}</h1>
                  </div>
                  <p>Students</p>
                </div>
              </div>
            );
        })}
      </div>
    );
}

export default DashboardPage
