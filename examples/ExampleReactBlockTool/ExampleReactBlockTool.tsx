import type { BlockTool } from "@editorjs/editorjs";
import { nanoid } from "nanoid";
import ReactDOM from "react-dom";
import { Content } from "./Content";

interface ExampleReactBlockToolData {
  text: string;
}

interface ValidatedExampleReactBlockToolData
  extends ExampleReactBlockToolData {}

type ExampleReactBlockToolDispatchData = (action: { text?: string }) => void;

class ExampleReactBlockTool implements BlockTool {
  #container: HTMLDivElement;
  #editorJSChangeEventID: string;
  #text: string;

  constructor() {
    this.#container = document.createElement("div");
    this.#editorJSChangeEventID = nanoid();
    this.#text = "";
  }

  render() {
    this.renderContainer();

    return this.#container;
  }

  save(): ValidatedExampleReactBlockToolData {
    return {
      text: this.#text,
    };
  }

  #dispatchData: ExampleReactBlockToolDispatchData = (action) => {
    if (action.text !== undefined) {
      this.#text = action.text;
    }

    // Dispatch Editor.js change event even without DOM changes.
    this.#editorJSChangeEventID = nanoid();

    this.renderContainer();
  };

  renderContainer() {
    ReactDOM.render(
      <div data-editorjs-change-event-id={this.#editorJSChangeEventID}>
        <Content dispatchData={this.#dispatchData} text={this.#text} />
      </div>,
      this.#container
    );
  }
}

export { ExampleReactBlockTool };
export type {
  ExampleReactBlockToolDispatchData,
  ExampleReactBlockToolData,
  ValidatedExampleReactBlockToolData,
};
