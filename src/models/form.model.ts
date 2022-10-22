export interface FieldsModel {
  id: string;
  question: string;
  answerType: string;
  answer: string;
}

export interface TextInputOnChangeModel {
  value: string;
  name: keyof FieldsModel;
}

export interface TextInputModel {
  id: string;
  name: keyof FieldsModel;
  placeholder: string;
  className?: string;
  label?: string;
  required?: boolean;
  onChangeValue?: ({ value, name }: TextInputOnChangeModel) => void;
}

export interface SelectOptionsModel {
  label: string;
  value: string;
  key: string;
}

export interface SelectInputModel extends TextInputModel {
  defaultValue?: string;
  options: SelectOptionsModel[];
  onChangeValue?: ({ value, name }: TextInputOnChangeModel) => void;
}
