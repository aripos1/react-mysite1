//import 라이브러리
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
//import css
import '../../assets/css/main.css';
import '../../assets/css/guestbook.css';
const AddList = () => {
    const [guestList, setGuestList] = useState([]);
    const [name, setName] = useState("");
    const [password, setPw] = useState("");
    const [content, setContent] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handlePwChange = (e) => setPw(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    useEffect(() => {
        axios.get('http://localhost:9000/api/guestbooks')
            .then(response => {
                setGuestList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const guestVo = {
            'name': name,
            'password': password,
            'content': content
        };

        axios.post('http://localhost:9000/api/guestbooks', guestVo)
            .then(response => {
                axios.get('http://localhost:9000/api/guestbooks')
                    .then(response => {
                        setGuestList(response.data);
                    });
                setName('');
                setPw('');
                setContent('');
            })
            .catch(error => {
                console.log(error);
            });
    }
    const renderGuestList = () => {
        return guestList.map((guest) => (
            <div key={guest.no}>
                <table border="1" width="540px">
                    <colgroup>
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "40%" }} />
                        <col style={{ width: "40%" }} />
                        <col style={{ width: "10%" }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>{guest.no}</td>
                            <td>{guest.name}</td>
                            <td>{guest.date}</td>
                            <td> <Link to={`/deleteform/${guest.no}`}>삭제</Link></td>
                        </tr>
                        <tr>
                            <td colSpan="4"> {guest.content} </td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        ));
    };
    return (
        <>
            <div id="wrap">

                <Header />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>방명록</h2>
                        <ul>
                            <li>일반방명록</li>
                            <li>ajax방명록</li>
                        </ul>
                    </div>
                    {/* //aside */}

                    <div id="content">

                        <div id="content-head" className="clearfix">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                        </div>
                        {/* //content-head */}

                        <div id="guestbook">
                            <form onSubmit={handleSubmit}>
                                <table id="guestAdd">
                                    <colgroup>
                                        <col style={{ width: "70px" }} />
                                        <col />
                                        <col style={{ width: "70px" }} />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th><label className="form-text" htmlFor="input-uname">이름</label></th>
                                            <td><input id="input-uname" type="text" name="name" value={name} onChange={handleNameChange} /></td>
                                            <th><label className="form-text" htmlFor="input-pass">패스워드</label></th>
                                            <td><input id="input-pass" type="password" name="pass" value={password} onChange={handlePwChange} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"><textarea name="content" cols="72" rows="5" value={content} onChange={handleContentChange} ></textarea></td>
                                        </tr>
                                        <tr className="button-area">
                                            <td colSpan="4" className="text-center"><button type="submit">등록</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* //guestWrite */}
                                <input type="hidden" name="action" value="add" />
                            </form>
                            <br />
                            {renderGuestList()}
                           <br />
                        </div>
                        {/* //guestbook */}
                     
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
}

export default AddList;
