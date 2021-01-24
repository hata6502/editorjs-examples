import type {
  BlockTool,
  BlockToolConstructorOptions,
} from "@editorjs/editorjs";

interface ExampleBlockToolConfig {
  availableIds: string[];
}

interface SavedExampleBlockToolData {
  id?: string;
  name: string;
}

interface ValidatedExampleBlockToolData extends SavedExampleBlockToolData {
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
    // Specify SavedExampleBlockToolData to accept pasted block data.
    // See also: https://github.com/hata6502/editorjs-layout#copied-data
    SavedExampleBlockToolData,
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

  save(): SavedExampleBlockToolData {
    return {
      id: this.#id,
      name: this.#name,
    };
  }

  validate({ id, ...other }: SavedExampleBlockToolData) {
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
  SavedExampleBlockToolData,
  ValidatedExampleBlockToolData,
};
