import React from "react";
import {
  differenceInDays,
  formatDistance,
  formatDistanceToNow,
} from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date(taskObj.deadline);
  const difDays = formatDistanceToNow(date, {
    addSuffix: true,
    locale: tr,
  });
  const accentClass =
    differenceInDays(date, new Date()) <= 3 ? "normal" : "urgent";
  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb_(0,0,0,0.1)">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-sm pt-1">
        son teslim:{" "}
        <span className={`${accentClass} py-1 px-2 inline-block rounded-sm`}>
          {difDays}
        </span>
      </div>
      <p className="pt-2 pb-3 px-0 text-sm text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-[5px] px-3 text-base border-solid border-2 ml-1 border-[#ccc] rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0,0,0,0.05) rounded-[3px] pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
