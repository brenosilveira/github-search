import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RepositoriesComponent } from './repositories.component';
import { RepositoryService } from '../../services/user/repository.service';
import { Type } from '@angular/core';
import { environment } from 'src/environments/environment';

fdescribe('RepositoriesComponent', () => {
  let component: RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ RepositoriesComponent ],
      providers: [ RepositoryService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should called get method', async () => {
    const mockResponse = {
      "login": "test",
      "id": 383316,
      "node_id": "MDQ6VXNlcjM4MzMxNg==",
      "avatar_url": "https://avatars.githubusercontent.com/u/383316?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/test",
      "html_url": "https://github.com/test",
      "followers_url": "https://api.github.com/users/test/followers",
      "following_url": "https://api.github.com/users/test/following{/other_user}",
      "gists_url": "https://api.github.com/users/test/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/test/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/test/subscriptions",
      "organizations_url": "https://api.github.com/users/test/orgs",
      "repos_url": "https://api.github.com/users/test/repos",
      "events_url": "https://api.github.com/users/test/events{/privacy}",
      "received_events_url": "https://api.github.com/users/test/received_events",
      "type": "User",
      "site_admin": false,
      "name": null,
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 5,
      "public_gists": 0,
      "followers": 29,
      "following": 0,
      "created_at": "2010-09-01T10:39:12Z",
      "updated_at": "2020-04-24T20:58:44Z"
    }
    component.getRepository('test');
    const service = TestBed.inject(RepositoryService);
    await service.getRepository('test');

    const req = await httpMock.expectOne(`${environment.url_api}/users/test/repos`);
    req.flush(mockResponse);

    expect(req.request.method).toBe('GET');
  });
});
