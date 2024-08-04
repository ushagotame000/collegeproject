import io from 'socket.io-client';

const socket = io('http://localhost:5000');

socket.on('connect', () => {
  console.log('Connected to server');
  console.log("Id",socket.id);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('message', (message) => {
  console.log('New message:', message);
});
