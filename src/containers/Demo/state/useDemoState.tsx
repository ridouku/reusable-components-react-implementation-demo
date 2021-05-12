import React from "react";

export interface DemoState {
  showModal: boolean;
  actions: {
    handleOpenModal: () => void;
  };
}

export const useDemoState = (): DemoState => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const handleOpenModal = () => {
    setShowModal(!showModal);
  };
  return {
    showModal,
    actions: {
      handleOpenModal,
    },
  };
};
