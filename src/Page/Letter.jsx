import React, { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Avatar } from '@mui/material'; // Avatar 컴포넌트 추가
import "./letter.css"
import LetterModal from './LetterModal';

function Letter(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return(
        <>
    <div className='app-header'>
        <h1 className="header-letter-title">손주자랑</h1>
        <div className='header-icons'>

        <EmailOutlinedIcon fontSize="large"/> 
        </div>
        <h1>밤편지</h1>
    </div>
    <ul className="list">
        <li className="list-letter" onClick={openModalHandler}>
              <Avatar>이지영</Avatar>
              <div className="list-info">
                <p className="list-name">이지영</p>
                <p className="list-comment">손주 몇 살이에요?</p>
              </div>
              <div className="circle"></div>
              {isOpen ? <LetterModal openModalHandler={openModalHandler} /> : null}
            </li>
            <li className="list-letter">
              <Avatar>이영필</Avatar>
              <div className="list-info">
                <p className="list-name">이영필</p>
                <p className="list-comment">보기좋다.</p>
              </div>
              <div className="circle"></div>
            </li>
            <li className="list-letter">
              <Avatar>김철수</Avatar>
              <div className="list-info">
                <p className="list-name">김철수</p>
                <p className="list-comment">안녕하세요</p>
              </div>
              <div className="circle"></div>
            </li>
            {/* <li>
              <Avatar>이영란</Avatar>
              😚
            </li>
            <li>
              <Avatar>이필영</Avatar>
              😘
            </li> */}
    </ul>
    </>
    )
}

export default Letter;
