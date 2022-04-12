//아이디 체크
export const userIdCheck = (userId) => {
    //대문자,소문자,숫자로만 입력
    //let regExp = /^[a-zA-Z0-9]{4,8}$/;
    let regExp = /[a-zA-Z0-9]/;
    // 대문자 포함
    return regExp.test(userId);
  };
//이메일 유효성 검사
export const checkEmail = (email) => {
    let regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; // /^(.+)@(.+)$/;
    return regEmail.test(email);
  };
  
  // 사용자 이름 체크 2자-6자이하
  export const checkName = (nickname) => {
    var regName = /^.{2,6}$/;
    return regName.test(nickname);
  };
  
  export const checkPassword = (password) => {
    // 특수문자 영문, 숫자 포함, 최소 8자 이상이어야 합니다.
    // var regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{8,25}$/;
    let regPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return regPassword.test(password);
  };