import { TestBed, inject } from '@angular/core/testing';

import { NewChatService } from './new-chat.service';

describe('NewChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewChatService]
    });
  });

  it('should be created', inject([NewChatService], (service: NewChatService) => {
    expect(service).toBeTruthy();
  }));
});
