import { useCallback } from "react";
import type { ChangeEventHandler, FunctionComponent } from "react";
import type { ExampleReactBlockToolDispatchData } from "./ExampleReactBlockTool";

const Content: FunctionComponent<{
  dispatchData: ExampleReactBlockToolDispatchData;
  text: string;
}> = ({ dispatchData, text }) => {
  const handleTextChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => dispatchData({ text: event.target.value }),
    [dispatchData]
  );

  return <input value={text} onChange={handleTextChange} />;
};

export { Content };
