import * as styles from './ButtonGroup.css';
import { atoms, Atoms } from '../../styles/sprinkles.css';

export interface ButtonGroupProps {
  sx?: Atoms;
  children: any;
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { sx = {}, children } = props;
  const className = atoms(sx);

  return (
    <div
      className={styles.root}
      classList={{ [className]: typeof sx !== 'undefined' }}
    >
      {children}
    </div>
  );
}
