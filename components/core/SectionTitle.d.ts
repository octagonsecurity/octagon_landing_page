import * as React from 'react';

/**
 * Section header lockup: optional eyebrow, bold title, red accent rule, and
 * supporting subtitle. The standard way to open a content section.
 *
 * @startingPoint section="Core" subtitle="Eyebrow + title + accent rule + subtitle section header" viewport="700x220"
 */
export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  /** The main heading. */
  title?: React.ReactNode;
  /** Supporting paragraph below the title. */
  subtitle?: React.ReactNode;
  /** Alignment. @default "left" */
  align?: 'left' | 'center';
  /** White text for dark backgrounds. @default false */
  inverse?: boolean;
  /** Show the red accent rule when there is no eyebrow. @default true */
  rule?: boolean;
}

export function SectionTitle(props: SectionTitleProps): JSX.Element;
