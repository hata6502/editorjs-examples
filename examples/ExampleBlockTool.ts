import type {
  BlockTool,
  BlockToolConstructorOptions,
} from "@editorjs/editorjs";

interface ExampleBlockToolConfig {
  availableIds: string[];
}

interface CommonData {
  name: string;
}

interface SavedExampleBlockToolData extends CommonData {
  id?: string;
}

interface ValidatedExampleBlockToolData extends CommonData {
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

  validate({ id, ...otherSavedData }: SavedExampleBlockToolData) {
    if (!id) {
      return false;
    }

    const _compatibilityCheck: ValidatedExampleBlockToolData = {
      ...otherSavedData,
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
