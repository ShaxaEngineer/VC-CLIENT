/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react';

import { Input } from 'antd';
import clsx from 'clsx';

interface InputFilterProps {
  placeholder?: string;
  size?: 'small' | 'middle' | 'large';
  value?: number | string | null;
  onChange?: (value: string) => void;
  width?: string;
  className?: string;
  labelClassName?: string;
  title?: string;
  required?: boolean;
  disabled?: boolean;
  InputComponent?: any;
  rows?: number;
}

export const InputFilter: React.FC<InputFilterProps> = memo(
  ({
    placeholder = '',
    size = 'large',
    value = null,
    onChange = () => {},
    width = '100%',
    className = '',
    labelClassName = '',
    title,
    InputComponent = Input,
    rows,
  }) => {
    return (
      <div style={{ width: width }} className="relative">
        {title && (
          <label
            className={clsx(
              'relative mb-3 block w-max max-w-full text-sm font-normal text-wrap max-md:mb-2',
              labelClassName,
            )}
          >
            {title}
          </label>
        )}
        <InputComponent
          value={value || ''}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder={placeholder}
          size={size}
          rows={rows}
          className={clsx(className, '!py-3 max-md:!py-2')}
        />
      </div>
    );
  },
);
