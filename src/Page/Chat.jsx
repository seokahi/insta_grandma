import React, { useState } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Avatar } from '@mui/material'; // Avatar 컴포넌트 추가
import "./Chat.css"
function Chat() {
    let [text, setText] = useState('');
    let [chat, setChat] = useState([]);
  
    const handleChatInput = (e) => {
      setText(e.target.value);
    };
  
    const handleSubmitBtn = () => {
      let copyChat = [...chat];
      if(text != '') {
        copyChat.push(text);
        setChat(copyChat);
        setText('');
      }
    }
  
    return(
      <section >
        {/* <div className='app-header'>
        <h1 className="header-letter-title">손주자랑</h1>
        <div className='header-icons'>
        <EmailOutlinedIcon fontSize="large"/> 
        </div>
            <h1>밤편지</h1>
        </div> */}
        <ul className="list">
            <li className="list-letter">
                <img src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_1280.png" alt="화살표" />
                <Avatar>이지영</Avatar>
                <div className="list-info">
                    <p className="list-name">이지영</p>
                </div>
            </li>
        </ul>
        <ul className="list-commment">
            <li className="list-comment-letter">
            <Avatar>이지영</Avatar>
            <p className="">손주 몇 살이에요?</p>
            </li>
        </ul>
        <div >
        {
            <ShowChatList chatList={chat} />
        }
        </div>
        <div className="div-letter">
            <input type="text" value={text}  onChange={handleChatInput} placeholder="내용입력" />
            <button type="button" onClick={handleSubmitBtn} >
            <img src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646214_1280.png" alt="share button" />
            </button>
        </div>

        </section>
    );
}

function ShowChatList({chatList}) {
    return (
      chatList.map((chat, i) => {
        return(
          <div key={i} className="div-chat">
            <article >
                <p className="p-chat">{chat}</p>
            </article>
          </div>
        );
      })
    );
  }

export default Chat;