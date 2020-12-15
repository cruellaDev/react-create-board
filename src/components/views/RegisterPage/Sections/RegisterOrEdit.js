import React from "react";
import { Button, Input } from "antd";

const { TextArea } = Input;

function RegisterOrEdit(props) {
  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <a href="/">
        <Button>←</Button>
      </a>
      <form onSubmit={props.handleSubmit}>
        <br />
        <div style={{ width: "80%", margin: "2rem auto" }}>
          <label>Title: </label>
          <Input
            onChange={props.handleRegisterChange}
            value={props.titleValue}
            type="text"
            name="title"
          />
          <hr></hr>
          <TextArea
            rows="30"
            onChange={props.handleRegisterChange}
            value={props.contentValue}
            name="content"
          />
        </div>
        <Button type="primary" onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "등록"}
        </Button>
      </form>
    </div>
  );
}

export default RegisterOrEdit;
