/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { ConfigProvider, DatePicker } from 'antd';
import uzUz from 'antd/locale/uz_UZ';
import dayjs, { Dayjs } from 'dayjs';

import { getDateForm } from '@/utils';

interface DateControlProps {
  placeholder?: any;
  size?: 'large' | 'middle' | 'small';
  format?: string;
  formatDateForm?: string;
  disabled?: boolean;
  PickerComponent?: any;
  value?: string | null | Dayjs | any;
  onChange?: (value: any) => void;
  width?: string;
  mode?: 'single' | 'range';
  title?: string;
  required?: boolean;
}

export const DateSelect: React.FC<DateControlProps> = ({
  placeholder = 'KK.OO.YYYY',
  disabled = false,
  size = 'large',
  format = 'DD.MM.YYYY',
  formatDateForm = 'YYYY-MM-DD',
  PickerComponent = DatePicker,
  value = null,
  onChange = () => {},
  width = '100%',
  mode = 'single',
  title,
  required = false,
}) => {
  return (
    <div style={{ width: width }} className="relative">
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
      <ConfigProvider locale={uzUz}>
        <PickerComponent
          value={
            mode == 'single'
              ? value && getDateForm(value, null)
              : value && [dayjs(value?.startDate), dayjs(value?.endDate)]
          }
          onChange={(e: any) => {
            if (mode == 'single') {
              const date = getDateForm(e, formatDateForm);
              return onChange(date);
            } else {
              if (e)
                onChange({
                  startDate: getDateForm(e?.[0]),
                  endDate: getDateForm(e?.[1]),
                });
              else onChange(null);
            }
          }}
          format={format}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          className="hover:border-primary focus:border-primary w-full p-[0.4375rem]"
        />
      </ConfigProvider>
    </div>
  );
};
