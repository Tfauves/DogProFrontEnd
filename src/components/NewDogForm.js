import React from "react";
import InlineInputContainer from "./common/InlineInputContainer";
import Input from "./common/Input";
import AdvButton from "./common/AdvButton";
import Form from "./common/Form";

const NewDogForm = (props) => {
  const {query, updateForm, onSubmit } = props;
console.log(query);
  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <h1>create new dog</h1>
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <InlineInputContainer>
          <Input
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={query.name}
          />
          <Input
            id="age"
            placeholder="Age"
            onChange={handleChange}
              // value={query.age}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="weight"
            placeholder="Weight"
            onChange={handleChange}
              // value={query.weight}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
          id="sex"
          placeholder="Sex"
          onChange={handleChange}
          // value={query.sex}
        />
        </InlineInputContainer>
        <InlineInputContainer>
          {/* <Input
          id="breed"
          placeholder="Breed"
          onChange={handleChange}
        //   value={query.breed}
        /> */}
          <Input
            id="breedName"
            placeholder="Breed Name"
            onChange={handleChange}
              // value={query.breedName}
          />
          <Input
            id="breedGroup"
            placeholder="Breed Group"
            onChange={handleChange}
              // value={query.breedGroup}
          />
        </InlineInputContainer>
        <AdvButton
          style={{ marginTop: "10px" }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Add Dog
        </AdvButton>
        {/* <Button>Submit</Button> */}
      </Form>
    </div>
  );
};

export default NewDogForm;
