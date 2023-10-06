import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StateDefaultTypeSecondaryType = {
  buttonText?: string;

  /** Style props */
  stateDefaultTypeSecondaryFlex?: CSSProperties["flex"];
  stateDefaultTypeSecondaryWidth?: CSSProperties["width"];
  stateDefaultTypeSecondaryAlignSelf?: CSSProperties["alignSelf"];
  stateDefaultTypeSecondaryCursor?: CSSProperties["cursor"];
  buttonFlex?: CSSProperties["flex"];

  /** Action props */
  onMAKERSBUTTONContainer6Click?: () => void;
};

const StateDefaultTypeSecondary: NextPage<StateDefaultTypeSecondaryType> = ({
  buttonText,
  stateDefaultTypeSecondaryFlex,
  stateDefaultTypeSecondaryWidth,
  stateDefaultTypeSecondaryAlignSelf,
  stateDefaultTypeSecondaryCursor,
  buttonFlex,
  onMAKERSBUTTONContainer6Click,
}) => {
  const stateDefaultTypeSecondaryStyle: CSSProperties = useMemo(() => {
    return {
      flex: stateDefaultTypeSecondaryFlex,
      width: stateDefaultTypeSecondaryWidth,
      alignSelf: stateDefaultTypeSecondaryAlignSelf,
      cursor: stateDefaultTypeSecondaryCursor,
    };
  }, [
    stateDefaultTypeSecondaryFlex,
    stateDefaultTypeSecondaryWidth,
    stateDefaultTypeSecondaryAlignSelf,
    stateDefaultTypeSecondaryCursor,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      flex: buttonFlex,
    };
  }, [buttonFlex]);

  return (
    <div
      className="flex-1 w-full rounded-3xs bg-white shadow-[8px_8px_0px_#000] box-border flex flex-row items-center justify-center py-2 px-8 text-center text-xl text-darkslategray-200 font-inter border-[2px] border-solid border-darkslategray-200"
      style={stateDefaultTypeSecondaryStyle}
      onClick={onMAKERSBUTTONContainer6Click}
    >
      <div
        className="relative leading-[40px] font-semibold"
        style={buttonStyle}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default StateDefaultTypeSecondary;
