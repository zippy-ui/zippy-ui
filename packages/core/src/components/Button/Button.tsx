import * as styles from './Button.css';
import type { Sizes, Variants, Intents } from './Button.css';
import { atoms, Atoms } from '../../styles/sprinkles.css';

export interface ButtonProps {
  size?: Sizes;
  sx?: Atoms;
  intent?: Intents;
  variant?: Variants;
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
    variant = 'solid',
    size = 'default',
    intent = 'none',
    startIcon,
    endIcon,
    sx = {},
  } = props;
  const className = atoms(sx);

  return (
    <button
      type="button"
      className={styles.root}
      classList={{
        [styles.sizes[size]]: true,
        [styles.variants[variant]]: true,
        [styles.intents[intent]]: typeof intent !== 'undefined',
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
