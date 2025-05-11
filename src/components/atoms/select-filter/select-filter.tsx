/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react';

import { Select } from 'antd';
import clsx from 'clsx';

interface SelectFilterProps {
  placeholder?: string;
  size?: 'small' | 'middle' | 'large';
  children: React.ReactNode;
  value?: string | number | null;
  onChange?: (value: string) => void;
  width?: string;
  maxWidth?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  required?: boolean;
}

export const SelectFilter: React.FC<SelectFilterProps> = memo(
  ({
    placeholder = '',
    size = 'large',
    children,
    value = null,
    onChange = (): any => {},
    width = '100%',
    maxWidth = '300px',
    loading = false,
    disabled = false,
    className = '',
    title,
    required = false,
  }) => {
    // input selectlani filterlash
    const filterOption = (input: string, option: any) => {
      if (typeof option?.children == 'string')
        return (option?.children ?? '')?.toLowerCase()?.includes(input?.toLowerCase());
    };

    return (
      <div style={{ width: width, maxWidth: maxWidth }} className="relative">
        {title && (
          <label
            className={`relative mb-1 w-max max-w-full px-3 text-sm font-normal text-wrap ${
              disabled ? 'text-red-600' : 'text-black dark:text-white'
            }`}
          >
            {title}
            <div
              className={`absolute top-[-6px] right-0 text-lg text-red-600 ${
                required ? '' : 'hidden'
              }`}
            >
              *
            </div>
          </label>
        )}
        <Select
          value={value}
          onChange={(e: any) => onChange(e)}
          showSearch
          allowClear
          optionFilterProp="children"
          filterOption={filterOption}
          className={clsx(
            'hover:border-primary focus:border-primary w-full border-[#e0e6ed] dark:border-[#1b2e4b]',
            className,
          )}
          size={size}
          placeholder={placeholder}
          loading={loading}
          disabled={disabled}
        >
          {children}
        </Select>
      </div>
    );
  },
);
