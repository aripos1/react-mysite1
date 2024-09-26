//import 라이브러리
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom'; // React Router에서 URL 파라미터 추출 및 페이지 이동 기능 사용

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
import axios from 'axios';

//import css
import '../../assets/css/main.css';
import '../../assets/css/user.css';

const LoginForm = () => {
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPw] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleId = (e) => {
        setId(e.target.value);
    }
    const handlePw = (e) => {
        setPw(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userVo = { id, password };
        axios({
            method: 'post', // HTTP POST 요청 방식 사용
            url: `http://localhost:9000/api/users/login`, // 데이터를 가져올 API URL
            headers: { "Content-Type": "application/json; charset=utf-8" }, // 서버에 보낼 때 JSON 형식으로 전송
            data: userVo,
            responseType: 'json' // 서버로부터 JSON 데이터를 응답받음
        })
            .then(response => {
                console.log("로그인 완료:", response.data); // 로그인 완료 메시지 출력
                if (response.data.result === "success") {
                    const token = response.headers['authorization'].split(' ')[1]; // Bearer
                    localStorage.setItem("token", token); // JWT 토큰 저장
                    localStorage.setItem("authUser", JSON.stringify(response.data.apiData)); // 사용자 정보도 함께 저장
                    setToken(token);
                    navigate("/"); // 성공 시 리다이렉트
                } else {
                    // 실패 시 처리
                    console.error("로그인 실패:", response.data.message);
                }
            })
            .catch(error => {
                console.error("로그인 실패:", error); // 오류 메시지 출력
            });
    }

    return (
        <>
            <div id="wrap">
                <Header/>

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
                            <h3>로그인</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">로그인</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="loginForm">
                                <form onSubmit={handleSubmit}>
                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <input type="text" id="input-uid" name="id" value={id} placeholder="아이디를 입력하세요" onChange={handleId} />
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">비밀번호</label>
                                        <input type="password" id="input-pass" name="password" value={password} placeholder="비밀번호를 입력하세요" onChange={handlePw} />
                                    </div>

                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">로그인</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- //loginForm --> */}
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
export default LoginForm;
