import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Chat = () => {
	// const { loggedIns, loginUser, emptyLoggedIns } = useStore();
	const [count, setCount] = useState(0);
	const [currentRoom, setCurrentRoom] = useState("");
	const [rooms, setRooms] = useState([]);
	const [chats, setChats] = useState([]);
	const [myUsername, setMyUsername] = useState("");
	const [isLoggedinInCurrentRoom, setIsLoggedinInCurrentRoom] = useState(false);
	const { register, handleSubmit, setValue, reset } = useForm();

	// const onSubmitUsername = async () => {
	// 	try {
	// 		console.log("submit");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const onSubmitMessage = async () => {
	// 	try {
	// 		console.log("submit message");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const onSubmitRoomname = async () => {
	// 	try {
	// 		console.log("submit room");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const getLoginStatus = async () => {
	// 	try {
	// 		console.log("login");
	// 	} catch (error) {}
	// };

	// const getRooms = async () => {
	// 	try {
	// 		console.log("get rooms");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const getChats = async () => {
	// 	try {
	// 		console.log("get chats");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	getLoginStatus();
	// 	getChats();
	// }, []);

	// useEffect(() => {
	// 	getRooms();
	// }, []);

	return (
		<div className="flex">
			<div className="bg-[#f0f2f5] min-h-screen w-full  absolute flex">
				<div className="left border-r-2 border-gray-400 flex-1 bg-[#f0f2f5]">
					<div className="border-b-[2px] border-gray-400 h-[102px] bg-[#f0f2f5] p-4 flex flex-col justify-center items-center">
						<span>Create new Room?</span>
						<div>
							<form>
								<input
									className="p-1 border-2  rounded-md border-black "
									placeholder="enter room name"
									{...register("room_name")}
								/>
								<input
									className="send-button px-3 py-1 m-2 text-sm bg-black rounded-md text-white cursor-pointer active:translate-y-2"
									type="submit"
									value="Create room"
								/>
							</form>
						</div>
					</div>
					<div className="overflow-y-auto h-[80vh]">
						{/* {rooms.map((room) => {
							return (
								<div
									onClick={() => {
										setCurrentRoom(room.room_name);
										if (room.room_name !== currentRoom) {
											setIsLoggedinInCurrentRoom(false);
										}
									}}
									key={room.id}
									className={`flex justify-center items-center h-[80px] border-b-[2px] border-gray-400 cursor-pointer 
									${room.room_name === currentRoom ? `bg-white` : `bg-[#f0f2f5]`}`}>
									<div>{room.room_name}</div>
								</div>
							);
						})} */}
					</div>
				</div>
				<div className="right  w-[100%]  flex-[2]">
					<div>
						<div className="h-[102px] border-b-2 border-gray-400 flex items-center pl-[20px]">
							{currentRoom}
						</div>
						{currentRoom === "" ? (
							<div className="flex items-center justify-center h-[80vh]">
								<span className="text-3xl font-medium text-gray-600">
									Enter a room to start the chat!
								</span>
							</div>
						) : (
							<div>
								{isLoggedinInCurrentRoom ? (
									<div className="flex flex-col">
										<div
											id="chat-container"
											className="h-[60vh] w-[55.9vw] border-b-2 border-gray-400 overflow-y-auto p-1">
											{/* {chats.map((chat) => {
												return (
													<div key={chat.id} className="w-[100%]">
														{chat.username === myUsername ? (
															<div
																key={chat.id}
																className="flex h-full justify-end">
																<div className="w-1/2 flex justify-end">
																	<div className="mx-4 my-2 p-2 border-2 max-w-[100%] border-gray-400 flex justify-start bg-[#c5e6c1] rounded-t-lg rounded-br-lg">
																		<div className="max-w-[100%] h-[100%] break-words">
																			{chat.message}
																		</div>
																	</div>
																</div>
															</div>
														) : (
															<div
																key={chat.id}
																className="flex  mx-4 my-2 p-3 w-1/2 bg-slate-300 rounded-t-lg rounded-br-lg">
																<div className="w-[7vw]">
																	<div className="h-[50px] w-[50px]  rounded-full border-2 border-gray-400"></div>
																	<span className="break-words">
																		{chat.username}
																	</span>
																</div>
																<div className="flex  ml-4 items-center break-words  max-w-[80%]">
																	<p className="break-words  max-w-[100%]">
																		{chat.message}
																	</p>
																</div>
															</div>
														)}
													</div>
												);
											})} */}
										</div>
										<div className="p-6 flex items-center justify-center h-[20vh]">
											<form
												className=""
												// onSubmit={handleSubmit(onSubmitMessage)}
											>
												<input
													className="p-1 border-2 w-[40vw] h-[10vh] rounded-md border-black "
													placeholder="message"
													{...register("message")}
												/>
												<input
													className="send-button px-3 py-1 m-2 w-[6rem] h-[3rem] bg-black rounded-md text-white cursor-pointer active:translate-y-2"
													type="submit"
													value="Enter"
												/>
											</form>
										</div>
									</div>
								) : (
									<div>
										<div className="flex flex-col justify-center items-center  gap-2 h-[80vh]">
											<span>Want to join the room? Enter your username</span>
											<form
												className="flex gap-2"
												// onSubmit={handleSubmit(onSubmitUsername)}
											>
												<input
													className="p-1 border-2 rounded-md border-black "
													placeholder="username"
													{...register("username")}
												/>
												<input
													className="send-button px-3 py-1 bg-black rounded-md text-white cursor-pointer active:translate-y-2"
													type="submit"
													value="Enter"
												/>
											</form>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;
