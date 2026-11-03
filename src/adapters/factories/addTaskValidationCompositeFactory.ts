import { Validation } from "../interfaces/validation";
import { ValidatorComposite } from "../validations/validationComposite";

export const AddTaskValidationCompositeFactory = (): ValidatorComposite => {
  const validations: Validation[] = [];

  //todo validation required fields
  //todo validation date validation

  return new ValidatorComposite(validations);
};
