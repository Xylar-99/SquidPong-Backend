  const gameWS = new WebSocket('ws://localhost:4000/game');

  gameWS.onopen = () => {
    const data = {message : 'Hello Server!'}
    gameWS.send(JSON.stringify(data));
  };

  gameWS.onmessage = (event) => {
    alert(event.data);
    console.log('Message from server:', event.data);
  };

