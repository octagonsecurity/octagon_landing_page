import * as React from 'react';

/**
 * Uppercase, wide-tracked red kicker with a leading rule — the brand's
 * section eyebrow ("GET OCTAGON SECURED" treatment).
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show the leading red rule. @default true */
  rule?: boolean;
  /** White variant for dark backgrounds. @default false */
  inverse?: boolean;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
