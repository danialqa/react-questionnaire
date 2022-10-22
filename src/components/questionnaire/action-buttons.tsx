import { MouseEvent } from 'react';

import styles from './questionnaire-form.module.scss';

type Props = {
  onAdd: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ActionsButton = ({ onAdd }: Props) => (
  <div className={styles.FormButtons}>
    <button className={styles.AddQuestionBtn} onClick={onAdd}>
      <img src='/assets/images/plus-icon.svg' alt='' /> Add Question
    </button>
    <button type='submit' className={styles.SaveBtn}>
      Save & Share
    </button>
  </div>
);

export default ActionsButton;
