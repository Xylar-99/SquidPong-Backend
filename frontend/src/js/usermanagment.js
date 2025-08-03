


// async function signup(e) 
//  {
//   e.preventDefault();
//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value;
//   try 
//   {
//     const res = await fetch('/api/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    
//     if (res.ok) 
//       window.location.href = '/pages/verification.html';
//     else 
//     {
//       const errorData = await res.json();
//       alert('Signup failed: ' + (errorData.message || res.statusText));
//     }

//   } 
//   catch (err) 
//   {
//     alert('Network error: ' + err.message);
//   }
// };


// async function login(e) 
// {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   try 
//   {
//     const res = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       credentials: 'include',
//       body: JSON.stringify({ email, password })
//     });
//     if (res.ok)
//       window.location.href = '/profile';
//   }
//   catch
//   {
//   }
// }


// async function  logout(e)
// {
//   e.preventDefault();
//   try 
//   {
//     const res = await fetch('/api/logout', { method: 'POST'});
//     if (res.ok) 
//       window.location.href = '/';
//   } 
//   catch (error) 
//   {
//     alert('Error: logout problem');
//   }

// }




// async function verification(e) 
//  {
//   e.preventDefault();
//   const email = document.getElementById('email').value.trim();
//   const code = document.getElementById('code').value.trim();
//   try {
//     const res = await fetch('/api/verify-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, code }) });
//     if (res.ok)
//       window.location.href = '/pages/login.html';
//     else 
//     {
//       const errorData = await res.json();
//       alert('Verification failed: ' + (errorData.message || res.statusText));
//     }
//   } 
//   catch (err) 
//   {
//     alert('Network error: ' + err.message);
//   }
// };



