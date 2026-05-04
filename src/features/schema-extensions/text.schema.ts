import { MainTranslationHookType } from "@/features/language/types/language.type";
import * as Yup from "yup";

// ---------------------------------------------------------
//
//                     Common Schemas
//
// ---------------------------------------------------------

// ✅ Name Schema - Now using chainable methods
export const nameSchema = ({
  fieldName,
  t,
}: {
  fieldName: string;
  t: MainTranslationHookType;
}) => {
  return Yup.string()
    .required(t("isRequired", { field: fieldName }))
    .min(3, t("mustContainAtLeast", { field: fieldName, count: 3 }))
    .max(35, t("cannotExceedCharacters", { field: fieldName, count: 35 }))
    .notOnlySpacesRule(t("cannotContainEmptySpaces", { field: fieldName }))
    .notOnlySpecialCharsRule(
      t("cannotContainOnlySpecialCharacters", { field: fieldName })
    );
};

// ✅ Email Schema - Now using chainable methods
export const emailSchema = ({ t }: { t: MainTranslationHookType }) => {
  return Yup.string()
    .required(t("isRequired", { field: t("email") }))
    .isValidEmail(t("shouldBeValid", { field: t("email") }))
    .notOnlySpacesRule(t("cannotContainEmptySpaces", { field: t("email") }))
    .notOnlySpecialCharsRule(
      t("cannotContainOnlySpecialCharacters", { field: t("email") })
    );
};

// ✅ Phone Schema
export const phoneSchema = ({ t }: { t: MainTranslationHookType }) => {
  return Yup.string()
    .required(t("isRequired", { field: t("phoneNumber") }))
    .isValidPhoneNumber(t("shouldBeValid", { field: t("phoneNumber") }));
};
