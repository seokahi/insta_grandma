import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function NicknameModal({ isOpen, onRequestClose, onNicknameChange }) {
  const [editedNickname, setEditedNickname] = useState('');

  const handleNicknameChange = (e) => {
    setEditedNickname(e.target.value);
  };

  const handleSubmit = () => {
    onNicknameChange(editedNickname);
    setEditedNickname('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Nickname Modal"
    >
      <h2>닉네임 변경</h2>
      <input
        type="text"
        value={editedNickname}
        onChange={handleNicknameChange}
        placeholder="새 닉네임 입력"
      />
      <button onClick={handleSubmit}>확인</button>
      <button onClick={onRequestClose}>취소</button>
    </Modal>
  );
}

export default NicknameModal;

