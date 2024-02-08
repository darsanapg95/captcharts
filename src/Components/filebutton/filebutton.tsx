import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import Card2 from '../Card2/card2';
import './file.css';
import girl from '../../assets/girl.svg';

function Filebutton() {
  const [files, setFiles] = useState<File[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      const newFiles = [...files, selectedFile];
      setFiles(newFiles);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImageSrc(null);
    }
  };

  return (
    <>
      <div className='file'>
        <Group justify="center">
          <div className='files'>
            <FileButton onChange={handleFileChange} accept="image/png,image/jpeg">
              {(props) => (
                <Button
                  {...props}
                  className='button'
                >
                  Upload image
                </Button>
              )}
            </FileButton>
            <div>
              <img src={girl} alt="girl" className='images' />
            </div>
          </div>
        </Group>
        {files.map((file, index) => (
          <div key={index}>
            <Card2 file={file} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Filebutton;
