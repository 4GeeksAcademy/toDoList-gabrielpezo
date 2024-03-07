import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//include images into your bundle


//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const [input, setInput] = useState("");

	return (
	<>	
		<div className="backGround">
			<div className="divCon container text-center">
				<h1 className="title"><i>To-Do List</i></h1>
				<ul className=" shadow-lg p-3 mb-5 bg-body-tertiary rounded">
					<li><input type="text" value={input} onChange={(e)=> setInput(e.target.value)} onKeyUp={(e) => {if (e.key === "Enter" ) {setList(list.concat(input)); setInput("")}}} placeholder="What do you need to do?"></input> </li>
						{list.map ((item, index) => <li>
						{item}<FontAwesomeIcon className="iconX" icon={faXmark} onClick={()=> setList (list.filter((item, currentIndex) => index != currentIndex))}/>
					</li>)}
				</ul>
				<div className="counter d-flex justify-content-left"><strong>{list.length} tasks</strong></div>
			</div>
		</div>
	</>		
	);
};

export default Home;
