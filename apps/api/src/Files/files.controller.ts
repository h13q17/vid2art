import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import { FilesService } from './files.service';
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('download')
  async downloadFile(@Res() response: Response, @Body() link: object) {
    writeFileSync('text.txt', JSON.stringify(link));
    execSync('python script.py');

    const name = `${JSON.parse(JSON.stringify(link)).url}`.slice(-11);

    // Generate or fetch the file data based on the body payload
    const filePath = path.resolve('result_' + name + '.docx');
    response.sendFile(filePath);

    // Set headers for file download
    response.setHeader('Content-Disposition', 'attachment; filename=file.docx');
    // response.setHeader('Content-Type', 'text/plain');

    // Send the file data as the response body
    // response.send();
  }
}
