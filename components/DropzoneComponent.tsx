import React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DropzoneComponentProps extends DropzoneOptions {
  onChange: (file: File | File[] | null) => void;
}

const style = {
  border: '2px dashed #bdbdbd',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#bdbdbd',
  transition: 'background-color 0.3s',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const DropzoneComponent = ({
  onChange,
  accept,
  maxSize,
  minSize,
  multiple,
  ...rest
}: DropzoneComponentProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxSize,
    minSize,
    multiple,
    onDrop: (acceptedFiles: File[]) => {
      onChange(multiple ? acceptedFiles : acceptedFiles[0]);
    },
    ...rest,
  });

  const dynamicStyle = {
    ...style,
    backgroundColor: isDragActive ? '#eeeeee' : '#fafafa',
  };

  return (
    <Box {...getRootProps({ className: 'dropzone', sx: dynamicStyle })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="body2">Drop the files here...</Typography>
      ) : (
        <Typography variant="body2">
          Drag &apos;n&apos; drop some files here, or click to select files
        </Typography>
      )}
    </Box>
  );
};

export default DropzoneComponent;
