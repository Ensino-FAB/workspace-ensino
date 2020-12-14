export interface Tarefa {
  id?: string;
  name?: string;
  rootProcessInstanceId?: string;
  processInstanceId?: string;
  taskDefinitionKey?: string;
  formKey?: string;
  formData?: Record<'formKey', string> & Record<'formFields', object[]>;
  assignee?: string;
  dueDate?: Date;
  startedAt?: Date;
  endedAt?: Date;
  propostaId: number;
}

export interface TarefaFormField {
  id: string;
  label: string;
  properties: FormFieldTypes;
  type: string;
  value: object;
  options: object;
}

export interface TarefaFormFieldProp {
  type: string;
  parent: string;
}

export interface TarefaFormFieldSectionProps extends TarefaFormFieldProp {
  type: 'section';
  description: string;
  isPartly: 'true' | 'false';
  isBlock: 'true' | 'false';
  step: string;
  parent: undefined;
}

export interface TarefaFormFieldTextareaProps extends TarefaFormFieldProp {
  type: 'textarea';
  placeholder: string;
  maxlength: string;
}

export interface TarefaFormFieldSelectProps extends TarefaFormFieldProp {
  type: 'select';
}

export type FormFieldTypes =
  | TarefaFormFieldSectionProps
  | TarefaFormFieldTextareaProps
  | TarefaFormFieldSelectProps;
