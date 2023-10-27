import React, { useState } from 'react';
import { useDropzone, DropzoneProps } from 'react-dropzone';
import { Controller, Control } from 'react-hook-form';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FileInputProps extends DropzoneProps {
  name: string;
  instructions: string;
  selectedFileMessage: string;
  control: Control;
  rules?: object;
}

const FileInput = ({
  name,
  instructions,
  selectedFileMessage,
  control,
  accept,
  maxSize,
  minSize,
  multiple,
  rules,
}: FileInputProps) => {
  const [
    filePreview,
    setFilePreview,
  ] = useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange }, fieldState: { error } }) => {
        const handleDrop = (acceptedFiles: File[]) => {
          onChange(acceptedFiles.length > 0 ? acceptedFiles[0] : null);
          if (acceptedFiles[0] && acceptedFiles[0].type.startsWith('image/')) {
            setFilePreview(URL.createObjectURL(acceptedFiles[0]));
          } else {
            setFilePreview(null);
          }
        };

        const {
          getRootProps: getCustomRootProps,
          getInputProps: getCustomInputProps,
          isDragActive,
        } = useDropzone({
          accept,
          maxSize,
          minSize,
          multiple,
          onDrop: handleDrop,
        });

        return (
          <Box {...getCustomRootProps({ className: 'dropzone' })}>
            <input {...getCustomInputProps()} />
            <Typography variant="body1" sx={{ mb: 1 }}>
              {instructions}
            </Typography>
            {isDragActive ? (
              <Typography variant="body2">Drop the files here...</Typography>
            ) : (
              <Typography variant="body2">{selectedFileMessage}</Typography>
            )}
            {filePreview && (
              <Image
                src={filePreview}
                alt="Preview"
                width={25}
                height={25}
                layout="responsive"
              />
            )}
            {error && <Typography color="error">{error.message}</Typography>}
          </Box>
        );
      }}
    />
  );
};

export default FileInput;
