import * as React from 'react';

/**
 * System / device status indicator for monitoring UI. Color-coded dot + label.
 * "armed" gently pulses (respects reduced-motion).
 */
export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Monitoring state. @default "secure" */
  status?: 'armed' | 'secure' | 'warning' | 'offline';
  /** Override the default label text. */
  children?: React.ReactNode;
}

export function StatusPill(props: StatusPillProps): JSX.Element;
