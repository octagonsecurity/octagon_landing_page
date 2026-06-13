import * as React from 'react';

/**
 * Small uppercase label for trust signals and categories
 * (e.g. "LICENSED & INSURED", "FREE ESTIMATES", "FIRE ALARM").
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual tone. @default "outline" */
  tone?: 'solid' | 'outline' | 'soft' | 'neutral' | 'dark';
  /** Optional leading icon (an <svg>). */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
