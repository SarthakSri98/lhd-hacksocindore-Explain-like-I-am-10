import { TestBed, inject } from '@angular/core/testing';

import { TopicServiceService } from './topic-service.service';

describe('TopicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicServiceService]
    });
  });

  it('should be created', inject([TopicServiceService], (service: TopicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
