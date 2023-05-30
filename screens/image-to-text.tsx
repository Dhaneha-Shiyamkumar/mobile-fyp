import React, {useState} from 'react';
import {View, Button, Image, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

export const UploadImageComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const pickImage = async () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const formData = new FormData();
        formData.append('image', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });

        console.log(formData);

        uploadImage(formData);
        setSelectedImage(response.uri);
      }
    });
  };

  const uploadImage = async (formData: any) => {
    try {
      const response = await axios.post(
        'https://api.api-ninjas.com/v1/imagetotext',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-Api-Key': 'viyaww47VKll3nEMXtNmCQ==QwD3ZzIOc3tH0Ujt',
          },
        },
      );

      if (response && response.data) {
        const {data} = response.data;
        setExtractedText(data);
      }
    } catch (error) {
      console.log('Image Upload Error: ', error);
    }
  };

  return (
    <View>
      <Button title="Pick Image" onPress={pickImage} />

      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{width: 200, height: 200}}
        />
      )}

      {extractedText && <Text>{extractedText}</Text>}
    </View>
  );
};
