import type {
  BlockToolData,
  OutputBlockData,
  OutputData,
} from "@editorjs/editorjs";
import type { ValidatedExampleBlockToolData } from "./ExampleBlockTool";
import type { ValidatedExampleReactBlockToolData } from "./ExampleReactBlockTool";

/** Type definition improved OutputBlockData */
// See also: https://github.com/codex-team/editor.js/pull/1326
interface BlockData<Type extends string, Data extends object>
  extends OutputBlockData {
  type: Type;
  data: BlockToolData<Data>;
}

type SupportedBlockData =
  | BlockData<"example", ValidatedExampleBlockToolData>
  | BlockData<"exampleReact", ValidatedExampleReactBlockToolData>;

interface ExampleEditorJSData extends OutputData {
  blocks: SupportedBlockData[];
}

export type { ExampleEditorJSData };
