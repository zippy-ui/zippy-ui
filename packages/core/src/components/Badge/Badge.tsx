import * as styles from './Badge.css';
import type { Sizes, Variants , Intents} from './Badge.css';
import { atoms, Atoms } from '../../sprinkles.css';

export interface BadgeProps {
  size?: Sizes;
  sx?: Atoms;
  intent: Intents;
  variant?: Variants;
  children: any;
}

export function Badge(props: BadgeProps) {
  const { children, variant = 'solid', size = 'default', intent, sx = {} } = props;
  const className = atoms(sx);

  return (
    <span
      className={styles.root}
      classList={{
        [styles.sizes[size]]: true,
        [styles.variants[variant]]: true,
        [styles.intents[intent]]: typeof intent !== 'undefined',
        [className]: typeof sx !== 'undefined',
      }}
    >
      {children}
    </span>
  );
}
