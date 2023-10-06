import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type AlignCenterType = {
  education?: string;
  learnHowToMakeAndPublishS?: string;
  makersIsAFigmaPluginToHel?: string;

  /** Style props */
  alignCenterFlex?: CSSProperties["flex"];
  alignCenterWidth?: CSSProperties["width"];
  alignCenterAlignSelf?: CSSProperties["alignSelf"];
  educationFontSize?: CSSProperties["fontSize"];
};

const AlignCenter: NextPage<AlignCenterType> = ({
  education,
  learnHowToMakeAndPublishS,
  makersIsAFigmaPluginToHel,
  alignCenterFlex,
  alignCenterWidth,
  alignCenterAlignSelf,
  educationFontSize,
}) => {
  const alignCenterStyle: CSSProperties = useMemo(() => {
    return {
      flex: alignCenterFlex,
      width: alignCenterWidth,
      alignSelf: alignCenterAlignSelf,
    };
  }, [alignCenterFlex, alignCenterWidth, alignCenterAlignSelf]);

  const educationStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: educationFontSize,
    };
  }, [educationFontSize]);

  return (
    <div
      className="flex-1 w-full flex flex-col items-center justify-start gap-[24px] text-center text-[24px] text-darkslategray-100 font-inter"
      style={alignCenterStyle}
    >
      <div
        className="self-stretch relative font-semibold"
        style={educationStyle}
      >
        {education}
      </div>
      <b className="self-stretch relative text-29xl text-black">
        {learnHowToMakeAndPublishS}
      </b>
      <div className="self-stretch relative text-base leading-[150%]">
        {makersIsAFigmaPluginToHel}
      </div>
    </div>
  );
};

export default AlignCenter;
