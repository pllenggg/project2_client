const User = (function () {
    let email = "";
    let user_type = "";
    let user_id = 0;

    const getEmail = function() {
        if (typeof (Storage) !== "undefined") {
            let temp = localStorage.getItem('email');
            if (temp != null) {
              email = temp; 
            }
        }
        return email;    // Or pull this from cookie/localStorage
    };

    const setEmail = function(e) {
        if (e!==null) {
          email = e;     
          // Also set this in cookie/localStorage
          if (typeof (Storage) !== "undefined") {
            localStorage.setItem('email', email);
          }
        }
    };

    const getUserType = function() {
        if (typeof (Storage) !== "undefined") {
            let temp = localStorage.getItem('user_type');
            if (temp != null) {
                user_type = temp; 
            }
        }
        return user_type;    // Or pull this from cookie/localStorage
    };

    const setUserType = function(u) {
        if (u!==null) {
          user_type = u;     
          // Also set this in cookie/localStorage
          if (typeof (Storage) !== "undefined") {
            localStorage.setItem('user_type', user_type);
          }
        }
    };

    const getUserId = function() {
        if (typeof (Storage) !== "undefined") {
          let temp = localStorage.getItem('user_id');
          if (temp != null) {
            user_id = temp; //playerA or playerB
          }
        }
          return user_id;    // Or pull this from cookie/localStorage
    };
      
    const setUserId = function(id) {
        user_id = id;     
          // Also set this in cookie/localStorage
          //console.log(user_id);
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem('user_id', user_id);
        }
    };

    const clearUser = ()=>{
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('user_id', 0);
        localStorage.setItem('user_type', "");
        localStorage.setItem('email', "");
      }
      
    }
    return {
        getEmail: getEmail,
        setEmail: setEmail,
        getUserType: getUserType,
        setUserType: setUserType,
        getUserId: getUserId,
        setUserId: setUserId,
        clearUser: clearUser
      }
}) ();

export default User;