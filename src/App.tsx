import { useState } from "react";
import Header from "./components/Header";
import NotesWrapper from "./pages/NotesWrapper";
import { NotesItemProps } from "./types";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [titleInfo, setTitleInfo] = useState<string>("");
  const [descriptionInfo, setDescriptionInfo] = useState<string>("");
  const [notesList, setNotesList] = useState<NotesItemProps[]>([]);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOk = () => {
    if (titleInfo.trim() && descriptionInfo.trim()) {
      setNotesList([
        ...notesList,
        { title: titleInfo, description: descriptionInfo },
      ]);
    }
    setTitleInfo("");
    setDescriptionInfo("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTitleInfo("");
    setDescriptionInfo("");
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTitleInfo("");
    setDescriptionInfo("");
  };

  return (
    <div className="w-4/5 mx-auto">
      <Header
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
      <NotesWrapper notesList={notesList} />
    </div>
  );
};

export default App;
