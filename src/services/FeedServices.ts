import { useAccessTokenStore } from '@/stores/accessToken';
import { HttpApiServices } from './HttpApiServices';

export class FeedServices extends HttpApiServices {
  async getFeedPrincipal() {
    return this.get('/feed');
  }

  async getFeedPorId(id: string) {
    await this.get(`/feed?id=${id}`);
  }
}
