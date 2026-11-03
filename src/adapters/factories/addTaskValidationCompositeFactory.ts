import { DateValidatorAdapter } from "../dateValidatorAdapter";
import { Validation } from "../interfaces/validation";
import { DateValidation } from "../validations/dateValidation";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";
import { ValidatorComposite } from "../validations/validationComposite";

export const AddTaskValidationCompositeFactory = (): ValidatorComposite => {
  const validations: Validation[] = [];

  for (const field of ["title", "description", "date"]) {
    validations.push(new RequiredFieldsValidation(field));
  }

  validations.push(new DateValidation("date", new DateValidatorAdapter()));

  return new ValidatorComposite(validations);
};
