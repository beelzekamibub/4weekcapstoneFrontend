import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BiSave } from "react-icons/bi";
import { apiRequest } from "./apiRequest";

export const Roww = ({
  placeholder,
  items,
  setItems,
  id,
  API_AdviserClientList,
  place,
}) => {
  const [value, setValue] = useState(placeholder);
  const [disabled, setDisabled] = useState(true);

  const handleEditClick = () => {
    setDisabled(false);
  };

  const handleSaveClick = async () => {
    setDisabled(true);
    //save logic goes here
    if (place == 1) {
      const listItems = (items || []).map((it) =>
        it.id === id ? { ...it, clientName: value } : it
      );
      setItems(listItems);

      const myItem = listItems.filter((it) => it.id === id);
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientName: value }),
      };
      const reqUrl = `${API_AdviserClientList}/${id}`;
      const result = await apiRequest(reqUrl, updateOptions);
    } else if (place == 2) {
      const listItems = (items || []).map((it) =>
        it.id === id ? { ...it, mail: value } : it
      );
      setItems(listItems);

      const myItem = listItems.filter((it) => it.id === id);
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: value }),
      };
      const reqUrl = `${API_AdviserClientList}/${id}`;
      const result = await apiRequest(reqUrl, updateOptions);
    } else if (place == 3) {
      const listItems = (items || []).map((it) =>
        it.id === id ? { ...it, phoneNo: value } : it
      );
      setItems(listItems);

      const myItem = listItems.filter((it) => it.id === id);
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNo: value }),
      };
      const reqUrl = `${API_AdviserClientList}/${id}`;
      const result = await apiRequest(reqUrl, updateOptions);
    } else if (place == 4) {
      const listItems = (items || []).map((it) =>
        it.id === id ? { ...it, newInves: value } : it
      );
      setItems(listItems);

      const myItem = listItems.filter((it) => it.id === id);
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newInves: value }),
      };
      const reqUrl = `${API_AdviserClientList}/${id}`;
      const result = await apiRequest(reqUrl, updateOptions);
    }
  };
  
  return (
    <>
      <div>
        <InputGroup>
          <Form.Control
            type="text"
            className="form-reset inline-input"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
          />
          {disabled && (
            <Button
              variant="outline-secondary"
              onClick={() => handleEditClick()}
            >
              <BiEdit />
            </Button>
          )}
          {!disabled && (
            <Button
              variant="outline-secondary"
              onClick={handleSaveClick}
              className="hidden inline-button save-val-btn"
            >
              <BiSave />
            </Button>
          )}
        </InputGroup>
      </div>
    </>
  );
};