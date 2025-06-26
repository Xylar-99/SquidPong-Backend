





export async function sendToService( _url: string, _method: string, _data: any): Promise<object> 
{

  let res: any;

  if (_method === "GET") 
    res = await fetch(_url);
  else
  {

      res = await fetch(_url, {
          method: _method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(_data),
        });
    }
   
  return await res.json();
}


