import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class FilesService {
  async getFileData() {
    try {
      const fileContent = await readFile('/path/to/file.txt', 'utf-8');
      return fileContent;
    } catch (error) {
      console.error('Error reading file:', error);
      throw error;
    }
  }
}
