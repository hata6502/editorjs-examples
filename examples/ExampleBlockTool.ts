import type {
  BlockTool,
  BlockToolConstructorOptions,
} from "@editorjs/editorjs";

class ExampleBlockTool implements BlockTool {
  constructor({
    config,
    data,
  }: BlockToolConstructorOptions<
    SavedExampleBlockToolData,
    ExampleBlockToolConfig
  >) {}
}

export { ExampleBlockTool };
export type {};
