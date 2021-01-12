import React, {ChangeEvent, FC } from 'react';
import styles from 'styles/atoms/form.module.scss';

interface Props {
  onChange: (event: ChangeEvent<HTML.InputElement>) => void
  value: string | number
  type: string
}
const TextInput: FC<Props> = () => {
  // 分割代入する
  const {
    onChange,
    value,
    type
  } = props
  return (
    <input className={styles.from__text}
      onChange={(e) => onChange(e)}
      value={value}
      type={type}
    />
  )
}

export default TextInput;