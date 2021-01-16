import type { BlockTool } from "@editorjs/editorjs";
import ReactDOM from "react-dom";
import { Container } from "./Container";

interface ExampleReactBlockToolData {
  text: string;
}

interface SavedExampleReactBlockToolData extends ExampleReactBlockToolData {}

interface ValidatedExampleReactBlockToolData
  extends SavedExampleReactBlockToolData {}

type ExampleReactBlockToolDispatchData = (action: { text?: string }) => void;

class ExampleReactBlockTool implements BlockTool {
  #container: HTMLDivElement;
  #text: string;

  constructor() {
    this.#container = document.createElement("div");
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

    this.renderContainer();
  };

  renderContainer() {
    ReactDOM.render(
      <Container dispatchData={this.#dispatchData} text={this.#text} />,
      this.#container
    );
  }
}

export { ExampleReactBlockTool };

export type {
  ExampleReactBlockToolDispatchData,
  SavedExampleReactBlockToolData,
  ValidatedExampleReactBlockToolData,
};
