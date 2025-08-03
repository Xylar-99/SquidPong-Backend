  const ws = new WebSocket('ws://localhost:4000/ws');

  ws.onopen = () => {
    const data = {type : "chat" , message : 'Hello Server!'}
    ws.send(JSON.stringify(data));
  };

  ws.onmessage = (event) => {
    alert(event.data);
    console.log('Message from server:', event.data);
  };

