import React, {useState} from "react";
import { Avatar } from '@mui/material'; //이름 프로필
import './MyProfile.css'; 
import NicknameModal from "./NicknameModal";
import ConfirmModal from "./ConfirmModal";

function MyProfile() {
 //백엔드 정보받기
 //로그인 유효성 검사(백엔드랑같이..)
    const user = {
        name: 'loginuser',
        posts: 5,
    };

    const [posts, setPosts] = useState([
      {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-95b6Uv4btBbnpS8TUE_GcJcT2XDXwvRFMA&usqp=CAU",
      },
      {
        id: 2,
        image: "data:image/jpeg;base64,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",
      },
      {
        id: 3,
        image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMjdfMjIy%2FMDAxNTQwNTgwMjIzODY3.EQdaG8DxyoChV-xdb1PLypn4_3fn4l3feQ9tAp6iwTkg.AvH7y8fndNwASwlos0GG8m3Amww3U6gpudq9w2KomGcg.JPEG.sc9180%2FBandPhoto_9940369751.jpg&type=ff332_332"
      },
      {
        id:4,
        image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA4MTlfMjQg%2FMDAxNTAzMTMxNTM3OTEw.4kusTBuvELt7p1o0WPTxY4lm-l-ryryP_tWDWyIxfvkg.wLPrU4QAsMECH7B1M_3ViC7lgO029bY7KspqweOdbqcg.JPEG.psk42%2F5.jpg&type=ff332_332"
      },
      {
        id:5,
        image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMjdfNDcg%2FMDAxNTQ1ODcxNjcwNTI0.-QbtIeoF6G6rDjVNPKxClwFpz1m-o-QHxZGck_NsnAog.liy8HeTBlPsO9IuSh1kh3di6ffyMizdYB8nzDLZmrKsg.JPEG.hipster78%2F0103.jpg&type=ff332_332"
      }
      // ... 추가 게시글
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedName, setEditedName] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


    const handleEditClick = () => {
      setIsModalOpen(true);
    };
  
    const handleNicknameChange = (newNickname) => {
      setEditedName(newNickname);
      setIsModalOpen(false);
    };
  
    //탈퇴
    const handleDeleteClick = () => {
      setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
      // 여기에 회원 탈퇴 로직을 추가(백엔드랑같이)
      setEditedName("");
      setIsModalOpen(false);
      setIsDeleteModalOpen(false);
    };

    //삭제
   const [selectedPosts, setSelectedPosts] = useState([]);

   // 포스트 선택/해제를 토글하는 함수
   const togglePostSelection = (postId) => {
    if (selectedPosts.includes(postId)) {
      setSelectedPosts(selectedPosts.filter((id) => id !== postId));
    } else {
      setSelectedPosts([...selectedPosts, postId]);
    }
  };

  // 선택한 포스트들 삭제
   const handleDeleteSelectedPosts = () => {
    const updatedPosts = posts.filter((post) => !selectedPosts.includes(post.id));
    
    setPosts(updatedPosts);
    // 선택한 포스트들 초기화
    setSelectedPosts([]);
  };

    
    return (
      <div className="profile-container">
        <div className="user-profile">
         <h2><Avatar sx={{ width: 100, height: 100 }}>{editedName || user.name}</Avatar></h2>
         <span>{editedName || user.name}</span>
         <button className="delete-button"
         onClick={handleDeleteSelectedPosts}>
         선택한 글 삭제</button>
        </div>

        <div className="user-information">
         <h3>{user.posts}</h3> <span>게시글 수</span>
        </div>

        <div className="profile-edit">
         <div className="edit-button">
         <button onClick={handleEditClick}>
         닉네임 변경</button>
         <button onClick={handleDeleteClick}>
         회원 탈퇴</button>
         </div>
        </div>
      
        <div className="user-feed">
         <h4></h4>
         <div className="grid-container">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`grid-item ${selectedPosts.includes(post.id) ? "selected" : ""}`}
              onClick={() => togglePostSelection(post.id)}
            >
              <img src={post.image} alt={`게시글 ${post.id}`} />
            </div>
         ))}
         </div>
        </div>
        <NicknameModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onNicknameChange={handleNicknameChange}
      />
        <ConfirmModal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />

      </div>


    );
  }
  
  export default MyProfile;