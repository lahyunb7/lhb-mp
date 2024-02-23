const poolData = {
    UserPoolId: '', // 사용자 풀 ID
    ClientId: '', // 클라이언트 ID
    
};

// signup.html
function SignUp() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    userPool.signUp(username, password, null, null, function(
        err
    ) {
        if (err) {
        alert(err.message || JSON.stringify(err));
            return;
        }
        window.location.href = 'confirm.html';
    });
}

// confirm.html
function ConfirmRegistration() {
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var username = document.getElementById("email").value;
    var code = document.getElementById("ConfirmCode").value;
    var userData = {
        Username: username,
        Pool: userPool,
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        console.log('call result: ' + result);
        window.location.href = 'login.html';      
    });
}

// login.html
function Login() {
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var authenticationData = {
        Username: username,
        Password: password,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
        authenticationData
    );
    var userData = {
        Username: username,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var idToken = result.getIdToken().getJwtToken();          // ID 토큰
            var accessToken = result.getAccessToken().getJwtToken();  // 액세스 토큰
            var refreshToken = result.getRefreshToken().getToken();   // 갱신 토큰

            console.log("idToken : " + idToken);
            console.log("accessToken : " + accessToken);
            console.log("refreshToken : " + refreshToken);

            window.location.href = '/index.html';
        },

        onFailure: function(err) {
            // 로그인에 실패 했을 경우 에러 메시지 표시
            console.log(err);
            alert("로그인 실패")
        }
    });
}

// main.html
function main() {
    // 로그인 정보 가져오기
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // 로그인 정보가 있는지 확인하고 없으면 로그인 페이지로 이동
    if (!accessToken || !refreshToken) {
        location.href = "login.html";
        return;
    }

    // Cognito 사용자 세션 유지
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser();

    if (cognitoUser != null) {
        cognitoUser.getSession((err, session) => {
            if (err) {
                console.log(err);
                location.href = "login.html";
            } else {
                // 세션 정보가 유효하다면, 사용자 정보를 가져옴
                cognitoUser.getUserAttributes((err, result) => {
                    if (err) {
                        location.href = "login.html";
                    }

                    // 사용자 정보를 화면에 출력하거나 필요한 작업을 수행할 수 있음
                    console.log(result);
                });
            }
        });
    } else {
        location.href = "login.html";
    }

    // 로그아웃 버튼 이벤트 처리
    const signoutButton = document.getElementById("signout");
    signoutButton.addEventListener("click", event => {
        cognitoUser.signOut();
        // 로컬 스토리지에서 로그인 정보 삭제
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        location.reload();
    });
    signoutButton.hidden = false;
}