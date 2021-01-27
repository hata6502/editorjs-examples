import type {
  ToolConfig,
  ToolConstructable,
  ToolSettings,
} from "@editorjs/editorjs";
import type { ExampleBlockToolConfig } from "./ExampleBlockTool";

/** Type definition improved ToolSettings */
// See also: https://github.com/codex-team/editor.js/issues/1516
interface ToolSettingsWithConfig<Config extends ToolConfig>
  extends ToolSettings {
  config?: Config;
}

type EditorConfigTool<Config extends ToolConfig = any> =
  | ToolConstructable
  | ToolSettingsWithConfig<Config>;

interface ExampleEditorConfigTools {
  example?: EditorConfigTool<ExampleBlockToolConfig>;
  exampleReact?: EditorConfigTool;
}

export type { ExampleEditorConfigTools };
