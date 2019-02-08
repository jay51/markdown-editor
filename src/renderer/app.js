// Initial welcome page. Delete the following line to remove it.
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
	render() {
		return (
			<section className="container">
				{/* line numbers will be here! */}
				<div className="line-numbers">
					<div className="line">1</div>
					<div className="line">2</div>
					<div className="line">3</div>
					<div className="line">4</div>
					<div className="line">5</div>
					<div className="line">6</div>
					<div className="line">7</div>
				</div>
				{/* first editor for markdown text */}
				<div className="editor">
					<textarea name="text-editor" id="text-editor" />
				</div>
				{/* second editor for formated text */}
				<div className="editor md">
					<h1>second</h1>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
					possimus deserunt, quo maiores repellendus dolore facere quaerat quod
					nisi perspiciatis nihil iste neque ratione iusto voluptatem? Dicta
					deleniti adipisci, aut cupiditate natus asperiores magnam blanditiis
					fugit nobis obcaecati unde in, quo aspernatur ab inventore illo porro.
					Quis sunt et voluptates amet repudiandae! Dolore dolorem aliquam eaque
					necessitatibus optio, laborum sequi fugit assumenda est ipsum illum
					cupiditate sit exercitationem qui tenetur tempore? Ipsam fugiat atque
					nemo, sequi maxime, nostrum totam consectetur eum aperiam nobis,
					perspiciatis tenetur. Asperiores cupiditate praesentium quisquam
					assumenda?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
					rem quisquam, cupiditate culpa est soluta itaque voluptas? Aspernatur,
					minus soluta magnam necessitatibus debitis fugit suscipit repellat,
					neque quibusdam, officiis nam adipisci fugiat modi quos corrupti
					nesciunt similique cumque. Dolore labore molestias amet blanditiis,
					deleniti voluptatum enim cupiditate quos. Corrupti natus deleniti
					quaerat dolorum dolorem eveniet. Laborum voluptate deserunt
					dignissimos, in praesentium error neque cupiditate officia?
					Necessitatibus amet expedita, consectetur minima, cumque magni
					recusandae impedit tempora eaque veritatis blanditiis aut! Neque
					soluta amet dignissimos ratione, consequatur non. Minus molestiae modi
					neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
					dolores explicabo pariatur ea nisi enim ipsam in ipsa perferendis ex
					ullam modi, sint minima corporis maxime dolore beatae impedit eligendi
					numquam provident, suscipit ut. Magnam placeat voluptatem laudantium
					ad repudiandae quaerat aut dignissimos, expedita architecto iure, nisi
					nulla culpa deleniti velit perferendis mollitia voluptas doloremque
					tempora fugiat, ipsum provident numquam? Officia, ut facilis? Odit
					atque beatae consequatur delectus! Repellendus magnam harum numquam
					delectus amet ducimus sequi atque cupiditate. Quasi odit, tempore
					inventore sunt repellat modi neque vel molestias eos et.
				</div>
			</section>
		);
	}
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
