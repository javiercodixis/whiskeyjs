import React, { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { FileRejection, useDropzone } from 'react-dropzone';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

type AcceptedFilesObject = { [mimeType: string]: string[] };
type DropzoneInputProps = {
  name: string;
  control: Control;
  accept?: AcceptedFilesObject;
  maxFileSize?: number;
  minFileSize?: number;
  multiple?: boolean;
  instructions?: string;
  selectedFileMessage?: string;
};

const DropzoneInput = ({
  name,
  control,
  accept,
  maxFileSize,
  minFileSize,
  multiple = false,
  instructions,
  selectedFileMessage,
}: DropzoneInputProps) => {
  const [state, setState] = useState({
    fileUrl: '',
    fileWithBinaryData: null as File | null,
    snackbarOpen: false,
    snackbarMessage: '',
  });

  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  const createFileUrl = (file: File) => {
    if (state.fileUrl) URL.revokeObjectURL(state.fileUrl);
    const blobUrl = URL.createObjectURL(file);
    setState((prevState) => ({ ...prevState, fileUrl: blobUrl }));
  };

  const readFileData = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) return;

      const newFileWithBinaryData = Object.assign(file, {
        binaryData: e.target.result,
      });
      setState((prevState) => ({ ...prevState, fileWithBinaryData: newFileWithBinaryData }));
      onChange(newFileWithBinaryData);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (fileRejections.length > 0) {
      fileRejections.forEach((rejection) => {
        setState((prevState) => ({
          ...prevState,
          snackbarMessage: rejection.errors[0].message,
          snackbarOpen: true,
        }));
      });
    } else {
      const file = acceptedFiles[0];
      createFileUrl(file);
      readFileData(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    minSize: minFileSize,
    maxSize: maxFileSize,
    multiple,
  });

  const handleCloseSnackbar = () => {
    setState((prevState) => ({ ...prevState, snackbarOpen: false }));
  };

  return (
    <Paper
      {...getRootProps({ className: 'dropzone' })}
      variant="outlined"
      square
      style={{
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="body1">{instructions}</Typography>
      {state.fileWithBinaryData && (
        <Box>
          {state.fileUrl && (
            <>
              <Typography variant="body2">
                <br />
                {selectedFileMessage}
                <br />
                {state.fileWithBinaryData.name}
              </Typography>
              <br />
              <Image
                src={state.fileUrl}
                alt="Preview"
                width={100}
                height={100}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            </>
          )}
        </Box>
      )}
      {error && (
        <Typography variant="body2" color="error">
          {error.message}
        </Typography>
      )}
      <Snackbar
        open={state.snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={state.snackbarMessage}
      />
    </Paper>
  );
};

export default DropzoneInput;
