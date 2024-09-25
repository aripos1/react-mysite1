//import 라이브러리
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router에서 URL 파라미터 추출 및 페이지 이동 기능 사용
import axios from 'axios';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';

//import css
import '../../assets/css/main.css';
import '../../assets/css/user.css';


const JoinForm = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPw] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');


    const handleId = (e) => {
        setId(e.target.value);
    }
    const handlePw = (e) => {
        setPw(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleJoin = (e) => {
        e.preventDefault();
        const userVo = {
            id: id,
            password: password,
            name: name,
            gender: gender,
        }
        axios({
            method: 'post', // HTTP POST 요청 방식 사용
            url: `http://localhost:9000/api/users/join`, // 데이터를 가져올 API URL
            headers: { "Content-Type": "application/json; charset=utf-8" }, // 서버에 보낼 때 JSON 형식으로 전송
            data: userVo,
            responseType: 'json' // 서버로부터 JSON 데이터를 응답받음
        })
            .then(response => {
                console.log("로그인 완료:", response.data); // 로그인 완료 메시지 출력
                if (response.data.result === "success") {
                    navigate("/"); // 성공 시 리다이렉트
                } else {
                    // 실패 시 처리
                    console.error("로그인 실패:", response.data.message);
                }
            })
            .catch(error => {
                console.error("로그인 실패:", error); // 오류 메시지 출력
            });
    };

    return (
        <>
            <div id="wrap">
                <Header />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">

                        <div id="content-head">
                            <h3>회원가입</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원가입</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="joinForm">
                                <form onSubmit={handleJoin}>

                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <input type="text" id="input-uid" name="id" placeholder="아이디를 입력하세요" onChange={handleId} value={id} />
                                        <button type="button">중복체크</button>
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label>
                                        <input type="password" id="input-pass" name="pw" placeholder="비밀번호를 입력하세요" onChange={handlePw} value={password} />
                                    </div>

                                    {/* <!-- 이름 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label>
                                        <input type="text" id="input-name" name="name" placeholder="이름을 입력하세요" onChange={handleName} value={name} />
                                    </div>

                                    {/* <!-- 성별 --> */}
                                    <div className="form-group" >
                                        <span className="form-text">성별</span>
                                        <label htmlFor="rdo-male">남</label>
                                        <input type="radio" id="rdo-male" name="gender" value="male" onChange={handleGender} />
                                        <label htmlFor="rdo-female">여</label>
                                        <input type="radio" id="rdo-female" name="gender" value="female" onChange={handleGender} />
                                    </div>

                                    {/* <!-- 약관동의 --> */}
                                    <div className="form-group">
                                        <span className="form-text">약관동의</span>
                                        <input type="checkbox" id="chk-agree" name="agreement" />
                                        <label htmlFor="chk-agree">서비스 약관에 동의합니다.</label>
                                    </div>

                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원가입</button>
                                    </div>

                                </form>
                            </div>
                            {/* <!-- //joinForm --> */}
                        </div>
                        {/* <!-- //user --> */}
                    </div>
                    {/* <!-- //content  --> */}
                </div>
                {/* <!-- //container  --> */}
                <Footer />
                {/* <!-- //footer --> */}
            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default JoinForm;
