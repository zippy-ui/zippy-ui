import * as styles from './Badge.css';
import type { Variants } from './Badge.css';
import { atoms, Atoms } from '../../styles/sprinkles.css';

export interface BadgeProps {
  size?: Variants['size'];
  sx?: Atoms;
  intent?: Variants['intent'];
  variant?: Variants['variant'];
  children: any;
}

export function Badge(props: BadgeProps) {
  const { children, variant, size, intent, sx = {} } = props;
  const className = atoms(sx);

  return (
    <span
      className={styles.root({
        variant,
        size,
        intent,
      })}
      classList={{
        [className]: typeof sx !== 'undefined',
      }}
    >
      {children}
    </span>
  );
}
