import {
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NotesItemProps } from "../types";

const NotesItem: React.FC<NotesItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-evenly border bg-white rounded-xl p-3 h-52">
      <div className="flex justify-end">
        <div>
          <EllipsisHorizontalIcon className="size-5" />
        </div>
      </div>
      <>
        <hr />
      </>
      <div className="h-2/3 overflow-auto font-medium">
        <div className="text-lg text-blue-800">{title}</div>
        <div className="text-blue-950">{description}</div>
      </div>
      <>
        <hr />
      </>
      <div className="flex justify-between items-center">
        <div>
          <span>Date</span>
        </div>
        <div className="flex gap-4">
          <span>
            <HandThumbUpIcon className="size-5" />
          </span>
          <span>
            <HandThumbDownIcon className="size-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
