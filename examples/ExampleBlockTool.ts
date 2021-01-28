import type {
  BlockTool,
  BlockToolConstructorOptions,
} from "@editorjs/editorjs";

interface ExampleBlockToolConfig {
  availableIds: string[];
}

interface ExampleBlockToolData {
  id?: string;
  name: string;
}

interface ValidatedExampleBlockToolData extends ExampleBlockToolData {
  id: string;
}

class ExampleBlockTool implements BlockTool {
  #id?: string;
  #config!: ExampleBlockToolConfig;
  #name: string;

  constructor({
    config,
    data,
  }: BlockToolConstructorOptions<
    // Specify ExampleBlockToolData to accept pasted block data.
    // See also: https://github.com/hata6502/editorjs-layout#copied-data
    ExampleBlockToolData,
    ExampleBlockToolConfig
  >) {
    // Filter undefined and empty object.
    // See also: https://github.com/codex-team/editor.js/issues/1432
    if (config && "availableIds" in config) {
      this.#config = config;
    }

    // Filter undefined and empty object.
    // See also: https://github.com/codex-team/editor.js/issues/1432
    if (data && "name" in data) {
      this.#id = data.id;
      this.#name = data.name;
    } else {
      this.#name = "";
    }
  }

  render() {
    return document.createElement("div");
  }

  save(): ExampleBlockToolData {
    return {
      id: this.#id,
      name: this.#name,
    };
  }

  validate({ id, ...other }: ExampleBlockToolData) {
    if (!id) {
      return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const compatibilityCheck: ValidatedExampleBlockToolData = {
      ...other,
      id,
    };

    return true;
  }
}

export { ExampleBlockTool };
export type {
  ExampleBlockToolConfig,
  ExampleBlockToolData,
  ValidatedExampleBlockToolData,
};
