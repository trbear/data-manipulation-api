import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('report')
@Controller('report')
export class ReportController {
  @Get('simple')
  async getSimpleData() {
    return [820, 932, 901, 934, 1290, 1330, 1320];
  }

  @Get('multi')
  async getMultipleData() {
    return [
      [150, 232, 201, 154, 190, 330, 410],
      [320, 332, 301, 334, 390, 330, 320],
      [820, 932, 901, 934, 1290, 1330, 1320],
    ];
  }

  @Get('group')
  async getGroup() {
    return [
      {
        name: 'Forest',
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        data: [98, 77, 101, 99, 40],
      },
    ];
  }

  @Get('dataset')
  async getDataset() {
    return [
      ['type', '2012', '2013', '2014', '2015', '2016'],
      ['Forest', 320, 332, 301, 334, 390],
      ['Steppe', 220, 182, 191, 234, 290],
      ['Desert', 150, 232, 201, 154, 190],
      ['Wetland', 98, 77, 101, 99, 40],
    ];
  }
}
