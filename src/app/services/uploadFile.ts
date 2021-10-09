import axios from 'axios';
import { baseUrl } from 'src/config';

export const upload = async (
  file: File,
  token: string,
  onUploadProgress?: (progressEvent: any) => void,
  path = 'media/'
): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post<FormData, { data: { path: string } }>(
    baseUrl + path,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
      onUploadProgress,
    }
  );
  return res.data.path;
};
