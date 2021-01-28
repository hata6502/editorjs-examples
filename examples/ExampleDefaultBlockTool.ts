import type {
  BlockTool,
  BlockToolConstructorOptions,
} from "@editorjs/editorjs";

interface DefaultBlockToolData {
  text: string;
}

// DefaultBlockToolData must extends DefaultBlockToolData
// See also: https://github.com/codex-team/editor.js/issues/1520
interface ExampleDefaultBlockToolData extends DefaultBlockToolData {
  style: string;
}

interface ValidatedExampleDefaultBlockToolData
  extends ExampleDefaultBlockToolData {}

class ExampleDefaultBlockTool implements BlockTool {
  #style: string;
  #text: string;

  constructor({
    data,
  }: BlockToolConstructorOptions<
    // Specify also DefaultBlockToolData to accept splitted default block data.
    // See also: https://github.com/codex-team/editor.js/issues/1520
    DefaultBlockToolData | ExampleDefaultBlockToolData
  >) {
    // Filter undefined and empty object.
    // See also: https://github.com/codex-team/editor.js/issues/1432
    if (data && "text" in data) {
      this.#text = data.text;
    } else {
      this.#text = "";
    }

    // Filter undefined and empty object.
    // See also: https://github.com/codex-team/editor.js/issues/1432
    if (data && "style" in data) {
      this.#style = data.style;
    } else {
      this.#style = "";
    }
  }

  render() {
    return document.createElement("div");
  }

  save(): ExampleDefaultBlockToolData {
    return {
      style: this.#style,
      text: this.#text,
    };
  }

  validate(data: ExampleDefaultBlockToolData) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const compatibilityCheck: ValidatedExampleDefaultBlockToolData = data;

    return true;
  }
}

export { ExampleDefaultBlockTool };
export type {
  ExampleDefaultBlockToolData,
  ValidatedExampleDefaultBlockToolData,
};
