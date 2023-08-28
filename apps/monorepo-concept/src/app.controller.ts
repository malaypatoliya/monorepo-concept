import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {

  @ApiTags('Welcome')
  @ApiOperation({ summary: 'Welcome message' })
  @ApiResponse({ status: 200, description: 'Return welcome message.' })
  @Get()
  getData() {
    return {
      message: 'Hello REST API'
    }
  }
}
