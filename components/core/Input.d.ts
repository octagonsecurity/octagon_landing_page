import * as React from 'react';

/**
 * Labelled text field for contact / quote forms. Renders an <input> or a
 * <textarea> (`multiline`). Uppercase label, red focus ring, optional hint.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Field label (uppercase). */
  label?: string;
  /** Show a red required asterisk. @default false */
  required?: boolean;
  /** Helper / error text below the field. */
  hint?: string;
  /** Render in the invalid (error) state. @default false */
  invalid?: boolean;
  /** Render a <textarea> instead of an <input>. @default false */
  multiline?: boolean;
}

export function Input(props: InputProps): JSX.Element;
