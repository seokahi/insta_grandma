import React from "react";
import Modal from "react-modal";
import "./ConfirmModal.css";

Modal.setAppElement("#root");

function ConfirmModal({ isOpen, onRequestClose, onConfirm }) {

  const handleConfirm = () => {
    onConfirm(); // onConfirm 함수 호출 (예 버튼 누를 때 실행될 함수)

    // 로그인 페이지로 이동, 라우팅대용
    window.location.href= "./?"
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>정말로 탈퇴하시겠습니까?</h2>
      <h4>게시글과 회원정보가 모두 삭제됩니다.</h4>
      <div className="modal-buttons">
        <button onClick={handleConfirm}>예</button>
        <button onClick={onRequestClose}>아니오</button>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
