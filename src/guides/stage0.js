function Stage0() {

    return (
        <div className="sample_wrap">
            <input
                type="text"
                id="id"
                name="id"
                placeholder="아이디"
                title="아이디"
                className="input_text"
                maxLength="41"
            />
            <input
                type="text"
                id="pw"
                name="pw"
                placeholder="비밀번호"
                title="비밀번호"
                className="input_text"
                maxLength="16"
            />

            <div className="btn_login_wrap">
                <button type="submit" className="btn_login" id="log.login">
                    <span className="btn_text">로그인</span>
                </button>
                <div className="text_findID">아이디 찾기</div>
            </div>
        </div>
    );
}

export default Stage0;