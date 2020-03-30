const initialState = {
  isLoggedIn:false,
  classData: [
    { 
      class: '11',
      classTeacher: 'Pandey',
      names:['Shankar'],
    },
    { 
      class: '12B',
      classTeacher: 'Mishra',
      names:['Ram','Shyam','Rohit'],
    },
    { 
      class: '12A',
      classTeacher: 'Shubham',
      names:['Manas','b','c'],
    },
  ],

  studentData: [
    {
      name:"Manas",
      class: "12A",
      days:[...Array(31).fill('a')]
    },
    {
      name:"b",
      class: "12A",
      days:[...Array(31).fill('a')]
    },
    {
      name:"c",
      class: "12A",
      days:[...Array(31).fill('a')]
    },
    {
      name:"Ram",
      class: "12B",
      days:[...Array(31).fill('a')]
    },
    {
      name:"Shyam",
      class: "12B",
      days:[...Array(31).fill('a')]
    },
    {
      name:"Rohit",
      class: "12B",
      days:[...Array(31).fill('a')]
    },
    {
      name:"Shankar",
      class: "11",
      days:[...Array(31).fill('a')]
    },
  ],
  date:[...Array(31).keys()],
  month:{
    "Jan":Array.from({length:31},(v,k)=>k+1),
    "Feb":Array.from({length:28},(v,k)=>k+1) ,
    "March":Array.from({length:31},(v,k)=>k+1),
    "April":Array.from({length:30},(v,k)=>k+1),
    "May":Array.from({length:31},(v,k)=>k+1),
    "June":Array.from({length:30},(v,k)=>k+1),
    "July":Array.from({length:31},(v,k)=>k+1),
    "Aug":Array.from({length:31},(v,k)=>k+1),
    "Sept":Array.from({length:30},(v,k)=>k+1),
    "Oct":Array.from({length:31},(v,k)=>k+1),
    "Nov":Array.from({length:30},(v,k)=>k+1),
    "Dec":Array.from({length:31},(v,k)=>k+1),
  }
  
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_DATA':
      return {
        ...state,
      }
    case 'LOGIN_DONE':
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoggedIn: false,


      }
    case 'GET_USER_PROFILE_SUCCESS':
      return{
        ...state,
        profile: action.payload,
      }
    default: 
      return state;
  }
}

export default userReducer;