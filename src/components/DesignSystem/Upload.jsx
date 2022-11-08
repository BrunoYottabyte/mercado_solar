import { FilePond, registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';

// Register the plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateSize);

const Upload = ({classContainer, titleEl, setSaves, ...props}) => {
  const [test, setTest] = useState([]);

  const [files, setFiles] = useState([]);
  useEffect(() => {
    if(setSaves){
      const saves = files.map(items => items.file);
      setSaves(saves);
    }
  }, [files])
  return (
    <div className={`filepond-container ${classContainer}`}>
        <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={3}
            server="/api"
            allowProcess={false}
            labelIdle={titleEl ? titleEl : 'Arraste e solte seus arquivos'}
            {...props}
           
        />
    </div>
  )
}

export default Upload