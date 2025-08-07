

const loginSchema = {
    type : "object" ,
    properties : {
        email : {type: "string" , format : 'email'},
        password : {type: "string" ,  minLength : 4 },
    },
    required : ['email' , 'password'],
    additionalProperties: false
}


const loginResponseSchema = {
  200: {
    type: "object",
    properties: {
      token: { type: "string" },
      userId: { type: "string" },
      // add other response fields here
    },
  },
  400: {
    type: "object",
    properties: {
      error: { type: "string" },
      message: { type: "string" },
    },
  },
};


const signupSchema = {
    type : "object" ,
    properties : {
        fname : {type: "string"},
        lname : {type: "string"},
        username : {type: "string"},
        email : {type: "string" , format : 'email'},
        password : {type: "string"  ,  minLength : 6},
    },
    required : ['email' , 'username' , 'fname' , 'lname' , 'password'],
    additionalProperties: false

}


const detailsSchema = {
    type : "object" ,
    properties : {
        fullname : {type: "string"},
        bio      : {type: "string"},
        location : {type: "string"},
        phone    : {type: "string" , format : 'email'},
    },
    required : ['fname' , 'lname' , 'username' , 'email' , 'password'],
    additionalProperties: false

}



const verifyEmailSchema = {
    type : "object" ,
    properties : {
        email : {type: "string" , format : 'email'},
        code : {type: "string" ,  minLength : 2 },
    },
    required : ['email' , 'code'],
    additionalProperties: false

    
}

const forgotPasswordSchema = {
  type: "object",
  required: ["email"],
  properties: {
    email: { type: "string", format: "email" },
  },
};

const changePasswordSchema = {
  type: "object",
  required: ["oldPassword", "newPassword"],
  properties: {
    oldPassword: { type: "string", minLength: 8 },
    newPassword: { type: "string", minLength: 8 },
  },
};

const resetPasswordSchema = {
      type: "object",
      required: ["email", "code", "newPassword", "confirmPassword"],
      properties: {
        email: { type: "string", format: "email" },
        code: { type: "string" },
        newPassword: { type: "string", minLength: 8 },
        confirmPassword: { type: "string", minLength: 8 }
      },
    }

export {loginResponseSchema ,  loginSchema , resetPasswordSchema , changePasswordSchema , forgotPasswordSchema  , verifyEmailSchema , signupSchema, detailsSchema };
