function FindIdDecription() {
    return (
        <div className="content_guide">
            <ol>
                <li>아이디 찾기 버튼을 누른다.</li>
                <li>찾으려는 아이디의 명의를 가진 이름, 휴대전화를 입력한다.</li>
                <li>인증번호 받기를 누른다.</li>
                <li>인증번호를 입력하고 '다음'을 누른다.</li>
                <li>회원가입이 되어있는 회원이라면 아이디 찾기가 완료된다.</li>
            </ol>
            <div className="content_guide plus">
                !! 존재하지 않는 회원일 경우 회원가입을 한다.
            </div>
        </div>
    );
}

export default FindIdDecription;