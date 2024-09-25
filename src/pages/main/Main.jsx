//import 라이브러리
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
//import css
import '../../assets/css/main.css';
import '../../assets/css/mysite.css';
import profileImg from '../../assets/images/profile.jpg';
const Main = () => {
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
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
                    {/* <!-- aside 없음 --> */}
                    <div id="full-content">

                        {/* <!-- content-head 없음 --> */}
                        <div id="main">

                            <img id="profile-img" src={profileImg} alt="" />

                            <div id="greetings">
                                <p className="text-xlarge">
                                    <span className="bold">안녕하세요!!<br />
                                        황일영의 MySite에 오신 것을 환영합니다.<br />
                                        <br />
                                        이 사이트는 웹 프로그램밍 실습과제 예제 사이트입니다.<br />
                                    </span>
                                    <br />
                                    사이트 소개, 회원가입, 방명록, 게시판으로 구성되어 있으며<br />
                                    jsp&serlvet(모델2) 방식으로 제작되었습니다.<br />
                                    <br />
                                    자바 수업 + 데이터베이스 수업 + 웹프로그래밍 수업<br />
                                    배운 거 있는거 없는 거 다 합쳐서 만들어 놓은 사이트 입니다.<br />
                                    <br />
                                    (자유롭게 꾸며보세요!!)<br />
                                    <br /><br />
                                    <Link to="" rel="noreferrer noopener">[방명록에 글 남기기]</Link>
                                </p>
                            </div>
                            {/* <!-- //greetings --> */}

                            <div class="clear"></div>

                        </div>
                        {/* <!-- //index --> */}

                    </div>
                    {/* <!-- //full-content -->
			 */}

                </div>
                {/* <!-- //container --> */}

                <Footer />

                {/* <!-- //footer --> */}
            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}
export default Main;