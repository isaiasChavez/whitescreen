import info from "./assets/icons/info_black_24dp.svg";
import full from "./assets/icons/fullscreen_black_24dp.svg";
import settings from "./assets/icons/settings_black_24dp.svg";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "./App.css";
import { useEffect, useRef, useState } from "react";
import Edit from "./Edit";
function App() {
  const handle = useFullScreenHandle();

  const [isVisibleInfo, setIsVisibleInfo] = useState(false);
  const [isVisibleSettings, setIsVisibleSettings] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const [leftColor, setLeftColor] = useState("#ffffff");
  const [rigthColor, setRigthColor] = useState("#ffffff");

  const toggleInfo = () => {
    if (!isVisibleInfo) {
      setIsVisibleSettings(false);
    }
    setIsVisibleInfo(!isVisibleInfo);
  };
  const toggleFullScreen = () => {
    if (isFullScreen) {
      setFullScreen(false);
      handle.exit();
    } else {
      setFullScreen(true);
      handle.enter();
    }
  };

  const toggleSettings = () => {
    if (!isVisibleSettings) {
      setIsVisibleInfo(false);
    }
    setIsVisibleSettings(!isVisibleSettings);
  };

  const changeLeftColor = (color) => {
    setLeftColor(color);
  };

  const changeRightColor = (color) => {
    setRigthColor(color);
  };

  return (
    <FullScreen handle={handle}>
      <div className="h-screen w-full white flex justify-center items-center">
        <div className=" w-3/6 md:w-2/6 lg:w-1/6 h-10 flex justify-around mt-5 mr-5 absolute z-10 top-0 right-0">
          <img
            src={full}
            onClick={toggleFullScreen}
            className="cursor-pointer"
          />
          <img
            src={settings}
            onClick={toggleSettings}
            className="cursor-pointer"
          />
          <img src={info} onClick={toggleInfo} className="cursor-pointer" />
        </div>

        {isVisibleInfo && (
          <div className=" absolute z-10 w-4/12 fadeIn">
            <p className="text-center ">
              I usually use my screen as a light for my tiktok videos, but I was
              tired of always having to open a random page. If it works for the
              same or something different, great.
            </p>
          </div>
        )}

        <div
          style={{
            backgroundColor: leftColor,
          }}
          className="w-3/6 z-0 h-screen absolute left-0 "
        ></div>
        <div
          style={{
            backgroundColor: rigthColor,
          }}
          className="w-3/6 z-0 h-screen absolute right-0 "
        ></div>

        {isVisibleSettings && (
          <Edit
            changeLeftColor={changeLeftColor}
            leftColor={leftColor}
            rigthColor={rigthColor}
            changeRightColor={changeRightColor}
          />
        )}
      </div>
    </FullScreen>
  );
}

export default App;
