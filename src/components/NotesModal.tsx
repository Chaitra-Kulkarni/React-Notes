import { Modal, Input, Typography } from "antd";
import React from "react";
import { ModalProps } from "../types";

const { TextArea } = Input;
const { Title } = Typography;

const NotesModal: React.FC<ModalProps> = ({
  handleOk,
  handleCancel,
  handleClose,
  isModalOpen,
  titleInfo,
  setTitleInfo,
  descriptionInfo,
  setDescriptionInfo,
}) => {
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      onClose={handleClose}
    >
      <Title level={5}>Title:</Title>
      <Input
        placeholder="Enter the title of your note!"
        className="mb-3 border border-gray-400"
        value={titleInfo}
        onChange={(e) => setTitleInfo(e.target.value)}
        maxLength={60}
      />
      <Title level={5}>Description:</Title>
      <TextArea
        placeholder="Enter the description of your note!"
        rows={5}
        className="mb-2 border border-gray-400"
        value={descriptionInfo}
        onChange={(e) => setDescriptionInfo(e.target.value)}
      />
    </Modal>
  );
};

export default NotesModal;
