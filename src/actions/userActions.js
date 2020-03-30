function getUserData(payload){
  return {
    type: 'USER_DATA',
  }
}
function loginUser(payload){
  return({
    type: 'LOGIN_USER_START',
    payload: payload
  }

  )
}
function loadUser(payload){
  return({
    type:'GET_PROFILE_START',
    payload: payload

  })
}

export default{
  getUserData,
  loginUser,
  loadUser

}
