import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

    return (
        <>
            <div id="header" class="clearfix">
                <h1>
                    <Link to="/" rel="noreferrer noopener">MySite</Link>
                </h1>

                {/* <!-- 
                    <ul>
                    <li>황일영 님 안녕하세요^^</li>
                    <li><Link to="" rel="noreferrer noopener" class="btn_s">로그아웃</Link></li>
                    <li><Link to="" rel="noreferrer noopener" class="btn_s">회원정보수정</Link></li>
                    </ul>
                    -->	 */}
                <ul>
                    <li><Link to="/loginform" rel="noreferrer noopener" className="btn_s">로그인</Link></li>
                    <li><Link to="/joinform" rel="noreferrer noopener" className="btn_s">회원가입</Link></li>
                </ul>

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