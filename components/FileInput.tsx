import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { DropzoneProps } from 'react-dropzone';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import DropzoneComponent from './DropzoneComponent';

interface FileInputProps extends DropzoneProps {
  name: string;
  instructions: string;
  selectedFileMessage: string;
  control: Control;
  rules?: object;
}

const FileInput = ({
  name,
  control,
  rules,
  ...dropzoneProps
}: FileInputProps) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange }, fieldState: { error } }) => {
        const handleFileChange = (file: File | File[] | null) => {
          if (filePreview) {
            URL.revokeObjectURL(filePreview);
          }

          const fileObj = Array.isArray(file) ? file[0] : file;
          if (fileObj && fileObj.type.startsWith('image/')) {
            setFilePreview(URL.createObjectURL(fileObj));
          } else {
            setFilePreview(null);
          }

          onChange(file);
        };

        return (
          <>
            <DropzoneComponent onChange={handleFileChange} {...dropzoneProps} />
            {filePreview && (
              <Image
                src={filePreview}
                alt="Preview"
                width={100}
                height={100}
                layout="responsive"
              />
            )}
            {error && <Typography color="error">{error.message}</Typography>}
          </>
        );
      }}
    />
  );
};

export default FileInput;
