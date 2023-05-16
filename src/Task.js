import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadlineDifference = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  });

  const dayDifference =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3;
  const stylingSpan = "inline-block py-[3px] px-2 rounded-sm ";
    return (
    <div className="p-6	bg-white rounded-[5px] mt-4 leading-normal shadow-[0_4px_5px_0_rgb(0,0,0,10%)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        Son teslim:{" "}
        <span className={dayDifference ? stylingSpan + "bg-[#ffd9d4]" : stylingSpan + "bg-[#d2d5fd]"}>
          {deadlineDifference}
        </span>
      </div>
      <p className="pt-2 px-0 pb-3 text-sm	text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block	py-[5px] px-3 text-sm	border border-solid	border-[#ccc] mr-1 mb-1.5	rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0,0,0,5%)] rounded-[3px] cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
