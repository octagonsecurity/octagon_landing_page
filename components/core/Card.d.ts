import * as React from 'react';

/**
 * Surface container for services, features, reviews. Optional top photo,
 * title, body, and footer (e.g. a "Learn More" Button). Hover-lift when
 * `interactive`.
 *
 * @startingPoint section="Core" subtitle="Service / feature card with photo, title, body, action" viewport="700x420"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional image URL shown full-width at the top (16:10). */
  image?: string;
  /** Alt text for the image. */
  imageAlt?: string;
  /** Card title. */
  title?: React.ReactNode;
  /** Add a 3px red top accent border. @default false */
  accent?: boolean;
  /** Hover lift + pointer cursor. @default false */
  interactive?: boolean;
  /** Footer node (kept pinned to the bottom). */
  footer?: React.ReactNode;
  /** Body content. */
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
