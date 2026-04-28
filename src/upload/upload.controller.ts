import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { multerConfig } from '../../upload.config';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'Upload a file',
    description: 'Upload image or file to the server. Supports images (jpg, png, gif, webp) and documents.',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'File to upload (max 5MB for images, 10MB for documents)',
        },
      },
      required: ['file'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'File uploaded successfully',
    example: {
      filename: 'product-image-1234567890.jpg',
      path: 'uploads/product-image-1234567890.jpg',
      url: '/uploads/product-image-1234567890.jpg',
      size: 102400,
      mimetype: 'image/jpeg',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - no file provided or invalid file type',
  })
  @ApiResponse({
    status: 413,
    description: 'Payload too large - file exceeds maximum size',
  })
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      path: file.path,
      url: `/uploads/${file.filename}`,
      size: file.size,
      mimetype: file.mimetype,
    };
  }
}