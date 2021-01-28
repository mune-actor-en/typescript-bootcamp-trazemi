import { FC } from 'react';
import styles from 'styles/atoms/form.module.scss';

interface Props {
  label: string
  onClick: () => void
}
const SearchButton: FC<Props> = (props) => {
  // 分割代入
  const {
    label, onClick
  } = props

  return (
    <button
      className={styles.button__search}
      onClick={onClick}
    >
      {label}
    </button>
  )
  
}

export default SearchButton;