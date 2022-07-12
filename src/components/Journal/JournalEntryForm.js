import React from "react";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import AdvButton from "../common/AdvButton";
import TextArea from "../common/TextArea";

const JournalEntryForm = (props) => {
  const { query, updateForm, onSubmit } = props;
  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <Form style={{ maxWidth: "800px", width: "100" }}>
        <Input>
          <TextArea />
        </Input>

        <AdvButton
          style={{ marginTop: "10px" }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Submit
        </AdvButton>
      </Form>
    </div>
  );
};
export default JournalEntryForm;
