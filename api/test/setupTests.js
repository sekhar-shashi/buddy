const uuid = require('uuid/v4');
process.env.NODE_ENV = 'local';
jest.mock('uuid/v4');
uuid.mockImplementation(() => 'mockedUUID');
const mockedDate = new Date();
const mockedISOString = mockedDate.toISOString();
global.Date = class extends Date {
  constructor() {
    super();
    return mockedDate;
  }
};
Date.now = () => mockedDate.getTime();
module.exports = { uuid, mockedISOString };
