import { useState } from "react";
import { io } from "socket.io-client";
import Header from "./components/Header";
import Chat from "./components/Chat";

const socket = io("http://localhost:8000");

function App() {
	return (
		<>
			<Header />
			<Chat />
		</>
	);
}

export default App;
