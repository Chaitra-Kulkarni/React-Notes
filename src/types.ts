import { Dispatch, SetStateAction } from "react";

export interface NotesItemProps {
  title: string;
  description: string;
}

export interface NotesListProps {
  notesList: NotesItemProps[];
}

export interface ModalProps {
  handleOk: () => void;
  handleCancel: () => void;
  handleClose: () => void;
  handleModal: () => void;
  isModalOpen: boolean;
  titleInfo: string;
  setTitleInfo: Dispatch<SetStateAction<string>>;
  descriptionInfo: string;
  setDescriptionInfo: Dispatch<SetStateAction<string>>;
}
