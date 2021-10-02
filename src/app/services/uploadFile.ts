import axios from 'axios';
import { baseUrl } from 'config';

export const upload = async (
  file: File,
  token: string,
  onUploadProgress?: (progressEvent: any) => void,
  path: string = 'media/'
): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  const res = (await axios.post(baseUrl + path, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`,
    },
    onUploadProgress,
  })) as { data: { path: string } };
  return res.data.path;
};
