import type {
  BlockToolData,
  OutputBlockData,
  OutputData,
} from "@editorjs/editorjs";
import type { ValidatedExampleBlockToolData } from "./ExampleBlockTool";

/** Type definition improved OutputBlockData */
// See also: https://github.com/codex-team/editor.js/pull/1326
interface BlockData<Type extends string, Data extends object>
  extends OutputBlockData {
  type: Type;
  data: BlockToolData<Data>;
}

type SupportedBlockData = BlockData<"example", ValidatedExampleBlockToolData>;

interface EditorJSData extends OutputData {
  blocks: SupportedBlockData[];
}

export type { EditorJSData };
