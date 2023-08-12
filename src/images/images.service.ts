import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

const headersRequest = {
  'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
};
@Injectable()
export class ImagesService {
  constructor(private readonly httpService: HttpService) {}

  async getImages() {
    return this.httpService
      .get('https://api.thecatapi.com/v1/images/search?limit=10', {
        headers: headersRequest,
      })
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
}
