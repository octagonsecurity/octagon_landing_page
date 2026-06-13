import * as React from 'react';

/**
 * Primary call-to-action button. Uppercase, squared, decisive — the brand's
 * action element. Use `primary` (red) for the main CTA, `secondary` (outline)
 * for alternatives, `dark` on light bands, `ghost` for low-emphasis links.
 *
 * @startingPoint section="Core" subtitle="Brand CTA button — primary / secondary / dark / ghost" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to full container width. @default false */
  block?: boolean;
  /** Disable interaction. @default false */
  disabled?: boolean;
  /** Icon node rendered before the label (e.g. a Lucide <svg>). */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as an anchor with this href instead of a <button>. */
  href?: string;
  /** Button type when rendered as <button>. @default "button" */
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
