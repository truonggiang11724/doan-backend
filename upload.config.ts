import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); // thư mục lưu ảnh
    },
    filename: (req, file, cb) => {
      const uniqueName =
        Date.now() + '-' + Math.round(Math.random() * 1e9);

      cb(null, uniqueName + extname(file.originalname));
    },
  }),
};