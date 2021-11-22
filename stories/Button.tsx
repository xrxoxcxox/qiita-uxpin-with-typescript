import React from 'react';
import { css } from '@emotion/react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles['storybook-button--primary'] : styles['storybook-button--secondary'];
  return (
    <button
      type="button"
      css={[styles['storybook-button'], styles[`storybook-button--${size}`], mode]}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

const styles = {
  "storybook-button": css`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  `,
  "storybook-button--primary": css`
    color: white;
    background-color: #1ea7fd;
  `,
  "storybook-button--secondary": css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
  "storybook-button--small": css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  "storybook-button--medium": css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  "storybook-button--large": css`
    font-size: 16px;
    padding: 12px 24px;
  `
}