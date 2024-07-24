import NotesItem from "./NotesItem";
import { NotesItemProps, NotesListProps } from "../types";
import React from "react";

const NotesWrapper: React.FC<NotesListProps> = ({ notesList }) => {
  return (
    <div className="grid gap-3 grid-cols-4">
      {notesList.map((notesItem: NotesItemProps) => (
        <NotesItem
          title={notesItem.title}
          description={notesItem.description}
        />
      ))}
    </div>
  );
};

export default NotesWrapper;
