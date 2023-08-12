import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { AddFavCatDto } from '../dto/add-fav-cat.dto';

const headersRequest = {
  'x-api-key': `${process.env.CAT_API_KEY}`,
};
const apiUrl = `https://api.thecatapi.com/v1`;
@Injectable()
export class ImagesService {
  constructor(private readonly httpService: HttpService) {}

  async getImages() {
    return this.httpService
      .get(`${apiUrl}/images/search?limit=10`, {
        headers: headersRequest,
      })
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async getFavourites() {
    return this.httpService
      .get(`${apiUrl}/favourites`, {
        headers: headersRequest,
      })
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }

  async addFavourite(addFavCatDto: AddFavCatDto) {
    return this.httpService
      .post(`${apiUrl}/favourites`, addFavCatDto, {
        headers: headersRequest,
      })
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }

  async deleteFavourite(favourite_id: string) {
    return this.httpService
      .delete(`${apiUrl}/favourites/${favourite_id}`, {
        headers: headersRequest,
      })
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
}
