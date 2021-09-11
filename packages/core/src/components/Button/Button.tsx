import * as styles from './Button.css';
import type { Variants } from './Button.css';
import { atoms, Atoms } from '../../styles/sprinkles.css';

export interface ButtonProps {
  size?: Variants['size'];
  sx?: Atoms;
  intent?: Variants['intent'];
  variant?: Variants['variant'];
  children: any;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant,
    size,
    intent,
    startIcon,
    endIcon,
    sx = {},
  } = props;
  const className = atoms(sx);

  return (
    <button
      type="button"
      className={styles.root({
        size,
        variant,
        intent,
      })}
      classList={{
        [className]: typeof sx !== 'undefined',
      }}
    >
      {startIcon && (
        <span classList={{ [styles.icon]: true, [styles.iconStart]: true }}>
          {startIcon}
        </span>
      )}
      <span className={styles.text}>{children}</span>
      {endIcon && (
        <span classList={{ [styles.icon]: true, [styles.iconEnd]: true }}>
          {endIcon}
        </span>
      )}
    </button>
  );
}
