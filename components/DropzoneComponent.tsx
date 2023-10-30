import React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DropzoneComponentProps extends DropzoneOptions {
  onChange: (file: File | null) => void;
}

const DropzoneComponent = ({
  onChange,
  accept,
  maxSize,
  minSize,
  multiple,
  ...rest
}: DropzoneComponentProps) => {
  const onHandleDrop = (acceptedFiles: File[]) => {
    onChange(acceptedFiles.length > 0 ? acceptedFiles[0] : null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxSize,
    minSize,
    multiple,
    onDrop: onHandleDrop,
    ...rest,
  });

  const style = {
    border: '2px dashed #bdbdbd',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#bdbdbd',
    backgroundColor: isDragActive ? '#eeeeee' : '#fafafa',
    transition: 'background-color 0.3s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box {...getRootProps({
      className: 'dropzone',
      sx: style,
    })
    }
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="body2">Drop the files here...</Typography>
      ) : (
        <Typography variant="body2">Drag &apos;n&apos; drop some files here, or click to select files</Typography>
      )}
    </Box>
  );
};

export default DropzoneComponent;
