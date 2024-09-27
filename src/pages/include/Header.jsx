import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('authUser');
        setToken(null);
        setName('');
        navigate('/'); // 로그아웃 후 메인으로 리다이렉트
    };

    useEffect(() => {
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            const parsedUser = JSON.parse(authUser);
            setName(parsedUser.name);
        }
    }, []);

    return (
        <>
            <div id="header" className="clearfix">
                <h1>
                    <Link to="/" rel="noreferrer noopener">MySite</Link>
                </h1>

                {(token != null) ?
                    <ul>
                        <li> {name} 님 안녕하세요^^</li>
                        <li><button type='button' onClick={handleLogout}>로그아웃</button></li>
                        <li><Link to="/user/modifyform" className="btn_s">회원정보수정</Link></li>
                    </ul>
                    :
                    <ul>
                        <li><Link to="/user/loginform" className="btn_s">로그인</Link></li>
                        <li><Link to="/user/joinform" className="btn_s">회원가입</Link></li>
                    </ul>
                }
            </div>

            <div id="nav">
                <ul className="clearfix">
                    <li><Link to="" rel="noreferrer noopener">입사지원서</Link></li>
                    <li><Link to="/board/list" rel="noreferrer noopener">게시판</Link></li>
                    <li><Link to="/attach/form" rel="noreferrer noopener">갤러리</Link></li>
                    <li><Link to="/guestbook/addlist" rel="noreferrer noopener">방명록</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Header;  
