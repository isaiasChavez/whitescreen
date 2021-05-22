import React from "react";
const Edit = ({ changeRightColor, changeLeftColor, leftColor, rigthColor }) => {
  const onChangeLeft = (e) => {
    changeLeftColor(e.target.value);
  };
  const onChangeRigth = (e) => {
    changeRightColor(e.target.value);
  };
  return (
    <div className="w-10/12 md:w-4/12 lg:w-2/12 h-3/6 md:h-2/6 lg:h-1/6 fadeIn m-auto shadow-lg rounded-lg    absolute">
      <input
        onChange={onChangeLeft}
        value={leftColor}
        className="cleanInputColor cursor-pointer w-6/12 h-full "
        type="color"
      />
      <input
        onChange={onChangeRigth}
        value={rigthColor}
        className="w-6/12 h-full border-0  cursor-pointer"
        type="color"
      />
    </div>
  );
};

export default Edit;
