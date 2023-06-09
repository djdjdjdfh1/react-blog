import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Board({boardlist}) {
  const navigate = useNavigate();
  // params 값으로 전달할수 있는 내용은 숫자형과 문자형
  // 값으로 받아오면 문자형으로 들어온다
  const params = useParams(); 

  // boardlist는 전체 배열의 값
  // 지금 필요한 값 
  // : 배열중에서 id의 값이 params.id와 동일한 객체
  // find() 메소드를 이용하여 값 가져옴
  const board = boardlist.find((b)=>(b.id === parseInt(params.id)))

  // 리액트 컴퍼넌트의 실행 순서
  // 1. 컴퍼넌트 안에있는 순서대로 자바스크립트 실행
  // 2. return을 통해서 화면 출력
  // 3. useEffect() 마운트 할때 자바스크립트 실행
  useEffect(()=>{
    if(board===undefined) {
      navigate('/');
    }
  },[]);


  return (
    <div>
      {
        board && (
          <div>
            <h1>{board.title}</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span>{board.id}</span>
              <span>작성자: {board.name}</span>
              <span>{board.date}</span>
            </div>
            <p>{board.content}</p>
          </div>
        )
      }
    </div>
  )
}
