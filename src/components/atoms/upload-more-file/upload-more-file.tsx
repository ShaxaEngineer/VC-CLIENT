import React, { useState } from 'react';

import { DeleteFilled, EyeFilled, LoadingOutlined } from '@ant-design/icons';

import { FILE } from '@/assets';
import { baseUrl, imgUrl } from '@/service';
import { idCreate } from '@/utils';

export type FileType = {
  file: string;
} | null;

interface UploadMoreFileProps {
  files: FileType;
  setfiles: React.Dispatch<React.SetStateAction<FileType>>;
  type?: string;
  text?: string;
}

export const UploadMoreFile: React.FC<UploadMoreFileProps> = ({
  files,
  setfiles,
  type,
  text = '',
}) => {
  const [isLoading, setisLoading] = useState(false);
  // const { mutate, isLoading: loadingDelete } = usePost();
  const id = idCreate();

  const filesUploading = (file: React.ChangeEvent<HTMLInputElement>) => {
    if (!file.target.files) return;
    setisLoading(true);
    const data = new FormData();
    data.append('file', file.target.files[0]);
    fetch(`${baseUrl}files/create`, {
      method: 'POST',
      // headers: {
      //   Authorization: `Bearer ${getLocalStorage(token)}`,
      // },
      redirect: 'follow',
      body: data,
    })
      .then((res) => res.json())
      .then((resJson) => {
        setisLoading(false);
        const newFile: FileType = {
          file: `${imgUrl}/${resJson?.file}`,
        };
        setfiles(newFile);
      })
      .catch(() => {
        setisLoading(false);
      });
    file.target.value = '';
  };

  const fileDelete = (id: number | string) => {
    console.log(id);
    setfiles(null);
  };

  const showFdf = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <input
          className="hidden"
          onChange={filesUploading}
          type="file"
          accept={type || ''}
          id={id}
          disabled={isLoading}
        />
        <div className="mt-2 flex w-full flex-wrap items-start justify-start gap-6">
          {!files?.file && (
            <label
              htmlFor={id}
              className="text-primary hover:border-primary border-border flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-md border border-dashed p-2 text-center text-3xl transition-all duration-300 dark:border-[#1b2e4b]"
            >
              {isLoading ? (
                <LoadingOutlined />
              ) : (
                <>
                  <img src={FILE} alt="FILE" />
                  <p className="text-dark-gray text-sm">{text}</p>
                </>
              )}
            </label>
          )}

          {files?.file && (
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex items-center justify-start gap-2">
                <div className="bg-blue/15 flex size-8 items-center justify-center rounded-sm pl-[1px]">
                  <img src={FILE} alt="FILE" className="size-5 object-contain object-center" />
                </div>
                <p className="text-dark-blue text-sm !font-bold">
                  {files?.file?.split('/')?.at(-1)}
                </p>
              </div>
              <div className="flex items-center justify-end gap-2">
                {/* <div className="text-dark-blue border-border flex h-6 items-center justify-center rounded-sm border px-1.5 text-sm">
                  929KB
                </div> */}
                <button
                  onClick={() => showFdf(files?.file)}
                  className="text-dark-blue border-border flex size-6 cursor-pointer items-center justify-center rounded-sm border text-sm"
                >
                  <EyeFilled />
                </button>
                <button
                  onClick={() => fileDelete(files?.file)}
                  className="text-dark-blue border-border flex size-6 cursor-pointer items-center justify-center rounded-sm border text-sm"
                >
                  <DeleteFilled />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
