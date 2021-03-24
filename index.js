import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

// check validity
schema
  .isValid({
    name: "jimmy",
    age: 24,
  })
  .then(function (valid) {
    console.log(`Schema is ${valid}`);
  });
