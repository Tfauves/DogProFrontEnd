import React from "react";
import InlineInputContainer from "../../common/InlineInputContainer";
import Input from "../../common/Input";
import AdvButton from "../../common/AdvButton";
import Form from "../../common/Form";
import image from "../../../assets/loginSplash.jpg";

const NewDogForm = (props) => {
  const { updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        margin: "3rem 0rem",
        padding: "8px",
        maxWidth: "900px",
        width: "100%",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <InlineInputContainer>
          <Input id="name" placeholder="Name" onChange={handleChange} />

          <Input id="age" placeholder="Age" onChange={handleChange} />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input id="weight" placeholder="Weight" onChange={handleChange} />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input id="sex" placeholder="Sex" onChange={handleChange} />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input id="avatar" placeholder="url" onChange={handleChange} />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="breedName"
            placeholder="Breed Name"
            onChange={handleChange}
          />
          <Input
            id="breedGroup"
            placeholder="Breed Group"
            onChange={handleChange}
          />
        </InlineInputContainer>
        <AdvButton
          style={{
            marginTop: ".5em",
            width: "auto",
            backgroundColor: "#0a55c5",
          }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Add Dog
        </AdvButton>
      </Form>
    </div>
  );
};

export default NewDogForm;
