//import 라이브러리
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
//import css
import '../../assets/css/main.css';
import '../../assets/css/user.css';

const ModifyForm = () => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [name, setName] = useState('');
    const navigate = useNavigate();
    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    useEffect(() => {
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            const parsedUser = JSON.parse(authUser);
            setName(parsedUser.name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('authUser');
        setToken(null);
        setName('');
        navigate('/'); // 로그아웃 후 메인으로 리다이렉트
    };

    return (
        <>
            <div id="wrap">
                <Header token={token} name={name} handleLogout={handleLogout} />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/* //aside */}

                    <div id="content">
                        <div id="content-head">
                            <h3>회원정보</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원정보</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* //content-head */}

                        <div id="user">
                            <div id="modifyForm">
                                <form action="" method="">
                                    {/* 아이디 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <span className="text-large bold">userid</span>
                                    </div>

                                    {/* 비밀번호 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label>
                                        <input
                                            type="password"
                                            id="input-pass"
                                            name="password"
                                            placeholder="비밀번호를 입력하세요"
                                        />
                                    </div>

                                    {/* 이름 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label>
                                        <input
                                            type="text"
                                            id="input-name"
                                            name="name"
                                            placeholder="이름을 입력하세요"
                                        />
                                    </div>

                                    {/* 성별 */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span>
                                        <label htmlFor="rdo-male">남</label>
                                        <input
                                            type="radio"
                                            id="rdo-male"
                                            name="gender"
                                            value="male"
                                        />
                                        <label htmlFor="rdo-female">여</label>
                                        <input
                                            type="radio"
                                            id="rdo-female"
                                            name="gender"
                                            value="female"
                                        />
                                    </div>

                                    {/* 버튼영역 */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원정보수정</button>
                                    </div>
                                </form>
                            </div>
                            {/* //modifyForm */}
                        </div>
                        {/* //user */}
                    </div>
                    {/* //content  */}
                </div>
                {/* //container  */}
                <Footer />
                {/* //footer */}
            </div>
            {/* //wrap */}
        </>
    );
};

export default ModifyForm;
