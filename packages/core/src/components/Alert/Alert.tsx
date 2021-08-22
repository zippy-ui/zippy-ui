import type { JSX } from 'solid-js/jsx-runtime';
import * as styles from './Alert.css';
import type { Sizes, Intents } from './Alert.css';
import { atoms, Atoms } from '../../styles/sprinkles.css';

export interface AlertProps {
  size?: Sizes;
  sx?: Atoms;
  intent?: Intents;
  children: any;
  icon?: any;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  title?: string;
  actions?: JSX.Element;
}

export function Alert(props: AlertProps) {
  const {
    children,
    size = 'default',
    intent = 'none',
    icon,
    sx = {},
    title,
    actions,
  } = props;
  const className = atoms(sx);

  return (
    <div
      role="alert"
      className={styles.root}
      classList={{
        [styles.sizes[size]]: true,
        [styles.intents[intent]]: typeof intent !== 'undefined',
        [className]: typeof sx !== 'undefined',
      }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.content}>
        {title && <h4 className={styles.heading}>{title}</h4>}
        <span className="text">{children}</span>
      </div>
      {actions && <div className="actions">{actions}</div>}
    </div>
  );
}
