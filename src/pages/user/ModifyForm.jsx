import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../include/Footer';
import Header from '../include/Header';
import '../../assets/css/main.css';
import '../../assets/css/user.css';

const ModifyForm = () => {

   
    const [name, setName] = useState(''); // 이름 상태
    const [id, setId] = useState(''); // 아이디 상태
    const [password, setPw] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    /*--- 생명주기 + 이벤트 관련 메소드 ----------------------*/

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        // 서버로부터 사용자 정보를 가져옴
        axios({
            method: 'get',
            url: 'http://localhost:9000/api/users/me',
            headers: { "Authorization": `Bearer ${token}` },
            responseType: 'json'
        }).then(response => {
            const userData = response.data.apiData;
            setName(userData.name);
            setId(userData.id);
            setGender(userData.gender);
        }).catch(error => {
            console.error('사용자 정보를 가져오는 중 오류 발생:', error);
        });
    }, []);

    /*--- 일반 메소드 --------------------------------------------*/

    const handlePw = (e) => {
        setPw(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const userVo = {
            id: id,
            password: password,
            name: name,
            gender: gender,
        };
        axios({
            method: 'put',
            url: `http://localhost:9000/api/users/me`,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: userVo,
            responseType: 'json'
        }).then(response => {
            if (response.data.result === "success") {
                const authUser = response.data.apiData;
                localStorage.setItem("authUser", JSON.stringify(authUser)); 
                navigate("/"); // 성공 시 리다이렉트
            } else {
                console.error("회원정보 수정 실패:", response.data.message);
            }
        }).catch(error => {
            console.error("회원정보 수정 중 오류 발생:", error);
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

                        <div id="user">
                            <div id="modifyForm">
                                <form onSubmit={handleUpdate}>
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <span className="text-large bold">{id}</span>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label>
                                        <input
                                            type="password"
                                            id="input-pass"
                                            name="password"
                                            value={password}
                                            placeholder="비밀번호를 입력하세요"
                                            onChange={handlePw}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label>
                                        <input
                                            type="text"
                                            id="input-name"
                                            name="name"
                                            value={name}
                                            placeholder="이름을 입력하세요"
                                            onChange={handleName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <span className="form-text">성별</span>
                                        <label htmlFor="rdo-male">남</label>
                                        <input
                                            type="radio"
                                            id="rdo-male"
                                            name="gender"
                                            value="male"
                                            onChange={handleGender}
                                            checked={gender === "male"}
                                        />
                                        <label htmlFor="rdo-female">여</label>
                                        <input
                                            type="radio"
                                            id="rdo-female"
                                            name="gender"
                                            value="female"
                                            onChange={handleGender}
                                            checked={gender === "female"}
                                        />
                                    </div>

                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원정보수정</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ModifyForm;
