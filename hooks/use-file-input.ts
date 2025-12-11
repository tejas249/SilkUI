import { useState, useCallback } from 'react';

export function useFileInput() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileInput = useCallback((newFiles: FileList | null) => {
    if (newFiles) {
      setFiles(Array.from(newFiles));
    }
  }, []);

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearFiles = useCallback(() => {
    setFiles([]);
  }, []);

  return {
    files,
    handleFileInput,
    removeFile,
    clearFiles,
  };
}
