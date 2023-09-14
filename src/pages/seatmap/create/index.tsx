import React from "react";
import { useNavigate } from "react-router-dom";
import SeatPickerComponent from "../../../components/seat-picker";
import ButtonCustom from "../../../components/design/button";
import { RoutesName } from "../../../routes";
const CreateEventPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ButtonCustom
        content="Back"
        onClick={() => {
          navigate(RoutesName.EVENT);
        }}
      />
      <SeatPickerComponent />
    </div>
  );
};

export default CreateEventPage;
