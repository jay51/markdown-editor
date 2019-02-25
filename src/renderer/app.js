// Initial welcome page.
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
		this.parseTextToMarkdown(text);
	}

	parseTextToMarkdown(text) {
		// parse data to markdown
		console.log(text);
		const parseData = this.converter.makeHtml(text);
		console.log(parseData);
		// setState for parsedData
		this.setState({ "text-editor": text, parseData });
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
					<div className="line">8</div>
					<div className="line">9</div>
					<div className="line">10</div>
					<div className="line">11</div>
					<div className="line">12</div>
					<div className="line">13</div>
					<div className="line">14</div>
					<div className="line">15</div>
					<div className="line">16</div>
					<div className="line">17</div>
					<div className="line">18</div>
					<div className="line">19</div>
					<div className="line">20</div>
					<div className="line">21</div>
					<div className="line">22</div>
					<div className="line">23</div>
					<div className="line">24</div>
					<div className="line">25</div>
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
				{/* for the underlaying html */}
				{/* <div className="editor md">{this.state.parseData}</div> */}
				{/* for the formated text */}
				<div
					className="editor md"
					dangerouslySetInnerHTML={{ __html: this.state.parseData }}
				/>
			</section>
		);
	}
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
