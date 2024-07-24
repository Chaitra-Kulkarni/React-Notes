import { Button } from "antd";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ModalProps } from "../types";
import NotesModal from "./NotesModal";

const Header: React.FC<ModalProps> = ({
  handleOk,
  handleCancel,
  handleClose,
  handleModal,
  isModalOpen,
  titleInfo,
  setTitleInfo,
  descriptionInfo,
  setDescriptionInfo,
}) => {

  return (
    <>
      <div className="my-2">
        <Button className="font-medium text-blue-800" onClick={handleModal}>
          <PlusCircleIcon className="size-5" />
          <span> Add Note</span>
        </Button>
      </div>
      {isModalOpen && (
        <NotesModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          handleClose={handleClose}
          handleModal={handleModal}
          isModalOpen={isModalOpen}
          titleInfo={titleInfo}
          setTitleInfo={setTitleInfo}
          descriptionInfo={descriptionInfo}
          setDescriptionInfo={setDescriptionInfo}
        />
      )}
    </>
  );
};

export default Header;
