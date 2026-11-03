import { Validation } from "../interfaces/validation";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";
import { ValidatorComposite } from "../validations/validationComposite";

export const AddTaskValidationCompositeFactory = (): ValidatorComposite => {
  const validations: Validation[] = [];

  //todo validation required fields
  for (const field of ["title", "description", "date"]) {
    validations.push(new RequiredFieldsValidation(field));
  }
  //todo validation date validation

  return new ValidatorComposite(validations);
};
