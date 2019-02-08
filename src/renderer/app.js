// Initial welcome page. Delete the following line to remove it.
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import showdown from "showdown";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"text-editor": "",
			parseData: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.parseTextToMarkdown = this.parseTextToMarkdown.bind(this);
		this.converter = new showdown.Converter();
	}

	handleChange(e) {
		const text = e.target.value;
		this.setState({ [e.target.name]: text });
		this.parseTextToMarkdown(text);
	}

	parseTextToMarkdown(text) {
		// parse data to markdown
		console.log("parseData");
		text = this.converter.makeHtml(text);
		// setState for parsedData
		this.setState({ parseData: text });
	}

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
					<textarea
						name="text-editor"
						value={this.state["text-editor"]}
						onChange={this.handleChange}
						id="text-editor"
					/>
				</div>
				{/* second editor for formated text */}
				<div className="editor md">{this.state.parseData}</div>
			</section>
		);
	}
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
