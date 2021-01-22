import EditorJS from "@editorjs/editorjs";
import type { OutputData } from "@editorjs/editorjs";
import equal from "fast-deep-equal";

let prevEditorJSData: OutputData | undefined;

const editorJS = new EditorJS({
  onChange: async () => {
    const data = await editorJS.save();

    // Don't use JSON.stringify() for deep equal.
    if (!equal(prevEditorJSData?.blocks, data.blocks)) {
      // onDataChange process here.
    }

    prevEditorJSData = data;
  },
});
