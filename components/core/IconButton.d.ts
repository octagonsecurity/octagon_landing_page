import * as React from 'react';

/**
 * Square, icon-only button for toolbars, nav, and compact controls.
 * Pass a Lucide (or other) SVG as children. Always provide `label` for a11y.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "secondary" */
  variant?: 'secondary' | 'primary' | 'dark';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also used as tooltip). Required. */
  label: string;
  /** The icon node (an <svg>). */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
