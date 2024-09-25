import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ token, name, handleLogout }) => {

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
                        <li><Link to="/user/modifyform" rel="noreferrer noopener" class="btn_s">회원정보수정</Link></li>
                    </ul>
                    :
                    <ul>
                        <li><Link to="/user/loginform" rel="noreferrer noopener" className="btn_s">로그인</Link></li>
                        <li><Link to="/user/joinform" rel="noreferrer noopener" className="btn_s">회원가입</Link></li>
                    </ul>
                }
            </div>
            {/* <!-- //header --> */}

            <div id="nav">
                <ul className="clearfix">
                    <li><Link to="" rel="noreferrer noopener">입사지원서</Link></li>
                    <li><Link to="" rel="noreferrer noopener">게시판</Link></li>
                    <li><Link to="" rel="noreferrer noopener">갤러리</Link></li>
                    <li><Link to="" rel="noreferrer noopener">방명록</Link></li>
                </ul>
            </div>
            {/* <!-- //nav --> */}
        </>
    );

}
export default Header;