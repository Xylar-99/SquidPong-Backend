const fetchPOST = require('../utils/fetch')
const config_token = require('../controllers/settings')
const authSchemas = require('../controllers/authSchemas')
const addFormats = require('ajv-formats');
const fs = require('fs')
const {pipeline} = require('stream/promises')


const Ajv = require('ajv');
const me = require('../utils/me');
const ajv = new Ajv();

addFormats(ajv)


// proccess signup local
async function postSignHandler(req , res)
{

  req.body = Object.assign({}, req.body);
  console.log(req.body);
  // check valid schema body 
  const validate = ajv.compile(authSchemas.signupSchema);
  if (!validate(req.body))
  {
    console.log("Error in signup")
    return res.redirect('/signup');
  }

  // store email in session  used him in /verification
  req.session.email = req.body.email

  // send body to container user  for proccess data 
  const result = await fetchPOST('http://user:4001/signup/local' , req.body);

  if(!result.check)
    return res.redirect('/signup')

  return res.redirect('/verification')
}



// function for for /verification    i send random number to email  for verifaction email
async function postverificationHandler(req , res) 
{
  const {code } = req.body;
  // here get email i deja stored in signup above for get code form databse using email  check code != code_user_input
  const email = req.session.get('email');

  const data = {}
  data.code = code;
  data.email = email;

  // any fetchPOST i send request to another container  using method post send some data
  const result = await fetchPOST('http://user:4001/verify' , data);

  if(!result.verify)
    return res.redirect('/verification')

  return res.redirect('/login')
}


// proccess login
async function postLoginHandler(req , res)
{
  const validate = ajv.compile(authSchemas.loginSchema);
  if (!validate(req.body))
    return res.redirect('/login');
  
  const token = await fetchPOST('http://user:4001/login' , req.body);
  
  if(token.check == false)
  {
    console.log("Error in login somthin wrong")
    return res.redirect('/login');
  }

  // here send token to client   and after access /profile or any route  client send token and i varify client using token 
  return res. setCookie('token', token.token, config_token).send(token);
}



// proccess login
async function postUpdateHandler(req , res)
{
  const body = {};
  
  const whoami = await me(req);
  body.user_id = whoami.user_id;
  
  const parts = req.parts();
  for await(const part of parts)
  {
    if(part.type === 'file')
    {
      const save = `/var/www/html/frontend/images/${part.filename}` ;
      await pipeline( part.file, fs.createWriteStream(save) );

      body['avatar_url'] = `../images/${part.filename}`;
    }
    else
      body[part.fieldname] = part.value;
      
  }

  const respond =  await fetchPOST('http://user:4001/update' , body);



  return res.send({msg : "hello world"})
}



module.exports = {postSignHandler , postUpdateHandler  , postverificationHandler , postLoginHandler}