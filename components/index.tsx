import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect } from "react";
import AlignCenter from "./align-center";
import StateDefaultTypeSecondary from "./state-default-type-secondary";

const MohamedEhab: NextPage = () => {
  const onMAKERSBUTTONContainerClick = useCallback(() => {
    window.open("https://twitter.com/Programing_Pro");
  }, []);

  const onMAKERSBUTTONContainer1Click = useCallback(() => {
    window.open("https://www.figma.com/@programigschool");
  }, []);

  const onMAKERSBUTTONContainer2Click = useCallback(() => {
    window.open("https://dribbble.com/Programming-School");
  }, []);

  const onMAKERSBUTTONContainer3Click = useCallback(() => {
    window.open("https://www.youtube.com/channel/UC1YTVmV31RZV2oie1kKpJkw");
  }, []);

  const onMAKERSBUTTONContainer4Click = useCallback(() => {
    window.open("https://programming-school.hashnode.dev/");
  }, []);

  const onMAKERSBUTTONContainer5Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/mohamed-ehab-164193208");
  }, []);

  const onMAKERSBUTTONContainer6Click = useCallback(() => {
    window.open("https://hashnode.com/@Programming-School");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFigmaContainerClick = useCallback(() => {
    window.open("https://www.figma.com/@programigschool");
  }, []);

  const onTwitterContainerClick = useCallback(() => {
    window.open("https://twitter.com/Programing_Pro");
  }, []);

  return (
    <div className="bg-white w-[1440px] overflow-hidden flex flex-col items-center justify-start text-left text-base text-slategray font-inter">
      <main
        className="bg-white w-[1440px] flex flex-col items-center justify-center pt-5 px-5 pb-10 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] hover:pt-5 hover:box-border"
        data-animate-on-scroll
      >
        <div className="self-stretch flex flex-row items-start justify-center">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-[162px] h-[162px] flex flex-row items-center justify-start">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[95.29px] object-cover"
                alt=""
                src="/icon@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="w-[470px] flex flex-col items-center justify-start gap-[40px]">
            <AlignCenter
              education="WELCOME"
              learnHowToMakeAndPublishS="Mohamed Ehab"
              makersIsAFigmaPluginToHel="See All My Links"
              alignCenterFlex="unset"
              alignCenterWidth="unset"
              alignCenterAlignSelf="stretch"
              educationFontSize="20px"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <StateDefaultTypeSecondary
                buttonText="Twitter"
                stateDefaultTypeSecondaryFlex="unset"
                stateDefaultTypeSecondaryWidth="unset"
                stateDefaultTypeSecondaryAlignSelf="stretch"
                stateDefaultTypeSecondaryCursor="pointer"
                buttonFlex="1"
                onMAKERSBUTTONContainer6Click={onMAKERSBUTTONContainerClick}
              />
              <StateDefaultTypeSecondary
                buttonText="Figma"
                stateDefaultTypeSecondaryFlex="unset"
                stateDefaultTypeSecondaryWidth="unset"
                stateDefaultTypeSecondaryAlignSelf="stretch"
                stateDefaultTypeSecondaryCursor="pointer"
                buttonFlex="1"
                onMAKERSBUTTONContainer6Click={onMAKERSBUTTONContainer1Click}
              />
              <StateDefaultTypeSecondary
                buttonText="Dribbble"
                stateDefaultTypeSecondaryFlex="unset"
                stateDefaultTypeSecondaryWidth="unset"
                stateDefaultTypeSecondaryAlignSelf="stretch"
                stateDefaultTypeSecondaryCursor="pointer"
                buttonFlex="1"
                onMAKERSBUTTONContainer6Click={onMAKERSBUTTONContainer2Click}
              />
              <StateDefaultTypeSecondary
                buttonText="YouTube"
                stateDefaultTypeSecondaryFlex="unset"
                stateDefaultTypeSecondaryWidth="unset"
                stateDefaultTypeSecondaryAlignSelf="stretch"
                stateDefaultTypeSecondaryCursor="pointer"
                buttonFlex="1"
                onMAKERSBUTTONContainer6Click={onMAKERSBUTTONContainer3Click}
              />
              <StateDefaultTypeSecondary
                buttonText="My Blog"
                stateDefaultTypeSecondaryFlex="unset"
                stateDefaultTypeSecondaryWidth="unset"
                stateDefaultTypeSecondaryAlignSelf="stretch"
                stateDefaultTypeSecondaryCursor="pointer"
                buttonFlex="1"
                onMAKERSBUTTONContainer6Click={onMAKERSBUTTONContainer4Click}
              />
              <StateDefaultTypeSecondary
                buttonText="Linkedin"
                stateDefaultTypeSecondaryFlex="unset"
                stateDefaultTypeSecondaryWidth="unset"
                stateDefaultTypeSecondaryAlignSelf="stretch"
                stateDefaultTypeSecondaryCursor="pointer"
                buttonFlex="1"
                onMAKERSBUTTONContainer6Click={onMAKERSBUTTONContainer5Click}
              />
              <StateDefaultTypeSecondary
                buttonText="Hashnode"
                stateDefaultTypeSecondaryFlex="unset"
                stateDefaultTypeSecondaryWidth="unset"
                stateDefaultTypeSecondaryAlignSelf="stretch"
                stateDefaultTypeSecondaryCursor="pointer"
                buttonFlex="1"
                onMAKERSBUTTONContainer6Click={onMAKERSBUTTONContainer6Click}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white w-[1440px] flex flex-col items-center justify-center py-0 px-5 box-border">
        <div className="w-[1000px] h-[204px] flex flex-col items-center justify-start py-8 px-0 box-border gap-[24px]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[16px] md:flex-row md:gap-[50px] md:items-start md:justify-center">
            <div className="flex flex-row items-start justify-start">
              <div className="relative">About</div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative">Blog</div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative">Jobs</div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative">Documentation</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 gap-[24px] md:flex-row md:gap-[50px] md:items-center md:justify-center">
            <div
              className="flex flex-row items-start justify-start cursor-pointer"
              onClick={onFigmaContainerClick}
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/makers-social-media-icons.svg"
              />
            </div>
            <div
              className="flex flex-row items-start justify-start cursor-pointer"
              onClick={onTwitterContainerClick}
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/makers-social-media-icons1.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/makers-social-media-icons2.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center text-center text-[14px]">
            <div className="flex-1 relative">
              © 2022 Mohamed Ehab. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MohamedEhab;
