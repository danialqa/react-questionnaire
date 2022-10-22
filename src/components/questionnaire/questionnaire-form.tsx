import { useState, MouseEvent } from 'react';

import { useUuid } from 'hooks';
import { FieldsModel, TextInputOnChangeModel } from 'models';
import { TextInput, SelectInput } from 'components';

import ActionsButton from './action-buttons';

import styles from './questionnaire-form.module.scss';

const QuestionnaireForm = () => {
  const uuid = useUuid();

  const initialField: FieldsModel = {
    id: 'a31d6222-6a65-4f70-8caa-db005c5b590e',
    question: '',
    answerType: 'Short Answer',
    answer: '',
  };

  const [fields, setFields] = useState<FieldsModel[]>([initialField]);

  const handleInputChange = (
    inputData: TextInputOnChangeModel,
    fieldId: string
  ) => {
    const cacheData = [...fields];
    const item = cacheData.find((i) => i.id === fieldId);
    item![inputData.name] = inputData.value;
    setFields(cacheData);
  };

  const handleAddNewField = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFields([{ ...initialField, id: uuid }, ...fields]);
  };

  const handleRemoveField = (id: string) => {
    const newList = fields.filter((item) => item.id !== id);
    setFields(newList);
  };

  const handleMoveItem = (currentIndex: number, type: 'up' | 'down') => {
    const cacheData = fields;

    const currentElement = cacheData[currentIndex];
    cacheData.splice(currentIndex, 1);
    cacheData.splice(
      type === 'up' ? currentIndex - 1 : currentIndex + 1,
      0,
      currentElement
    );

    setFields(() => {
      return [...cacheData];
    });
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    console.log(fields);
  };

  const renderFields = () => (
    <div className={styles.FormList}>
      {fields.map((field, index) => (
        <div className={styles.FormItem} key={field.id}>
          <div className={styles.FormItemInputWrapper}>
            <TextInput
              required
              name='question'
              id='question'
              placeholder='What do you want to ask?'
              label='Question'
              onChangeValue={(data) => handleInputChange(data, field.id)}
            />
          </div>

          <div className={styles.FormItemInputWrapper}>
            <SelectInput
              name='answerType'
              id='answerType'
              placeholder='Short Answer'
              label='Answer'
              defaultValue='shortAnswer'
              options={[
                {
                  label: 'Short Answer',
                  value: 'Short Answer',
                  key: 'shortAnswer',
                },
              ]}
              onChangeValue={(data) => handleInputChange(data, field.id)}
            />

            <TextInput
              required
              name='answer'
              id='answer'
              placeholder='Short answer text'
              className={styles.ShortAnswerInput}
              onChangeValue={(data) => handleInputChange(data, field.id)}
            />
          </div>

          {fields?.length > 1 && (
            <div className={styles.FormItemFooter}>
              <div className={styles.FormItemFooterNumbers}>
                {index + 1} of {fields.length}
              </div>
              <div className={styles.FormItemFooterButtons}>
                <button
                  type='button'
                  onClick={() => handleMoveItem(index, 'up')}
                >
                  <img src='/assets/images/up-arrow.svg' alt='' />
                </button>
                <button
                  type='button'
                  onClick={() => handleMoveItem(index, 'down')}
                >
                  <img src='/assets/images/down-arrow.svg' alt='' />
                </button>
                <button onClick={() => handleRemoveField(field.id)}>
                  <img src='/assets/images/delete-icon.svg' alt='' />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <form onSubmit={(e) => handleSave(e)}>
      {renderFields()}

      <ActionsButton onAdd={(e) => handleAddNewField(e)} />
    </form>
  );
};

export default QuestionnaireForm;
