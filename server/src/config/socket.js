import { Server } from "socket.io";
export const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials:true,
    },
  });

  return io;
};
